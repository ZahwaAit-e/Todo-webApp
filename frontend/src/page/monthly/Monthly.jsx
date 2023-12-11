import React from "react";
import "./monthly.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import Calendar from "./calendar";
let id = sessionStorage.getItem("id");

const Monthly = () => {
  return (
    <>
      <ToastContainer />
      <Calendar />
    </>
  );
};

export default Monthly;
