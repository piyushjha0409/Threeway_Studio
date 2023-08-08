const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express();

const server = http.createServer(app);
const io = socketIo(server)

const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`Server is running on the port ${PORT}`)
})