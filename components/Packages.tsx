"use client";

import { motion } from "framer-motion";

const PACKAGES = [
  {
    name: "Package 1",
    price: "₱7,000",
    cups: "50 Cups",
    tagline: "Perfect for intimate gatherings.",
    features: [
      "50 cups served",
      "3 flavors of your choice",
      "Coffee booth setup included",
      "Full manpower included",
      "3-hour event coverage",
    ],
    highlight: false,
    badge: null,
    cta: "Book Package 1",
  },
  {
    name: "Package 2",
    price: "₱14,000",
    cups: "100 Cups",
    tagline: "Ideal for mid-size events & debuts.",
    features: [
      "100 cups served",
      "3 flavors of your choice",
      "Coffee booth setup included",
      "Full manpower included",
      "3-hour event coverage",
    ],
    highlight: true,
    badge: "MOST POPULAR",
    cta: "Book Package 2",
  },
  {
    name: "Package 3",
    price: "₱21,000",
    cups: "150 Cups",
    tagline: "Best for large events & full-day bookings.",
    features: [
      "150 cups served",
      "3 flavors of your choice",
      "Coffee booth setup included",
      "Full manpower included",
      "3-hour event coverage",
    ],
    highlight: false,
    badge: null,
    cta: "Book Package 3",
  },
];

const REMINDERS = [
  "Minimum 3 flavors of your choice per booking",
  "Minimum 3 hours per event — additional ₱500 for succeeding hours",
  "50% downpayment for reservation (non-refundable). Schedule changes must be done 5 days before the event.",
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-28"
      style={{ background: "#030e07", borderTop: "1px solid #142a1c" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
            >
              Coffee Cart Packages
            </p>
            <h2
              className="font-normal mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#f0eae5",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              Bring Hey Brew
              <br />
              <em style={{ color: "#d1de47", fontStyle: "italic" }}>to your event.</em>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8a9e8f" }}>
              Book our coffee cart for your next corporate event, wedding, or celebration.
              All packages include set-up, booth, and full manpower — ready to serve.
            </p>

            {/* Reminders */}
            <div className="space-y-3 mb-8" id="story">
              {REMINDERS.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#00aa5f" }}
                  />
                  <p className="text-xs leading-relaxed" style={{ color: "#8a9e8f" }}>{r}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#inquire"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1de47]"
              style={{ background: "#d1de47", color: "#030e07", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(209,222,71,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8c83a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d1de47"; }}
            >
              Book a Package →
            </motion.a>
          </motion.div>

          {/* Right — package cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                className="relative flex flex-col rounded-2xl p-5"
                style={{
                  background: pkg.highlight ? "rgba(0,170,95,0.07)" : "#091810",
                  border: pkg.highlight ? "1px solid rgba(0,170,95,0.35)" : "1px solid #142a1c",
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.1, ease: "easeOut" } }}
              >
                {/* Top badge */}
                {pkg.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap"
                    style={{ background: "#d1de47", color: "#030e07", letterSpacing: "0.05em", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Package name */}
                <p
                  className="text-xs font-semibold mb-4 uppercase tracking-widest"
                  style={{ color: pkg.highlight ? "#00aa5f" : "#506458", fontFamily: "var(--font-dm-sans)" }}
                >
                  {pkg.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className="text-3xl font-normal"
                    style={{ color: "#f0eae5", fontFamily: "var(--font-dm-serif)" }}
                  >
                    {pkg.price}
                  </span>
                </div>

                {/* Cup count pill */}
                <div
                  className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg w-fit"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: pkg.highlight ? "#d1de47" : "#8a9e8f", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {pkg.cups}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs mb-4" style={{ color: "#506458" }}>{pkg.tagline}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={pkg.highlight ? "#00aa5f" : "#506458"}
                        strokeWidth="2"
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-xs" style={{ color: "#8a9e8f" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#inquire"
                  className="mt-auto block text-xs py-2.5 px-4 rounded-full font-semibold text-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d1de47]"
                  style={
                    pkg.highlight
                      ? { background: "#d1de47", color: "#030e07", fontFamily: "var(--font-dm-sans)" }
                      : { background: "rgba(255,255,255,0.04)", color: "#8a9e8f", border: "1px solid #142a1c", fontFamily: "var(--font-dm-sans)" }
                  }
                  onMouseEnter={(e) => {
                    if (pkg.highlight) { (e.currentTarget as HTMLAnchorElement).style.background = "#b8c83a"; }
                    else { (e.currentTarget as HTMLAnchorElement).style.color = "#f0eae5"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1e3d28"; }
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.highlight) { (e.currentTarget as HTMLAnchorElement).style.background = "#d1de47"; }
                    else { (e.currentTarget as HTMLAnchorElement).style.color = "#8a9e8f"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#142a1c"; }
                  }}
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
