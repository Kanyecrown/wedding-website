"use client";
import { useState } from "react";
import { uploadGalleryImage, deleteGalleryImage } from "./actions";
import Image from "next/image";

type GalleryImage = {
  id: string;
  url: string;
  label: string;
  ratio: string;
};

export default function GalleryManager({ initialImages }: { initialImages: GalleryImage[] }) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  const [label, setLabel] = useState("");
  const [ratio, setRatio] = useState("aspect-square");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !label) {
      setMessage("Please provide an image and a label.");
      return;
    }

    setIsUploading(true);
    setMessage("Uploading...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("label", label);
    formData.append("ratio", ratio);

    const result = await uploadGalleryImage(formData);
    if (result.success) {
      setMessage("Success! Image added to gallery. Please refresh the page to see it.");
      setLabel("");
    } else {
      setMessage("Error uploading file.");
    }
    setIsUploading(false);
  }

  async function handleDelete(id: string, url: string) {
    const confirmDelete = confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    const result = await deleteGalleryImage(id, url);
    if (result.success) {
      setImages(images.filter((img) => img.id !== id));
    } else {
      alert("Failed to delete image");
    }
  }

  return (
    <div className="mt-8 p-6 border border-gold/40 bg-white/50 rounded-lg">
      <h2 className="font-display text-2xl text-primary mb-2">Gallery Management</h2>
      <p className="font-body text-sm opacity-70 mb-4">Upload and manage photos for your wedding gallery.</p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-ivory p-4 border border-gold/20">
        <input 
          type="text" 
          placeholder="Image Label (e.g. Engagement Shot)" 
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="border border-gold/40 p-2 text-sm flex-grow"
        />
        <select 
          value={ratio} 
          onChange={(e) => setRatio(e.target.value)}
          className="border border-gold/40 p-2 text-sm"
        >
          <option value="aspect-square">Square (1:1)</option>
          <option value="aspect-[3/4]">Portrait (3:4)</option>
          <option value="aspect-[4/3]">Landscape (4:3)</option>
          <option value="aspect-video">Widescreen (16:9)</option>
        </select>
        <label className={`cursor-pointer bg-primary text-gold px-6 py-2 font-caps text-xs tracking-widest text-center transition-colors ${!label ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"}`}>
          <span>{isUploading ? "UPLOADING..." : "UPLOAD PHOTO"}</span>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleFileChange}
            disabled={isUploading || !label}
          />
        </label>
      </div>
      
      {message && (
        <div className={`mb-6 font-caps text-xs tracking-widest ${message.includes("Success") ? "text-green-700" : "text-red-700"}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative group border border-gold/20 bg-ivory p-2">
            <div className={`relative w-full ${img.ratio} bg-gray-100 overflow-hidden`}>
              <Image src={img.url} alt={img.label} fill className="object-cover" />
            </div>
            <p className="text-xs font-caps tracking-widest mt-2 truncate">{img.label}</p>
            <button 
              onClick={() => handleDelete(img.id, img.url)}
              className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-[10px] font-caps opacity-0 group-hover:opacity-100 transition-opacity"
            >
              DELETE
            </button>
          </div>
        ))}
        {images.length === 0 && (
          <p className="col-span-full text-sm opacity-50 italic">No images in the gallery yet.</p>
        )}
      </div>
    </div>
  );
}
