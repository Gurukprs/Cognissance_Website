import React, { useState } from "react";
import axios from "axios";

const WebNest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    teamMembers: "",
    spreadsheetId: "18bfq_TMmRL8mJsW0Kx2S8dtdGWIS7JzZhbXgp6NPnhM",  // Change as needed
    sheetName: "Main"  // Change as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://cognissance-website.onrender.com/submit", formData);
      alert(response.data.message);
      setFormData({ ...formData, name: "", email: "", rollNumber: "", teamMembers: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required />
      <input type="text" name="teamMembers" placeholder="Team Members" value={formData.teamMembers} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WebNest;
