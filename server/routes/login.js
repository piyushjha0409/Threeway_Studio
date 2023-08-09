// routes/auth.js
const express = require('express');
const router = express.Router();

const Manufacturer = require('../models/Manufacturer');
const Transporter = require('../models/Transporter');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // First, search for the user in the Manufacturer schema
    const manufacturerUser = await Manufacturer.findOne({ username, password }).lean();

    if (manufacturerUser) {
      return res.status(200).json({ userType: 'manufacturer', user: manufacturerUser });
    }

    // If not found in Manufacturer schema, search in Transporter schema
    const transporterUser = await Transporter.findOne({ username, password }).lean();

    if (transporterUser) {
      return res.status(200).json({ userType: 'transporter', user: transporterUser });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
