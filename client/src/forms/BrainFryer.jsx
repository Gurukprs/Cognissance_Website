import React, { useState } from "react";
import axios from "axios";
import "./css/BrainFryer.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
const BrainFryer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // <-- Loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    dept: "",
    phoneNumber: "",
    spreadsheetId: "1RqGJru0Ts3D9e-gleLzIQHQdje7NNhx03gx-rby7RyA",  // Change as needed
    sheetName: "Main"  // Change as needed
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
        formData.name,
        formData.rollNumber,
        formData.dept,
        formData.email,
        formData.phoneNumber,
      ];

      const payload = {
        spreadsheetId: formData.spreadsheetId,
        sheetName: formData.sheetName,
        data
      };

      const response = await axios.post("https://cognissance-website.onrender.com/submit", payload);
      alert(response.data.message);
      setFormData({ ...formData, name: "", rollNumber: "",dept: "", email: "", phoneNumber: "" }); // Reset form fields
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
          <p style={{ color: 'black' }}>Submitting...</p><br/>
          <p style={{ color: 'black' }}>This may take few minutes, please don't close or refresh</p>
        </div>
      ) : (
    <>
  <div className="event-description">
  <h2>Brain Fryer</h2>
  <h3 style={{color:'steelblue'}}>Whatsapp Group link:</h3>
  <a href="https://chat.whatsapp.com/DHPKgvgTg8GDx0zJPd9HNS" target="_blank" className="link-highlight">https://chat.whatsapp.com/DHPKgvgTg8GDx0zJPd9HNS</a>
  <br/><br />
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
  {/* Student Info */}
  <input type="text" name="name" placeholder="Student Name" value={formData.name} onChange={handleChange} required />
  <input type="text" name="rollNumber" placeholder="Student Roll Number" value={formData.rollNumber} onChange={handleChange} required />
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
  <input type="email" name="email" placeholder="Student Email" value={formData.email} onChange={handleChange} required />
  <input type="text" name="phoneNumber" placeholder="Student Phone Number" value={formData.phoneNumber} onChange={handleChange} required />

  <div className="radio-group">
  <label className="question">Have you joined the WhatsApp group? <span style={{ color: 'red' }}>*</span></label>
  
  <div className="options">
    <label>
      <input type="radio" name="whatsapp" value="yes" required />
      Yes
    </label>
    <label>
      <input type="radio" name="whatsapp" value="no" required />
      No
    </label>
  </div>
</div>

  <button type="submit">Submit</button>
</form>
</>
)}
    </>
  );
};

export default BrainFryer;
