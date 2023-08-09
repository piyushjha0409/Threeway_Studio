// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Manufacturer = require('../models/Manufacturer');
const Transporter = require('../models/Transporter');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await Manufacturer.findOne({ username }).lean().exec();
    let userType = 'manufacturer';

    if (!user) {
      user = await Transporter.findOne({ username }).lean().exec();
      userType = 'transporter';
    }

    if (user) {
      // Compare hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        return res.status(200).json({ userType, user , message: "Successfully loggedin"});
      }
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
