"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNavItems } from "@/data/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-black/[0.04]"
        aria-label="Open menu"
      >
        <Menu className="h-[18px] w-[18px]" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-4 right-4 top-4 z-50 overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-2 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between p-3">
                <span className="text-sm font-semibold text-primary">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/[0.04]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-0.5 p-1">
                {mainNavItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-3 pt-1">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-primary py-3 text-center text-sm font-medium text-white"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
