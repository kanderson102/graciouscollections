"use client";

import React, { use } from "react";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

interface StaticPageProps {
  params: Promise<{ slug: string }>;
}

export default function StaticPage({ params }: StaticPageProps) {
  const { slug } = use(params);

  // Content configuration based on slug
  let pageTitle = "";
  let subTitle = "";
  let content = null;

  if (slug === "privacy") {
    pageTitle = "Privacy Policy";
    subTitle = "Our Commitment to Safeguarding Your Presence";
    content = (
      <div>
        <p style={pStyle}>
          At Gracious Collections, we respect your privacy and presence. We only collect the information necessary to fulfill 
          your orders and provide a secure shopping experience (such as name, address, email, and billing details).
        </p>
        <p style={pStyle}>
          Your payment information is processed securely through Stripe and is never stored on our servers. We will never sell, 
          rent, or share your personal data with third parties.
        </p>
        <div style={boxStyle}>
          <ShieldCheck size={20} color="#d2c2a4" style={{ marginRight: "16px", flexShrink: 0 }} />
          <div>
            <h4 style={boxTitleStyle}>Secure Data Management</h4>
            <p style={{ margin: "4px 0 0 0" }}>If you have any questions regarding your data or wish to be removed from our registry, contact us at:</p>
            <a href="mailto:info@graciouscollections.com" style={linkStyle}>info@graciouscollections.com</a>
          </div>
        </div>
      </div>
    );
  } else if (slug === "refunds") {
    pageTitle = "Refund & Return Policy";
    subTitle = "Honoring Your Purchase & One-of-a-Kind Realities";
    content = (
      <div>
        <p style={pStyle}>
          As our collection consists of delicate, rare, and one-of-a-kind vintage items, we hope you appreciate that they are 
          sold with their historical character intact. Minor wear, age-related texture, or historical stitching are part of their 
          intrinsic beauty.
        </p>
        <p style={pStyle}>
          However, your peace of mind is very precious to us. We accept returns for store credit or refund within 7 days of 
          delivery, provided the item is returned in its original condition, unworn, and with our boutique tags attached. 
          Return shipping costs are the responsibility of the customer.
        </p>
        <div style={boxStyle}>
          <RotateCcw size={20} color="#d2c2a4" style={{ marginRight: "16px", flexShrink: 0 }} />
          <div>
            <h4 style={boxTitleStyle}>Initiating a Return</h4>
            <p style={{ margin: "4px 0 0 0" }}>To request a return auth form, please contact us within 7 days of order receipt at:</p>
            <a href="mailto:returns@graciouscollections.com" style={linkStyle}>returns@graciouscollections.com</a>
          </div>
        </div>
      </div>
    );
  } else if (slug === "shipping") {
    pageTitle = "Shipping Policy";
    subTitle = "Careful Packaging & Secure Dispatch";
    content = (
      <div>
        <p style={pStyle}>
          We pack each unique piece by hand with devotion. Gowns and delicate items are wrapped in acid-free tissue paper and 
          placed in our signature collection box to protect the fibers.
        </p>
        <p style={pStyle}>
          We offer free shipping on all orders within the United States. All orders are sent fully insured via track-and-sign 
          express couriers (UPS or FedEx). International orders are calculated at checkout and may be subject 
          to destination customs fees.
        </p>
        <div style={boxStyle}>
          <Truck size={20} color="#d2c2a4" style={{ marginRight: "16px", flexShrink: 0 }} />
          <div>
            <h4 style={boxTitleStyle}>Courier Shipping Expectations</h4>
            <p style={{ margin: "4px 0 0 0" }}>US orders arrive within 2-5 business days of dispatch. International shipments typically take 5-7 business days.</p>
          </div>
        </div>
      </div>
    );
  } else {
    pageTitle = "Boutique Services";
    subTitle = "Gracious Collections";
    content = (
      <div>
        <p style={pStyle}>Welcome to Gracious Collections. We offer specialized antique textile sourcing, styling fittings, and consignments.</p>
        <Link href="/" className="btn" style={{ marginTop: "24px" }}>RETURN HOME</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        {/* Page Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>{pageTitle}</h1>
          {subTitle && <p style={subStyle}>{subTitle}</p>}
          <div style={dividerStyle}></div>
        </div>

        {/* Content body */}
        <div style={bodyStyle}>
          {content}
        </div>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link href="/" style={backHomeStyle}>← RETURN TO HOME</Link>
        </div>

      </div>
    </div>
  );
}

// Inline styles for static pages
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "48px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "4.5rem",
  fontFamily: "var(--font-heading)",
  marginBottom: "12px",
  letterSpacing: "0.05em",
};

const subStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  color: "var(--color-gold)",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  fontWeight: "600",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  width: "120px",
  backgroundColor: "rgba(18, 18, 18, 0.08)",
  margin: "24px auto 0 auto",
};

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid rgba(18, 18, 18, 0.06)",
  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.02)",
  padding: "48px 40px",
  lineHeight: "1.8",
  fontSize: "1.5rem",
};

const pStyle: React.CSSProperties = {
  marginBottom: "24px",
  color: "rgba(18, 18, 18, 0.75)",
};

const boxStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: "#f7f6f2",
  padding: "24px",
  marginTop: "32px",
  borderLeft: "2px solid var(--color-gold)",
};

const boxTitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontFamily: "var(--font-body)",
  fontWeight: "600",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

const linkStyle: React.CSSProperties = {
  color: "var(--color-gold)",
  fontWeight: "600",
  display: "inline-block",
  marginTop: "8px",
  borderBottom: "1px solid var(--color-gold)",
};

const backHomeStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(18, 18, 18, 0.5)",
  transition: "var(--transition-smooth)",
};
