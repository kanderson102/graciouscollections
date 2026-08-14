"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Quote } from "lucide-react";

export default function JournalPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* Page Header */}
        <div style={headerStyle}>
          <p style={subStyle}>Journal</p>
          <h1 style={titleStyle}>The Gracious Journal</h1>
          <p style={descStyle}>Notes on textile preservation, bridal history, and curating inner radiance.</p>
          <div style={dividerStyle}></div>
        </div>

        {/* Blog Posts List */}
        <div style={postsContainerStyle}>

          {/* Post 1 */}
          <article id="restoring-silk" style={articleStyle}>
            <div style={imgWrapperStyle}>
              <Image 
                src="/images/dress_1.png" 
                alt="Restoring Liquid Silk"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={articleBodyStyle}>
              <span style={dateStyle}>Aug 12, 2026 • Archive Notes</span>
              <h2 style={articleTitleStyle}>Restoring Liquid Silk: Care of Mid-Century Gowns</h2>
              
              <div style={textBlockStyle}>
                <p>
                  Liquid silk satin was the hallmark of 1930s and 1940s glamorous nightgowns and wedding dresses. 
                  Unlike modern synthetics, natural liquid silk satin has a heavy drape and fluid sheen that shifts beautifully in the light. 
                  However, maintaining these fabrics requires absolute presence and patience.
                </p>
                
                <div style={quoteBoxStyle}>
                  <Quote size={24} color="#d2c2a4" style={{ marginBottom: "12px" }} />
                  <p style={{ fontStyle: "italic", fontSize: "1.6rem", color: "rgba(18,18,18,0.85)" }}>
                    "To care for a historic piece is to practice a form of devotion. We are preserving not just fabric, but the silent craftsmanship of hands that lived decades before us."
                  </p>
                </div>

                <p>
                  We recommend hand-washing old silk satin exclusively in lukewarm water using custom pH-neutral soaps. 
                  Never wring or rub wet silk, as it weakens the delicate natural fibers. 
                  Instead, roll the garment gently inside a clean white towel to absorb moisture, then dry flat away from direct sunlight.
                </p>
              </div>
            </div>
          </article>

          {/* Post 2 */}
          <article id="victorian-collars" style={articleStyle}>
            <div style={imgWrapperStyle}>
              <Image 
                src="/images/dress_3.png" 
                alt="Victorian Gowns"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={articleBodyStyle}>
              <span style={dateStyle}>Aug 08, 2026 • Fashion History</span>
              <h2 style={articleTitleStyle}>Lace & Decorum: The Victorian High Collar Gown</h2>
              
              <div style={textBlockStyle}>
                <p>
                  High-collared silhouettes from the late 19th century represent a beautiful blend of modesty, structure, and intricate handmade lace. 
                  These styles were worn by women who adorned themselves with a gentle and quiet spirit, putting their hope in timeless grace rather than outward flash.
                </p>
                <p>
                  Victorian high-neck bodices were heavily structured, featuring rows of tiny fabric-covered buttons or hook-and-eye fastenings. 
                  The lace details were often handmade Brussels or Honiton lace, customized to form panels on the chest and cuffs. 
                  Today, this traditional silhouette offers an unmatched presence and depth for the modern bride looking for historical meaning in her garments.
                </p>
              </div>
            </div>
          </article>

          {/* Post 3 */}
          <article id="veil-selection" style={articleStyle}>
            <div style={imgWrapperStyle}>
              <Image 
                src="/images/veil_1.png" 
                alt="cathedral veils"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={articleBodyStyle}>
              <span style={dateStyle}>Aug 01, 2026 • Bridal Guide</span>
              <h2 style={articleTitleStyle}>Choosing the Right Antique Veil for Your Dress</h2>
              
              <div style={textBlockStyle}>
                <p>
                  A wedding veil has long symbolized purity, surrender, and transition. 
                  When choosing a veil to accompany a vintage or modern gown, the length and weight of the lace play vital roles. 
                  Our favorite styles are cathedral-length veils crafted from fine silk net or soft illusion tulle, adorned with scalloped edges of floral embroidery.
                </p>
                <p>
                  If your gown has heavy lace detail, opt for a simpler, sheer veil to let the dress details shine. 
                  Conversely, if your gown is a minimalist silk slip dress, a cathedral veil with rich, detailed borders creates a stunning, dramatic frame that captures natural light beautifully.
                </p>
              </div>
            </div>
          </article>

        </div>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link href="/" style={backHomeStyle}>← BACK TO BOUTIQUE</Link>
        </div>

      </div>
    </div>
  );
}

// Inline styles for Journal page
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "60px",
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

const descStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  color: "rgba(18, 18, 18, 0.55)",
  fontStyle: "italic",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  width: "120px",
  backgroundColor: "rgba(18, 18, 18, 0.08)",
  margin: "24px auto 0 auto",
};

const postsContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 80,
};

const articleStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid rgba(18, 18, 18, 0.06)",
  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.02)",
  overflow: "hidden",
};

const imgWrapperStyle: React.CSSProperties = {
  position: "relative",
  aspectRatio: "16/9",
  width: "100%",
};

const articleBodyStyle: React.CSSProperties = {
  padding: "48px 40px",
};

const dateStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "var(--color-gold)",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  fontWeight: "600",
  display: "block",
  marginBottom: "12px",
};

const articleTitleStyle: React.CSSProperties = {
  fontSize: "3.2rem",
  fontFamily: "var(--font-heading)",
  marginBottom: "24px",
  letterSpacing: "0.02em",
  lineHeight: "1.25",
};

const textBlockStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  lineHeight: "1.8",
  color: "rgba(18, 18, 18, 0.75)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const quoteBoxStyle: React.CSSProperties = {
  padding: "24px",
  backgroundColor: "#f7f6f2",
  borderLeft: "2px solid var(--color-gold)",
  margin: "12px 0",
};

const backHomeStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(18, 18, 18, 0.5)",
  fontWeight: "600",
};
