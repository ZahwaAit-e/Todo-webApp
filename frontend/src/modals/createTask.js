import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./createTask.css";
const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name : </label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description : </label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="Description"
            />
          </div>
          {/* form-control to give a better shape forthe two areas */}
        </form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-create-cancel" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button className="btn-create-cancel" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
