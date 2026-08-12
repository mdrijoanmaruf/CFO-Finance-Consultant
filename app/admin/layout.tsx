"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiGrid,
  FiMessageSquare,
  FiFileText,
  FiAward,
  FiStar,
  FiImage,
  FiBriefcase,
  FiUser,
  FiShield,
  FiTrendingUp,
  FiSettings,
  FiUsers,
  FiMenu,
  FiX,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import { Toast, Alert } from "@/lib/swal";
import BgAnimation from "@/Components/Shared/BG-Animation";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const role = (session?.user as any)?.role as string | undefined;
  const is_admin = (session?.user as any)?.is_admin as boolean | undefined;

  // Guard: redirect non-admins away
  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated" || (role !== "admin" && !is_admin)) {
      router.replace("/");
    }
  }, [status, role, is_admin, router]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/admin", label: "Dashboard", Icon: FiGrid, exact: true },
    { href: "/admin/users", label: "Users & Security", Icon: FiUsers },
    { href: "/admin/consultations", label: "Consultations", Icon: FiBriefcase },
    { href: "/admin/messages", label: "Messages", Icon: FiMessageSquare },
    { href: "/admin/insights", label: "Insights", Icon: FiFileText },
    { href: "/admin/blog", label: "Blog", Icon: FiFileText },
    { href: "/admin/achievements", label: "Achievements", Icon: FiAward },
    { href: "/admin/media", label: "Media", Icon: FiImage },
    { href: "/admin/services", label: "Services", Icon: FiBriefcase },
    { href: "/admin/profile", label: "Profile & CV", Icon: FiUser },
  ];

  const handleLogout = async () => {
    await Toast.fire({ icon: "success", title: "Logged out successfully!" });
    await signOut({ callbackUrl: "/" });
  };

  // Block render until we know the user is admin
  if (status === "loading" || status === "unauthenticated" || (role !== "admin" && !is_admin)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060e1c]">
        <div className="w-8 h-8 border-4 border-[#c8a96e] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030812] relative overflow-hidden flex">
      <BgAnimation />
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#060e1c]/40 border-r border-white/10 transition-transform duration-300 ease-in-out flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/10 shrink-0">
          <Link href="/admin" className="flex items-center gap-3">
            <div>
              <h1 className="text-white font-bold text-[13px] tracking-widest uppercase">
                Al Amin Bhuiyan
              </h1>
              <p className="text-[#c8a96e] text-[9px] tracking-[0.2em] uppercase mt-0.5">
                Admin Panel
              </p>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto custom-scrollbar">
          <p className="px-4 mb-3 text-[10px] font-semibold text-white/40 uppercase tracking-widest">
            Menu
          </p>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href) && item.href !== "/";
              const { Icon } = item;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-[13px] tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/20"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4.5 h-4.5 ${isActive ? "text-[#c8a96e]" : "text-white/40"}`} />
                    <span className="flex-1">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Links (Bottom) */}
        <div className="p-4 border-t border-white/10 shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-xl p-2 w-full">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs tracking-wide text-white/70 hover:bg-white/10 hover:text-white transition-all w-full"
            >
              <FiHome className="w-4 h-4 text-white/40" />
              Back to Website
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-xs tracking-wide text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all w-full"
            >
              <FiLogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="lg:ml-64 flex-1 min-h-screen flex flex-col relative z-10 w-full">
        {/* Top Header */}
        <header className="h-20 bg-[#060e1c]/40 border-b border-white/10 sticky top-0 z-30 px-6 lg:px-8 flex items-center justify-between shadow-sm w-full">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* User Info */}
            {session?.user && (
              <div className="flex items-center gap-3 pl-4 border-l border-white/10 py-1">
                {session?.user?.image ? (
                  <img
                    src={session?.user?.image}
                    alt="Admin"
                    className="w-9 h-9 rounded-full border border-white/20"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c8a96e] to-[#a07840] flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {session?.user?.name?.charAt(0).toUpperCase() || "A"}
                  </div>
                )}
                <div className="text-right hidden sm:block">
                  <p className="text-[13px] font-semibold text-white tracking-wide">
                    {session?.user?.name}
                  </p>
                  <p className="text-[10px] text-[#c8a96e] uppercase tracking-widest">
                    Administrator
                  </p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
