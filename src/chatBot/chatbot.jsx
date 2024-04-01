import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatBot() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>This is a chat-bot</h1>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default ChatBot;
