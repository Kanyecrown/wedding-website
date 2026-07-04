"use client";
import Countdown from "./Countdown";

export default function CountdownSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-ivory border-y border-gold/10 relative overflow-hidden">
      {/* Subtle Background Ornamentation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border-[1px] border-gold" />
        <div className="w-[600px] h-[600px] rounded-full border-[1px] border-gold absolute" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div>
          <span className="font-caps text-xs tracking-super text-gold block">THE COUNTDOWN</span>
          <h2 className="text-4xl md:text-5xl font-display font-light mt-4">Until Forever Begins</h2>
        </div>
        
        <div className="w-12 h-px bg-gold mx-auto my-8" />
        
        <div className="pt-8">
          <Countdown targetDate="2026-08-15T12:00:00" />
        </div>
      </div>
    </section>
  );
}
