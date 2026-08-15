import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import HeroCarousel from "@/components/HeroCarousel";
import styles from "./Home.module.css";

export default function Home() {
  // Grab the first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* 1. Hero Banner */}
      <section className={styles.hero}>
        <HeroCarousel />
        <div className={styles.heroContent}>
          <p className="fade-in">Curated Antique Styles & Heirloom Textiles</p>
          <h1 className="fade-in">A Devotion to Timeless Grace</h1>
          <a href="#featured-pieces" className="btn fade-in">
            SHOP
          </a>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className={`${styles.storySection} section-padding`}>
        <div className="container">
          <div className={styles.storyContent}>
            <h2>Real Beauty Begins Within</h2>
            <p style={{ marginTop: "20px" }}>
              At Gracious Collections, we curate vintage gowns, heirloom garments, and traditional treasures that honor your inner radiance and the qualities that make a person beautiful: Love, Devotion, Purity, Depth, and Compassion. Inspired by a legacy of devotion and traditional grace, we bring you pieces that speak of history, presence, and timeless purity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Collection Grid */}
      <section id="featured-pieces" className={`${styles.featuredSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p>Shop Our Pieces</p>
            <h2>We Currently Love</h2>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
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
          <div className="text-center" style={{ marginTop: "48px" }}>
            <Link href="/collections/new-in" className="btn btn-outline">
              VIEW ALL ARCHIVE
            </Link>
          </div>
        </div>
      </section>

      {/* Showroom Banner */}
      <section className={styles.showroomBanner}>
        <div className={styles.showroomImageWrapper}>
          <Image
            src="/images/showroom.jpg"
            alt="Gracious Collections Showroom"
            fill
            sizes="100vw"
            className={styles.showroomImage}
          />
          <div className={styles.showroomOverlay}></div>
        </div>
        <div className={styles.showroomContent}>
          <h2 className="fade-in">Consignment</h2>
          <p className="fade-in">Buy and sell your pre-loved vintage dresses with us</p>
          <Link href="/pages/consign" className="btn fade-in">
            INQUIRE
          </Link>
        </div>
      </section>

      {/* 4. Promotional Services Banners */}
      <section className={`${styles.promoSection} section-padding`}>
        <div className="container">
          <div className={styles.promoGrid}>
            <div className={styles.promoCol}>
              <h3>Sell With Us</h3>
              <p>Consign your heirloom vintage gowns, dresses, antique lace veil, or luxury nightwear with us.</p>
              <Link href="/pages/consign" className={styles.promoLink}>
                Learn More
              </Link>
            </div>
            <div className={styles.promoCol}>
              <h3>Studio Appointments</h3>
              <p>Visit our private, warm-lit studio in Asheville, North Carolina for a magical, dedicated fitting appointment.</p>
              <Link href="/pages/appointments" className={styles.promoLink}>
                Book Appointment
              </Link>
            </div>
            <div className={styles.promoCol}>
              <h3>Vintage Concierge</h3>
              <p>Looking for a specific era or garment? Let our specialists source it from our global network.</p>
              <Link href="/pages/concierge" className={styles.promoLink}>
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. From the Journal */}
      <section className={`${styles.journalSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p>Stories & Care</p>
            <h2>From the Journal</h2>
          </div>
          <div className={styles.journalGrid}>

            <Link href="/blogs/journal#restoring-silk" className={styles.journalCard}>
              <div className={styles.journalImageWrapper}>
                <Image
                  src="/images/dress_1.png"
                  alt="Restoring 1940s Silk"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.journalImg}
                />
              </div>
              <div className={styles.journalContent}>
                <span className={styles.journalMeta}>Archive Notes • Aug 12, 2026</span>
                <h3>Restoring Liquid Silk: Care of 1940s Gowns</h3>
                <p className={styles.journalExcerpt}>
                  The preservation and delicate restoration of mid-century liquid silk satin. Discover our tips for hand-cleaning...
                </p>
              </div>
            </Link>

            <Link href="/blogs/journal#victorian-collars" className={styles.journalCard}>
              <div className={styles.journalImageWrapper}>
                <Image
                  src="/images/dress_3.jpg"
                  alt="History of the Victorian High Collar"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.journalImg}
                />
              </div>
              <div className={styles.journalContent}>
                <span className={styles.journalMeta}>Fashion History • Aug 08, 2026</span>
                <h3>Lace & Decorum: The Victorian High Collar Gown</h3>
                <p className={styles.journalExcerpt}>
                  An exploration of high-collared silhouettes from the late 19th century and how they continue to inspire modern brides...
                </p>
              </div>
            </Link>

            <Link href="/blogs/journal#veil-selection" className={styles.journalCard}>
              <div className={styles.journalImageWrapper}>
                <Image
                  src="/images/veil_1.png"
                  alt="Cathedral Veil Styling"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.journalImg}
                />
              </div>
              <div className={styles.journalContent}>
                <span className={styles.journalMeta}>Bridal Guide • Aug 01, 2026</span>
                <h3>Choosing the Right Antique Veil for Your Dress</h3>
                <p className={styles.journalExcerpt}>
                  Cathedral, chapel, or fingertip? We match historic lace styles with modern wedding dress silhouettes...
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
