"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import styles from "./Product.module.css";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const { addItem } = useCart();

  // Find product by id
  const product = products.find((p) => p.id === id);

  // States
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className={styles.notFoundContainer}>
        <h2>Piece Not Found</h2>
        <p>We apologize, but this vintage piece could not be located in our archive.</p>
        <Link href="/" className="btn">
          RETURN HOME
        </Link>
      </div>
    );
  }

  // Set initial size if there's only one (e.g. One Size)
  if (product.sizes.length === 1 && !selectedSize) {
    setSelectedSize(product.sizes[0]);
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={styles.pdpContainer}>
      <div className="container">
        
        {/* Back Link */}
        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className={styles.layout}>
          
          {/* Left Column: Product Images */}
          <div className={styles.imagesColumn}>
            {product.images.map((img, idx) => (
              <div key={idx} className={styles.imageWrapper}>
                <Image
                  src={img}
                  alt={`${product.name} - View ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Product Info */}
          <div className={styles.detailsColumn}>
            
            {/* Header info */}
            <div className={styles.header}>
              <span className={styles.category}>{product.category}</span>
              <h2 className={styles.title}>{product.name}</h2>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            </div>

            {/* Size Selector */}
            <div className={styles.optionSection}>
              <span className={styles.optionLabel}>
                Size: {selectedSize || "Select a size"}
              </span>
              <div className={styles.sizeSelector}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${styles.sizePill} ${
                      selectedSize === size ? styles.sizePillActive : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ marginTop: "16px" }}>
              <button 
                onClick={handleAddToCart}
                className="btn btn-full"
                style={{ height: "54px" }}
              >
                {added ? (
                  <>
                    <Check size={18} style={{ marginRight: "8px" }} />
                    ADDED TO CART
                  </>
                ) : (
                  "ADD TO CART"
                )}
              </button>
            </div>

            {/* Description & Detailed Specs */}
            <div className={styles.descriptionSection}>
              <span className={styles.optionLabel}>Description</span>
              <p className={styles.description}>{product.description}</p>
              
              <ul className={styles.detailsList}>
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Extra trust info */}
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "24px", color: "rgba(18,18,18,0.5)", fontSize: "1.2rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>DELIVERY:</strong> Free secure US shipping. Worldwide shipping calculated at checkout.</p>
              <p><strong>RETURNS:</strong> As these are rare, one-of-a-kind vintage items, returns are accepted within 7 days of delivery for store credit or refund. Please review measurements carefully.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
