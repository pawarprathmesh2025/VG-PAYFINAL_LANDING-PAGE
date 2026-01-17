import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from "./Success";
import "./ContactForm.css";

import { sendContactEmail } from "../services/emailService";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const next = async (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);

    // ✅ SEND EMAIL ON STEP 3
    if (step === 3) {
      setLoading(true);
      try {
        await sendContactEmail(updatedData);
        setStep(4); // Success
      } catch (error) {
        console.error(error);
        alert("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }

    setStep((prev) => prev + 1);
  };

  return (
    <div className="contact-section">
      <h2>Send us a message</h2>
      {loading && <div className="loader-overlay" />}

      <div className="form-wrapper step-animate">
        
        {step === 1 && <Step1 next={next} />}
        {step === 2 && <Step2 next={next} data={formData} />}
        {step === 3 && <Step3 next={next} />}
        {step === 4 && <Success />}
      </div>
    </div>
  );
}
