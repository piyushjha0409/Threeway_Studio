// routes/login.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return res.status(200).json({ message: 'Login successful.' });
    } else {
      return res.status(401).json({ error: 'Incorrect password.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

module.exports = router;
