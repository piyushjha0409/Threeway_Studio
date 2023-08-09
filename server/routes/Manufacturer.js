// routes/manufacturer.js
const express = require('express');
const router = express.Router();

const Manufacturer = require('../models/Manufacturer');
const Order = require('../models/Order');
const Transporters = require('../models/Transporter')

router.post('/create-order', async (req, res) => {
  // Implementation for creating an order
  try{
    const {
      orderId,
      from,
      to,
      quantity, 
      pickupAddress,
      transporter,
      price
    }  = req.body
  
    const newOrder = new Order({
      orderId,
      from,
      to,
      quantity,
      pickupAddress,
      transporter,
      price
    });
    await newOrder.save();
    res.json({ message: "Order created successfully"})
  }catch(error){
    console.error(error);
    res.status(500).json({message: "Internal server error"})
  }

});

router.get('/get-transporters', async (req, res) => {
  // Implementation to get transporters' username
   try{
    const transporters = await Transporters.find().lean().exec();
    res.json(transporters);
   }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Server error' });
   }
});

module.exports = router;
