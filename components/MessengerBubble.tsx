"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiFacebookMessenger } from "@mdi/js";

export default function MessengerBubble() {
  return (
    <motion.a
      href="https://m.me/HeyBrewPH"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hey Brew on Messenger"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084ff]"
      style={{ background: "linear-gradient(135deg, #00c6ff 0%, #0084ff 100%)", borderRadius: "50%" }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.12, y: 0, boxShadow: "0 12px 32px rgba(0,132,255,0.45)", transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.93 }}
    >
      <Icon path={mdiFacebookMessenger} size={1.4} color="#ffffff" aria-hidden="true" />
    </motion.a>
  );
}
