import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import React, { useState } from 'react';
import './styles/Main.css';
import arrowSvg from './assets/reshot-icon-arrow-diagonal-up-right-Y2ND6FM3RW.svg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Main() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const dummyAIResponses = [
    "Sure, I can help with that!",
    "Thats an inteeresting question. Let me think about it.",
    "I'm not sure about that. Can you provide more context?",
    "Let me check my database and get back to you.",
    "please provide more details so that I can help you better.",
  ];

  const handleSend = () => {
    console.log("handleSend fn called  - Sending message:", userInput);
    if (userInput.trim() === "") return;

    const newMessage = { text: userInput, sender: "user" };
      // simulate AI response after a short delay
      setTimeout(() => {
        const randomResonses = dummyAIResponses[Math.floor(Math.random() * dummyAIResponses.length)];
      }, 500);

    const aiResponse = { text: "This is an AI response.", sender: "ai" };
    if (messages.length === 0) {
      setMessages([newMessage, aiResponse]);
      return;
    }
    setMessages((prev) => [...prev, newMessage, aiResponse]);

    setUserInput("");
  };
  if (messages.length === 0){
    const initialMessage = { text: "Hello! How can I assist you today?", sender: "ai" };
    setMessages([initialMessage]);
  }
  const handleKeyDown = (e) => {
    if (e.key === `Enter` && !e.shiftkey){
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="main">
      <div className="scrollable-content">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "user-message" : "ai-message"
            }`}
          >
            {/* <div className='message-tag-container'>
              <span className="message-tag">
                {message.sender === "user" ? "You :  " : "AI : "}
              </span>
            </div> */}
            <span className="message-tag">
                {message.sender === "user" ? "You :  " : "AI : "}
              </span>
            {message.text}
          </div>
        ))}
      </div>
      </div>
      <div className="input-container">
        <div className="textarea-wrapper">
        <textarea
          className="textarea"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your query or suggestion here..."
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="button"
        >
          {/* Send */}
          <img src={arrowSvg} alt="Send" className="arrow-svg" />
        </button>
      </div>
      </div>
    </main>
  );
}

export default Main;
