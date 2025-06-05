import React, { useState } from "react";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, from: "user" }]);
      setInput("");
      // Placeholder for bot/AI response
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { text: "Experience suggestion!", from: "bot" }]);
      }, 500);
    }
  };

  return (
    <section>
      <h2>Chat</h2>
      <div style={{ border: "1px solid #aaa", height: 120, overflowY: "auto", marginBottom: 8, padding: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.from === "user" ? "right" : "left" }}>
            <b>{msg.from === "user" ? "You" : "Bot"}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </section>
  );
}

export default ChatInterface;