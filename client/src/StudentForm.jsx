import React, { useState } from "react";

const StudentForm = ({ event }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    teamMembers: "",
    event: event.name, // Automatically store event name
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration Successful!");
        setFormData({ name: "", email: "", rollNumber: "", teamMembers: "", event: event.name });
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register for {event.name}</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Roll Number:</label>
      <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />

      <label>Team Members:</label>
      <textarea name="teamMembers" value={formData.teamMembers} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
