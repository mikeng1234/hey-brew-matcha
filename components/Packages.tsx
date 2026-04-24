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
      style={{ background: "#1a1512", borderTop: "1px solid #3a2e28" }}
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
              style={{ color: "#a3a83c", fontFamily: "var(--font-dm-sans)" }}
            >
              Coffee Cart Packages
            </p>
            <h2
              className="font-normal mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#edddd0",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              Bring Hey Brew
              <br />
              <em style={{ color: "#d4855a", fontStyle: "italic" }}>to your event.</em>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9a8a7a" }}>
              Book our coffee cart for your next corporate event, wedding, or celebration.
              All packages include set-up, booth, and full manpower — ready to serve.
            </p>

            {/* Reminders */}
            <div className="space-y-3 mb-8" id="story">
              {REMINDERS.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#a3a83c" }}
                  />
                  <p className="text-xs leading-relaxed" style={{ color: "#9a8a7a" }}>{r}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#inquire"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4855a]"
              style={{ background: "#d4855a", color: "#1a1512", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(212,133,90,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c0714a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4855a"; }}
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
                  background: pkg.highlight ? "rgba(163,168,60,0.07)" : "#261e1b",
                  border: pkg.highlight ? "1px solid rgba(163,168,60,0.35)" : "1px solid #3a2e28",
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
                    style={{ background: "#d4855a", color: "#1a1512", letterSpacing: "0.05em", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Package name */}
                <p
                  className="text-xs font-semibold mb-4 uppercase tracking-widest"
                  style={{ color: pkg.highlight ? "#a3a83c" : "#7a6a5e", fontFamily: "var(--font-dm-sans)" }}
                >
                  {pkg.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className="text-3xl font-normal"
                    style={{ color: "#edddd0", fontFamily: "var(--font-dm-serif)" }}
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
                    style={{ color: pkg.highlight ? "#d4855a" : "#9a8a7a", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {pkg.cups}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs mb-4" style={{ color: "#7a6a5e" }}>{pkg.tagline}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={pkg.highlight ? "#a3a83c" : "#7a6a5e"}
                        strokeWidth="2"
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-xs" style={{ color: "#9a8a7a" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#inquire"
                  className="mt-auto block text-xs py-2.5 px-4 rounded-full font-semibold text-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4855a]"
                  style={
                    pkg.highlight
                      ? { background: "#d4855a", color: "#1a1512", fontFamily: "var(--font-dm-sans)" }
                      : { background: "rgba(255,255,255,0.04)", color: "#9a8a7a", border: "1px solid #3a2e28", fontFamily: "var(--font-dm-sans)" }
                  }
                  onMouseEnter={(e) => {
                    if (pkg.highlight) { (e.currentTarget as HTMLAnchorElement).style.background = "#c0714a"; }
                    else { (e.currentTarget as HTMLAnchorElement).style.color = "#edddd0"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4a3a32"; }
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.highlight) { (e.currentTarget as HTMLAnchorElement).style.background = "#d4855a"; }
                    else { (e.currentTarget as HTMLAnchorElement).style.color = "#9a8a7a"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3a2e28"; }
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
