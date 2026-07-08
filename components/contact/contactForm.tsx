"use client";

import React, { useState } from "react";
import "./contact.css";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-grid-section">
      <div className="contact-grid-container">

        {/* Left Column: Tagline & Details */}
        <div className="contact-left-col">
          <ScrollReveal delay={100}>
            <p className="contact-tagline">
              If you have questions about the Madhya Pradesh Youth Summit, or would like to get involved,{" "}
              <span className="contact-tagline-highlight">please reach out.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <a href="tel:+917556233945" className="contact-phone-info">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="contact-phone-icon"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.61 4 3 3.46 3.55 2.96C4.19 2.32 4.89 2 5.65 2C5.95 2 6.24 2.07 6.51 2.21C6.78 2.35 7.02 2.56 7.21 2.85L9.66 6.32C9.84 6.58 9.97 6.84 10.03 7.09C10.1 7.34 10.13 7.57 10.13 7.79C10.13 8.08 10.05 8.36 9.89 8.63C9.73 8.9 9.5 9.17 9.21 9.45L8.4 10.28C8.29 10.39 8.24 10.53 8.24 10.68C8.24 10.76 8.25 10.83 8.28 10.91C8.31 10.99 8.35 11.05 8.39 11.11C8.84 11.95 9.43 12.77 10.17 13.56C10.92 14.34 11.72 15.06 12.58 15.72C12.65 15.77 12.72 15.81 12.8 15.84C12.88 15.87 12.96 15.89 13.05 15.89C13.21 15.89 13.35 15.83 13.47 15.71L14.24 14.93C14.54 14.63 14.82 14.4 15.1 14.23C15.38 14.06 15.67 13.97 15.97 13.97C16.19 13.97 16.42 14 16.67 14.07C16.92 14.14 17.17 14.26 17.43 14.43L20.98 16.91C21.27 17.11 21.48 17.34 21.61 17.61C21.75 17.88 21.97 18.12 21.97 18.33Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
              <span>+91 755 623 3945</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Right Column: Form Fields */}
        <div className="contact-form-col">
          <ScrollReveal delay={150}>
            {submitted ? (
              <div className="bg-[#f3f4f6] rounded-2xl p-8 text-center border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-element">
                {/* Name field */}
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="contact-form-input"
                  />
                </div>

                {/* Email field */}
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="test@example.com"
                    required
                    className="contact-form-input"
                  />
                </div>

                {/* Category field */}
                <div className="contact-form-group">
                  <label htmlFor="category" className="contact-form-label">
                    Category:
                  </label>
                  <div className="contact-form-select-wrapper">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="contact-form-select"
                    >
                      <option value="" disabled>
                        Select category...
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership & Sponsorship</option>
                      <option value="speakers">Speaker / Panelist Interest</option>
                      <option value="registration">Student / Delegation Registration</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="contact-form-select-chevron">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="contact-form-textarea"
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  <span>→</span>
                  <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                </button>
                {errorMessage && (
                  <p style={{ color: "#ef4444", marginTop: "1rem", fontSize: "0.875rem", textAlign: "left" }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
