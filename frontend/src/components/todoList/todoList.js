import "./todoList.css";
import { useState } from "react";
import CreateTask from "../../modals/createTask";
import Card from "../card/Card";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModal(false); //to close the pop-up
  };
  return (
    <div className="body">
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
        {/* To set the modal to open when we click th button */}
      </div>
      <div className="task-container">
        {taskList && taskList.map((obj) => <Card taskObj={obj} />)}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};

export default TodoList;
