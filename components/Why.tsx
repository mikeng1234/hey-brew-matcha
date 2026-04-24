"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiCoffee, mdiCup, mdiTrendingUp, mdiHandshake } from "@mdi/js";

const REASONS = [
  {
    icon: mdiCoffee,
    category: "Artisanal Coffee",
    name: "Locally Sourced Beans",
    desc: "Expertly roasted, locally sourced beans. From bold espressos to silky lattes — crafted for the modern Filipino coffee lover.",
    tag: "Core Product",
    tagColor: "#00aa5f",
  },
  {
    icon: mdiCup,
    category: "Premium Milktea",
    name: "Authentic Tea Blends",
    desc: "Authentic tea bases with rich milk and creative sinkers. Capturing the youth market and afternoon rush all day long.",
    tag: "Core Product",
    tagColor: "#00aa5f",
  },
  {
    icon: mdiTrendingUp,
    category: "Business Model",
    name: "Proven ROI",
    desc: "Streamlined operations, comprehensive training, and aggressive marketing support to ensure a swift return on investment.",
    tag: "Key Advantage",
    tagColor: "#d1de47",
  },
  {
    icon: mdiHandshake,
    category: "Franchisee Support",
    name: "End-to-End Support",
    desc: "From setup to grand opening — full training, branding, operational guidance, and ongoing support for your branch.",
    tag: "Included",
    tagColor: "#d1de47",
  },
];

const TOTAL = REASONS.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

// Flat offset params for each slot — no tilt, no depth
const SLOT_CONFIG: Record<number, { x: number; opacity: number; scale: number; zIndex: number }> = {
  [-2]: { x: -300, opacity: 0.18, scale: 0.80, zIndex: 1 },
  [-1]: { x: -165, opacity: 0.50, scale: 0.90, zIndex: 2 },
  [0]:  { x: 0,    opacity: 1,    scale: 1,    zIndex: 10 },
  [1]:  { x: 165,  opacity: 0.50, scale: 0.90, zIndex: 2 },
  [2]:  { x: 300,  opacity: 0.18, scale: 0.80, zIndex: 1 },
};

export default function Why() {
  const [current, setCurrent] = useState(0);
  const [busy, setBusy] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const navigate = useCallback((dir: 1 | -1) => {
    if (busy) return;
    setBusy(true);
    setCurrent(prev => mod(prev + dir, TOTAL));
    setTimeout(() => setBusy(false), 520);
  }, [busy]);

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => navigate(1), 4000);
  }, [navigate]);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  const handleNav = (dir: 1 | -1) => { navigate(dir); resetAuto(); };

  // Slots we render: offsets -2 … +2 (5 cards total)
  const slots = [-2, -1, 0, 1, 2];

  return (
    <section id="why" className="py-28" style={{ background: "#030e07" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              The Opportunity
            </motion.p>
            <motion.h2
              className="font-normal"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#f0eae5",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-dm-serif)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Coffee & Milktea{" "}
              <em style={{ color: "#d1de47", fontStyle: "italic" }}>Mastery.</em>
            </motion.h2>
          </div>

          {/* no visible buttons — hidden zones on the stage instead */}
        </div>

        {/* ── 3-D coverflow stage ── */}
        <div
          className="relative mx-auto"
          style={{ height: 380 }}
        >
          {/* Hidden click zones — left goes prev, right goes next */}
          <button
            onClick={() => handleNav(-1)}
            aria-label="Previous slide"
            className="absolute inset-y-0 left-0 z-50 w-1/3 cursor-w-resize focus-visible:outline-none"
            style={{ background: "transparent" }}
          />
          <button
            onClick={() => handleNav(1)}
            aria-label="Next slide"
            className="absolute inset-y-0 right-0 z-50 w-1/3 cursor-e-resize focus-visible:outline-none"
            style={{ background: "transparent" }}
          />

          {slots.map((offset) => {
            const idx = mod(current + offset, TOTAL);
            const item = REASONS[idx];
            const cfg = SLOT_CONFIG[offset];

            return (
              <motion.div
                key={`${current}-${offset}`}
                className="absolute top-1/2 left-1/2 flex flex-col p-6 cursor-default select-none"
                style={{
                  width: 280,
                  marginLeft: -140,   // half of width to center
                  marginTop: -160,    // half of approx card height to center
                  borderRadius: 20,
                  background: "#091810",
                  border: "1px solid #142a1c",
                  zIndex: cfg.zIndex,
                  pointerEvents: offset === 0 ? "auto" : "none",
                }}
                animate={{
                  x: cfg.x,
                  opacity: cfg.opacity,
                  scale: cfg.scale,
                  borderColor: offset === 0 ? "rgba(0,170,95,0.4)" : "#142a1c",
                  boxShadow: offset === 0
                    ? "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,170,95,0.15)"
                    : "0 8px 24px rgba(0,0,0,0.4)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => {
                  if (offset !== 0) { handleNav(offset > 0 ? 1 : -1); }
                }}
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,170,95,0.12)" }}
                  >
                    <Icon path={item.icon} size={0.9} color="#00aa5f" aria-hidden="true" />
                  </div>
                  <span
                    className="text-xs px-3 py-1 font-semibold"
                    style={{
                      background: `${item.tagColor}18`,
                      color: item.tagColor,
                      borderRadius: "50px",
                      border: `1px solid ${item.tagColor}40`,
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <p
                  className="text-xs mb-1"
                  style={{ color: "#506458", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#f0eae5", fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#8a9e8f" }}>
                  {item.desc}
                </p>

                <a
                  href="#inquire"
                  className="text-xs px-4 py-2 font-semibold transition-all duration-200 active:scale-[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] self-start"
                  style={{
                    background: "rgba(0,170,95,0.1)",
                    color: "#00aa5f",
                    borderRadius: "50px",
                    border: "1px solid rgba(0,170,95,0.25)",
                    fontFamily: "var(--font-dm-sans)",
                    pointerEvents: offset === 0 ? "auto" : "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,170,95,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,170,95,0.1)"; }}
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {REASONS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                if (busy) return;
                setCurrent(i);
                resetAuto();
              }}
              className="transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f]"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#00aa5f" : "#1e3d28",
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#inquire"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1de47]"
            style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#d1de47"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00aa5f"; }}
          >
            Inquire about franchising →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
