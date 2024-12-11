import React, { useState } from "react";
import axios from "axios";

import "./header.css";
import headerImage from "../image/headerbackground.jpg";
import logo from "../image/logo.png";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!name.trim() || !email.trim()) {
      setErrorMessage("There should be no empty");
      return;
    }

    setLoading(true);

    try {

      await axios.post("http://localhost:5000/send-email", {
        name,
        email,
      });

      setSuccessMessage("Email sent successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-overlay"></div>
      <img src={logo} alt="Logo" className="logo" />

      <div className="contact-number">+1 (123) 123-4567</div>

      <div className="header-content">
        <div className="left-text">
          <h2 className="small-text">THE</h2>
          <h1 className="large-text">OCEAN</h1>
          <h2 className="small-text">IS</h2>
          <h1 className="large-text">CALLING</h1>
        </div>

        <div className="form-container">
          <h2 className="form-title">Get in Touch</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="submit-button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
      <div className="header" id="header">
    </div>
    </section>
  );
};

export default Header;
