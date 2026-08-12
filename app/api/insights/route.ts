import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/db";
import Insight from "@/models/Insight";

export async function GET() {
  try {
    await dbConnect();
    const insights = await Insight.find({}).sort({ date: -1 });
    return NextResponse.json({ success: true, data: insights });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch insights." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.is_admin) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();

    const { title, excerpt, content, category, date, readingTime, featured, published, coverGradient } = body;

    if (!title || !excerpt || !category || !date) {
      return NextResponse.json(
        { success: false, error: "Title, excerpt, category, and date are required." },
        { status: 400 }
      );
    }

    // Auto-generate slug from title
    const baseSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    // Ensure unique slug
    let slug = baseSlug;
    let count = 0;
    while (await Insight.findOne({ slug })) {
      count++;
      slug = `${baseSlug}-${count}`;
    }

    const insight = await Insight.create({
      slug,
      title,
      excerpt,
      content: content || "",
      category,
      date,
      readingTime: readingTime || 5,
      featured: featured || false,
      published: published !== false,
      coverGradient: coverGradient || "from-[#0a1628] via-[#0d1f3c] to-[#060e1c]",
    });

    return NextResponse.json(
      { success: true, data: insight, message: "Insight created successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating insight:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create insight." },
      { status: 500 }
    );
  }
}
