"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import styles from "../../Home.module.css";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = use(params);

  // Map slug to category name
  let categoryName = "";
  let pageTitle = "";
  let pageDesc = "";

  if (slug === "new-in") {
    categoryName = "all";
    pageTitle = "New Arrivals";
    pageDesc = "Explore our latest curation of rare vintage lace, silk slip dresses, and antique heirlooms.";
  } else if (slug === "lingerie") {
    categoryName = "Lingerie";
    pageTitle = "Loungewear & Lingerie";
    pageDesc = "Exquisite mid-century nightgowns, bias-cut silk slip dresses, and delicate lace loungewear.";
  } else if (slug === "vintage-bridal") {
    categoryName = "Vintage Bridal";
    pageTitle = "Vintage Bridal Archive";
    pageDesc = "Romantic historical wedding gowns and delicate bridal wear from bygone eras.";
  } else if (slug === "veils-accessories") {
    categoryName = "Veils & Accessories";
    pageTitle = "Veils & Accessories";
    pageDesc = "Antique embroidered tulle veils and headpieces to crown your vintage silhouette.";
  } else {
    categoryName = "all";
    pageTitle = "Vintage Collection";
    pageDesc = "Timeless treasures selected for their purity, craftsmanship, and historic elegance.";
  }

  // Filter products
  const filteredProducts =
    categoryName === "all"
      ? products
      : products.filter((p) => p.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", padding: "60px 0" }}>
      <div className="container">
        
        {/* Category Header */}
        <div style={headerStyle}>
          <p style={subStyle}>Collection</p>
          <h1 style={titleStyle}>{pageTitle}</h1>
          <p style={descStyle}>{pageDesc}</p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "rgba(18,18,18,0.5)" }}>
            <p>No pieces are currently available in this archive collection.</p>
            <Link href="/" className="btn" style={{ marginTop: "24px" }}>
              RETURN TO BOUTIQUE
            </Link>
          </div>
        ) : (
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.productImg}
                  />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.category}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <span className={styles.price}>${product.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}

// Custom styles for collection header
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  maxWidth: "700px",
  margin: "0 auto 60px auto",
};

const subStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "var(--color-gold)",
  letterSpacing: "0.20em",
  textTransform: "uppercase",
  fontWeight: "600",
  marginBottom: "12px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "4.2rem",
  fontFamily: "var(--font-heading)",
  marginBottom: "16px",
  letterSpacing: "0.05em",
};

const descStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  lineHeight: "1.7",
  color: "rgba(18, 18, 18, 0.65)",
};
