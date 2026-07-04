"use client";
import { useState, FormEvent } from "react";

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

          {status.type && (
            <div className={`p-4 text-center font-caps text-xs tracking-widest border ${
              status.type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
            }`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}