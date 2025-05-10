import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';


function Login() {
  const [form, setForm] = useState({
    name: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', form);
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2>Hello, Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
        <button onClick={() => navigate('/')}>REGISTER</button>
      </div>
      <div className="auth-right">
        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
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
              <label className="form-label">Password</label>
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
              Login
            </button></center>
          </form>
          
          </div>
        </div>
      </div>
    
  );
}

export default Login;
