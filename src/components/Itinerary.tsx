"use client";
import { motion } from "framer-motion";

const EVENTS = [
  { time: "11:30 AM", title: "Guest Arrival", desc: "Please arrive and find your seats as we prepare for the beautiful ceremony to begin." },
  { time: "12:00 PM", title: "The Solemnization", desc: "The exchange of vows and rings in holy matrimony. Please keep phones silent." },
  { time: "1:30 PM", title: "Photographs", desc: "Brief photo session with the couple, immediate family, and bridal party." },
  { time: "2:00 PM", title: "Reception & Dinner", desc: "A grand celebration with food, joyful music, dancing, and heartfelt toasts." }
];

export default function Itinerary() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory text-primary border-t border-gold/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="font-caps text-xs tracking-super text-gold block">ORDER OF EVENTS</span>
          <h2 className="text-3xl md:text-4xl font-display font-light">Wedding Day Itinerary</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="relative border-l border-gold/30 ml-4 md:ml-12 space-y-12 pb-8">
          {EVENTS.map((event, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              key={i} 
              className="relative pl-8 md:pl-16 group"
            >
              <div className="absolute w-3 h-3 bg-ivory border-2 border-gold rounded-full -left-[6px] top-1.5 group-hover:bg-gold transition-colors duration-300 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 mb-2">
                <span className="font-display text-xl text-gold-dark md:min-w-[100px]">{event.time}</span>
                <h4 className="font-caps tracking-widest text-sm font-bold">{event.title}</h4>
              </div>
              <p className="opacity-70 font-light max-w-lg md:ml-[132px]">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
