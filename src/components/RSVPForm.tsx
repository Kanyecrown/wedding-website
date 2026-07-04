"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVPForm() {
  const [form, setForm] = useState({ name: "", email: "", attending: "true", guestCount: "1", dietary: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          attending: form.attending === "true",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ type: "success", message: "Your response has been honorably received." });
      setForm({ name: "", email: "", attending: "true", guestCount: "1", dietary: "" });
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 px-6 md:px-12 lg:px-24 bg-ivory border-t border-gold/10">
      <div className="max-w-xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <span className="font-caps text-xs tracking-super text-gold block">R.S.V.P</span>
          <h2 className="text-4xl font-display font-light text-primary">Confirm Attendance</h2>
          <p className="font-body italic text-sm text-primary/60">Kindly respond by August 1st, 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-body text-primary">
          <div className="space-y-1">
            <label className="font-caps text-[10px] tracking-widest opacity-60 block">FULL NAME</label>
            <input 
              type="text" 
              required
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="w-full bg-transparent border-b border-gold/40 focus:border-primary py-2 outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="font-caps text-[10px] tracking-widest opacity-60 block">EMAIL ADDRESS</label>
            <input 
              type="email" 
              required
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full bg-transparent border-b border-gold/40 focus:border-primary py-2 outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-caps text-[10px] tracking-widest opacity-60 block">ATTENDANCE</label>
              <select 
                value={form.attending}
                onChange={(e) => setForm({...form, attending: e.target.value})}
                className="w-full bg-transparent border-b border-gold/40 focus:border-primary py-2 outline-none transition-colors"
              >
                <option value="true">Accepts with Joy</option>
                <option value="false">Declines with Regret</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-caps text-[10px] tracking-widest opacity-60 block">GUESTS COUNT</label>
              <input 
                type="number" 
                min="1" 
                max="5"
                value={form.guestCount}
                onChange={(e) => setForm({...form, guestCount: e.target.value})}
                className="w-full bg-transparent border-b border-gold/40 focus:border-primary py-2 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-caps text-[10px] tracking-widest opacity-60 block">DIETARY OR SPECIAL NOTES (OPTIONAL)</label>
            <input 
              type="text" 
              value={form.dietary}
              onChange={(e) => setForm({...form, dietary: e.target.value})}
              className="w-full bg-transparent border-b border-gold/40 focus:border-primary py-2 outline-none transition-colors"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-ivory font-caps text-xs tracking-widest py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "TRANSMITTING..." : "SUBMIT RESPONSES"}
          </button>

          {status.type === "error" && (
            <div className="p-4 text-center font-caps text-xs tracking-widest border bg-red-50 border-red-200 text-red-800">
              {status.message}
            </div>
          )}
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {status.type === "success" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md w-full bg-ivory p-10 md:p-14 text-center border border-gold/40 shadow-2xl relative overflow-hidden"
            >
              <div className="w-16 h-16 mx-auto bg-gold text-primary rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-display text-primary mb-4">Joyfully Received</h3>
              <p className="font-light text-primary/80 leading-relaxed">
                {status.message} We cannot wait to celebrate this special day with you!
              </p>
              <button 
                onClick={() => setStatus({ type: null, message: "" })}
                className="mt-10 font-caps text-[10px] tracking-widest text-gold hover:text-primary transition-colors pb-1 border-b border-gold/40 hover:border-primary"
              >
                RETURN TO INVITATION
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}