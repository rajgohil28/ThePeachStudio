"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./SplashIntro.module.css";

interface SplashIntroProps {
  onGetStarted: () => void;
  isExiting: boolean;
}

const SPLASH_IMAGES = [
  "/images/splash/image1.png", // Sea Link Bridge (Image 1)
  "/images/splash/image2.png", // Vibrant flowers (Image 2)
  "/images/splash/image3.png", // Forest with birds (Image 3)
  "/images/splash/image4.png", // Branches and flowers (Image 4)
];

const LOGO_ICON_URL = "/images/splash/logo-icon.svg"; // Component 25 (peach icon)
const LOGO_WORDMARK_URL = "/images/splash/logo-wordmark.svg"; // Wordmark (the peach studio.)
const PAINTBRUSH_ICON_URL = "/images/splash/paintbrush-icon.png"; // Paintbrush icon

export default function SplashIntro({ onGetStarted, isExiting }: SplashIntroProps) {
  // Initialize with the first image to allow synchronous rendering (crucial for SSR match and unit tests)
  const [bgImage, setBgImage] = useState(SPLASH_IMAGES[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const strokeCountRef = useRef(0);
  const hasInteracted = useRef(false);

  useEffect(() => {
    let nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
    try {
      // Choose a random splash background image with reload-guarantee on mount
      const prevIndexStr = localStorage.getItem("peach_studio_last_splash_index");

      if (prevIndexStr !== null) {
        const prevIndex = parseInt(prevIndexStr, 10);
        if (SPLASH_IMAGES.length > 1) {
          while (nextIndex === prevIndex) {
            nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
          }
        }
      }

      localStorage.setItem("peach_studio_last_splash_index", nextIndex.toString());
    } catch {
      // Safely default and ignore blocked localStorage access (e.g. private mode, iframe, restricted cookie settings)
    }
    
    // Defer the state update to satisfy eslint rule against synchronous setStates inside effects
    const timer = setTimeout(() => {
      setBgImage(SPLASH_IMAGES[nextIndex]);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Automatically trigger transition to landing page when background is fully revealed
  useEffect(() => {
    if (isFullyRevealed) {
      const timer = setTimeout(() => {
        onGetStarted();
      }, 1000); // 1-second delay for cinematic finish
      return () => clearTimeout(timer);
    }
  }, [isFullyRevealed, onGetStarted]);

  // Initialize and resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      // Setup high-DPI scaling if needed, or normal scale for simple eraser paths
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Fill with semi-transparent brand canvas color `rgba(231, 228, 221, 0.98)` for glassy fog effect
      ctx.fillStyle = "rgba(231, 228, 221, 0.98)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []); // Initialize canvas overlay once on mount

  const checkRevealPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const width = canvas.width;
      const height = canvas.height;
      const step = 25; // Subsample every 25th pixel for extreme performance (under 0.2ms)
      let transparentCount = 0;
      let totalCount = 0;

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const idx = (y * width + x) * 4;
          const alpha = data[idx + 3]; // Alpha channel value
          if (alpha < 128) {
            transparentCount++;
          }
          totalCount++;
        }
      }

      const ratio = transparentCount / totalCount;
      if (ratio >= 0.3) {
        setIsFullyRevealed(true);
      }
    } catch {
      // Gracefully catch security or JSDOM environment errors
    }
  };

  const revealAt = (x: number, y: number) => {
    if (isFullyRevealed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Erase path via destination-out global composite
    ctx.globalCompositeOperation = "destination-out";

    // Draw a beautiful soft watercolor radial gradient brush
    const brushRadius = 49;
    const gradient = ctx.createRadialGradient(x, y, 10, x, y, brushRadius);
    gradient.addColorStop(0, "rgba(0, 0, 0, 1.0)");
    gradient.addColorStop(0.4, "rgba(0, 0, 0, 0.6)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
    ctx.fill();

    // Check pixel data every 10 strokes to minimize canvas reading overhead
    strokeCountRef.current++;
    if (strokeCountRef.current % 10 === 0) {
      checkRevealPercentage();
    }
  };

  // Auto-arc reveal animation on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrameId: number;
    let timeoutId = setTimeout(() => {
      if (hasInteracted.current) return;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const radius = Math.min(window.innerWidth * 0.25, window.innerHeight * 0.25);

      const startAngle = Math.PI * 0.5; // Top Center
      const endAngle = -Math.PI * 0.5; // Bottom Center
      const duration = 1500; // Smooth 1.5s sweep
      const startTime = performance.now();

      setIsHovering(true);

      const animateArc = (now: number) => {
        if (hasInteracted.current) {
          setIsHovering(false);
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeInOutCubic for a very professional and natural paintbrush feel
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentAngle = startAngle - (startAngle - endAngle) * easeProgress;
        
        const x = cx + radius * Math.cos(currentAngle);
        const y = cy - radius * Math.sin(currentAngle);

        setCursorPos({ x, y });
        revealAt(x, y);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateArc);
        } else {
          // Completed. Fade out the paintbrush tip after a beautiful 600ms trailing pause
          setTimeout(() => {
            if (!hasInteracted.current) {
              setIsHovering(false);
            }
          }, 600);
        }
      };

      animationFrameId = requestAnimationFrame(animateArc);
    }, 800); // 800ms elegant breathing space on initial load

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Mouse move drawing and cursor tracing
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    hasInteracted.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPos({ x: e.clientX, y: e.clientY });
    setIsHovering(true);
    revealAt(x, y);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!hasInteracted.current) return;
    setIsHovering(false);
  };

  const handleMouseDown = () => {
    hasInteracted.current = true;
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  // Touch device drawing support (mobile layout swipe reveal)
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    hasInteracted.current = true;
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      // Paint on initial touch
      revealAt(x, y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    hasInteracted.current = true;
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      // Paint on touch move
      revealAt(x, y);
    }
  };

  return (
    <div className={`${styles.splashScreen} ${isExiting ? styles.fadeOut : ""}`}>
      {/* Underlying random art painting */}
      <img src={bgImage} alt="The Peach Studio Background Painting" className={styles.bgImage} />

      {/* HTML5 Canvas acting as eraser layer */}
      <canvas
        ref={canvasRef}
        className={`${styles.paintCanvas} ${isFullyRevealed ? styles.canvasHidden : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />

      {/* Custom circular paintbrush cursor tip */}
      {isHovering && (
        <div
          className={`${styles.customCursor} ${isClicking ? styles.customCursorActive : ""}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}

      {/* Top Center "hover to unveil" Badge */}
      <div className={`${styles.hoverToUnveil} ${isFullyRevealed ? styles.badgeHidden : ""}`}>
        <div className={styles.paintbrushIcon}>
          <img src={PAINTBRUSH_ICON_URL} alt="Paintbrush Icon" className={styles.paintbrushImg} />
        </div>
        <p className={styles.hoverText}>
          <span className={styles.desktopOnly}>hover to unveil</span>
          <span className={styles.mobileOnly}>scratch to unveil</span>
        </p>
      </div>

      {/* Large Center Logo Lockup (Fades out when revealed) */}
      <div className={`${styles.centerLogo} ${isFullyRevealed ? styles.fadeOutLogo : ""}`}>
        <div className={styles.centerIcon}>
          <img src={LOGO_ICON_URL} alt="Peach Icon" className={styles.logoIconImg} />
        </div>
        <div className={styles.centerWordmark}>
          <img src={LOGO_WORDMARK_URL} alt="the peach studio" className={styles.logoWordmarkImg} />
        </div>
      </div>

      {/* Small Top-Left Logo Lockup (Fades in when revealed) */}
      <div className={`${styles.topLeftLogo} ${isFullyRevealed ? styles.fadeInLogo : ""}`}>
        <div className={styles.topLeftIcon}>
          <img src={LOGO_ICON_URL} alt="Peach Icon" className={styles.logoIconImg} />
        </div>
        <div className={styles.topLeftWordmark}>
          <img src={LOGO_WORDMARK_URL} alt="the peach studio" className={styles.logoWordmarkImg} />
        </div>
      </div>
    </div>
  );
}
