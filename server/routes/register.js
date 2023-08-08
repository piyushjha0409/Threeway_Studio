// routes/register.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User')

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,
      password: hashedPassword,
      userType,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
});

module.exports = router;
