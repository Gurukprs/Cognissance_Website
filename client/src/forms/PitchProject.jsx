import React, { useState } from "react";
import axios from "axios";
import "./css/form.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const PitchProject = () => {
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
    t2Name: "",
    t2RollNumber: "",
    t2Dept: "",
    t2PhoneNumber: "",
    t2Mail: "",
    t1Mail: "",
    teamName: "",
    spreadsheetId: "1W6R3nlgTPA6tcEflBHDQZjaL4rsv_kJOTHgGBVuitkg",  // Change as needed
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
        formData.t2Name,
        formData.t2RollNumber,
        formData.t2Dept,
        formData.t2PhoneNumber,
        formData.t2Mail,
      ];

      const payload = {
        spreadsheetId: formData.spreadsheetId,
        sheetName: formData.sheetName,
        data
      };

      const response = await axios.post("https://cognissance-website.onrender.com/submit", payload);
      alert(response.data.message);
      setFormData({ ...formData, teamName:"", name: "", rollNumber: "",dept: "", email: "",t1Name:"",t1RollNumber:"",t1Dept:"",t1Mail:"",t1PhoneNumber:"",t2Name:"",t2RollNumber:"",t2Dept:"",t2Mail:"",t2PhoneNumber:"" });
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
  <h2>Project Pitch</h2>
  <h3 style={{color:'steelblue'}}>Whatsapp Group link:</h3>
  <a href="https://chat.whatsapp.com/G4bvGU9N5atGMivW7DwRi3" target="_blank" className="link-highlight">https://chat.whatsapp.com/G4bvGU9N5atGMivW7DwRi3</a>
  <br/><br />
  <p>
    Participants are encouraged to present innovative and research‑based projects on any one of the following themes:
  </p>
  <ul>
    <li>AI</li>
    <li>IoT</li>
    <li>Web</li>
    <li>Others</li>
  </ul>

  <p><strong>Project Guidelines:</strong></p>
  <ul>
    <li>Maximum Members in Team: 3</li>
    <li>Duration: 5 minutes (4 + 1 Q&A)</li>
  </ul>

  <p><strong>Evaluation Criteria:</strong></p>
  <ul>
    <li><strong>Innovation</strong> – Originality and uniqueness of your idea.</li>
    <li><strong>Clarity</strong> – Clear explanation of concepts and objectives.</li>
    <li><strong>Technical Depth</strong> – Sound methodology, tools, and research.</li>
  </ul>

  <p>
    Be ready to pitch your prototype, research, or simulation with confidence.
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
  <input type="text" name="t1Name" placeholder="Teammate 1 Name" value={formData.t1Name} onChange={handleChange}  />
  <input type="text" name="t1RollNumber" placeholder="Teammate 1 Roll Number" value={formData.t1RollNumber} onChange={handleChange} />
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
  <input type="email" name="t1Mail" placeholder="Teammate 1 Email" value={formData.t1Mail} onChange={handleChange}  />
  <input type="text" name="t1PhoneNumber" placeholder="Teammate 1 Phone Number" value={formData.t1PhoneNumber} onChange={handleChange}  />

  {/* Teammate 2 Info */}
  <input type="text" name="t2Name" placeholder="Teammate 2 Name" value={formData.t2Name} onChange={handleChange} />
  <input type="text" name="t2RollNumber" placeholder="Teammate 2 Roll Number" value={formData.t2RollNumber} onChange={handleChange}  />
  <select name="t2Dept" value={formData.t2Dept} onChange={handleChange} >
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
  <input type="email" name="t2Mail" placeholder="Teammate 2 Email" value={formData.t2Mail} onChange={handleChange}  />
  <input type="text" name="t2PhoneNumber" placeholder="Teammate 2 Phone Number" value={formData.t2PhoneNumber} onChange={handleChange}  />

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

export default PitchProject;
