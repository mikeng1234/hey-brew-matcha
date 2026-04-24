"use client";

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

export default function Why() {
  return (
    <section id="why" className="py-28" style={{ background: "#030e07" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
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
            className="font-normal mb-4"
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
          <motion.p
            className="text-sm max-w-lg"
            style={{ color: "#8a9e8f" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Why choose one when you can offer both? Our dual-concept menu maximizes foot traffic
            and caters to diverse taste profiles throughout the day.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((item, i) => (
            <motion.div
              key={item.name}
              className="relative flex flex-col p-6 cursor-default"
              style={{
                background: "#091810",
                border: "1px solid #142a1c",
                borderRadius: "20px",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,170,95,0.5)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 1px rgba(0,170,95,0.2), 0 12px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#142a1c";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Tag */}
              <span
                className="absolute top-4 right-4 text-xs px-3 py-1 font-semibold"
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

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-5 shrink-0"
                style={{ background: "rgba(0,170,95,0.12)" }}
              >
                <Icon path={item.icon} size={0.9} color="#00aa5f" aria-hidden="true" />
              </div>

              <p
                className="text-xs mb-1"
                style={{ color: "#506458", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans)" }}
              >
                {item.category}
              </p>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "#f0eae5", fontFamily: "var(--font-dm-sans)" }}
              >
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#8a9e8f" }}>
                {item.desc}
              </p>

              <a
                href="#inquire"
                aria-label={`Learn more about ${item.name}`}
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
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
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
