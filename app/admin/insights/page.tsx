"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiEyeOff,
  FiStar,
  FiSearch,
  FiFilter,
  FiLoader,
  FiX,
  FiFileText,
  FiExternalLink,
} from "react-icons/fi";
import toast from "react-hot-toast";

const CATEGORIES = [
  "Corporate Finance", "CFO Insights", "Corporate Governance",
  "Treasury & Banking", "Tax & VAT", "Procurement", "Business Management",
  "Leadership", "Industry Insights", "Career & Professional Development",
  "Personal Reflections",
];

interface Insight {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  featured: boolean;
  published: boolean;
  views: number;
  tags: string[];
  coverImage?: string;
  createdAt: string;
}

export default function AdminInsightsPage() {
  const { status: sessionStatus } = useSession();
  const router = useRouter();
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const [deleteTarget, setDeleteTarget] = useState<Insight | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (sessionStatus === "authenticated") fetchInsights();
  }, [sessionStatus]);

  const fetchInsights = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/insights");
      const data = await res.json();
      if (data.success) setInsights(data.data);
      else toast.error("Failed to fetch insights");
    } catch {
      toast.error("Failed to fetch insights");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      setDeleting(true);
      const res = await fetch(`/api/insights/${deleteTarget._id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Insight deleted.");
        setDeleteTarget(null);
        fetchInsights();
      } else {
        toast.error(data.error || "Delete failed.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setDeleting(false);
    }
  };

  const togglePublished = async (insight: Insight) => {
    try {
      const res = await fetch(`/api/insights/${insight._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !insight.published }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.data.published ? "Published!" : "Moved to draft.");
        fetchInsights();
      }
    } catch {
      toast.error("Failed to update.");
    }
  };

  const toggleFeatured = async (insight: Insight) => {
    try {
      const res = await fetch(`/api/insights/${insight._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !insight.featured }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.data.featured ? "Marked as featured!" : "Removed from featured.");
        fetchInsights();
      }
    } catch {
      toast.error("Failed to update.");
    }
  };

  const filtered = insights.filter((i) => {
    const matchCat = categoryFilter === "all" || i.category === categoryFilter;
    const matchSearch =
      !searchQuery.trim() ||
      i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Insights</h1>
          <p className="text-sm text-white/60 mt-0.5">Manage articles published on the Insights page</p>
        </div>
        <Link
          href="/admin/insights/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-[#c8a96e] hover:bg-[#e8c98e] transition-all"
        >
          <FiPlus className="w-4 h-4" />
          New Insight
        </Link>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2 relative flex items-center">
          <FiSearch className="absolute left-4 text-white/40 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by title, slug, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm bg-white/[0.02] border border-white/10 text-white placeholder-white/30 rounded-xl focus:border-[#c8a96e]/50 outline-none transition-all"
          />
        </div>
        <div className="relative flex items-center">
          <FiFilter className="absolute left-4 text-white/40 w-4 h-4 pointer-events-none" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm bg-white/[0.02] border border-white/10 text-white rounded-xl focus:border-[#c8a96e]/50 outline-none transition-all appearance-none cursor-pointer"
            style={{ colorScheme: "dark" }}
          >
            <option value="all" className="bg-[#0a1628]">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-[#0a1628]">{c}</option>
            ))}
          </select>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#c8a96e]/20 to-[#a07840]/10 border border-[#c8a96e]/20 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#c8a96e] font-semibold uppercase tracking-wider">Total Insights</p>
            <p className="text-2xl font-bold mt-1 text-white">{insights.length}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c8a96e]/20 flex items-center justify-center">
            <FiFileText className="w-5 h-5 text-[#c8a96e]" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-lg shadow-black/20">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <FiLoader className="w-6 h-6 text-[#c8a96e] animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-white/50">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <FiFileText className="w-8 h-8 text-white/30" />
            </div>
            <p className="text-base font-medium text-white">No insights found</p>
            <p className="text-sm mt-1">
              {insights.length === 0
                ? "Create your first insight to get started."
                : "Try a different search or filter."}
            </p>
            {insights.length === 0 && (
              <Link
                href="/admin/insights/new"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-[#c8a96e] hover:bg-[#e8c98e] transition-all"
              >
                <FiPlus className="w-4 h-4" />
                New Insight
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Title</th>
                  <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Category</th>
                  <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Date</th>
                  <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Views</th>
                  <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Status</th>
                  <th className="px-5 py-4 text-right text-xs font-semibold text-white/70 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filtered.map((insight) => (
                  <tr key={insight._id} className="hover:bg-white/[0.03] transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        {insight.featured && (
                          <FiStar className="w-3.5 h-3.5 text-[#c8a96e] mt-0.5 shrink-0" title="Featured" />
                        )}
                        <div>
                          <p className="text-sm font-semibold text-white leading-snug line-clamp-1 max-w-xs">
                            {insight.title}
                          </p>
                          <p className="text-[11px] font-mono text-white/40 mt-0.5">{insight.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span
                        className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-md border border-[#c8a96e]/20"
                        style={{ color: "#c8a96e", background: "rgba(200,169,110,0.07)" }}
                      >
                        {insight.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-white/60">
                      {formatDate(insight.date)}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-white/60">
                      {insight.views?.toLocaleString() ?? 0}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                          insight.published
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                        }`}
                      >
                        {insight.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* View on site */}
                        <a
                          href={`/insights/${insight.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on site"
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {/* Toggle featured */}
                        <button
                          type="button"
                          onClick={() => toggleFeatured(insight)}
                          title={insight.featured ? "Remove featured" : "Set as featured"}
                          className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all ${
                            insight.featured
                              ? "bg-[#c8a96e]/20 border-[#c8a96e]/40 text-[#c8a96e]"
                              : "bg-white/5 border-white/10 text-white/40 hover:text-[#c8a96e] hover:border-[#c8a96e]/30"
                          }`}
                        >
                          <FiStar className="w-3.5 h-3.5" />
                        </button>
                        {/* Toggle published */}
                        <button
                          type="button"
                          onClick={() => togglePublished(insight)}
                          title={insight.published ? "Unpublish" : "Publish"}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
                        >
                          {insight.published ? (
                            <FiEye className="w-3.5 h-3.5" />
                          ) : (
                            <FiEyeOff className="w-3.5 h-3.5" />
                          )}
                        </button>
                        {/* Edit — goes to edit page */}
                        <Link
                          href={`/admin/insights/${insight._id}/edit`}
                          title="Edit"
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all"
                        >
                          <FiEdit2 className="w-3.5 h-3.5" />
                        </Link>
                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(insight)}
                          title="Delete"
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all"
                        >
                          <FiTrash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── Delete Confirm Modal ─── */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-[#030812]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#060e1c] rounded-2xl border border-white/10 shadow-2xl max-w-md w-full p-7">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
              <FiTrash2 className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Delete Insight?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Are you sure you want to delete{" "}
              <span className="text-white font-medium">"{deleteTarget.title}"</span>?{" "}
              This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-5 py-2.5 text-sm font-medium text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 hover:text-red-300 disabled:opacity-50 rounded-xl transition-all flex items-center gap-2"
              >
                {deleting ? (
                  <FiLoader className="w-4 h-4 animate-spin" />
                ) : (
                  <FiTrash2 className="w-4 h-4" />
                )}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
