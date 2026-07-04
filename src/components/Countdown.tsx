"use client";
import { useEffect, useState } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-display">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center bg-primary-light/50 border border-gold/30 p-6 min-w-[120px] shadow-lg">
          <span className="text-4xl md:text-6xl font-light text-ivory tracking-wider block mb-2">{String(value).padStart(2, "0")}</span>
          <span className="block font-caps text-xs tracking-widest text-gold uppercase">{label}</span>
        </div>
      ))}
    </div>
  );
}