"use client";

import React, { useState } from "react";
import SplashIntro from "@/components/SplashIntro";
import MainLanding from "@/components/MainLanding";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"splash" | "landing">("splash");
  const [isExitingSplash, setIsExitingSplash] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleGetStarted = () => {
    setCurrentStep("landing");
  };

  const handleStartConversation = () => {
    setIsContactOpen(true);
  };

  const handleCloseConversation = () => {
    setIsContactOpen(false);
  };

  return (
    <>
      {currentStep === "splash" ? (
        <SplashIntro onGetStarted={handleGetStarted} isExiting={isExitingSplash} />
      ) : (
        <>
          <MainLanding onStartConversation={handleStartConversation} />
          <ContactModal isOpen={isContactOpen} onClose={handleCloseConversation} />
        </>
      )}
    </>
  );
}
