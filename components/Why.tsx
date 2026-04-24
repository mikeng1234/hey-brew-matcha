"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiCoffee, mdiCup, mdiTrendingUp, mdiHandshake, mdiBullhorn } from "@mdi/js";

const REASONS = [
  {
    icon: mdiCoffee,
    category: "Artisanal Coffee",
    name: "Locally Sourced Beans",
    desc: "Expertly roasted, locally sourced beans. From bold espressos to silky lattes — crafted for the modern Filipino coffee lover.",
    tag: "Core Product",
    tagColor: "#a3a83c",
  },
  {
    icon: mdiCup,
    category: "Premium Milktea",
    name: "Authentic Tea Blends",
    desc: "Authentic tea bases with rich milk and creative sinkers. Capturing the youth market and afternoon rush all day long.",
    tag: "Core Product",
    tagColor: "#a3a83c",
  },
  {
    icon: mdiTrendingUp,
    category: "Business Model",
    name: "Proven ROI",
    desc: "Streamlined operations, comprehensive training, and aggressive marketing support to ensure a swift return on investment.",
    tag: "Key Advantage",
    tagColor: "#d4855a",
  },
  {
    icon: mdiHandshake,
    category: "Franchisee Support",
    name: "End-to-End Support",
    desc: "From setup to grand opening — full training, branding, operational guidance, and ongoing support for your branch.",
    tag: "Included",
    tagColor: "#d4855a",
  },
  {
    icon: mdiBullhorn,
    category: "Brand & Marketing",
    name: "Built-In Brand Power",
    desc: "Active social media presence, ready-to-deploy marketing materials, and a recognizable brand — so you open with an audience, not from scratch.",
    tag: "Key Advantage",
    tagColor: "#d4855a",
  },
];

const TOTAL = REASONS.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

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

  return (
    <section id="why" className="py-28" style={{ background: "#1a1512" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#a3a83c", fontFamily: "var(--font-dm-sans)" }}
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
                color: "#edddd0",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-dm-serif)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Coffee & Milktea{" "}
              <em style={{ color: "#d4855a", fontStyle: "italic" }}>Mastery.</em>
            </motion.h2>
          </div>
        </div>

        {/* Carousel stage */}
        <div className="relative mx-auto" style={{ height: 380 }}>
          {/* Hidden click zones */}
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

          {REASONS.map((item, i) => {
            const raw = mod(i - current, TOTAL);
            const offset = raw > TOTAL / 2 ? raw - TOTAL : raw;
            const cfg = SLOT_CONFIG[offset] ?? {
              x: offset > 0 ? 520 : -520,
              opacity: 0,
              scale: 0.75,
              zIndex: 0,
            };
            const isCenter = offset === 0;

            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 flex flex-col p-6 cursor-default select-none"
                style={{
                  width: 280,
                  marginLeft: -140,
                  marginTop: -160,
                  borderRadius: 20,
                  background: "#261e1b",
                  border: "1px solid #3a2e28",
                  zIndex: cfg.zIndex,
                  pointerEvents: isCenter ? "auto" : "none",
                }}
                animate={{
                  x: cfg.x,
                  opacity: cfg.opacity,
                  scale: cfg.scale,
                  borderColor: isCenter ? "rgba(163,168,60,0.4)" : "#3a2e28",
                  boxShadow: isCenter
                    ? "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(163,168,60,0.15)"
                    : "0 8px 24px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(163,168,60,0.12)" }}
                  >
                    <Icon path={item.icon} size={0.9} color="#a3a83c" aria-hidden="true" />
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
                  style={{ color: "#7a6a5e", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#edddd0", fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#9a8a7a" }}>
                  {item.desc}
                </p>

                <a
                  href="#inquire"
                  className="text-xs px-4 py-2 font-semibold transition-all duration-200 active:scale-[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3a83c] self-start"
                  style={{
                    background: "rgba(163,168,60,0.1)",
                    color: "#a3a83c",
                    borderRadius: "50px",
                    border: "1px solid rgba(163,168,60,0.25)",
                    fontFamily: "var(--font-dm-sans)",
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(163,168,60,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(163,168,60,0.1)"; }}
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
              className="transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3a83c]"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#a3a83c" : "#4a3a32",
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
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4855a]"
            style={{ color: "#a3a83c", fontFamily: "var(--font-dm-sans)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#d4855a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a3a83c"; }}
          >
            Inquire about franchising →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
