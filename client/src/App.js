import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    try {
      const res = await axios.post("http://localhost:3000/api/ask", {
        question,
      });
      setAnswer(res.data.answer);
      setHistory([...history, { question, answer: res.data.answer }]);
    } catch (err) {
      setAnswer("Error solving question.");
    }
    setQuestion("");
    setLoading(false);
  };

  return (
    <div className="app-container">
      <header className="header">🧮 AI Math Solver</header>

      <div className="chat-box">
        {history.map((item, index) => (
          <div key={index} className="message-block">
            <div className="user-msg">🧑‍💻 You: {item.question}</div>
            <div className="ai-msg">🤖 AI: {item.answer}</div>
          </div>
        ))}

        {loading && <div className="ai-msg">🤖 AI: Thinking...</div>}
      </div>

      <div className="input-area">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter a math question..."
        />
        <button onClick={handleSubmit} disabled={loading}>
          ➤
        </button>
      </div>
    </div>
  );
}

export default App;
