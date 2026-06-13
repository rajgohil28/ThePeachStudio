"use client";

import React from "react";
import styles from "./MainLanding.module.css";

interface MainLandingProps {
  onStartConversation: () => void;
}

const PINK_FLOWER_URL = "https://www.figma.com/api/mcp/asset/4f9b4686-af74-4281-9372-38b4b2d48867";
const FOOTER_LOGO_URL = "https://www.figma.com/api/mcp/asset/7467a2ea-7e21-4de4-9542-c0194fb956ac";
const CENTER_ICON_URL = "https://www.figma.com/api/mcp/asset/018d5e84-760a-41f1-9271-2b8ae09a6a29";

// Social icons background & vectors
const LINKEDIN_BG_URL = "https://www.figma.com/api/mcp/asset/75781258-a543-4ad4-a978-50a6ae6e0acf";
const LINKEDIN_VEC_URL = "https://www.figma.com/api/mcp/asset/6df98136-25af-4f35-bea9-ea0c0f77290a";
const INSTAGRAM_BG_URL = "https://www.figma.com/api/mcp/asset/3ae4db19-4ab0-4176-b596-0d55f72b4efb";
const INSTAGRAM_VEC_URL = "https://www.figma.com/api/mcp/asset/dca1cf5f-c35a-4be6-a033-6865b3f4adb1";

export default function MainLanding({ onStartConversation }: MainLandingProps) {
  return (
    <div className={styles.landingContainer}>
      {/* Pink Flower Left Decorative Frame with precise Figma Crop */}
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
          In the meantime, we'd love to hear about your project...
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
              <img src={LINKEDIN_BG_URL} alt="LinkedIn Background Circle" className={styles.socialBg} />
              <img src={LINKEDIN_VEC_URL} alt="LinkedIn Logo Vector" className={styles.socialIcon} />
            </a>

            <a 
              href="https://www.instagram.com/thepeachstudioofficial/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram Profile"
            >
              <img src={INSTAGRAM_BG_URL} alt="Instagram Background Circle" className={styles.socialBg} />
              <img src={INSTAGRAM_VEC_URL} alt="Instagram Logo Vector" className={styles.socialIcon} />
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
