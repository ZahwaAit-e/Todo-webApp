import React, { useState } from "react";
/*import Bg from "../Bg";*/
import "./login.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from "axios";
/*import { useNavigate } from "react-router-dom";*/
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/login",
        Inputs
      );
      console.log("Response from server:", response);
      if (response.data.others && response.data.others._id) {
        console.log("Login successful! Redirecting...");
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login());
        navigate("/Monthly");
      } else {
        console.error("Invalid response structure:", response.data);
      }
    } catch (error) {
      console.error("Error in login request:", error);
      // Handle the error, display a message, or perform other actions
    }
  };

  return (
    <div className="signup">
      <form className="form">
        <p id="heading">Login</p>
        <div className="field">
          <MdEmail />
          <input
            autoComplete="off"
            placeholder="Email"
            className="input-field"
            type="email"
            name="email"
            onChange={change}
            value={Inputs.email}
          />
        </div>

        <div className="field">
          <FaLock />
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            name="password"
            onChange={change}
            value={Inputs.password}
          />
        </div>
        <div className="btn">
          <button className="button1" onClick={submit}>
            Login
          </button>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </div>
  );
};

export default Signup;
