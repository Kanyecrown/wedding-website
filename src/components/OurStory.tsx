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
            What began as a shared desire to serve God became a journey that neither of us could have imagined—a story of faith, friendship, and a love that continues to grow every day.
          </p>
        </div>

        {/* Right column: Asymmetric Timeline Narrative */}
        <div className="lg:col-span-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="font-caps text-xs tracking-widest text-gold">THE SANCTUARY MEET</span>
              <h3 className="text-2xl font-display text-primary">A Grace-Filled Beginning</h3>
              <p className="text-primary/80 leading-relaxed font-light">
                Our paths first crossed in the church choir, where Faith faithfully served as the choir coordinator. As Francis settled into a new church family, she was the first to welcome him with warmth and genuine kindness. That simple act of reaching out became the first page of a story only God could write.
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
              <h3 className="text-2xl font-display text-primary">Finding Confidence Together</h3>
              <p className="text-primary/80 leading-relaxed font-light">
                Behind Francis&apos; quiet smile was someone who struggled with stage fright and preferred to stay out of the spotlight. Faith saw beyond the silence. Through gentle conversations, patient encouragement, and her belief in his abilities, she helped him discover confidence he never knew he had. What began with questions about music slowly became conversations about life, purpose, and dreams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-12 space-y-4 bg-primary text-ivory p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-5 font-display text-[12rem] pointer-events-none translate-y-12 translate-x-6">
                &ldquo;
              </div>
              <span className="font-caps text-xs tracking-widest text-gold">FROM PRAISE TO PARTNERSHIP</span>
              <h3 className="text-2xl font-display text-gold-light">A Love Built on Faith</h3>
              <p className="text-ivory/80 leading-relaxed font-light max-w-2xl">
                Choir rehearsals turned into friendship, friendship grew into love, and love became a promise of forever. Through every season, Faith has been Francis&apos; greatest encouragement—steadfast, compassionate, and always inspiring him to become the best version of himself. Together, we&apos;ve learned that the strongest relationships are rooted not only in love, but in faith, grace, and the unwavering decision to walk life&apos;s journey hand in hand.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}