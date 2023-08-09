// TransporterChat.tsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your backend URL

const TransportChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const transporterId = 'transporter456'; // Unique ID for the transporter

  useEffect(() => {
    socket.on('message', (message) => {
      setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const data = { room: transporterId, message };
      socket.emit('message', data);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default TransportChat;
