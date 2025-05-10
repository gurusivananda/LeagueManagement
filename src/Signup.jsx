import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div className="auth-container">
        <div className="auth-left">
        <h2>Existing Account</h2>
        <p>Already have a account</p>
        <button onClick={() => navigate('/login')}>SIGN IN</button>
      </div>
      <div className="auth-right">
        <div className="form-wrapper">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:      </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:     </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password: </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div><center>
            <button type="submit" className="btn btn-success w-100" onClick={() => navigate('/SportsPage')}>
              Register
            </button></center>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
