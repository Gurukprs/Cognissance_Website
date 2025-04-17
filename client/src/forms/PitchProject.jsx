import React, { useState } from "react";
import axios from "axios";

const PitchProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    teamMembers: "",
    spreadsheetId: "1W6R3nlgTPA6tcEflBHDQZjaL4rsv_kJOTHgGBVuitkg",  // Change as needed
    sheetName: "Main"  // Change as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Convert form values into a data array to match backend format
      const data = [
        formData.name,
        formData.email,
        formData.rollNumber,
        formData.teamMembers
      ];

      // ✅ Send updated structure to server
      const payload = {
        spreadsheetId: formData.spreadsheetId,
        sheetName: formData.sheetName,
        data
      };

      const response = await axios.post("https://cognissance-website.onrender.com/submit", payload);
      alert(response.data.message);

      // ✅ Reset form fields
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

export default PitchProject;
