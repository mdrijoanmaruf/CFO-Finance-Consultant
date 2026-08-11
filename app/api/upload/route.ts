import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ success: false, message: "No image provided" }, { status: 400 });
    }

    const apiKey = process.env.IMGBB_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, message: "IMGBB_API_KEY is missing" }, { status: 500 });
    }

    // Prepare form data for ImgBB
    const imgbbFormData = new FormData();
    imgbbFormData.append("image", image);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: imgbbFormData,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        data: {
          url: data.data.url,
          delete_url: data.data.delete_url,
        },
      });
    } else {
      return NextResponse.json({ success: false, message: data.error?.message || "ImgBB upload failed" }, { status: 400 });
    }
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: "Server upload error" }, { status: 500 });
  }
}
