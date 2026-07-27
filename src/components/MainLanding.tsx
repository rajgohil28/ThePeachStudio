"use client";

import React, { useState } from "react";
import { getAssetPath } from "@/utils/paths";
import styles from "./MainLanding.module.css";

interface MainLandingProps {
  onStartConversation: () => void;
}

// Existing Assets
const THREE_CLOVER_ICON_URL = getAssetPath("/images/landing/three-clover.svg");

// Brand logo — true vectors recoloured to the primary peach (#D47059). The
// icon is the peach fruit; the light variants are for the dark footer.
const PEACH_ICON_URL = getAssetPath("/images/landing/peach-icon.svg");
const PEACH_WORDMARK_URL = getAssetPath("/images/landing/peach-wordmark.svg");
const PEACH_ICON_LIGHT_URL = getAssetPath("/images/landing/peach-icon-light.svg");
const PEACH_WORDMARK_LIGHT_URL = getAssetPath("/images/landing/peach-wordmark-light.svg");
const LINKEDIN_BG_URL = getAssetPath("/images/landing/linkedin-bg.svg");
const LINKEDIN_VEC_URL = getAssetPath("/images/landing/linkedin-vec.svg");
const INSTAGRAM_BG_URL = getAssetPath("/images/landing/instagram-bg.svg");
const INSTAGRAM_VEC_URL = getAssetPath("/images/landing/instagram-vec.svg");

// Newly Downloaded High-Fidelity Assets
const MAITREYEE_HEADSHOT = getAssetPath("/images/landing/maitreyee-headshot.png");
const POORVA_HEADSHOT = getAssetPath("/images/landing/poorva-headshot.png");
const FOOTER_BG = getAssetPath("/images/landing/footer-bg.png");
const HERO_FLOATING_1 = getAssetPath("/images/landing/hero-floating-1.jpg");
const HERO_FLOATING_2 = getAssetPath("/images/landing/hero-floating-2.jpg");
const HERO_FLOATING_3 = getAssetPath("/images/landing/hero-floating-3.jpg");
const HERO_FLOATING_4 = getAssetPath("/images/landing/hero-floating-4.jpg");
const HERO_FLOATING_5 = getAssetPath("/images/landing/hero-floating-5.jpg");
const HERO_FLOATING_6 = getAssetPath("/images/landing/hero-floating-6.jpg");
const HERO_FLOATING_7 = getAssetPath("/images/landing/hero-floating-7.jpg");
const HERO_FLOATING_8 = getAssetPath("/images/landing/hero-floating-8.jpg");
const HERO_ORNAMENT = getAssetPath("/images/landing/hero-ornament.svg");
const INTRO_SEP_1 = getAssetPath("/images/landing/intro-sep-1.svg");
const INTRO_SEP_2 = getAssetPath("/images/landing/intro-sep-2.svg");
const QUOTE_ICON = getAssetPath("/images/landing/quote-icon.svg");
const PROCESS_DECOR_1 = getAssetPath("/images/landing/process-decor-1.svg");
const PROCESS_DECOR_2 = getAssetPath("/images/landing/process-decor-2.svg");
const PROCESS_DECOR_3 = getAssetPath("/images/landing/process-decor-3.svg");
const PROCESS_DECOR_4 = getAssetPath("/images/landing/process-decor-4.svg");

