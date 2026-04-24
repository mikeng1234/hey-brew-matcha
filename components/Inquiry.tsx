"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiCheckDecagram, mdiCheckCircle } from "@mdi/js";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT_CLASS =
  "w-full border rounded-full px-4 py-2.5 text-sm placeholder-[#506458] outline-none transition-all duration-200";

const INPUT_STYLE = {
  background: "#030e07",
  border: "1px solid #142a1c",
  color: "#f0eae5",
};

const LABEL_STYLE = {
  color: "#506458",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  fontFamily: "var(--font-dm-sans)",
};

export default function Inquiry() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <section
      id="inquire"
      className="py-28"
      style={{ background: "#030e07", borderTop: "1px solid #142a1c" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
            >
              Take The Next Step
            </p>
            <h2
              className="font-normal mb-4 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#f0eae5",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              Ready to brew
              <br />
              <em style={{ color: "#d1de47", fontStyle: "italic" }}>your success?</em>
            </h2>
            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "#8a9e8f" }}>
              Fill out the inquiry form and our franchise development team will get in touch
              with you shortly to discuss availability in your preferred location.
            </p>

            {/* Open nationwide badge */}
            <div
              className="flex items-start gap-3 p-4 mb-8"
              style={{ background: "#091810", border: "1px solid #142a1c", borderRadius: "16px" }}
            >
              <Icon path={mdiCheckDecagram} size={1} color="#00aa5f" className="shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="text-sm font-semibold mb-0.5" style={{ color: "#f0eae5", fontFamily: "var(--font-dm-sans)" }}>
                  Open Nationwide
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#8a9e8f" }}>
                  Actively expanding across all major regions in the Philippines.
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { label: "Phone",    value: "0967 796 3243",          href: "tel:09677963243" },
                { label: "Email",    value: "heybrewcafeph@gmail.com", href: "mailto:heybrewcafeph@gmail.com" },
                { label: "Facebook", value: "Hey Brew",                href: "https://www.facebook.com/HeyBrewPH/" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span
                    className="text-xs w-20 shrink-0"
                    style={{ color: "#506458", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.label === "Facebook" ? "_blank" : undefined}
                    rel={c.label === "Facebook" ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] rounded"
                    style={{ color: "#8a9e8f" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00aa5f"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8a9e8f"; }}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — inquiry form */}
          <motion.div
            className="p-8"
            style={{ background: "#091810", border: "1px solid #142a1c", borderRadius: "24px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3
              className="text-base font-semibold mb-6"
              style={{ color: "#f0eae5", fontFamily: "var(--font-dm-sans)" }}
            >
              Franchise Inquiry
            </h3>

            <div aria-live="polite" aria-atomic="true">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <Icon path={mdiCheckCircle} size={2.5} color="#00aa5f" aria-hidden="true" />
                  <h4 className="text-base font-semibold" style={{ color: "#f0eae5", fontFamily: "var(--font-dm-sans)" }}>
                    Inquiry Received!
                  </h4>
                  <p className="text-sm" style={{ color: "#8a9e8f" }}>
                    Our team will reach out to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] rounded"
                    style={{ color: "#8a9e8f" }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                        First Name <span style={{ color: "#00aa5f" }}>*</span>
                      </label>
                      <input
                        id="firstName" name="firstName" type="text" required placeholder="Juan"
                        className={INPUT_CLASS}
                        style={INPUT_STYLE}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#00aa5f"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#142a1c"; }}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                        Last Name <span style={{ color: "#00aa5f" }}>*</span>
                      </label>
                      <input
                        id="lastName" name="lastName" type="text" required placeholder="Dela Cruz"
                        className={INPUT_CLASS}
                        style={INPUT_STYLE}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#00aa5f"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#142a1c"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                      Mobile Number <span style={{ color: "#00aa5f" }}>*</span>
                    </label>
                    <input
                      id="mobile" name="mobile" type="tel" required
                      placeholder="+63 900 000 0000"
                      pattern="^(\+?63|0)9\d{9}$"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#00aa5f"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#142a1c"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                      Email Address <span style={{ color: "#00aa5f" }}>*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required placeholder="juan@email.com"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#00aa5f"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#142a1c"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                      Target Location <span style={{ color: "#00aa5f" }}>*</span>
                    </label>
                    <input
                      id="location" name="location" type="text" required placeholder="City or Province"
                      className={INPUT_CLASS}
                      style={INPUT_STYLE}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#00aa5f"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#142a1c"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="capital" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                      Available Capital <span style={{ color: "#00aa5f" }}>*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="capital" name="capital" required
                        className={`${INPUT_CLASS} cursor-pointer appearance-none pr-8`}
                        style={INPUT_STYLE}
                        onFocus={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = "#00aa5f"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = "#142a1c"; }}
                      >
                        <option value="">Select a range</option>
                        <option value="below_500k">Below ₱500,000</option>
                        <option value="500k_1m">₱500,000 – ₱1,000,000</option>
                        <option value="1m_2m">₱1,000,000 – ₱2,000,000</option>
                        <option value="above_2m">Above ₱2,000,000</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="#506458" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-center" style={{ color: "#ff6b6b" }}>
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 text-sm font-semibold active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1de47]"
                    style={{ background: "#d1de47", color: "#030e07", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
                    whileHover={status !== "submitting" ? { y: -4, boxShadow: "0 8px 24px rgba(209,222,71,0.35)", transition: { duration: 0.2, ease: "easeOut" } } : {}}
                    onMouseEnter={(e) => { if (status !== "submitting") (e.currentTarget as HTMLButtonElement).style.background = "#b8c83a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d1de47"; }}
                  >
                    {status === "submitting" ? "Sending…" : "Submit Inquiry"}
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: "#506458" }}>
                    By submitting, you agree to our Terms of Service &amp; Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
