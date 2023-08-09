// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const Server = require('socket.io');
const app = express();
const server = http.createServer(app);
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
app.use('/api/auth', require('./routes/register'));
app.use('/api/auth', require('./routes/login'));
app.use('/api/manufacturer', require('./routes/Manufacturer'));
app.use('/api/transporter', require('./routes/Transporter'));
app.use('/api/order', require('./routes/Order'));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:8000",
    methods: ["GET", "POST"]
  },
})

io.on('connection', (socket) => {
  console.log("User Connected",socket.id);

  // socket.on('message', (message) => {
  //   // Broadcast the received message to all connected clients
  //   io.emit('message', message);
  // });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
