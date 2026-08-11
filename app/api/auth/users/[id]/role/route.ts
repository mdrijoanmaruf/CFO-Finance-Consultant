import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    // Only allow admin or is_admin to modify roles
    const sessionRole = (session?.user as any)?.role;
    const is_admin = (session?.user as any)?.is_admin;
    
    if (!session || (sessionRole !== "admin" && !is_admin)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    
    await dbConnect();

    // Prevent modifying the super admin or self (optional, but good practice)
    const targetUser = await User.findById(id);
    if (!targetUser) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    // Example safety check: prevent modifying the root super admin
    if (targetUser.email === "rijoanmaruf@gmail.com" && (session?.user as any)?.email !== "rijoanmaruf@gmail.com") {
      return NextResponse.json({ success: false, error: "Cannot modify super admin" }, { status: 403 });
    }

    targetUser.role = body.role;
    if (body.role === "admin") {
      targetUser.is_admin = true;
    } else {
      targetUser.is_admin = false;
    }

    await targetUser.save();

    return NextResponse.json({ success: true, message: "User role updated successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
