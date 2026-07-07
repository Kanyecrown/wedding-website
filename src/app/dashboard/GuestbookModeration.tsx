"use client";
import { useState } from "react";
import { deleteGuestbookMessage } from "./actions";

type Message = {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
};

export default function GuestbookModeration({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  async function handleDelete(id: string) {
    const confirmDelete = confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    const result = await deleteGuestbookMessage(id);
    if (result.success) {
      setMessages(messages.filter((m) => m.id !== id));
    } else {
      alert("Failed to delete message");
    }
  }

  return (
    <div className="mt-8 p-6 border border-gold/40 bg-white/50 rounded-lg">
      <h2 className="font-display text-2xl text-primary mb-2">Guestbook Moderation</h2>
      <p className="font-body text-sm opacity-70 mb-4">Review and remove inappropriate messages from the guestbook.</p>
      
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="border border-gold/20 bg-ivory p-4 flex justify-between items-start gap-4">
            <div>
              <p className="font-caps text-xs tracking-widest text-gold mb-1">{msg.name}</p>
              <p className="font-body text-sm text-primary opacity-80">{msg.message}</p>
              <p className="text-[9px] font-caps opacity-50 mt-2">{new Date(msg.createdAt).toLocaleString()}</p>
            </div>
            <button 
              onClick={() => handleDelete(msg.id)}
              className="bg-red-600/10 text-red-700 hover:bg-red-600 hover:text-white px-3 py-1 text-[10px] font-caps transition-colors border border-red-600/20"
            >
              DELETE
            </button>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-sm opacity-50 italic">No messages in the guestbook yet.</p>
        )}
      </div>
    </div>
  );
}
