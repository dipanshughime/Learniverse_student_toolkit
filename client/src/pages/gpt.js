import React from 'react';
import { useState } from 'react';
import { sendMessageToOpenApi } from '../openai';



function Gpt() {
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    try {
      const response = await sendMessageToOpenApi(input);
      setMessages([
        ...messages,
        { text: input, isUser: true },
        { text: response, isUser: false },
      ]);
      setInput("");
    } catch (error) {
      console.log("Error sending message:", error);
    }
  };

  return (
    <div className="App">
      <div className="chat">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
}


export default Gpt;
