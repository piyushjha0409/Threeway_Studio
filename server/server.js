// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const path = require('path');
const dotenv = require('dotenv')
dotenv.config({path: '.env'});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://peeyush0409:Dard0409*@cluster0.88ku4pe.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

// Include your routes here
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));
app.use('/api/manufacturer', require('./routes/Manufacturer'));
app.use('/api/transporter', require('./routes/Transporter'));
app.use('/api/order', require('./routes/Order'));

io.on('connection', (socket) => {
  // Socket.io implementation for real-time messaging
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
