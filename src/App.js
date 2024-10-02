import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("", {
        message: message,
      });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching the LLM response:", error);
      setResponse("Error occurred while getting the response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <img src="https://freesvglogo.com/upload/Iv/EoA/banglalink-logo.svg.@ERESIZE@.preview.png"/>
      <h1>Orange Bot</h1>
      <form onSubmit={handleMessageSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {response && (
        <div className="response">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
