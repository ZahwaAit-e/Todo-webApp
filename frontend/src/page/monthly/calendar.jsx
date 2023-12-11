import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import { FaTrash } from "react-icons/fa";
let id = sessionStorage.getItem("id");

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
  formats: {
    timeGutterFormat: "HH:mm",
    agendaTimeRangeFormat: "HH:mm",
    dayFormat: "dddd, MMMM D, YYYY",
    agendaDate: "dddd, MMMM D, YYYY",
    dayHeaderFormat: "dddd, MMMM D, YYYY",
    dayRangeHeaderFormat: ({ start, end }, culture, local) =>
      local.format(start, "MMMM D", culture) +
      " - " +
      local.format(end, "MMMM D, YYYY", culture),
  },
});

const events = [
  {
    title: "Big Meeting",
    start: new Date(2023, 11, 7, 12, 50), // Include the time here
    end: new Date(2023, 11, 10, 12, 50), // Include the time here
  },
  {
    title: "Vacation",
    start: new Date(2023, 11, 20, 12, 50), // Include the time here
    end: new Date(2023, 11, 23, 12, 50), // Include the time here
  },
  {
    title: "conference",
    start: new Date(2023, 11, 0, 12, 50), // Include the time here
    end: new Date(2023, 11, 0, 12, 50), // Include the time here
  },
];

function Cal() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [pastEventToastDisplayed, setPastEventToastDisplayed] = useState(false);

  useEffect(() => {
    // Check for events that have passed and show a notification
    const now = new Date();
    const pastEvents = allEvents?.filter((event) => event.end < now) || [];

    if (pastEvents.length > 0 && !pastEventToastDisplayed) {
      pastEvents.forEach((event) => {
        toast.warning(`Event "${event.title}" has passed.`);
      });
      setPastEventToastDisplayed(true);
    }
  }, [allEvents, pastEventToastDisplayed]);
  const handleAddEvent = async () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      try {
        const startDate = new Date(newEvent.start);
        const endDate = new Date(newEvent.end);

        const eventObject = {
          title: newEvent.title,
          start: startDate,
          end: endDate,
          completed: false,
        };
        if (id) {
          const response = await axios.post(
            "http://localhost:1000/api/v2/addtask",
            {
              title: newEvent.title,
              start: newEvent.start,
              end: newEvent.end,
              id: id,
            }
          );

          console.log(response.data);
          setAllEvents([...allEvents, eventObject]);
          setNewEvent({ title: "", start: "", end: "" });
          toast.success("Event created");
        } else {
          setAllEvents([...allEvents, eventObject]);
          setNewEvent({ title: "", start: "", end: "" });
          toast.success("Event created");
          toast.error("sign-up first");
        }
      } catch (error) {
        console.error("Error creating event:", error);
        toast.error("Error creating event. Please try again.");
      }
    } else {
      toast.error("Please fill in all event details.");
    }
  };

  const handleDeleteEvent = async (index, taskId) => {
    try {
      // Assuming `userId` is the user's ID you want to associate with the task
      const userId = sessionStorage.getItem("id");

      // Send a DELETE request to the server
      await axios.delete(
        `http://localhost:1000/api/v2/deletetask/${userId}/${taskId}`
      );

      // Update the state to remove the deleted event
      const newEvents = [...allEvents];
      newEvents.splice(index, 1);
      setAllEvents(newEvents);
      setNewEvent({ title: "", start: "", end: "" });

      toast.success("Event deleted");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Error deleting event. Please try again.");
    }
  };

  const handleToggleCompletion = (index) => {
    const updatedEvents = [...allEvents];
    updatedEvents[index].completed = !updatedEvents[index].completed;
    setAllEvents(updatedEvents);
    if (updatedEvents[index].completed) {
      toast.info(`Task "${updatedEvents[index].title}" completed!`, {
        className: "toast-task-completed",
      });
    }
  };
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:1000/api/v2/gettask/${id}`)
        .then((response) => {
          setAllEvents(response.data.list);
        });
    };
    fetch();
  }, [handleAddEvent]);
  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />

        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        popup
        views={{
          agenda: true, // Enable agenda view
          month: true, // Enable month view
        }}
        defaultView="month" // Set the default view
        onView={(view) => {
          // Handle view change, you can add custom logic here
          console.log("Current view:", view);
        }}
        onNavigate={(date, view) => {
          // Handle date range change, you can add custom logic here
          console.log("Current date:", date, "Current view:", view);
        }}
        components={{
          event: ({ event }) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong
                  style={{
                    textDecoration: event.completed ? "line-through" : "none",
                  }}
                >
                  {event.title}
                </strong>
              </div>
              <div>
                <FaTrash
                  onClick={() =>
                    handleDeleteEvent(allEvents.indexOf(event), event._id)
                  }
                />
              </div>
            </div>
          ),
          agenda: {
            event: ({ event }) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={event.completed}
                    onChange={() =>
                      handleToggleCompletion(allEvents.indexOf(event))
                    }
                  />
                  <strong
                    style={{
                      marginLeft: "8px",
                      textDecoration: event.completed ? "line-through" : "none",
                    }}
                  >
                    {event.title}
                  </strong>
                </div>
                <div>
                  <FaTrash
                    onClick={() =>
                      handleDeleteEvent(allEvents.indexOf(event), event._id)
                    }
                  />
                </div>
              </div>
            ),
            agendaTime: () => null, // Remove the time column
            agendaDate: ({ date, label }) => <span>{label}</span>,
            agendaWeek: ({ date, label }) => <span>{label}</span>,
          },
        }}
      />

      <ToastContainer />
    </div>
  );
}

export default Cal;
