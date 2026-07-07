"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past the Hero section (approx 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex flex-col gap-3"
        >
          <button
            onClick={() => scrollToSection("rsvp")}
            className="bg-primary text-ivory font-caps text-[10px] tracking-widest px-6 py-3 border border-gold/40 shadow-xl hover:bg-gold hover:text-primary transition-all duration-300"
          >
            RSVP NOW
          </button>
          
          <button
            onClick={() => scrollToSection("gifts")}
            className="bg-ivory text-primary font-caps text-[10px] tracking-widest px-6 py-3 border border-gold/40 shadow-xl hover:bg-primary hover:text-ivory transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>GIFT REGISTRY</span>
            <span className="text-gold">✦</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
