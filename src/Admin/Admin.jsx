import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Admin.css';

function Admin() {
  const [form, setForm] = useState({ name: '', password: '' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login Data:', form);
    navigate('/AdminPanel'); 
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="admin-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="admin-input"
            required
          />
          <label className="admin-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="admin-input"
            required
          />
          <button type="submit" className="admin-button" onClick={() => navigate('/AdminPanel')} >Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
