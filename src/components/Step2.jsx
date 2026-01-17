import { useState } from "react";

export default function Step2({ next, data }) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!phone || phone.length < 10) {
      setError("Enter valid phone number");
      return;
    }
    next({ phone });
  };

  return (
    <>
      {/* <h1 className="title">Send us a message</h1> */}

      <div className="steps">
        <div className="step done">
          <div className="circle done">1</div>
          <span>Personal Info</span>
        </div>
        <div className="step active">
          <div className="circle active">2</div>
          <span>Details</span>
        </div>
        <div className="step">
          <div className="circle">3</div>
          <span>Message</span>
        </div>
      </div>

      <label>Email</label>
      <input value={data.email} readOnly />

      <label>Phone</label>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />

      {error && <div className="error">{error}</div>}

      <button className="btn" onClick={submit}>
        Continue →
      </button>
    </>
  );
}
