// ChatComponent.js
import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import "./ManufactureChat.css"

const socket = io("http://localhost:3000")

const ManufactureChat: React.FC = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);
  
    useEffect(() => {
      // Listen for incoming messages
      socket.on('message', (message: string) => {
        setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
      });
    }, []);
  
    const sendMessage = () => {
      if (message.trim() !== '') {
        // Emit a message event to the server
        socket.emit('message', message);
        setMessage('');
      }
    };
  
    return (
      <div className="chat-container">
      <ul className="message-list">
        {chatHistory.map((msg, index) => (
          <li className="message" key={index}>{msg}</li>
        ))}
      </ul>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
    );
  };
  
  export default ManufactureChat;