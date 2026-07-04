import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import Gifts from "@/components/Gifts";
import Guestbook from "@/components/Guestbook";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <EventDetails />
      <DressCode />
      <Gallery />
      <RSVPForm />
      <Guestbook />
      <Gifts />
      
      <footer className="py-12 bg-primary text-center text-ivory/40 border-t border-gold/10">
        <p className="font-caps text-xs tracking-super text-gold">F ✦ F</p>
        <p className="text-[11px] font-caps tracking-widest mt-2">15 AUGUST 2026 • AKAMO HOTEL, ONDO STATE</p>
      </footer>
    </main>
  );
}