"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShieldCheck, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./CartDrawer.module.css";

export const CartDrawer: React.FC = () => {
  const { isOpen, closeCart, cartItems, cartTotal, updateQuantity, removeItem } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            image: item.product.image,
            size: item.selectedSize,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Failed to initiate checkout");
      }

      const { url } = await response.json();
      // Redirect to Stripe Checkout page
      window.location.href = url;
    } catch (err: any) {
      console.error("Checkout error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
      setIsCheckingOut(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.header}>
          <h2>YOUR CART</h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className={styles.body}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is currently empty.</p>
              <button className="btn" style={{ marginTop: "24px" }} onClick={closeCart}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className={styles.itemsList}>
              {cartItems.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className={styles.cartItem}>
                  {/* Image container */}
                  <div className={styles.itemImage}>
                    <Image 
                      src={item.product.image} 
                      alt={item.product.name}
                      width={80}
                      height={90}
                      className={styles.image}
                    />
                  </div>

                  {/* Item info */}
                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.itemName}>{item.product.name}</h4>
                      <button 
                        className={styles.removeBtn} 
                        onClick={() => removeItem(item.product.id, item.selectedSize)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                    <p className={styles.itemMeta}>Size: {item.selectedSize}</p>

                    <div className={styles.itemFooter}>
                      {/* Quantity selector */}
                      <div className={styles.qtySelector}>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <span className={styles.itemPrice}>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span>SUBTOTAL</span>
              <span className={styles.totalPrice}>${cartTotal.toFixed(2)}</span>
            </div>
            
            <p className={styles.taxNotice}>Shipping & taxes calculated at checkout.</p>

            {error && <p className={styles.errorMsg}>{error}</p>}

            <button 
              className="btn btn-full btn-checkout" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  REDIRECTING TO STRIPE...
                </>
              ) : (
                "PROCEED TO CHECKOUT"
              )}
            </button>

            <div className={styles.securityNotice}>
              <ShieldCheck size={16} className={styles.shieldIcon} />
              <span>Secure checkout powered by Stripe</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartDrawer;
