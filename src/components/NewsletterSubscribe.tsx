"use client";

import React, { useState } from "react";
import styles from "./NewsletterSubscribe.module.css";

export const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Success state
    setSubscribed(true);
  };

  return (
    <div className="fade-in">
      {subscribed ? (
        <p className={styles.successText}>
          Thank you for subscribing to our newsletter!
        </p>
      ) : (
        <form onSubmit={handleSubscribe} className={styles.subscribeForm} noValidate>
          <div className={styles.inputGroup}>
            <input
              type="email"
              className={styles.subscribeInput}
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.subscribeBtn}>
              SUBSCRIBE
            </button>
          </div>
          {error && <span className={styles.errorText}>{error}</span>}
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
