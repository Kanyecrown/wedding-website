import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, attending, guestCount, dietary } = body;

    if (!name || !email || attending === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const rsvp = await db.rsvp.create({
      data: {
        name,
        email,
        attending: Boolean(attending),
        guestCount: parseInt(guestCount) || 1,
        dietary: dietary || null,
      },
    });

    return NextResponse.json({ success: true, data: rsvp }, { status: 201 });
  } catch (error) {
    console.error("RSVP Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}