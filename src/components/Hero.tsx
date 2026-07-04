"use client";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 py-12 md:p-24 bg-ivory overflow-hidden">
      {/* Decorative subtle layout grid lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-12 md:px-24">
        <div className="w-px h-full bg-gold/10" />
        <div className="w-px h-full bg-gold/10 hidden md:block" />
        <div className="w-px h-full bg-gold/10" />
      </div>

      <div className="w-full flex justify-between items-center z-10">
        <span className="font-caps tracking-super text-xs text-gold">F & F</span>
        <span className="font-caps tracking-widest text-xs opacity-60">15 . 08 . 2026</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-caps text-xs tracking-super text-gold block">CELEBRATING SACRED MATRIMONY</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary font-display font-light leading-none">
            Faith <br />
            <span className="font-script text-gold normal-case text-4xl md:text-6xl lg:text-7xl block my-2 pl-8">and</span> 
            Francis
          </h1>
          <p className="font-body text-xl md:text-2xl italic opacity-80 max-w-lg pt-4">
            &ldquo;A cord of three strands is not quickly broken.&rdquo; — Ecclesiastes 4:12
          </p>
        </div>
        
        <div className="lg:col-span-5 flex justify-center">
          {/* Main Couple Image Container styled with architectural arch */}
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] arch-frame border border-gold/40 p-3 bg-ivory shadow-xl">
            <div className="w-full h-full bg-primary/5 arch-frame flex items-center justify-center text-center p-6">
              <span className="font-caps text-xs tracking-widest opacity-40">
                [ PLACEHOLDER FOR MAIN PORTRAIT IMAGE ]<br/>
                <span className="text-[10px] lowercase block mt-2">aspect ratio: arch-frame cut</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-end pt-8 border-t border-gold/20 z-10">
        <div>
          <p className="font-caps text-xs tracking-widest text-gold mb-1">THE VENUE</p>
          <p className="font-display text-lg text-primary">Akamo Hotel, Ugbe Akoko</p>
          <p className="font-body text-sm opacity-60">Ondo State, Nigeria</p>
        </div>
        <div className="md:text-right">
          <Countdown targetDate="2026-08-15T12:00:00" />
        </div>
      </div>
    </section>
  );
}