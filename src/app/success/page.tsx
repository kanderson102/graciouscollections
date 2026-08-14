"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Check, Calendar, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();

  // Clear the cart on order success page mount
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="fade-in">
        <div style={iconContainerStyle}>
          <Check size={32} color="#fcfbf9" strokeWidth={2.5} />
        </div>
        
        <h1 style={headingStyle}>Thank You For Your Order</h1>
        <p style={subheadingStyle}>Your antique vintage piece has found its new home.</p>
        
        <div style={dividerStyle}></div>

        <p style={paragraphStyle}>
          We have received your payment details and are preparing your order. 
          As each item in our boutique is a rare, one-of-a-kind treasure, we pack them with 
          the utmost care in acid-free archival tissue paper and custom vintage ribbon. 
          A dispatch notification with secure tracking details will be sent to your email address shortly.
        </p>

        <div style={highlightBoxStyle}>
          <Calendar size={18} style={{ color: "#d2c2a4", marginRight: "12px" }} />
          <span>Fittings & styling inquiries: appointments@graciouscollections.com</span>
        </div>

        <Link href="/" className="btn" style={{ marginTop: "24px", width: "100%" }}>
          RETURN TO BOUTIQUE
        </Link>
        
        <div style={loveNoteStyle}>
          <Heart size={14} fill="#d2c2a4" color="#d2c2a4" style={{ marginRight: "6px" }} />
          <span>With love, Gracious Collections</span>
        </div>
      </div>
    </div>
  );
}

// Inline styles for high-fidelity presentation
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "75vh",
  padding: "40px 24px",
  backgroundColor: "#fcfbf9",
};

const cardStyle: React.CSSProperties = {
  maxWidth: "550px",
  width: "100%",
  backgroundColor: "#ffffff",
  border: "1px solid rgba(18, 18, 18, 0.06)",
  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.03)",
  padding: "48px 36px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconContainerStyle: React.CSSProperties = {
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#d2c2a4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "28px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "3.2rem",
  fontFamily: "var(--font-heading)",
  marginBottom: "12px",
  letterSpacing: "0.05em",
};

const subheadingStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  color: "#d2c2a4",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  fontFamily: "var(--font-body)",
  fontWeight: "600",
  marginBottom: "24px",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  width: "80px",
  backgroundColor: "rgba(18, 18, 18, 0.08)",
  marginBottom: "24px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  lineHeight: "1.8",
  color: "rgba(18, 18, 18, 0.75)",
  marginBottom: "32px",
};

const highlightBoxStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "16px",
  backgroundColor: "#f7f6f2",
  fontSize: "1.2rem",
  letterSpacing: "0.02em",
  color: "rgba(18, 18, 18, 0.7)",
  width: "100%",
  textAlign: "left",
};

const loveNoteStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
  fontStyle: "italic",
  color: "rgba(18, 18, 18, 0.5)",
  marginTop: "24px",
};
