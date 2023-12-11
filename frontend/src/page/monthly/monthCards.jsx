import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import "./monthly.css"; // Import your CSS file

const MonthCards = ({
  title,
  descreption,
  week,
  date,
  time,
  id,
  delid,
  disp,
  block,
}) => {
  return (
    <div className="card p-3 ">
      <div className="taskholder f-flex">
        <h5 className="title">{title}</h5>
        <h6 className="card-p">week :{week}</h6>
        <div className="d-flex justify-content-between">
          <h6 className="card-p">date :{date}</h6>
          <h6 className="card-p">time :{time}</h6>
        </div>
        <h6 className="card-p">Descreption :{descreption}</h6>
      </div>
      <div className="d-flex justify-content-around">
        <div
          className="icon-container up"
          onClick={() => {
            disp(block);
          }}
        >
          <RiFileEditFill /> update
        </div>

        <div
          className="icon-container del"
          onClick={() => {
            delid(id);
          }}
        >
          <MdDeleteForever /> delete
        </div>
      </div>
    </div>
  );
};

export default MonthCards;
