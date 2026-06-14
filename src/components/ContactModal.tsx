"use client";

import React, { useState, useRef } from "react";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TREE_ILLUSTRATION_URL = "https://www.figma.com/api/mcp/asset/519f660a-ba63-4b69-8612-f2c60c4e9e99";
const CLOSE_ICON_URL = "https://www.figma.com/api/mcp/asset/df6b62d1-6771-436d-945a-fca10da3dfc2";
const UPLOAD_ICON_URL = "https://www.figma.com/api/mcp/asset/a85bc481-5207-4acd-9140-e974a2006773";
const SUBMIT_ARROW_URL = "https://www.figma.com/api/mcp/asset/07625521-a950-4ad0-868c-6408c65dce34";
const PHONE_ICON_URL = "https://www.figma.com/api/mcp/asset/29d842b3-447b-40a3-9c04-2292c407fa6c";
const EMAIL_ICON_URL = "https://www.figma.com/api/mcp/asset/15eb65c6-382f-49bf-ba83-b6ce2c0c072c";

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
              Let's make a <span className={styles.titleEmphasis}>story together</span>
            </h2>
            <p className={styles.subtitle}>
              Tell us what you're dreaming up. We'll help shape the rest.
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
                    <div className={styles.radioCircle}>
                      <div className={styles.radioDot} />
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
                    <div className={styles.radioCircle}>
                      <div className={styles.radioDot} />
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
                <span className={styles.submitCaption}>We'll review your brief and get back to you.</span>
              </div>

            </form>
          ) : formState === "success" ? (
            /* Success confirmation card screen */
            <div className={styles.stateContainer}>
              <div className={styles.stateIcon}>
                <svg viewBox="0 0 24 24" width="86" height="80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#d47059'}} aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </div>
              <h2 className={styles.stateTitle}>Thank you for sharing your story!</h2>
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
                <svg viewBox="0 0 24 24" width="86" height="80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#d47059'}} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h2 className={styles.stateTitle}>Hmm, your story didn't reach us :(</h2>
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
