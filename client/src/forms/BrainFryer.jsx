import React, { useState } from "react";
import axios from "axios";
import "./css/BrainFryer.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
const TechQuest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // <-- Loading state
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
    // spreadsheetId: "1RqGJru0Ts3D9e-gleLzIQHQdje7NNhx03gx-rby7RyA",  // Change as needed
    // sheetName: "Main"  // Change as needed
    spreadsheetId: "1jAuwsKSVDEZsPMwFXHbW4qoumn4p6AFRQRLmn42awnU",
    sheetName: "Trial" 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading spinner
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
      navigate("/"); // redirect after success
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
    finally {
      setLoading(false); // stop spinner
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <div className="spinner-clock"></div>
          <p>Submitting...</p>
        </div>
      ) : (
    <>
  <div className="event-description">
  <h2>TechQuest - Brain Fryer</h2>
  <p>
    Brain Fryer is a solo event where your thinking and coding skills are put to the test.
    <br /><br />
    You will face a few aptitude questions. After solving each one, a coding question will be unlocked. You must solve the aptitude question to move on.
    <br /><br />
    <strong>Event Format:</strong>
    <ul>
      <li>Solo participation</li>
      <li>Aptitude Questions + Coding Questions</li>
      <li>Aptitude questions unlock the coding ones</li>
      <li>No skipping allowed</li>
    </ul>
    <br />
    Test your brain, crack the logic, and show your coding skills!
  </p>
</div>


    <form onSubmit={handleSubmit}>
  {/* Team Info */}
  <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleChange} required />

  {/* Leader Info */}
  <input type="text" name="name" placeholder="Leader Name" value={formData.name} onChange={handleChange} required />
  <input type="text" name="rollNumber" placeholder="Leader Roll Number" value={formData.rollNumber} onChange={handleChange} required />
  <select name="dept" value={formData.dept} onChange={handleChange} required>
    <option value="">Select Department</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
    <option value="ECE">ECE</option>
    <option value="MECHANICAL">MECHANICAL</option>
    <option value="CIVIL">CIVIL</option>
    <option value="E&I">E&I</option>
    <option value="CSD">CSD</option>
    <option value="MECHATRONICS">MECHATRONICS</option>
    <option value="CHEMICAL">CHEMICAL</option>
    <option value="FT">FOOD TECHNOLOGY</option>
    <option value="AIDS">AIDS</option>
    <option value="AIML">AIML</option>
    <option value="AUTOMOBILE">AUTOMOBILE</option>
    {/* Add more as needed */}
  </select>
  <input type="email" name="email" placeholder="Leader Email" value={formData.email} onChange={handleChange} required />
  <input type="text" name="phoneNumber" placeholder="Leader Phone Number" value={formData.phoneNumber} onChange={handleChange} required />

  {/* Teammate 1 Info */}
  <input type="text" name="t1Name" placeholder="Teammate Name" value={formData.t1Name} onChange={handleChange} />
  <input type="text" name="t1RollNumber" placeholder="Teammate Roll Number" value={formData.t1RollNumber} onChange={handleChange}  />
  <select name="t1Dept" value={formData.t1Dept} onChange={handleChange} required>
    <option value="">Select Department</option>
    <option value="EEE">EEE</option>
    <option value="IT">IT</option>
    <option value="ECE">ECE</option>
    <option value="MECHANICAL">MECHANICAL</option>
    <option value="CIVIL">CIVIL</option>
    <option value="E&I">E&I</option>
    <option value="CSD">CSD</option>
    <option value="MECHATRONICS">MECHATRONICS</option>
    <option value="CHEMICAL">CHEMICAL</option>
    <option value="FT">FOOD TECHNOLOGY</option>
    <option value="AIDS">AIDS</option>
    <option value="AIML">AIML</option>
    <option value="AUTOMOBILE">AUTOMOBILE</option>
  </select>
  <input type="email" name="t1Mail" placeholder="Teammate Email" value={formData.t1Mail} onChange={handleChange}  />
  <input type="text" name="t1PhoneNumber" placeholder="Teammate Phone Number" value={formData.t1PhoneNumber} onChange={handleChange}  />

  <button type="submit">Submit</button>
</form>
</>
)}
    </>
  );
};

export default TechQuest;
