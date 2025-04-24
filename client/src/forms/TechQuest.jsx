import React, { useState } from "react";
import axios from "axios";
import "./css/form.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate

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
    spreadsheetId: "1sEV31jYqeQovNCb1Ryr4n5XpivyWEMGMNd1Yit6ydHU",  // Change as needed
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
            <p style={{ color: 'black' }}>Submitting...</p><br/>
            <p style={{ color: 'black' }}>This may take few minutes, please don't close or refresh</p>
          </div>
        ) : (
    <>
    <div className="event-description">
  <h2>TECH QUEST CHALLENGE</h2>
  <h3 style={{color:'steelblue'}}>Whatsapp Group link:</h3>
  <a href="https://chat.whatsapp.com/KV9Y3758B9T8vqw3KQU2dZ" target="_blank" className="link-highlight">https://chat.whatsapp.com/KV9Y3758B9T8vqw3KQU2dZ</a>
  <p><em>Reboot Your Brain. Let the Quest Begin!</em></p>
  <br/><br />
  <p>
    Welcome to the Tech Quest Challenge, where your technical knowledge and reflexes take the spotlight! 
    This high‑energy quiz competition pushes you to think fast and act faster, tackling rapid‑fire questions 
    across multiple domains of technology. Team up, power through the questions, and prove your brilliance 
    under pressure.
  </p>

  <p><strong>Event Guidelines and Rules:</strong></p>
  <ul>
    <li><strong>Team Size:</strong> Maximum of 2 participants per team.</li>
    <li><strong>Open to multiple domains.</strong></li>
    <li><strong>Rounds &amp; Format:</strong>
      <ul>
        <li><strong>Round 1:</strong> 15 rapid‑fire technical questions.</li>
        <li><strong>Round 2:</strong> Top teams from Round 1 advance to a final challenge round.</li>
      </ul>
    </li>
    <li><strong>Objective:</strong> Answer time‑bound, domain‑spanning questions that test technical knowledge, logical reasoning, and quick decision‑making.</li>
    <li><strong>Judging Criteria:</strong> Based on accuracy, speed, and the team’s overall performance across both rounds.</li>
  </ul>
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
  <select name="t1Dept" value={formData.t1Dept} onChange={handleChange} >
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

export default TechQuest;
