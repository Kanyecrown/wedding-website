import { db } from "@/lib/db";
import { headers } from "next/headers";
import MusicUploader from "./MusicUploader";
import GalleryManager from "./GalleryManager";
import GuestbookModeration from "./GuestbookModeration";
import RsvpActions from "./RsvpActions";

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
  const declinedCount = rsvps.filter(r => !r.attending).length;
  const dietaryCount = rsvps.filter(r => r.attending && r.dietary && r.dietary.trim().length > 0).length;

  const guestbookMessages = await db.guestbookMessage.findMany({ orderBy: { createdAt: "desc" } });

  // We fetch gallery images. If the table doesn't exist yet (because they haven't restarted), we catch the error and return empty.
  let galleryImages: any[] = [];
  try {
    // Using any for now to avoid TS errors if Prisma client hasn't regenerated
    galleryImages = await (db as any).galleryImage.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("GalleryImage table not found or Prisma not generated yet.", e);
  }

  return (
    <div className="p-8 md:p-16 bg-ivory min-h-screen text-primary">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gold/40 pb-4 gap-4">
          <div>
            <span className="font-caps text-xs text-gold tracking-widest">MANAGEMENT CENTRAL</span>
            <h1 className="font-display text-3xl mt-1">Wedding Dashboard</h1>
          </div>
          <div className="flex gap-4 items-center">
            <RsvpActions rsvps={rsvps} />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/50 border border-gold/20 p-6 flex flex-col justify-center items-center text-center">
            <span className="font-caps text-[10px] tracking-widest opacity-70">Total Guests Attending</span>
            <span className="font-display text-4xl text-gold mt-2">{attendingCount}</span>
          </div>
          <div className="bg-white/50 border border-gold/20 p-6 flex flex-col justify-center items-center text-center">
            <span className="font-caps text-[10px] tracking-widest opacity-70">Total Declined RSVPs</span>
            <span className="font-display text-4xl text-red-800/80 mt-2">{declinedCount}</span>
          </div>
          <div className="bg-white/50 border border-gold/20 p-6 flex flex-col justify-center items-center text-center">
            <span className="font-caps text-[10px] tracking-widest opacity-70">Dietary Restrictions Noted</span>
            <span className="font-display text-4xl text-primary mt-2">{dietaryCount}</span>
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

        <GuestbookModeration initialMessages={guestbookMessages} />

        <GalleryManager initialImages={galleryImages} />

        <MusicUploader />
      </div>
    </div>
  );
}