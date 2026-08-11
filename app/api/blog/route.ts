import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const limit = searchParams.get("limit");

    let query: any = {};
    if (status && status !== "all") {
      query.status = status;
    }

    let blogsQuery = Blog.find(query).sort({ order: 1, createdAt: -1 });

    if (limit) {
      blogsQuery = blogsQuery.limit(parseInt(limit));
    }

    const blogs = await blogsQuery.exec();

    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.is_admin) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await dbConnect();

    const body = await req.json();

    const blogData = {
      ...body,
      author: {
        name: session.user.name || "Admin",
        photo: session.user.image || "",
        avatar: session.user.image || "",
      },
    };

    const newBlog = await Blog.create(blogData);

    return NextResponse.json(
      { success: true, data: newBlog, message: "Blog created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating blog:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Slug already exists. Please choose another." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
