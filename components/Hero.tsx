"use client";

import { motion } from "framer-motion";

const BRANCH_COUNT = "50+";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">

      {/* ── LEFT PANEL — solid background, text pinned to bottom-left ── */}
      <div
        className="relative flex flex-col justify-end px-10 pb-14 pt-32 md:pt-0 md:w-1/2 min-h-[55vh] md:min-h-screen"
        style={{ background: "#030e07" }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Open for Franchise
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-normal leading-none mb-6"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            color: "#f0eae5",
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-dm-serif)",
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
        >
          Hey Brew
          <br />
          <em style={{ color: "#d1de47", fontStyle: "italic" }}>Cafe PH.</em>
        </motion.h1>

        {/* Body copy */}
        <motion.p
          className="text-sm leading-relaxed mb-8 max-w-sm"
          style={{ color: "#8a9e8f" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          Combining artisanal coffee and premium milktea under one proven brand.
          A business model built for the Philippine market — now open nationwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#inquire"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1de47]"
            style={{ background: "#d1de47", color: "#030e07", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
            whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(209,222,71,0.4)", transition: { duration: 0.2 } }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8c83a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d1de47"; }}
          >
            Franchising →
          </motion.a>
          <motion.a
            href="#packages"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f]"
            style={{ border: "1px solid #1e3d28", color: "#8a9e8f", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
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

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-8 mt-12 pt-8"
          style={{ borderTop: "1px solid #142a1c" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            { value: "Dual",       label: "Coffee & Milktea" },
            { value: BRANCH_COUNT, label: "Active Branches" },
            { value: "Nationwide", label: "Coverage" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-2xl font-normal"
                style={{ color: "#d1de47", fontFamily: "var(--font-dm-serif)" }}
              >
                {s.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#506458" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT PANEL — full-height video ── */}
      <motion.div
        className="relative md:w-1/2 min-h-[45vh] md:min-h-screen overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
          onError={(e) => {
            const el = e.currentTarget as HTMLVideoElement;
            el.style.display = "none";
            if (el.parentElement) {
              el.parentElement.style.background = "#0f2418";
            }
          }}
        >
          <source src="/videos/hbcoffee2.mp4" type="video/mp4" />
        </video>

        {/* Subtle left-edge gradient to blend into left panel */}
        <div
          className="absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: "linear-gradient(to right, #030e07, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
