"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using Supabase Storage URL for the uploaded song
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    audioRef.current = new Audio(`${supabaseUrl}/storage/v1/object/public/media/song.mp3`);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed due to browser policies", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {isPlaying && (
        <motion.span 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-caps text-[9px] tracking-widest text-gold bg-primary/80 backdrop-blur-md px-3 py-1.5 border border-gold/20 shadow-lg"
        >
          NOW PLAYING: OUR SONG
        </motion.span>
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center border border-gold/40 shadow-2xl transition-colors duration-500 ${
          isPlaying ? "bg-gold text-primary" : "bg-primary/90 text-gold backdrop-blur-md"
        }`}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-1">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>
        )}
      </motion.button>
    </div>
  );
}
