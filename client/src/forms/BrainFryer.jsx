import React, { useState } from "react";
import axios from "axios";
import "./css/BrainFryer.css"; // Import the CSS file for styling

const BrainFryer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    phoneNumber: "",
    dept: "",
    spreadsheetId: "1RqGJru0Ts3D9e-gleLzIQHQdje7NNhx03gx-rby7RyA",  // Change as needed
    sheetName: "Main"  // Change as needed
    // spreadsheetId: "1jAuwsKSVDEZsPMwFXHbW4qoumn4p6AFRQRLmn42awnU",  // Change as needed
    // sheetName: "Trial"  // Change as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      // ✅ Build the data array in order of submission
      const data = [
        formData.name,
        formData.rollNumber,
        formData.dept,
        formData.email,
        formData.phoneNumber
      ];

      // ✅ Prepare payload for dynamic backend
      const payload = {
        spreadsheetId: formData.spreadsheetId,
        sheetName: formData.sheetName,
        data
      };

      const response = await axios.post("https://cognissance-website.onrender.com/submit", payload);
      alert(response.data.message);

      setFormData({ ...formData, name: "", rollNumber: "", dept: "", email: "", phoneNumber: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required />
      <select name="dept" value={formData.dept} onChange={handleChange} required>
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="EEE">EEE</option>
        <option value="IT">IT</option>
        {/* Add more options as needed */}
      </select>

      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BrainFryer;
