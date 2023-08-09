import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import MDashboard from './Manufacturer/MDashboard';
import TDashboard from './Transporter/TDashboard';
import Landing from "./Home/Landing"

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/manufacturer' element={< MDashboard/>} />
      <Route path='/transporter' element={<TDashboard />} />
    </Routes>

    </div>
    </Router>
  );
}

export default App;
