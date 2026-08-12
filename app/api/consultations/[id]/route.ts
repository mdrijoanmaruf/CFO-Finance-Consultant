import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/db";
import Consultation from "@/models/Consultation";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.is_admin) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await dbConnect();
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const body = await req.json();

    const consultation = await Consultation.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return NextResponse.json(
        { success: false, error: "Consultation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: consultation });
  } catch (error: any) {
    console.error("Error updating consultation:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update consultation" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.is_admin) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await dbConnect();
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    const consultation = await Consultation.findById(id);

    if (!consultation) {
      return NextResponse.json(
        { success: false, error: "Consultation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: consultation });
  } catch (error: any) {
    console.error("Error fetching consultation:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch consultation" },
      { status: 500 }
    );
  }
}
