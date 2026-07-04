"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory-dark border-y border-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left column: Sticky Editorial Titles */}
        <div className="lg:col-span-4 lg:sticky lg:top-12 space-y-4">
          <span className="font-caps text-xs tracking-super text-gold block">CHAPTER ONE</span>
          <h2 className="text-4xl md:text-5xl font-display text-primary font-light">Our Story</h2>
          <div className="w-12 h-px bg-gold my-6" />
          <p className="font-body italic text-lg text-primary/70">
            How a shared devotion brought two spirits together under the harmony of grace.
          </p>
        </div>

        {/* Right column: Asymmetric Timeline Narrative */}
        <div className="lg:col-span-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="font-caps text-xs tracking-widest text-gold">THE SANCTUARY MEET</span>
              <h3 className="text-2xl font-display text-primary">A Harmonious Welcome</h3>
              <p className="text-primary/80 leading-relaxed font-light">
                They first met within the walls of the church choir. Faith, serving diligently as the choir coordinator, was the very first person to reach out to Francis when he began attending. Recognizing something special, she approached him with gentle curiosity.
              </p>
            </div>
            <div className="md:col-span-5 h-64 bg-primary/5 border border-gold/20 p-2">
              <div className="w-full h-full relative overflow-hidden">
                <Image src="/images/choir_moment.jpg" alt="Faith in the choir" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 h-64 bg-primary/5 border border-gold/20 p-2 order-last md:order-first">
              <div className="w-full h-full relative overflow-hidden">
                <Image src="/images/francis_portrait.jpg" alt="Francis portrait" fill className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="font-caps text-xs tracking-widest text-gold">OVERCOMING THE STAGE</span>
              <h3 className="text-2xl font-display text-primary">Behind the Shy Demeanor</h3>
              <p className="text-primary/80 leading-relaxed font-light">
                Francis was remarkably quiet, paralyzed by heavy stage fright and a dislike for being put on the spot. Faith quietly and intentionally drew him out, enquiring gently about what musical instruments he played and whether he could sing, giving him a safe environment to flourish.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-12 space-y-4 bg-primary text-ivory p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-5 font-display text-[12rem] pointer-events-none translate-y-12 translate-x-6">
                &ldquo;
              </div>
              <span className="font-caps text-xs tracking-widest text-gold">FROM PRAISE TO PARTNERSHIP</span>
              <h3 className="text-2xl font-display text-gold-light">A Love Grounded in Strength</h3>
              <p className="text-ivory/80 leading-relaxed font-light max-w-2xl">
                What began in weekly choir practices blossomed quietly into a deep-seated friendship, and ultimately, love. For Francis, Faith became his unyielding rock—a strong, deeply encouraging woman who consistently watches out for his steps and masterfully pushes him to unlock his greatest potential.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}