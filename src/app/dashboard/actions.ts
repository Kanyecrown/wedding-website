"use server";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function uploadMusic(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save exactly to public/song.mp3
    const publicDir = path.join(process.cwd(), "public");
    const filepath = path.join(publicDir, "song.mp3");

    await writeFile(filepath, buffer);
    
    // Revalidate the root layout or wherever the audio player is
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

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save image to public/images folder
    const filename = `gallery_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
    const publicDir = path.join(process.cwd(), "public", "images");
    const filepath = path.join(publicDir, filename);

    await writeFile(filepath, buffer);
    const url = `/images/${filename}`;

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
    // Delete from database
    await db.galleryImage.delete({ where: { id } });

    // Try to delete file
    try {
      const filepath = path.join(process.cwd(), "public", url);
      await unlink(filepath);
    } catch (fsError) {
      console.warn("Could not delete file:", fsError);
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
