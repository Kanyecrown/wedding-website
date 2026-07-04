import { db } from "@/lib/db";
import { headers } from "next/headers";

// Simple Production Security: Password Authorization Guard via HTTP Basic Auth headers or search query
export const dynamic = "force-dynamic";

export default async function DashboardPage({ searchParams }: { searchParams: { pass?: string } }) {
  // Simple protection method using URL parameter verification (e.g., /dashboard?pass=FaithFrancis2026)
  const ACCESS_PASSWORD = process.env.ADMIN_PASSWORD || "FaithFrancis2026";
  
  if (searchParams.pass !== ACCESS_PASSWORD) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center font-caps text-xs tracking-widest text-red-800">
        UNAUTHORIZED VIEW ACCESS RESTRICTED.
      </div>
    );
  }

  const rsvps = await db.rsvp.findMany({ orderBy: { createdAt: "desc" } });
  const attendingCount = rsvps.filter(r => r.attending).reduce((acc, curr) => acc + curr.guestCount, 0);

  return (
    <div className="p-8 md:p-16 bg-ivory min-h-screen text-primary">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-gold/40 pb-4">
          <div>
            <span className="font-caps text-xs text-gold tracking-widest">MANAGEMENT CENTRAL</span>
            <h1 className="font-display text-3xl">RSVP Registry Dossier</h1>
          </div>
          <div className="text-right font-caps text-xs">
            Total Confirmed Guests: <span className="text-xl text-gold font-display font-bold">{attendingCount}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm border-collapse">
            <thead>
              <tr className="font-caps text-[10px] tracking-widest border-b border-gold/20 text-gold">
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Status</th>
                <th className="py-3">Count</th>
                <th className="py-3">Dietary/Notes</th>
              </tr>
            </thead>
            <tbody>
              {rsvps.map((rsvp) => (
                <tr key={rsvp.id} className="border-b border-gold/10 hover:bg-gold/5 transition-colors">
                  <td className="py-4 font-medium">{rsvp.name}</td>
                  <td className="py-4 opacity-70">{rsvp.email}</td>
                  <td className="py-4 font-caps text-xs">
                    {rsvp.attending ? (
                      <span className="text-green-700">Attending</span>
                    ) : (
                      <span className="text-red-700">Declined</span>
                    )}
                  </td>
                  <td className="py-4">{rsvp.guestCount}</td>
                  <td className="py-4 opacity-70 italic max-w-xs truncate">{rsvp.dietary || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}