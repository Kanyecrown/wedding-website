"use client";
import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  id: string;
  url: string;
  label: string;
  ratio: string;
};

// Fallback photos if database is empty
const FALLBACK_PHOTOS: GalleryImage[] = [
  { id: "1", label: "Engagement Portrait I", ratio: "aspect-[3/4]", url: "/images/hero_portrait.jpg" },
  { id: "2", label: "The Sanctuary Meet", ratio: "aspect-square", url: "/images/choir_moment.jpg" },
  { id: "3", label: "The Promise III", ratio: "aspect-[3/4]", url: "/images/the_promise.jpg" },
  { id: "4", label: "Devotion IV", ratio: "aspect-[4/3]", url: "/images/devotion_portrait.jpg" },
];

export default function Gallery({ initialImages = [] }: { initialImages?: GalleryImage[] }) {
  const [activePhoto, setActivePhoto] = useState<GalleryImage | null>(null);

  const photos = initialImages.length > 0 ? initialImages : FALLBACK_PHOTOS;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-caps text-xs tracking-super text-gold block">VISUAL CHRONICLES</span>
          <h2 className="text-4xl font-display font-light text-primary mt-2">Gallery</h2>
        </div>

        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {photos.map((photo, idx) => (
            <div 
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`group cursor-pointer bg-primary/5 p-3 border border-gold/10 hover:border-gold/60 transition-all duration-300 ${photo.ratio} relative ${
                idx === 1 ? "lg:translate-y-12" : idx === 3 ? "lg:-translate-y-8" : ""
              }`}
            >
              <div className="w-full h-full relative overflow-hidden">
                <Image 
                  src={photo.url} 
                  alt={photo.label} 
                  fill 
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <span className="font-caps text-[11px] tracking-widest text-ivory">
                    {photo.label}
                  </span>
                  <span className="text-[9px] block text-gold mt-2 uppercase tracking-widest">
                    View Detail
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="max-w-5xl w-full bg-ivory p-4 border border-gold/30 text-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing
          >
            <div className="w-full relative bg-primary/5 mb-4" style={{ height: '75vh' }}>
              <Image 
                src={activePhoto.url} 
                alt={activePhoto.label} 
                fill 
                className="object-contain" 
              />
            </div>
            
            <div className="flex justify-between items-center px-4">
              <span className="font-caps text-xs tracking-widest text-primary/60">
                {activePhoto.label}
              </span>
              <button 
                onClick={() => setActivePhoto(null)}
                className="font-caps text-xs tracking-widest bg-primary text-ivory px-6 py-2 hover:bg-gold transition-colors"
              >
                CLOSE VIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}