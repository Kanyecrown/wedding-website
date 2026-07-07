"use client";

type Rsvp = {
  id: string;
  name: string;
  email: string;
  attending: boolean;
  guestCount: number;
  dietary: string | null;
  createdAt: Date;
};

export default function RsvpActions({ rsvps }: { rsvps: Rsvp[] }) {
  const downloadCSV = () => {
    const headers = ["Name", "Email", "Status", "Guest Count", "Dietary Notes", "Date RSVPd"];
    const rows = rsvps.map(r => [
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.email.replace(/"/g, '""')}"`,
      r.attending ? "Attending" : "Declined",
      r.guestCount,
      `"${(r.dietary || "").replace(/"/g, '""')}"`,
      new Date(r.createdAt).toLocaleDateString()
    ]);
    
    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "wedding_rsvps.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={downloadCSV}
      className="font-caps text-xs tracking-widest bg-gold text-primary px-6 py-2 hover:bg-gold/80 transition-colors"
    >
      DOWNLOAD CSV EXPORT
    </button>
  );
}
