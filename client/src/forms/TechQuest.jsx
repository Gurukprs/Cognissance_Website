import React, { useState } from "react";
import axios from "axios";
import "./css/TechQuest.css"; // Import the CSS file for styling

const TechQuest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    dept: "",
    phoneNumber: "",
    t1Name: "",
    t1RollNumber: "",
    t1Dept: "",
    t1PhoneNumber: "",
    t1Mail: "",
    teamName: "",
    spreadsheetId: "1sEV31jYqeQovNCb1Ryr4n5XpivyWEMGMNd1Yit6ydHU",  // Change as needed
    sheetName: "Main"  // Change as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Format the data as an array for Google Sheets
      const data = [
        formData.teamName,
        formData.name,
        formData.rollNumber,
        formData.dept,
        formData.email,
        formData.phoneNumber,
        formData.t1Name,
        formData.t1RollNumber,
        formData.t1Dept,
        formData.t1PhoneNumber,
        formData.t1Mail,
      ];

      const payload = {
        spreadsheetId: formData.spreadsheetId,
        sheetName: formData.sheetName,
        data
      };

      const response = await axios.post("https://cognissance-website.onrender.com/submit", payload);
      alert(response.data.message);
      setFormData({ ...formData, teamName:"", name: "", rollNumber: "",dept: "", email: "",t1Name:"",t1RollNumber:"",t1Dept:"",t1Mail:"",t1PhoneNumber:""});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
  {/* Team Info */}
  <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleChange} required />

  {/* Leader Info */}
  <input type="text" name="name" placeholder="Leader Name" value={formData.name} onChange={handleChange} required />
  <input type="text" name="rollNumber" placeholder="Leader Roll Number" value={formData.rollNumber} onChange={handleChange} required />
  <select name="dept" value={formData.dept} onChange={handleChange} required>
    <option value="">Select Department</option>
    <option value="CSE">CSE</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
    {/* Add more as needed */}
  </select>
  <input type="email" name="email" placeholder="Leader Email" value={formData.email} onChange={handleChange} required />
  <input type="text" name="phoneNumber" placeholder="Leader Phone Number" value={formData.phoneNumber} onChange={handleChange} required />

  {/* Teammate 1 Info */}
  <input type="text" name="t1Name" placeholder="Teammate Name" value={formData.t1Name} onChange={handleChange} required />
  <input type="text" name="t1RollNumber" placeholder="Teammate Roll Number" value={formData.t1RollNumber} onChange={handleChange} required />
  <select name="t1Dept" value={formData.t1Dept} onChange={handleChange} required>
    <option value="">Select Department</option>
    <option value="CSE">CSE</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
  </select>
  <input type="email" name="t1Mail" placeholder="Teammate Email" value={formData.t1Mail} onChange={handleChange} required />
  <input type="text" name="t1PhoneNumber" placeholder="Teammate Phone Number" value={formData.t1PhoneNumber} onChange={handleChange} required />

  <button type="submit">Submit</button>
</form>

  );
};

export default TechQuest;
