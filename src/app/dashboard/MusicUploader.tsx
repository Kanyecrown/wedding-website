"use client";
import { useState } from "react";
import { uploadMusic } from "./actions";

export default function MusicUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes("audio")) {
      setMessage("Please upload an audio file (like .mp3)");
      return;
    }

    setIsUploading(true);
    setMessage("Uploading...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadMusic(formData);
      if (result.success) {
        setMessage("Success! Your music has been updated.");
      } else {
        setMessage("Error uploading file.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="mt-8 p-6 border border-gold/40 bg-white/50 rounded-lg">
      <h2 className="font-display text-2xl text-primary mb-2">Background Music</h2>
      <p className="font-body text-sm opacity-70 mb-4">Upload the song that plays when guests click the play button. (MP3 recommended)</p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <label className="relative cursor-pointer bg-primary text-gold px-6 py-3 font-caps text-xs tracking-widest hover:bg-primary/90 transition-colors">
          <span>{isUploading ? "UPLOADING..." : "CHOOSE AUDIO FILE"}</span>
          <input 
            type="file" 
            accept="audio/*" 
            className="hidden" 
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </label>
        {message && (
          <span className={`font-caps text-xs tracking-widest ${message.includes("Success") ? "text-green-700" : "text-red-700"}`}>
            {message}
          </span>
        )}
      </div>
    </div>
  );
}
