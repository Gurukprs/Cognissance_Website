import React, { useState } from "react";
import axios from "axios";
import "./css/PaperForge.css"; // Import the CSS file for styling

const PaperForge = () => {
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
    t2Name: "",
    t2RollNumber: "",
    t2Dept: "",
    t2PhoneNumber: "",
    t2Mail: "",
    t1Mail: "",
    teamName: "",
    t3Name: "",
    t3RollNumber: "",
    t3Dept: "",
    t3PhoneNumber: "",
    t3Mail: "",
    spreadsheetId: "1UXh7NlQpzfJ0zWvdBKc6Xs0DA3vcNs1l8ZJ0Z-OL17c",  // Change as needed
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
        formData.t2Name,
        formData.t2RollNumber,
        formData.t2Dept,
        formData.t2PhoneNumber,
        formData.t2Mail,
        formData.t3Name,
        formData.t3RollNumber,
        formData.t3Dept,
        formData.t3PhoneNumber,
        formData.t3Mail,
      ];

      const payload = {
        spreadsheetId: formData.spreadsheetId,
        sheetName: formData.sheetName,
        data
      };

      const response = await axios.post("https://cognissance-website.onrender.com/submit", payload);
      alert(response.data.message);
      setFormData({ ...formData, teamName:"", name: "", rollNumber: "",dept: "", email: "",t1Name:"",t1RollNumber:"",t1Dept:"",t1Mail:"",t1PhoneNumber:"",t2Name:"",t2RollNumber:"",t2Dept:"",t2Mail:"",t2PhoneNumber:"" });
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
  <input type="text" name="t1Name" placeholder="Teammate 1 Name" value={formData.t1Name} onChange={handleChange}  />
  <input type="text" name="t1RollNumber" placeholder="Teammate 1 Roll Number" value={formData.t1RollNumber} onChange={handleChange}  />
  <select name="t1Dept" value={formData.t1Dept} onChange={handleChange} >
    <option value="">Select Department</option>
    <option value="CSE">CSE</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
  </select>
  <input type="email" name="t1Mail" placeholder="Teammate 1 Email" value={formData.t1Mail} onChange={handleChange}  />
  <input type="text" name="t1PhoneNumber" placeholder="Teammate 1 Phone Number" value={formData.t1PhoneNumber} onChange={handleChange}  />

  {/* Teammate 2 Info */}
  <input type="text" name="t2Name" placeholder="Teammate 2 Name" value={formData.t2Name} onChange={handleChange}  />
  <input type="text" name="t2RollNumber" placeholder="Teammate 2 Roll Number" value={formData.t2RollNumber} onChange={handleChange}  />
  <select name="t2Dept" value={formData.t2Dept} onChange={handleChange} >
    <option value="">Select Department</option>
    <option value="CSE">CSE</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
  </select>
  <input type="email" name="t2Mail" placeholder="Teammate 2 Email" value={formData.t2Mail} onChange={handleChange}  />
  <input type="text" name="t2PhoneNumber" placeholder="Teammate 2 Phone Number" value={formData.t2PhoneNumber} onChange={handleChange}  />

  {/* Teammate 3 Info */}
  <input type="text" name="t3Name" placeholder="Teammate 3 Name" value={formData.t3Name} onChange={handleChange}  />
  <input type="text" name="t3RollNumber" placeholder="Teammate 3 Roll Number" value={formData.t3RollNumber} onChange={handleChange}  />
  <select name="t2Dept" value={formData.t3Dept} onChange={handleChange} required>
    <option value="">Select Department</option>
    <option value="CSE">CSE</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
  </select>
  <input type="email" name="t3Mail" placeholder="Teammate 3 Email" value={formData.t3Mail} onChange={handleChange} />
  <input type="text" name="t3PhoneNumber" placeholder="Teammate 3 Phone Number" value={formData.t3PhoneNumber} onChange={handleChange}  />

  <button type="submit">Submit</button>
</form>

  );
};

export default PaperForge;
