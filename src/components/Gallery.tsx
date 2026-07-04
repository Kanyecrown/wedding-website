"use client";
import { useState } from "react";

const PLACEHOLDER_PHOTOS = [
  { id: 1, label: "Engagement Portrait I", ratio: "aspect-[3/4]" },
  { id: 2, label: "Studio Moment II", ratio: "aspect-square" },
  { id: 3, label: "The Promise III", ratio: "aspect-[3/4]" },
  { id: 4, label: "Devotion IV", ratio: "aspect-[4/3]" },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<typeof PLACEHOLDER_PHOTOS[0] | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-caps text-xs tracking-super text-gold block">VISUAL CHRONICLES</span>
          <h2 className="text-4xl font-display font-light text-primary mt-2">Gallery</h2>
        </div>

        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PLACEHOLDER_PHOTOS.map((photo, idx) => (
            <div 
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`group cursor-pointer bg-primary/5 p-3 border border-gold/10 hover:border-gold/60 transition-all duration-300 ${photo.ratio} ${
                idx === 1 ? "lg:translate-y-12" : idx === 3 ? "lg:-translate-y-8" : ""
              }`}
            >
              <div className="w-full h-full bg-ivory flex flex-col items-center justify-center p-6 text-center transition-all group-hover:bg-ivory-dark">
                <span className="font-caps text-[11px] tracking-widest opacity-40 group-hover:opacity-80 transition-opacity">
                  {photo.label}
                </span>
                <span className="text-[9px] block text-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  View Detail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div className="max-w-2xl w-full p-4 bg-ivory border border-gold text-center space-y-6">
            <div className="w-full h-96 bg-primary/5 flex items-center justify-center">
              <span className="font-caps text-xs tracking-widest opacity-60 text-primary">
                IMAGE PLACEHOLDER FOR: {activePhoto.label}
              </span>
            </div>
            <button className="font-caps text-xs tracking-widest text-gold hover:text-primary transition-colors">
              CLOSE VIEW
            </button>
          </div>
        </div>
      )}
    </section>
  );
}