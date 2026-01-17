import { useState } from "react";

export default function Step1({ next }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!firstName || !surname || !email) {
      setError("All fields are required");
      return;
    }
    next({ firstName, surname, email });
  };

  return (
    <>
      {/* <h1 className="title">Send us a message</h1> */}

      <div className="steps">
        <div className="step active">
          <div className="circle active">1</div>
          <span>Personal Info</span>
        </div>
        <div className="step">
          <div className="circle">2</div>
          <span>Details</span>
        </div>
        <div className="step">
          <div className="circle">3</div>
          <span>Message</span>
        </div>
      </div>

      <label>First Name</label>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label>Surname</label>
      <input value={surname} onChange={(e) => setSurname(e.target.value)} />

      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      {error && <div className="error">{error}</div>}

      <button className="btn" onClick={submit}>
        Continue →
      </button>
    </>
  );
}
