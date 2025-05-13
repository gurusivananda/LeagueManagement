import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("Signup successful!");
        navigate('/login'); 
      } else if (res.status === 409) {
        alert("User already exists!");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("User Created Successfully.");
      navigate('/login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2>Existing Account</h2>
        <p>Already have an account?</p>
        <button onClick={() => navigate('/login')}>SIGN IN</button>
      </div>
      <div className="auth-right">
        <div className="form-wrapper">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
