"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=";

const PHOTOS = [
  { src: "/images/samples/sample1.jpg",  span: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2", sizes: "(max-width: 768px) 50vw, 50vw" },
  { src: "/images/samples/sample2.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample3.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample4.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample5.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample6.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample7.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample8.jpg",  span: "col-span-1 row-span-1 lg:col-span-2", sizes: "(max-width: 768px) 50vw, 50vw" },
  { src: "/images/samples/sample9.jpg",  span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample10.jpg", span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample11.jpg", span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/samples/sample12.jpg", span: "col-span-1 row-span-1", sizes: "(max-width: 768px) 50vw, 25vw" },
];

export default function Gallery() {
  return (
    <section
      className="py-28"
      style={{ background: "#030e07", borderTop: "1px solid #142a1c" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00aa5f", fontFamily: "var(--font-dm-sans)" }}
          >
            Event Snapshots
          </p>
          <h2
            className="font-normal leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#f0eae5",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-dm-serif)",
            }}
          >
            Hey Brew at your event.
            <br />
            <em style={{ color: "#d1de47", fontStyle: "italic" }}>Every cup, a memory.</em>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" style={{ gridAutoRows: "180px" }}>
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`relative overflow-hidden group ${photo.span}`}
              style={{ borderRadius: "16px", background: "#091810" }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <Image
                src={photo.src}
                alt={`Hey Brew event photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={photo.sizes}
                placeholder="blur"
                blurDataURL={BLUR}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
              />
              {/* Emerald-tinted hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,40,20,0.35)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
