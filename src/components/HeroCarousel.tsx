"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroCarousel.module.css";

const carouselImages = [
  "/images/hero_carousel_1.jpg",
  "/images/hero_carousel_2.jpg",
  "/images/hero_carousel_3.jpg",
  "/images/hero_carousel_4.jpg",
  "/images/hero_carousel_5.jpg",
];

export const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Background Images */}
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ""}`}
        >
          <Image
            src={src}
            alt={`Gracious Collections Hero Curation ${index + 1}`}
            fill
            priority={index === 0}
            className={styles.carouselImage}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Left/Right Navigation Arrows */}
      <button
        onClick={handlePrev}
        className={`${styles.navBtn} ${styles.prevBtn}`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>
      <button
        onClick={handleNext}
        className={`${styles.navBtn} ${styles.nextBtn}`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      {/* Dot Indicators */}
      <div className={styles.dotsContainer}>
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