const PORTFOLIO_PROJECTS = [
  { id: "sealink", title: "sealink", image: HERO_FLOATING_1 },
  { id: "soul-of-konkan", title: "the soul of konkan", image: HERO_FLOATING_5 },
  { id: "strategy-meets-space", title: "where strategy meets space", image: HERO_FLOATING_8 },
  { id: "mumbai-in-pixels", title: "mumbai in pixels", image: HERO_FLOATING_2 },
  { id: "elephant-mandala", title: "the elephant mandala", image: HERO_FLOATING_6 },
  { id: "palm-arc", title: "under the palm arc", image: HERO_FLOATING_3 },
  { id: "bloomspace", title: "bloomspace", image: HERO_FLOATING_2 },
  { id: "city-threshold", title: "a city of every threshold", image: HERO_FLOATING_7 },
  { id: "strings-of-sound", title: "strings of sound made visible", image: HERO_FLOATING_1 },
  { id: "portrait-landscape", title: "a portrait of landscape", image: HERO_FLOATING_3 },
  { id: "maa-saraswati", title: "maa saraswati", image: HERO_FLOATING_4 },
  { id: "birdsong-october", title: "birdsong in october", image: HERO_FLOATING_3 },
  { id: "many-stories", title: "many stories, one city!", image: HERO_FLOATING_6 },
  { id: "tree-of-life", title: "tree of life", image: HERO_FLOATING_7 },
  { id: "rituals-adornment", title: "rituals of adornment", image: HERO_FLOATING_4 },
];

const TESTIMONIALS = [
  {
    id: "sarah-jenkins",
    quote: "The Peach Studio completely transformed our retail space. They understood our vision before we even fully articulated it. Absolute magic.",
    author: "Sarah Jenkins",
    role: "Founder, Oritso"
  },
  {
    id: "marcus-chen",
    quote: "Working with them felt like a true collaboration. They brought both strategic layout thinking and exquisite artistic detail to our office project.",
    author: "Marcus Chen",
    role: "Creative Director, JLL"
  },
  {
    id: "elena-rostova",
    quote: "Youthful energy but incredibly mature execution. They delivered a massive, complex wall installation on schedule and with breathtaking beauty.",
    author: "Elena Rostova",
    role: "Experience Officer, JSW"
  }
];

interface Project {
  id: string;
  title: string;
  image: string;
}

