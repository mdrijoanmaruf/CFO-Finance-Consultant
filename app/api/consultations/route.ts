import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Consultation from "@/models/Consultation";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const { name, organization, designation, email, phone, areaOfInterest, requirement } = body;

    if (!name || !organization || !designation || !email || !phone || !areaOfInterest || !requirement) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const consultation = await Consultation.create({
      name,
      organization,
      designation,
      email,
      phone,
      areaOfInterest,
      requirement,
      source: "website",
    });

    return NextResponse.json(
      { success: true, data: consultation, message: "Consultation request submitted successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error submitting consultation:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit consultation request." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const consultations = await Consultation.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: consultations });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch consultations." },
      { status: 500 }
    );
  }
}
