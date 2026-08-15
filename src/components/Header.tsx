"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, User, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { openCart, cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Main Header Container */}
      <div className={styles.mainNav}>
        <div className="container">
          <div className={styles.navWrapper}>

            {/* Mobile Menu Toggle */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Empty space for flex alignment on desktop */}
            <div className={styles.flexLeft}></div>

            {/* Centered Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <h1>GRACIOUS COLLECTIONS</h1>
                <p>FEMININE STYLE - VINTAGE INSPIRED</p>
              </Link>
            </div>

            {/* Right Action Icons */}
            <div className={styles.actions}>
              <button aria-label="Search" className={styles.actionBtn}>
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button aria-label="Account" className={styles.actionBtn + " " + styles.desktopOnly}>
                <User size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label="Cart"
                className={styles.cartBtn}
                onClick={openCart}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className={styles.desktopNavigation}>
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>HOME</Link>
            </li>

            {/* SHOP Dropdown */}
            <li
              className={styles.dropdownParent}
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <span className={styles.navLink}>
                SHOP <ChevronDown size={12} className={styles.chevron} />
              </span>
              {shopOpen && (
                <ul className={styles.dropdownMenu}>
                  <li><Link href="/collections/new-in">NEW IN</Link></li>
                  <li><Link href="/collections/lingerie">LINGERIE</Link></li>
                  <li><Link href="/collections/vintage-bridal">VINTAGE BRIDAL</Link></li>
                  <li><Link href="/collections/veils-accessories">VEILS & ACCESSORIES</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/#contact" className={styles.navLink}>CONTACT</Link>
            </li>

            <li>
              <Link href="/blogs/journal" className={styles.navLink}>JOURNAL</Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            </li>

            {/* SHOP Section */}
            <li>
              <span className={styles.mobileSectionTitle}>SHOP</span>
              <ul className={styles.mobileSubList}>
                <li><Link href="/collections/new-in" onClick={() => setMobileMenuOpen(false)}>NEW IN</Link></li>
                <li><Link href="/collections/lingerie" onClick={() => setMobileMenuOpen(false)}>LINGERIE</Link></li>
                <li><Link href="/collections/vintage-bridal" onClick={() => setMobileMenuOpen(false)}>VINTAGE BRIDAL</Link></li>
                <li><Link href="/collections/veils-accessories" onClick={() => setMobileMenuOpen(false)}>VEILS & ACCESSORIES</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            </li>

            <li>
              <Link href="/blogs/journal" onClick={() => setMobileMenuOpen(false)}>JOURNAL</Link>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
