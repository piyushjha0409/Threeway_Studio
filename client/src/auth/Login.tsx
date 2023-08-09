// src/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { username, password });
      
      if (response.status === 200) {
        const userType = response.data.userType;
        
        if (userType === 'manufacturer') {
          alert("Successfully Loggedin")
          navigate('/manufacturer'); // Redirect to manufacturer dashboard
        } else if (userType === 'transporter') {
          alert("Successfully Loggedin")
          navigate('/transporter'); // Redirect to transporter dashboard
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
