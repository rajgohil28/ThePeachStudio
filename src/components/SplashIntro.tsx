"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./SplashIntro.module.css";

interface SplashIntroProps {
  onGetStarted: () => void;
  isExiting: boolean;
}

const SPLASH_IMAGES = [
  "https://www.figma.com/api/mcp/asset/9692ba7c-cda5-4077-9185-225fe86b5246", // Sea Link Bridge (Image 1)
  "https://www.figma.com/api/mcp/asset/808c6024-e375-4927-a20a-40627fa90684", // Vibrant flowers (Image 2)
  "https://www.figma.com/api/mcp/asset/82bde8e4-894a-4b6b-b2b8-7e42d9cfe922", // Forest with birds (Image 3)
  "https://www.figma.com/api/mcp/asset/42eab491-f1c9-4c5b-86af-6e690044f0db", // Branches and flowers (Image 4)
];

const LOGO_ICON_URL = "https://www.figma.com/api/mcp/asset/06e29e03-8b67-488b-b3bc-a7610d41b3ab";
const LOGO_WORDMARK_URL = "https://www.figma.com/api/mcp/asset/cf40d218-1acb-4b6b-aac6-a0cec43433dc";

export default function SplashIntro({ onGetStarted, isExiting }: SplashIntroProps) {
  const [bgImage, setBgImage] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const strokeCountRef = useRef(0);

  useEffect(() => {
    // Choose a random splash background image with reload-guarantee
    const prevIndexStr = localStorage.getItem("peach_studio_last_splash_index");
    let nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);

    if (prevIndexStr !== null) {
      const prevIndex = parseInt(prevIndexStr, 10);
      if (SPLASH_IMAGES.length > 1) {
        while (nextIndex === prevIndex) {
          nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
        }
      }
    }

    localStorage.setItem("peach_studio_last_splash_index", nextIndex.toString());
    setBgImage(SPLASH_IMAGES[nextIndex]);
  }, []);

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

      // Fill with brand warm white `#faf6f2`
      ctx.fillStyle = "#faf6f2";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [bgImage]); // Reinitialize when background image loads

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
      if (ratio >= 0.5) {
        setIsFullyRevealed(true);
      }
    } catch (e) {
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
    const brushRadius = 70;
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

  // Mouse move drawing and cursor tracing
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
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
    setIsHovering(false);
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  // Touch device drawing support (mobile layout swipe reveal)
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      // Paint on touch move
      revealAt(x, y);
    }
  };

  if (!bgImage) return null;

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
        onTouchMove={handleTouchMove}
      />

      {/* Custom circular paintbrush cursor tip */}
      {isHovering && (
        <div
          className={`${styles.customCursor} ${isClicking ? styles.customCursorActive : ""}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}

      {/* Top Left Logo Lockup */}
      <div className={styles.logoLockup}>
        <div className={styles.logoIcon}>
          <img src={LOGO_ICON_URL} alt="Peach Icon" className={styles.logoIconImg} />
        </div>
        <img src={LOGO_WORDMARK_URL} alt="the peach studio" className={styles.logoWordmark} />
      </div>

      {/* Center Get Started Container */}
      <div className={styles.centerContainer}>
        <button className={styles.getStartedBtn} onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}
