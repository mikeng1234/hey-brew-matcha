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
      style={{ background: "#030e07", borderTop: "1px solid #142a1c" }}
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
                style={{ filter: "brightness(0) saturate(100%) invert(44%) sepia(82%) saturate(479%) hue-rotate(96deg) brightness(92%) contrast(101%)" }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.textContent = "HEY BREW CAFE PH";
                    (parent as HTMLAnchorElement).style.color = "#00aa5f";
                    (parent as HTMLAnchorElement).style.fontSize = "0.875rem";
                    (parent as HTMLAnchorElement).style.fontWeight = "600";
                  }
                }}
              />
            </a>
            <p className="text-xs mt-1 mb-3" style={{ color: "#506458" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-1.5">
              <a
                href="tel:09677963243"
                className="flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] rounded"
                style={{ color: "#506458" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00aa5f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#506458"; }}
              >
                <Icon path={mdiPhone} size={0.55} aria-hidden="true" />0967 796 3243
              </a>
              <a
                href="mailto:heybrewcafeph@gmail.com"
                className="flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] rounded"
                style={{ color: "#506458" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00aa5f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#506458"; }}
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
                className="text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] rounded"
                style={{ color: "#506458" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0eae5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#506458"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #142a1c" }}
        >
          <p className="text-xs" style={{ color: "#2a4332" }}>
            © {new Date().getFullYear()} Hey Brew Cafe PH. A Modern Heritage Brew.
          </p>
          <p className="text-xs" style={{ color: "#2a4332" }}>
            Website by{" "}
            <a
              href="https://www.facebook.com/GenXcript"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00aa5f] rounded"
              style={{ color: "#506458" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00aa5f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#506458"; }}
            >
              GenXcript
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
