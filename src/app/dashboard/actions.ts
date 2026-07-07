"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function uploadMusic(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) return { success: false, error: "No file provided" };

    const buffer = Buffer.from(await file.arrayBuffer());

    const { data, error } = await supabase.storage
      .from("media")
      .upload("song.mp3", buffer, { upsert: true, contentType: file.type });

    if (error) {
      console.error("Supabase Storage Error:", error);
      return { success: false, error: "Storage upload failed" };
    }
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to upload music:", error);
    return { success: false, error: "Failed to upload" };
  }
}

export async function uploadGalleryImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    const label = formData.get("label") as string;
    const ratio = formData.get("ratio") as string;
    
    if (!file) return { success: false, error: "No file provided" };

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `gallery_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;

    const { data, error } = await supabase.storage
      .from("media")
      .upload(filename, buffer, { contentType: file.type });

    if (error) {
      console.error("Supabase Storage Error:", error);
      return { success: false, error: "Storage upload failed" };
    }

    const { data: publicUrlData } = supabase.storage.from("media").getPublicUrl(filename);
    const url = publicUrlData.publicUrl;

    // Add to database
    await db.galleryImage.create({
      data: { url, label, ratio }
    });
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to upload image:", error);
    return { success: false, error: "Failed to upload" };
  }
}

export async function deleteGalleryImage(id: string, url: string) {
  try {
    await db.galleryImage.delete({ where: { id } });

    // Extract filename from URL (e.g. https://.../media/gallery_123.jpg -> gallery_123.jpg)
    const urlParts = url.split('/');
    const filename = urlParts[urlParts.length - 1];

    if (filename) {
      await supabase.storage.from("media").remove([filename]);
    }

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete image:", error);
    return { success: false, error: "Failed to delete" };
  }
}

export async function deleteGuestbookMessage(id: string) {
  try {
    await db.guestbookMessage.delete({ where: { id } });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete message:", error);
    return { success: false, error: "Failed to delete" };
  }
}
