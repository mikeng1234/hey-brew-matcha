"use client";

import { motion } from "framer-motion";

const BRANCH_COUNT = "50+";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#030e07" }}
    >
      {/* Hero video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { (e.currentTarget as HTMLVideoElement).style.opacity = "0"; }}
        >
          <source src="/videos/hbcoffee2.mp4" type="video/mp4" />
        </video>
        {/* Forest green tinted scrim */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(3,14,7,0.85) 0%, rgba(3,14,7,0.7) 50%, rgba(3,14,7,0.8) 100%)" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-40 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Open for Franchise
          </motion.p>

          {/* Headline — serif display */}
          <motion.h1
            className="font-normal leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              color: "#f0eae5",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-dm-serif)",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            Hey Brew{" "}
            <em style={{ color: "#d1de47", fontStyle: "italic" }}>Cafe PH.</em>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mb-3"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "#f0eae5",
              fontWeight: 600,
              fontFamily: "var(--font-dm-sans)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A Modern Heritage Brew.
          </motion.p>

          <motion.p
            className="text-base leading-relaxed mb-10 max-w-xl"
            style={{ color: "#8a9e8f" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            Combining artisanal coffee and premium milktea under one proven brand.
            A business model built for the Philippine market — now open nationwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <motion.a
              href="#inquire"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1de47]"
              style={{ background: "#d1de47", color: "#030e07", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
              whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(209,222,71,0.4)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8c83a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d1de47"; }}
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f]"
              style={{ border: "1px solid #1e3d28", color: "#8a9e8f", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00aa5f";
                el.style.color = "#00aa5f";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#1e3d28";
                el.style.color = "#8a9e8f";
              }}
            >
              View Packages
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 flex flex-wrap gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            { value: "Dual",       label: "Coffee & Milktea Concept" },
            { value: BRANCH_COUNT, label: "Active Branches" },
            { value: "Nationwide", label: "Franchise Coverage" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-3xl font-normal"
                style={{ color: "#d1de47", fontFamily: "var(--font-dm-serif)" }}
              >
                {s.value}
              </p>
              <p className="text-xs mt-1" style={{ color: "#506458" }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #030e07)" }}
      />
    </section>
  );
}
