"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-linen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="weave-texture absolute inset-0 opacity-30" />
          <div className="relative flex flex-col items-center">
            <svg viewBox="0 0 120 60" className="h-16 w-32 text-forest" fill="none">
              <motion.path
                d="M6 50C26 18 44 42 60 30S94 6 114 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="114"
                cy="14"
                r="3"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.25, type: "spring", stiffness: 300 }}
              />
            </svg>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="notranslate mt-4 flex flex-col items-center"
              translate="no"
            >
              <span className="font-display text-2xl tracking-tight text-forest">Stof tot Leven</span>
              <span className="mt-1 text-[0.6rem] uppercase tracking-[0.4em] text-forest/60">by Hatish</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
