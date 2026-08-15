"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import styles from "./ContactForm.module.css";

export const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !message) {
      setError("Please fill out both the email address and your message.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call for premium UI experience
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {isSubmitted ? (
          <div className={styles.successContainer}>
            <div className={styles.successIconWrapper}>
              <CheckCircle2 size={48} strokeWidth={1} className={styles.successIcon} />
            </div>
            <h3>Devoted to Helping You</h3>
            <p>
              Thank you for reaching out to Gracious Collections. A vintage stylist will review your message
              and respond to you shortly.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
                setMessage("");
              }}
              className="btn btn-outline"
              style={{ marginTop: "24px" }}
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <div className={styles.formContainer}>
            <div className={styles.sectionHeader}>
              <p>Inquiries & Styling</p>
              <h2>Get in Touch</h2>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {error && <div className={styles.errorMessage}>{error}</div>}
              
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className={styles.input}
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message Body
                </label>
                <textarea
                  id="contact-message"
                  className={styles.textarea}
                  placeholder="How can we help you? Describe the style, dress, or event details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn ${styles.submitBtn}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "SENDING..."
                ) : (
                  <>
                    SEND MESSAGE <Send size={14} style={{ marginLeft: "8px" }} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
