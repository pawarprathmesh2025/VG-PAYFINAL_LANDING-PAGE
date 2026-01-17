import { useState } from "react";

export default function Step3({ next }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters");
      return;
    }
    next({ message });
  };

  return (
    <>
      {/* <h1 className="title1">Send us a message</h1> */}

      <div className="steps">
        <div className="step done">
          <div className="circle done">1</div>
          <span>Personal Info</span>
        </div>
        <div className="step done">
          <div className="circle done">2</div>
          <span>Details</span>
        </div>
        <div className="step active">
          <div className="circle active">3</div>
          <span>Message</span>
        </div>
      </div>

      <label>Your Message</label>
      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {error && <div className="error">{error}</div>}

      <button className="btn" onClick={submit}>
        Send Message 🚀
      </button>
    </>
  );
}
