import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contact", formData);
      console.log("Contact form submitted successfully");
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };
  return (
    <div>
      <div className="header">
        <div className="text-contact-title"> Contact Us </div>
      </div>
      <div className="container-contact-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <br />
          <label>Message:</label>
          <div className="message-area">
            <textarea name="message" onChange={handleChange}></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
