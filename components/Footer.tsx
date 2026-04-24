"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { mdiPhone, mdiEmailOutline } from "@mdi/js";

const LINKS = [
  { label: "Why Join",  href: "#why" },
  { label: "Packages",  href: "#packages" },
  { label: "Our Story", href: "#story" },
  { label: "Inquire",   href: "#inquire" },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#1a1512", borderTop: "1px solid #3a2e28" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <a
              href="https://www.facebook.com/HeyBrewPH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-2 hover:opacity-75 transition-opacity duration-200"
            >
              <Image
                src="/images/hb-logo-horizontal-white-nobg.png"
                alt="Hey Brew Cafe PH"
                width={160}
                height={36}
                className="h-8 w-auto object-contain"
                style={{ filter: "brightness(0) saturate(100%) invert(65%) sepia(30%) saturate(500%) hue-rotate(35deg) brightness(90%) contrast(95%)" }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.textContent = "HEY BREW CAFE PH";
                    (parent as HTMLAnchorElement).style.color = "#a3a83c";
                    (parent as HTMLAnchorElement).style.fontSize = "0.875rem";
                    (parent as HTMLAnchorElement).style.fontWeight = "600";
                  }
                }}
              />
            </a>
            <p className="text-xs mt-1 mb-3" style={{ color: "#7a6a5e" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-1.5">
              <a
                href="tel:09677963243"
                className="flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3a83c] rounded"
                style={{ color: "#7a6a5e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a3a83c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6a5e"; }}
              >
                <Icon path={mdiPhone} size={0.55} aria-hidden="true" />0967 796 3243
              </a>
              <a
                href="mailto:heybrewcafeph@gmail.com"
                className="flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3a83c] rounded"
                style={{ color: "#7a6a5e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a3a83c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6a5e"; }}
              >
                <Icon path={mdiEmailOutline} size={0.55} aria-hidden="true" />heybrewcafeph@gmail.com
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3a83c] rounded"
                style={{ color: "#7a6a5e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#edddd0"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6a5e"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #3a2e28" }}
        >
          <p className="text-xs" style={{ color: "#4a3a32" }}>
            © {new Date().getFullYear()} Hey Brew Cafe PH. A Modern Heritage Brew.
          </p>
          <p className="text-xs" style={{ color: "#4a3a32" }}>
            Website by{" "}
            <a
              href="https://www.facebook.com/GenXcript"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3a83c] rounded"
              style={{ color: "#7a6a5e" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a3a83c"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6a5e"; }}
            >
              GenXcript
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
