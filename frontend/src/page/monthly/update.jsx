import React from "react";

const Update = ({ disp }) => {
  return (
    <>
      <div className="p-5 d-flex align-items-center justify-content-center flex-column uup">
        <h1>upadte your task</h1>
        <input type="text" className="task-inputss " />
        <input type="number" className="task-inputss" />
        <input type="date" className="task-inputss" />
        <input type="time" className="task-inputss" />
        <input type="text" className="task-inputss" />
        <div className="btn">
          <button className="button1">Update</button>
          <button className="button21" onClick={() => disp("none")}>
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default Update;
