"use client";

import React, { useState, useRef } from "react";
import { getAssetPath } from "@/utils/paths";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TREE_ILLUSTRATION_URL = getAssetPath("/images/contact/tree-illustration.png");
const CLOSE_ICON_URL = getAssetPath("/images/contact/close-icon.svg");
const UPLOAD_ICON_URL = getAssetPath("/images/contact/upload-icon.svg");
const SUBMIT_ARROW_URL = getAssetPath("/images/contact/submit-arrow.svg");
const PHONE_ICON_URL = getAssetPath("/images/contact/phone-icon.svg");
const EMAIL_ICON_URL = getAssetPath("/images/contact/email-icon.svg");
const RADIO_CHECKED_URL = getAssetPath("/images/contact/radio-checked.png");
const RADIO_UNCHECKED_URL = getAssetPath("/images/contact/radio-unchecked.png");
const SUCCESS_ICON_URL = getAssetPath("/images/contact/success-icon.png");
const ERROR_ICON_URL = getAssetPath("/images/contact/error-icon.png");

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "professional" as "professional" | "homeowner",
    message: ""
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Your Name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const handleRoleSelect = (role: "professional" | "homeowner") => {
    setFormData({
      ...formData,
      role
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrors({
          ...errors,
          file: "File size exceeds 10MB limit."
        });
      } else {
        setSelectedFile(file);
        setErrors({
          ...errors,
          file: ""
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormState("submitting");
      
      // Simulate form submission delay
      setTimeout(() => {
        if (formData.email.toLowerCase() === "error@thepeachstudio.com") {
          setFormState("error");
        } else {
          setFormState("success");
        }
      }, 300);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "professional",
      message: ""
    });
    setSelectedFile(null);
    setErrors({});
    setFormState("idle");
  };

  const triggerClose = () => {
    onClose();
    setTimeout(() => {
      handleReset();
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.overlayActive : ""}`} onClick={triggerClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        
        {/* Tree sketch floating absolute on left */}
        <img src={TREE_ILLUSTRATION_URL} alt="Majestic tree sketch" className={styles.treeImg} />

        {/* Close Button top right */}
        <button className={styles.closeButton} onClick={triggerClose} aria-label="Close form modal">
          <img src={CLOSE_ICON_URL} alt="Close button mark" className={styles.closeIconImg} />
        </button>

        {/* Header Block at top left */}
        {(formState === "idle" || formState === "submitting") && (
          <div className={styles.header}>
            <h2 className={styles.title}>
              Let&apos;s make a <span className={styles.titleEmphasis}>story together</span>
            </h2>
            <p className={styles.subtitle}>
              Tell us what you&apos;re dreaming up. We&apos;ll help shape the rest.
            </p>
          </div>
        )}

        {/* Form Block absolute on right */}
        <div className={styles.formContainer}>
          {formState === "idle" || formState === "submitting" ? (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              
              {/* Row 1: Your Name (exact Figma 393px width aligned right) */}
              <div className={styles.nameRow}>
                <div className={styles.nameFormGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    disabled={formState === "submitting"}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className={styles.rowInputs}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    disabled={formState === "submitting"}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    disabled={formState === "submitting"}
                  />
                </div>
              </div>

              {/* Row 3: You are a... */}
              <div className={styles.formGroup}>
                <span className={styles.label}>You are a...</span>
                <div className={styles.radioContainer}>
                  <div 
                    className={`${styles.radioCard} ${formData.role === "professional" ? styles.radioCardActive : ""}`}
                    onClick={() => formState !== "submitting" && handleRoleSelect("professional")}
                  >
                    <div className={styles.radioIconContainer}>
                      <img 
                        src={formData.role === "professional" ? RADIO_CHECKED_URL : RADIO_UNCHECKED_URL} 
                        alt="" 
                        className={styles.radioIcon} 
                      />
                    </div>
                    <div className={styles.radioContent}>
                      <span className={styles.radioTitle}>Professional</span>
                      <span className={styles.radioDesc}>Architect, interior designer, or business owner</span>
                    </div>
                  </div>

                  <div 
                    className={`${styles.radioCard} ${formData.role === "homeowner" ? styles.radioCardActive : ""}`}
                    onClick={() => formState !== "submitting" && handleRoleSelect("homeowner")}
                  >
                    <div className={styles.radioIconContainer}>
                      <img 
                        src={formData.role === "homeowner" ? RADIO_CHECKED_URL : RADIO_UNCHECKED_URL} 
                        alt="" 
                        className={styles.radioIcon} 
                      />
                    </div>
                    <div className={styles.radioContent}>
                      <span className={styles.radioTitle}>Homeowner</span>
                      <span className={styles.radioDesc}>Looking to bring a story into your home.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Imagining Textarea */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Share what you’re imagining</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the space, the story, or anything else that feels important."
                  className={styles.textarea}
                  disabled={formState === "submitting"}
                />
              </div>

              {/* Row 5: File references */}
              <div className={styles.formGroup}>
                <span className={styles.label}>Share a few visual references (optional)</span>
                <div className={styles.uploadArea}>
                  <div className={styles.uploadIcon}>
                    <img src={UPLOAD_ICON_URL} alt="Upload logo mark" className={styles.uploadIconImg} />
                  </div>
                  <div className={styles.uploadTextCol}>
                    <span className={styles.uploadTitle}>Photos, sketches, moodboards, floor plans, etc</span>
                    <span className={styles.uploadDesc}>Up to 4 images · JPG, PNG, PDF · Max 10 MB each</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className={styles.hiddenFileInput}
                    accept=".jpg,.jpeg,.png,.pdf"
                    disabled={formState === "submitting"}
                    aria-label="Upload visual references file"
                  />
                </div>
                {selectedFile && (
                  <span className={styles.fileSelectedBadge}>
                    ✓ {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                )}
                {errors.file && <span className={styles.errorText}>{errors.file}</span>}
              </div>

              {/* Row 6: Submit actions (aligned to right side) */}
              <div className={styles.submitBlock}>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={formState === "submitting"}
                >
                  <span>{formState === "submitting" ? "Submitting..." : "Submit"}</span>
                  {formState !== "submitting" && (
                    <img src={SUBMIT_ARROW_URL} alt="Submit Arrow" className={styles.submitArrow} />
                  )}
                </button>
                <span className={styles.submitCaption}>We&apos;ll review your brief and get back to you.</span>
              </div>

            </form>
          ) : formState === "success" ? (
            /* Success confirmation card screen */
            <div className={styles.stateContainer}>
              <div className={styles.stateIcon}>
                <img src={SUCCESS_ICON_URL} alt="" className={styles.stateIconImg} />
              </div>
              <h2 className={styles.stateTitle}>
                Thank you for sharing <span className={styles.stateTitleEmphasis}>your story!</span>
              </h2>
              <p className={styles.stateDescription}>
                We will review your project brief carefully and get back to you soon.
              </p>
              <button className={styles.stateButton} onClick={triggerClose}>
                Back to Home
              </button>
            </div>
          ) : (
            /* Error confirmation card screen */
            <div className={styles.stateContainer}>
              <div className={styles.stateIcon}>
                <img src={ERROR_ICON_URL} alt="" className={styles.stateIconImg} />
              </div>
              <h2 className={styles.stateTitle}>Hmm, your story didn&apos;t reach us :(</h2>
              <p className={styles.stateDescription}>
                Something interrupted the submission. Please try again.
              </p>
              <button className={styles.stateButton} onClick={handleReset}>
                Try Again
              </button>
            </div>
          )}

          {/* Solid line divider */}
          <div className={styles.divider} />

          {/* Footer Contacts */}
          <div className={styles.directContacts}>
            <span className={styles.directTitle}>or get in touch directly</span>
            
            <div className={styles.directRow}>
              {/* Phone item card */}
              <a href="tel:+919217689001" className={styles.directLinkCard}>
                <div className={styles.directIcon}>
                  <img src={PHONE_ICON_URL} alt="Phone link logo" className={styles.directIconImg} />
                </div>
                <div className={styles.directTextCol}>
                  <span className={styles.directValue}>+91 92176 89001</span>
                  <span className={styles.directCaption}>Fastest.</span>
                </div>
              </a>

              {/* Email item card */}
              <a href="mailto:poorva.kelkar@gmail.com" className={styles.directLinkCard}>
                <div className={styles.directIcon}>
                  <img src={EMAIL_ICON_URL} alt="Email link logo" className={styles.directIconImg} />
                </div>
                <div className={styles.directTextCol}>
                  <span className={styles.directValue}>poorva.kelkar@gmail.com</span>
                  <span className={styles.directCaption}>Most Common.</span>
                </div>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
