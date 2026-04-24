"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Icon from "@mdi/react";
import { mdiCoffee, mdiCup, mdiTrendingUp, mdiHandshake, mdiChevronLeft, mdiChevronRight } from "@mdi/js";

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
const GAP = 20; // px gap between cards

// Build an extended array: [last, ...all, first] for seamless infinite loop
// Real cards live at indices 1 … TOTAL in the extended array
const EXTENDED = [REASONS[TOTAL - 1], ...REASONS, REASONS[0]];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function Why() {
  // trackIndex = which EXTENDED card is in the "center" slot
  // Starts at 1 so the first real card is centered
  const [trackIndex, setTrackIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Compute how many px to translate the track ──────────────────────────
  // We render EXTENDED.length cards. Center of viewport = center card (trackIndex).
  // Offset so that card at `trackIndex` is centered:
  // x = -(trackIndex * (cardW + GAP)) + (containerW/2 - cardW/2)
  const getTranslate = useCallback((idx: number) => {
    const container = containerRef.current;
    if (!container) return 0;
    const containerW = container.offsetWidth;
    const cardW = (containerW - GAP * 2) / 3; // 3 cards visible
    return -(idx * (cardW + GAP)) + (containerW / 2 - cardW / 2);
  }, []);

  // ── Slide to a given trackIndex ──────────────────────────────────────────
  const slideTo = useCallback(
    async (idx: number, animate = true) => {
      if (animate) {
        setTransitioning(true);
        await controls.start({
          x: getTranslate(idx),
          transition: { type: "tween", duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        });
        setTransitioning(false);
      } else {
        controls.set({ x: getTranslate(idx) });
      }
    },
    [controls, getTranslate]
  );

  // ── Navigate ─────────────────────────────────────────────────────────────
  const navigate = useCallback(
    async (dir: 1 | -1) => {
      if (transitioning) return;
      const next = trackIndex + dir;
      setTrackIndex(next);
      await slideTo(next, true);

      // If we landed on a clone, silently jump to the real card
      if (next <= 0) {
        const real = TOTAL; // last real card
        setTrackIndex(real);
        slideTo(real, false);
      } else if (next >= TOTAL + 1) {
        const real = 1; // first real card
        setTrackIndex(real);
        slideTo(real, false);
      }
    },
    [trackIndex, transitioning, slideTo]
  );

  // ── Auto-slide ───────────────────────────────────────────────────────────
  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => navigate(1), 4000);
  }, [navigate]);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  // ── Initial position on mount + resize ──────────────────────────────────
  useEffect(() => {
    slideTo(trackIndex, false);
    const handleResize = () => slideTo(trackIndex, false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Which REASONS index is currently centered ─────────────────────────
  const centerRealIndex = mod(trackIndex - 1, TOTAL);

  return (
    <section id="why" className="py-28 overflow-hidden" style={{ background: "#030e07" }}>
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

          {/* Left / Right buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => { navigate(-1); resetAuto(); }}
              aria-label="Previous slide"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f]"
              style={{ background: "#091810", border: "1px solid #1e3d28", color: "#f0eae5" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#0f2418";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#00aa5f";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#091810";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#1e3d28";
              }}
            >
              <Icon path={mdiChevronLeft} size={1} aria-hidden="true" />
            </button>
            <button
              onClick={() => { navigate(1); resetAuto(); }}
              aria-label="Next slide"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f]"
              style={{ background: "#091810", border: "1px solid #1e3d28", color: "#f0eae5" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#0f2418";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#00aa5f";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#091810";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#1e3d28";
              }}
            >
              <Icon path={mdiChevronRight} size={1} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div ref={containerRef} className="relative overflow-visible">
          <motion.div
            ref={trackRef}
            className="flex"
            style={{ gap: GAP, willChange: "transform" }}
            animate={controls}
          >
            {EXTENDED.map((item, i) => {
              // Which real index does this extended slot correspond to?
              const realIndex = mod(i - 1, TOTAL);
              const isCenter = realIndex === centerRealIndex && i === trackIndex;

              return (
                <motion.div
                  key={i}
                  className="flex flex-col p-6 shrink-0 cursor-default"
                  style={{
                    width: "calc((100vw - 48px - 40px) / 3)",
                    maxWidth: 380,
                    background: "#091810",
                    border: "1px solid #142a1c",
                    borderRadius: "20px",
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.35,
                    scale: isCenter ? 1 : 0.97,
                    borderColor: isCenter ? "rgba(0,170,95,0.35)" : "#142a1c",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Tag */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Icon */}
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
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,170,95,0.2)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,170,95,0.1)"; }}
                  >
                    Learn More
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {REASONS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  if (transitioning) return;
                  const newTrack = i + 1;
                  setTrackIndex(newTrack);
                  slideTo(newTrack, true);
                  resetAuto();
                }}
                className="transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f]"
                style={{
                  width: i === centerRealIndex ? 24 : 8,
                  height: 8,
                  background: i === centerRealIndex ? "#00aa5f" : "#1e3d28",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
