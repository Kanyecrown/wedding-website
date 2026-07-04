"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  { q: "Is there parking available?", a: "Yes, safe and secure parking is available on-site at the Akamo Hotel for all wedding guests." },
  { q: "Are children allowed?", a: "While we love your little ones, our wedding will be an adults-only celebration to allow all guests to relax and enjoy the evening." },
  { q: "What is the exact dress code?", a: "The dress code is strictly Formal or Traditional elegant wear. We kindly ask our guests to observe the colors of the day if possible." },
  { q: "When should I arrive?", a: "Please arrive at 11:30 AM to find your seats and settle in before the Solemnization begins promptly at 12:00 PM." },
  { q: "Will the reception be at the same location?", a: "Yes, the reception will take place immediately after the ceremony at the exact same venue (Akamo Hotel) for your convenience." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary-light text-primary border-t border-gold/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <span className="font-caps text-xs tracking-super text-gold block">GUEST INFORMATION</span>
          <h2 className="text-3xl md:text-4xl font-display font-light">Questions &amp; Answers</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gold/20 bg-ivory shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gold/5 transition-colors"
              >
                <span className="font-caps tracking-widest text-xs md:text-sm font-bold text-primary">{faq.q}</span>
                <span className="text-gold text-2xl font-light leading-none">{openIndex === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 opacity-80 font-light leading-relaxed border-t border-gold/10 mx-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
