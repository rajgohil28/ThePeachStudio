"use client";

import React from "react";
import { getAssetPath } from "@/utils/paths";
import styles from "./MainLanding.module.css";

interface MainLandingProps {
  onStartConversation: () => void;
}

const PINK_FLOWER_URL = getAssetPath("/images/landing/pink-flower.png");
const FOOTER_LOGO_URL = getAssetPath("/images/landing/footer-logo.svg");
const CENTER_ICON_URL = getAssetPath("/images/landing/center-icon.svg");
const LINKEDIN_BG_URL = getAssetPath("/images/landing/linkedin-bg.svg");
const LINKEDIN_VEC_URL = getAssetPath("/images/landing/linkedin-vec.svg");
const INSTAGRAM_BG_URL = getAssetPath("/images/landing/instagram-bg.svg");
const INSTAGRAM_VEC_URL = getAssetPath("/images/landing/instagram-vec.svg");

export default function MainLanding({ onStartConversation }: MainLandingProps) {
  return (
    <div className={styles.landingContainer}>
      {/* Pink Flower Left Decorative Frame with precise Figma Crop (Anchored at absolute bottom) */}
      <div className={styles.flowerLeftContainer}>
        <div className={styles.cropBox}>
          <img src={PINK_FLOWER_URL} alt="Watercolor Pink Flower Left" className={styles.flowerLeftImg} />
        </div>
      </div>

      {/* Pink Flower Right Decorative Frame with precise Figma Crop */}
      <div className={styles.flowerRightContainer}>
        <div className={styles.rotateContainer}>
          <div className={styles.flowerRightBox}>
            <div className={styles.cropBox}>
              <img src={PINK_FLOWER_URL} alt="Watercolor Pink Flower Right" className={styles.flowerRightImg} />
            </div>
          </div>
        </div>
      </div>

      {/* Central Hero Column */}
      <main className={styles.mainContent}>
        {/* Star brand logo mark */}
        <div className={styles.centerIcon}>
          <img src={CENTER_ICON_URL} alt="Peach Studio Mark" className={styles.centerIconImg} />
        </div>

        {/* Coming Soon Badge */}
        <span className={styles.comingSoonBadge}>Coming Soon</span>

        {/* Main Heading Statement */}
        <h1 className={styles.tagline}>
          We’re building our story<span className={styles.taglineEmphasis}>...</span>
        </h1>

        {/* Supporting Descriptions */}
        <p className={styles.description}>
          Our website is taking shape behind the scenes
        </p>

        <p className={styles.subDescription}>
          In the meantime, we&apos;d love to hear about your project...
        </p>

        {/* Primary Action Button */}
        <button className={styles.ctaButton} onClick={onStartConversation}>
          Start a Conversation
        </button>
      </main>

      {/* Structured Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          {/* Social circular links */}
          <div className={styles.socials}>
            <a 
              href="https://www.linkedin.com/company/the-peach-studio-in/about/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <img src={LINKEDIN_BG_URL} alt="" className={styles.socialBg} />
              <img src={LINKEDIN_VEC_URL} alt="LinkedIn Logo" className={styles.socialIcon} />
            </a>

            <a 
              href="https://www.instagram.com/thepeachstudio.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram Profile"
            >
              <img src={INSTAGRAM_BG_URL} alt="" className={styles.socialBg} />
              <img src={INSTAGRAM_VEC_URL} alt="Instagram Logo" className={styles.socialIcon} />
            </a>
          </div>

          {/* Centered Logo Wordmark */}
          <img src={FOOTER_LOGO_URL} alt="the peach studio" className={styles.footerLogo} />

          {/* Direct contact items */}
          <div className={styles.contacts}>
            <span className={styles.contactLabel}>Let’s get in touch</span>
            <a href="mailto:poorva.kelkar@gmail.com" className={styles.contactEmail}>
              poorva.kelkar@gmail.com
            </a>
            <a href="tel:+919217689001" className={styles.contactPhone}>
              +91 92176 89001
            </a>
          </div>
        </div>

        {/* Micro Copyright Row */}
        <div className={styles.copyrightRow}>
          <span>© 2026 The Peach Studio | All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