export default function MainLanding({ onStartConversation }: MainLandingProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const hoveredProjectRef = React.useRef<Project | null>(null);

  React.useEffect(() => {
    hoveredProjectRef.current = hoveredProject;
  }, [hoveredProject]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || window.innerWidth > 1024) return;

      const rows = document.querySelectorAll(`[data-project-id]`);
      let closestProject: string | null = null;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      rows.forEach((row) => {
        const rect = row.getBoundingClientRect();
        const rectCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - rectCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestProject = row.getAttribute("data-project-id");
        }
      });

      if (closestProject) {
        const projectObj = PORTFOLIO_PROJECTS.find((p) => p.id === closestProject);
        if (projectObj && (!hoveredProjectRef.current || hoveredProjectRef.current.id !== projectObj.id)) {
          setHoveredProject(projectObj);
        }
      }
    };

    // Initialize on load and resize
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className={styles.landingContainer}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          {/* Floating Polaroids Layout */}
          <div className={styles.floatingGrid}>
            {/* Card 1 */}
            <div className={`${styles.polaroidCard} ${styles.card1}`}>
              <img src={HERO_FLOATING_1} alt="Peach Studio Creation" className={styles.polaroidImg} />
            </div>
            {/* Card 2 */}
            <div className={`${styles.polaroidCard} ${styles.card2}`}>
              <img src={HERO_FLOATING_2} alt="Studio Sketchwork" className={styles.polaroidImg} />
            </div>
            {/* Card 3 */}
            <div className={`${styles.polaroidCard} ${styles.card3}`}>
              <img src={HERO_FLOATING_3} alt="Completed Mural Detail" className={styles.polaroidImg} />
            </div>
            {/* Card 4 */}
            <div className={`${styles.polaroidCard} ${styles.card4}`}>
              <img src={HERO_FLOATING_4} alt="Exhibition Artpiece" className={styles.polaroidImg} />
            </div>
            {/* Card 5 */}
            <div className={`${styles.polaroidCard} ${styles.card5}`}>
              <img src={HERO_FLOATING_5} alt="Traditional Motif Sketch" className={styles.polaroidImg} />
            </div>
            {/* Card 6 */}
            <div className={`${styles.polaroidCard} ${styles.card6}`}>
              <img src={HERO_FLOATING_6} alt="Vibrant Wall Art" className={styles.polaroidImg} />
            </div>
            {/* Card 7 */}
            <div className={`${styles.polaroidCard} ${styles.card7}`}>
              <img src={HERO_FLOATING_7} alt="Studio Showcase Detail" className={styles.polaroidImg} />
            </div>
            {/* Card 8 */}
            <div className={`${styles.polaroidCard} ${styles.card8}`}>
              <img src={HERO_FLOATING_8} alt="Aesthetic Space Installation" className={styles.polaroidImg} />
            </div>
          </div>

          {/* Central Core Logo & Headers */}
          <div className={styles.heroCore}>
            <div className={styles.logoAndMark}>
              <img src={PEACH_ICON_URL} alt="" className={styles.peachIcon} />
              <img src={PEACH_WORDMARK_URL} alt="The Peach Studio" className={styles.peachWordmark} />
            </div>

            <h1 className={styles.heroHeading}>
              meaningful <span className={styles.italicSerif}>art...</span>
              <br />
              <span className={styles.italicSerif}>memorable</span> spaces!
            </h1>

            <div className={styles.heroOrnamentRow}>
              <img src={HERO_ORNAMENT} alt="" className={styles.heroOrnament} />
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 VISION TAGLINE SECTION */}
      <section className={styles.visionSection}>
        <div className={styles.visionBanner}>
          <p className={styles.visionText}>
            <span className={styles.boldPeach}>The Peach Studio</span> brings together illustration, murals, installations, and spatial design to create environments that{" "}
            {/* Breaks onto its own line at tablet and phone widths */}
            <span className={styles.visionWords}>
              <span className={styles.italicPlay}>inspire</span>
              <img src={INTRO_SEP_1} alt="" className={styles.visionSeparator} />
              <span className={styles.italicPlay}>connect</span>
              <img src={INTRO_SEP_2} alt="" className={styles.visionSeparator} />
              <span className={styles.italicPlay}>delight</span>
            </span>
          </p>
        </div>
      </section>

      {/* 2. CURATED WORKS SECTION */}
      <section className={styles.curatedSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.curatedHeading}>
            curated <span className={styles.curatedEmphasis}>works</span>
          </h2>
        </div>

        <div className={styles.worksList}>
          {/* Vertical items layout */}
          {PORTFOLIO_PROJECTS.map((project) => {
            const isHovered = hoveredProject?.id === project.id;
            return (
              <div 
                key={project.id} 
                data-project-id={project.id}
                className={`${styles.projectRow} ${isHovered ? styles.activeRow : ""}`}
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.innerWidth > 1024) {
                    setHoveredProject(project);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== "undefined" && window.innerWidth > 1024) {
                    setHoveredProject(null);
                  }
                }}
              >
                {/* Hardware-accelerated background image layer */}
                <div 
                  className={styles.projectRowBgImg}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 27, 46, 0.85) 15%, rgba(0, 27, 46, 0.25) 85%), url(${project.image})`,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "scale(1.03)" : "scale(1)"
                  }}
                />

                <div className={styles.projectRowInner}>
                  {/* The "View Project" link is always in the flow and only
                      fades in, so the title keeps the exact same X,Y between
                      the resting and hover states. */}
                  <div className={styles.projectTitleContainer}>
                    <span className={styles.projectTitle}>{project.title}</span>
                    <span
                      className={`${styles.viewProjectLink} ${isHovered ? styles.viewProjectLinkVisible : ""}`}
                      aria-hidden={!isHovered}
                    >
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className={styles.processContainer}>
          <div className={styles.processHeader}>
            <span className={styles.processSubtitle}>our process</span>
            <h2 className={styles.processTitle}>
              from sketch <span className={styles.processEmphasis}>to space</span>
            </h2>
          </div>

          {/* Staggered process steps layout */}
          <div className={styles.processGrid}>
            {/* Step 1 */}
            <div className={styles.processStep}>
              <span className={styles.processNumber}>01</span>
              <div className={styles.processContentBox}>
                <div className={styles.stepTitleRow}>
                  <img src={PROCESS_DECOR_1} alt="" className={styles.stepDecorIcon} />
                  <h3 className={styles.stepTitle}>Start with the Space</h3>
                </div>
                <p className={styles.stepDescription}>
                  We visit, listen, and gather everything needed before ideas begin.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.processStep}>
              <span className={styles.processNumber}>02</span>
              <div className={styles.processContentBox}>
                <div className={styles.stepTitleRow}>
                  <img src={PROCESS_DECOR_2} alt="" className={styles.stepDecorIcon} />
                  <h3 className={styles.stepTitle}>Shape the Idea</h3>
                </div>
                <p className={styles.stepDescription}>
                  Through references and design exploration, the direction starts to emerge.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.processStep}>
              <span className={styles.processNumber}>03</span>
              <div className={styles.processContentBox}>
                <div className={styles.stepTitleRow}>
                  <img src={PROCESS_DECOR_4} alt="" className={styles.stepDecorIcon} />
                  <h3 className={styles.stepTitle}>See it in Place</h3>
                </div>
                <p className={styles.stepDescription}>
                  The design is mapped into the space so every detail feels right.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className={styles.processStep}>
              <span className={styles.processNumber}>04</span>
              <div className={styles.processContentBox}>
                <div className={styles.stepTitleRow}>
                  <img src={PROCESS_DECOR_3} alt="" className={styles.stepDecorIcon} />
                  <h3 className={styles.stepTitle}>Bring it to Life</h3>
                </div>
                <p className={styles.stepDescription}>
                  With everything approved, we create, install, and deliver the final work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OFFERINGS SECTION */}
      <section className={styles.offeringsSection}>
        <div className={styles.offeringsContainer}>
          {/* Offerings Header Column */}
          <div className={styles.offeringsTitleCol}>
            <img src={THREE_CLOVER_ICON_URL} alt="" className={styles.offeringsIcon} />
            <span className={styles.offeringsSubtitle}>what we do</span>
            <h2 className={styles.offeringsTitle}>
              our
              <span className={styles.offeringsEmphasis}>offerings</span>
            </h2>
          </div>

          <div className={styles.verticalDivider} />

          {/* Custom Services List */}
          <div className={styles.offeringsCol}>
            <h3 className={styles.offeringsHeader}>custom services</h3>
            <ul className={styles.offeringsList}>
              <li>wall painting</li>
              <li>installations</li>
              <li>canvas painting</li>
              <li>space design</li>
              <li>storytelling</li>
            </ul>
          </div>

          <div className={styles.verticalDivider} />

          {/* Products List */}
          <div className={styles.offeringsCol}>
            <h3 className={styles.offeringsHeader}>products</h3>
            <ul className={styles.offeringsList}>
              <li>wallpapers</li>
              <li>paintings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <span className={styles.testimonialsSubtitle}>dont just take our word for it</span>
          <h2 className={styles.testimonialsTitle}>
            client <span className={styles.testimonialsEmphasis}>testimonials</span>
          </h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.quoteIconBox}>
                <img src={QUOTE_ICON} alt="" className={styles.quoteIcon} />
              </div>
              <p className={styles.quoteText}>&quot;{t.quote}&quot;</p>
              <div className={styles.authorDivider} />
              <div className={styles.authorBox}>
                <h4 className={styles.authorName}>{t.author}</h4>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PEACHY TEAM SECTION */}
      <section className={styles.teamSection}>
        <div className={styles.teamHeaderRow}>
          <div className={styles.teamTitleBox}>
            <span className={styles.teamSubtitle}>small team, big stories</span>
            <h2 className={styles.teamTitle}>
              the peachy <span className={styles.teamEmphasis}>team</span>
            </h2>
          </div>
          <p className={styles.teamSubDesc}>
            Together, they blend art, design, strategy, and storytelling to create immersive, joyful and meaningful environments that inspire connection and leave a lasting impression.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {/* Maitreyee Profile */}
          <div className={styles.teamProfile}>
            <div className={styles.headshotContainer}>
              <img
                src={MAITREYEE_HEADSHOT}
                alt="Maitreyee Nilawar"
                className={`${styles.headshotImg} ${styles.headshotMaitreyee}`}
              />
            </div>
            <div className={styles.profileBio}>
              <h3 className={styles.profileName}>Maitreyee Nilawar</h3>
              <span className={styles.profileRole}>Director of visual delight</span>
              <p className={styles.profileDescription}>
                Maitreyee, an alumna of Sir J.J. School of Art and IIT Bombay, is a visual artist with a keen eye for detail and aesthetics. She specializes in transforming spaces through art and design, bringing beauty, character, and emotional depth to every project.
              </p>
            </div>
          </div>

          {/* Poorva Profile */}
          <div className={styles.teamProfile}>
            <div className={styles.headshotContainer}>
              <img
                src={POORVA_HEADSHOT}
                alt="Poorva Kelkar"
                className={`${styles.headshotImg} ${styles.headshotPoorva}`}
              />
            </div>
            <div className={styles.profileBio}>
              <h3 className={styles.profileName}>Poorva Kelkar</h3>
              <span className={styles.profileRole}>Director of thoughtful mischief</span>
              <p className={styles.profileDescription}>
                Poorva, an architect, product designer, and marketing specialist, is an alumna of NID and IIM Ahmedabad. She combines strategic thinking with creative exploration, helping shape the studio&apos;s vision while creating experiences that bring people, stories, and spaces together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA / LET'S CREATE SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Let’s create a space that <span className={styles.ctaEmphasis}>speaks</span>
          </h2>
          <p className={styles.ctaDescription}>
            Every meaningful project begins with a simple conversation.<br />
            We’d love if you share your vision with us.
          </p>
          <button className={styles.ctaButton} onClick={onStartConversation}>
            Start a Conversation
          </button>
        </div>
      </section>

      {/* 8. HIGH-FIDELITY FOOTER */}
      <footer className={styles.footerSection}>
        {/* Main background container with architectural backdrop overlay */}
        <div className={styles.footerBgBox}>
          <img src={FOOTER_BG} alt="" className={styles.footerBgImg} />
        </div>
        
        <div className={styles.footerContainer}>
          {/* Inner Grid */}
          <div className={styles.footerMainGrid}>
            {/* Social Column */}
            <div className={styles.socialCol}>
              <div className={styles.socialIconsRow}>
                <a href="https://www.linkedin.com/company/the-peach-studio-in/about/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <img src={LINKEDIN_BG_URL} alt="" className={styles.socialIconBg} />
                  <img src={LINKEDIN_VEC_URL} alt="LinkedIn" className={styles.socialIconVec} />
                </a>
                <a href="https://www.instagram.com/thepeachstudio.in/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <img src={INSTAGRAM_BG_URL} alt="" className={styles.socialIconBg} />
                  <img src={INSTAGRAM_VEC_URL} alt="Instagram" className={styles.socialIconVec} />
                </a>
              </div>
            </div>

            {/* Wordmark Column */}
            <div className={styles.wordmarkCol}>
              <img src={PEACH_ICON_LIGHT_URL} alt="" className={styles.footerWordmarkIcon} />
              <img src={PEACH_WORDMARK_LIGHT_URL} alt="The Peach Studio" className={styles.footerWordmark} />
            </div>

            {/* Contact Column */}
            <div className={styles.contactCol}>
              <span className={styles.contactHeader}>Let’s get in touch</span>
              <div className={styles.contactDetails}>
                <a href="mailto:poorva.kelkar@gmail.com" className={styles.contactLink}>
                  poorva.kelkar@gmail.com
                </a>
                <a href="tel:+919217689001" className={styles.contactLink}>
                  +91 92176 89001
                </a>
              </div>
            </div>
          </div>

          {/* Copyright sits directly below the main row — no separator rule */}
          <div className={styles.metadataRow}>
            <span className={styles.copyrightMark} aria-hidden="true">
              ©
            </span>
            <span>2026</span>
            <div className={styles.metadataLabelSep} />
            <span>The Peach Studio</span>
            <div className={styles.metadataLabelSep} />
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
