"use client";
import { useEffect, useState, FormEvent } from "react";

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await fetch("/api/guestbook");
    const data = await res.getReader ? [] : await res.json();
    if (Array.isArray(data)) setMessages(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setLoading(true);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: "", message: "" });
        await fetchMessages();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Input area */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="font-caps text-xs tracking-super text-gold block">GUESTBOOK</span>
            <h2 className="text-3xl font-display font-light text-primary mt-1">Leave a Blessing</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-primary font-body">
            <div>
              <label className="font-caps text-[9px] tracking-widest opacity-60 block">YOUR NAME</label>
              <input 
                type="text" 
                required
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full bg-transparent border-b border-gold/40 py-2 outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="font-caps text-[9px] tracking-widest opacity-60 block">WELL WISHES / MESSAGE</label>
              <textarea 
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full bg-transparent border-b border-gold/40 py-2 outline-none focus:border-primary text-sm resize-none"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="font-caps text-[11px] tracking-widest bg-primary text-ivory px-6 py-3 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              {loading ? "SENDING..." : "LEAVE WORDS"}
            </button>
          </form>
        </div>

        {/* Live feed wall displaying interaction */}
        <div className="lg:col-span-7 border-l border-gold/20 pl-0 lg:pl-12 h-96 overflow-y-auto space-y-6 pr-4">
          {messages.length === 0 ? (
            <p className="font-body italic text-sm opacity-40">No words left yet. Be the first to grace this wall.</p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="border-b border-gold/10 pb-4 space-y-1">
                <p className="font-body text-primary/90 text-sm italic">&ldquo;{msg.message}&rdquo;</p>
                <p className="font-caps text-[10px] tracking-widest text-gold">— {msg.name}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}