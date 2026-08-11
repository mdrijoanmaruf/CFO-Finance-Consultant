import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    // Check if user is admin or is_admin
    const role = (session?.user as any)?.role;
    const is_admin = (session?.user as any)?.is_admin;
    
    if (!session || (role !== "admin" && !is_admin)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const roleFilter = searchParams.get("role");

    const query: any = {};
    if (roleFilter && roleFilter !== "all") {
      query.role = roleFilter;
    }

    const users = await User.find(query).select("-password").sort({ createdAt: -1 });

    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
