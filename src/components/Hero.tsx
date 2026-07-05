"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position over a defined height (200vh gives ample room for the unfolding animation)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoothly transform values based on scroll progression
  const flapRotate = useTransform(scrollYProgress, [0, 0.4], [0, -180]);
  const envelopeTranslateY = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "110%"]);
  const letterScale = useTransform(scrollYProgress, [0, 0.5, 0.9], [0.9, 1, 1.05]);
  const sealOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-ivory-dark">
      {/* Sticky viewport frame to contain the interactive animation */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
        
        {/* BACKGROUND LAYER: The Love Letter (Francis to Faith) */}
        <motion.div 
          style={{ scale: letterScale }}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-ivory border border-gold/20 p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative z-10 mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Subtle line layout watermark */}
          <div className="absolute inset-y-0 left-12 md:left-24 w-px bg-gold/10 pointer-events-none" />
          
          <div className="flex justify-between items-start border-b border-gold/20 pb-6 mb-8">
            <div>
              <span className="font-caps text-[10px] tracking-super text-gold block">A COVENANT OF LOVE</span>
              <p className="font-display text-xl text-primary mt-1">To My Beloved, Faith</p>
            </div>
            <span className="font-caps text-xs tracking-widest opacity-40">15 . 08 . 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <p className="font-body text-lg text-primary/90 leading-relaxed italic">
                My Dearest Faith,
              </p>
              <p className="font-body text-lg text-primary/90 leading-relaxed italic">
                Loving you has been one of the greatest blessings of my life. Every day with you reminds me that true love is built through patience, kindness, laughter, and choosing each other again and again.
              </p>
              <p className="font-body text-lg text-primary/90 leading-relaxed italic">
                Thank you for believing in me, standing beside me, and filling my life with peace and purpose. You have become my safest place, my greatest encouragement, and the person I look forward to sharing every tomorrow with.
              </p>
              <p className="font-body text-lg text-primary/90 leading-relaxed italic">
                As we prepare to say &quot;I do,&quot; I promise to love you faithfully, support your dreams, protect your heart, and walk with you through every season God has prepared for us. I know our journey won&apos;t always be perfect, but I promise you&apos;ll never walk it alone.
              </p>
              <p className="font-body text-lg text-primary/90 leading-relaxed italic">
                I can&apos;t wait to begin forever with you.
              </p>
              <p className="font-script text-3xl text-gold pt-4 pl-4">With all my love,<br/><span className="text-4xl mt-2 block">Francis ❤️</span></p>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-64 border border-gold/30 p-2 bg-ivory shadow-md">
                <div className="w-full h-full bg-primary/5 relative overflow-hidden">
                  <Image 
                    src="/images/hero_portrait.jpg"
                    alt="Faith and Francis Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Wedding Core Details Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-gold/20 flex justify-between items-end">
            <div>
              <span className="font-caps text-[9px] tracking-widest text-gold block mb-1">THE MATRIMONY</span>
              <h1 className="text-2xl md:text-3xl font-display font-light text-primary">Faith & Francis</h1>
              <p className="text-xs opacity-60 font-light mt-1">Akamo Hotel, Ugbe Akoko, Ondo State</p>
            </div>
          </div>
        </motion.div>

        {/* FOREGROUND LAYER: Interactive Luxury Stationary Envelope */}
        <motion.div 
          style={{ translateY: envelopeTranslateY }}
          className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center p-4"
        >
          <div className="w-full max-w-4xl h-[550px] relative bg-primary shadow-[0_35px_60px_-15px_rgba(15,26,61,0.6)] flex flex-col justify-between p-8 md:p-12 border border-gold/30">
            
            {/* Structural Thin Gold Geometric Outlines */}
            <div className="absolute inset-4 border border-gold/10 pointer-events-none" />

            {/* Top Bar Navigation / Label */}
            <div className="w-full flex justify-between items-center z-30 text-gold font-caps text-[10px] tracking-super">
              <span>MEMORANDUM OF INTENT</span>
              <span className="animate-pulse text-ivory/60">SCROLL DOWN TO UNFOLD ↓</span>
            </div>

            {/* Centered Large Monogram Foil */}
            <div className="my-auto text-center z-30 space-y-2">
              <h2 className="font-display font-light text-4xl md:text-5xl tracking-widest text-ivory">F <span className="font-script text-gold">&</span> F</h2>
              <p className="font-caps text-[11px] tracking-super text-gold-light">THE INVITATION DECREE</p>
            </div>

            {/* Bottom Invitation metadata badge */}
            <div className="w-full flex justify-between items-end z-30 border-t border-gold/20 pt-4 text-ivory/60 font-caps text-[9px] tracking-widest">
              <span>ONDO STATE, NIGERIA</span>
              <span>AUGUST 15, 2026</span>
            </div>

            {/* ANIMATED FLAP: Folds upward via origin point manipulation */}
            <motion.div 
              style={{ 
                rotateX: flapRotate,
                transformOrigin: "top center",
                perspective: 1000 
              }}
              className="absolute inset-x-0 top-0 h-1/2 bg-primary-light border-b border-gold/30 z-40 flex items-end justify-center"
            >
              {/* Custom Monogram Foil Wax Seal instead of cheap heart clip-art */}
              <motion.div 
                style={{ opacity: sealOpacity }}
                className="w-14 h-14 rounded-full bg-gold border-2 border-gold-light shadow-xl translate-y-7 flex items-center justify-center z-50 text-primary font-caps text-xs font-bold"
              >
                ✦
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}