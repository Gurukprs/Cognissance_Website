import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    teamMembers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwBjh1Q8oOTPycBChU5vFn4O8rmzHzVUkeQG3S0A3rdHMiWgWctMrCqxRHsua4Og7IY/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Response from server:', result);
        alert('Data submitted successfully!');
        setFormData({ name: '', email: '', rollNumber: '', teamMembers: '' });
      } else {
        alert('Failed to submit data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred. Check the console for details.');
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Roll Number:
        <input
          type="text"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Team Members:
        <textarea
          name="teamMembers"
          value={formData.teamMembers}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
