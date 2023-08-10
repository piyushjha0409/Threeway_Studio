// routes/transporter.js
const express = require('express');
const router = express.Router();

const Transporter = require('../models/Transporter');
const Order = require('../models/Order');

router.get('/orders', async (req, res) => {
  // Implementation to get transporter's assigned orders
  try{
 
     const response = await Order.find().lean().exec();
     const order_id = response;
     res.json(order_id)
  }catch(err){
    console.error(err);
    res.status(500).json({ message: "Couldnt fetch!"})
  }
});


module.exports = router;    
