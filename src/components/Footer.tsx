"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Quick Links Column */}
          <div className={styles.column}>
            <h3>QUICK LINKS</h3>
            <ul className={styles.links}>
              <li><Link href="/pages/appointments">STUDIO APPOINTMENTS</Link></li>
              <li><Link href="/pages/concierge">VINTAGE CONCIERGE</Link></li>
              <li><Link href="/pages/consign">SELL WITH US</Link></li>
              <li><Link href="/pages/privacy">PRIVACY POLICY</Link></li>
              <li><Link href="/pages/refunds">REFUND POLICY</Link></li>
              <li><Link href="/pages/shipping">SHIPPING POLICY</Link></li>
            </ul>
          </div>

          {/* Our Philosophy Column */}
          <div className={styles.column}>
            <h3>OUR PHILOSOPHY</h3>
            <p className={styles.aboutText}>
              Real beauty begins within. Gracious Collections curates heirloom vintage garments, antique lace, 
              and traditional treasures that reflect a quiet radiance, purity, and depth of spirit. 
              We believe in presence, devotion, and preserving the sacred craftsmanship of the past.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/_graciouscollections/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className={styles.column}>
            <h3>SUBSCRIBE</h3>
            <p className={styles.subText}>Sign up for early collection previews, vintage sourcing notes, and boutique news.</p>
            {subscribed ? (
              <p className={styles.successMsg}>Thank you for joining our newsletter list.</p>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.form}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>© {new Date().getFullYear()} GRACIOUS COLLECTIONS. ALL RIGHTS RESERVED.</p>
          </div>
          <div className={styles.currency}>
            <span className={styles.currencyLabel}>UNITED STATES (USD $)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
