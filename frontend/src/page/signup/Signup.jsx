import React, { useState } from "react";
/*import Bg from "../Bg"; */
import "./signup.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate, not useHistory
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate(); // Correct usage of useNavigate
  const [Inputs, setInputs] = useState({
    username: "",
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
        "http://localhost:1000/api/v1/register",
        Inputs
      );
      console.log(response.data); // Log the response for debugging

      if (response.data && response.data.message === "User already exists") {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        setInputs({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login"); // Use navigate function to redirect
        // Or use history.push("/login") as an alternative
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup">
      <form className="form">
        <p id="heading">Signup</p>
        <div className="field">
          <FaUser />
          <input
            autoComplete="off"
            placeholder="Username"
            className="input-field"
            type="text"
            name="username"
            onChange={change}
            value={Inputs.username}
          />
        </div>
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
            SIGN-UP
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Signup;
