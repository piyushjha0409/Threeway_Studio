import React, { useEffect, useState } from 'react';
import "./MDashboard.css"
import axios from 'axios';
import {v4 as uuidv4} from "uuid" 
import ManufactureChat from "../chat/ManufactureChat"

const MDashboard = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderId: uuidv4().slice(32).toUpperCase(),
    from: '',
    to: '',
    quantity: '',
    pickupAddress: '',
    transporter: '',
  });
  
 const [transporters, setTransporters] = useState<String[]>([])

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle submission logic here, e.g., sending the order to transporter
    console.log('Submitted Order:', orderDetails);
  };

  //api for getting all the transporters
  const getAllTransporters = () => {
    try{
       axios.get("http://localhost:8000/api/manufacturer/get-transporters").then((response: any)=> {       
       const usernames = response.data.map((each: any)=> each.username);
       setTransporters(usernames)
     })

    }catch(err){
      console.error(err);
    }
  }

   useEffect(()=> {
    getAllTransporters(); //all time fetching the transporters
   }, [])

  return (
    <div>
      <h1>Manufacturer's Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order ID:</label>
          <input
            type="text"
            name="orderId"
            value={orderDetails.orderId}
            readOnly
          />
        </div>
        <div>
          <label>From:</label>
          <input
            type="text"
            name="from"
            value={orderDetails.from}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>To:</label>
          <input
            type="text"
            name="to"
            value={orderDetails.to}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <select
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleInputChange}
          >
            <option value="">Select Quantity</option>
            <option value="1">1 ton</option>
            <option value="2">2 tons</option>
            <option value="3">3 tons</option>
          </select>
        </div>
        <div>
          <label>Pickup Address:</label>
          <input
            type="text"
            name="pickupAddress"
            value={orderDetails.pickupAddress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Transporter:</label>
          <select
            name="transporter"
            value={orderDetails.transporter}
            onChange={handleInputChange}
          > 
          {
            transporters.map((username: any, index: any)=> (
              <option key={index}>{username}</option>
            ))
          }
          </select>
        </div>
        <button type="submit">Send Push</button>
      </form>
      <ManufactureChat />
    </div>
  );
};

export default MDashboard;
