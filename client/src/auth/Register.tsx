// src/Register.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('manufacturer'); // Default to manufacturer

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { username, password, userType });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>User Type:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="manufacturer">Manufacturer</option>
          <option value="transporter">Transporter</option>
        </select>
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
