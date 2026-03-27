"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300, delay: 0.1 }}
            href={`tel:${siteConfig.phone}`}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-card text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
