// routes/register.js
const express = require('express');
const bcrypt = require('bcrypt');
const Manufacturer = require('../models/Manufacturer')
const Transporter = require('../models/Transporter')

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    if (userType === "manufacturer"){
      const newManufacturer = new Manufacturer({
        username,
        password: hashedPassword,
        userType,
      });
      await newManufacturer.save();
      res.status(201).json({ message: 'Manufacturer registered successfully.' });
    }else if(userType === "transporter"){
      const newTransporter = new Transporter({
        username,
        password: hashedPassword,
        userType,
      });

      await newTransporter.save();
      res.status(201).json({ message: 'Transporter registered successfully.' });
    }
   
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
});

module.exports = router;
