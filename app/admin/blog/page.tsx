"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiLoader,
  FiBookOpen,
  FiEye,
  FiClock,
  FiGlobe,
  FiCheck,
  FiX,
  FiEdit3,
  FiMenu,
} from "react-icons/fi";

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  status: "draft" | "published";
  readTime: number;
  views: number;
  order: number;
  publishedAt: string | null;
  createdAt: string;
  author: { name: string; photo?: string; avatar?: string } | null;
}



export default function AdminBlogPage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken as string | undefined;

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [isReordering, setIsReordering] = useState(false);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };

  const handleDrop = async (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const reorderedPosts = [...posts];
    const [draggedItem] = reorderedPosts.splice(draggedIndex, 1);
    reorderedPosts.splice(targetIndex, 0, draggedItem);

    const updatedOrderPosts = reorderedPosts.map((post, index) => ({
      ...post,
      order: index,
    }));

    setPosts(updatedOrderPosts);
    setDraggedIndex(null);
    setDragOverIndex(null);
    setIsReordering(true);

    try {
      const ids = reorderedPosts.map((p) => p._id);
      const res = await fetch("/api/admin/blog-reorder", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ ids }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("New order saved successfully!", {
          style: { background: "#333", color: "#fff" },
        });
      } else {
        toast.error(data.error || "Failed to save new order");
        fetchPosts();
      }
    } catch {
      toast.error("Failed to save new order");
      fetchPosts();
    } finally {
      setIsReordering(false);
    }
  };
  
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blog?status=all&limit=1000", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        cache: "no-store",
      });
      const data = await res.json();
      if (data.success) setPosts(data.data);
    } catch {
      toast.error("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchPosts();
  }, [token]);

  const confirmDeleteSwal = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      background: "#0a1628",
      color: "#ffffff",
      confirmButtonColor: "#c8a96e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "border border-white/10 rounded-2xl",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Post deleted", { style: { background: "#333", color: "#fff" }});
        setPosts((prev) => prev.filter((p) => p._id !== id));
      } else {
        toast.error(data.error || "Failed to delete post");
      }
    } catch {
      toast.error("Failed to delete post");
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (d: string | null) =>
    d
      ? new Date(d).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "—";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Blog Posts</h1>
          <p className="text-[13px] text-white/50 mt-1 tracking-wide">
            {posts.length} total posts
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white rounded-xl font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-[#c8a96e]/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
        >
          <FiPlus className="w-4 h-4" />
          New Post
        </Link>
      </div>



      {/* Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <FiLoader className="w-8 h-8 animate-spin text-[#c8a96e]" />
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4">
              <FiBookOpen className="w-8 h-8 text-[#c8a96e]" />
            </div>
            <p className="font-semibold text-white tracking-wide mb-1">
              No blog posts yet
            </p>
            <p className="text-sm text-white/40 mb-6">
              Create your first post to get started.
            </p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white rounded-xl font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-[#c8a96e]/20 transition-all"
            >
              <FiPlus className="w-4 h-4" /> Create Post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left">
              <thead className="bg-black/40 border-b border-white/10">
                <tr>
                  <th className="w-10 px-4 py-4"></th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest">
                    Title
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest hidden md:table-cell">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest hidden lg:table-cell">
                    Order
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest hidden lg:table-cell">
                    Author
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest hidden lg:table-cell">
                    Published
                  </th>
                  <th className="text-center px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest hidden sm:table-cell">
                    Views
                  </th>
                  <th className="text-right px-6 py-4 text-[11px] font-semibold text-white/40 uppercase tracking-widest">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {posts.map((post, index) => (
                  <tr
                    key={post._id}
                    draggable={!isReordering}
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragEnd={() => {
                      setDraggedIndex(null);
                      setDragOverIndex(null);
                    }}
                    className={`transition-all duration-150 ${
                      draggedIndex === index
                        ? "opacity-40 bg-white/10"
                        : "hover:bg-white/[0.02]"
                    } ${
                      dragOverIndex === index
                        ? "border-t-2 border-t-[#c8a96e]"
                        : ""
                    }`}
                  >
                    <td className="w-10 px-4 py-4 text-center align-middle cursor-grab active:cursor-grabbing">
                      <FiMenu className="w-4 h-4 text-white/20 hover:text-[#c8a96e] transition-colors" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {post.coverImage ? (
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 bg-white/5 border border-white/10"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white/20 flex items-center justify-center shrink-0">
                            <FiBookOpen className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-white line-clamp-1">
                            {post.title}
                          </p>
                          <p className="text-[11px] text-white/40 mt-0.5 font-mono">
                            {post.slug}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                          post.status === "published"
                            ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
                            : "bg-white/5 text-white/60 border-white/10"
                        }`}
                      >
                        {post.status === "published" ? (
                          <FiGlobe className="w-3 h-3" />
                        ) : (
                          <FiClock className="w-3 h-3" />
                        )}
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="inline-flex items-center justify-center min-w-[2rem] px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-semibold">
                        {post.order ?? 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold hidden lg:table-cell">
                      <div className="flex items-center gap-2">
                        {post.author?.avatar || post.author?.photo ? (
                          <img
                            src={post.author.avatar || post.author.photo}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full object-cover shrink-0 border border-white/10"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center text-[10px] font-bold">
                            {post.author?.name?.charAt(0).toUpperCase() || "A"}
                          </div>
                        )}
                        <span className="text-[#c8a96e] text-sm">
                          {post.author?.name ?? "—"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white/50 text-[13px] hidden lg:table-cell">
                      {formatDate(post.publishedAt)}
                    </td>
                    <td className="px-6 py-4 text-center hidden sm:table-cell">
                      <span className="inline-flex items-center justify-center gap-1.5 text-white/50 text-[13px]">
                        <FiEye className="w-3.5 h-3.5" />
                        {post.views}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {post.status === "published" && (
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                            title="View post"
                          >
                            <FiEye className="w-4 h-4" />
                          </Link>
                        )}
                        <Link
                          href={`/admin/blog/${post._id}/edit`}
                          className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-[#c8a96e] transition-colors"
                          title="Edit post"
                        >
                          <FiEdit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => confirmDeleteSwal(post._id)}
                          disabled={deleting === post._id}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors disabled:opacity-60"
                          title="Delete post"
                        >
                          {deleting === post._id ? (
                            <FiLoader className="w-4 h-4 animate-spin" />
                          ) : (
                            <FiTrash2 className="w-4 h-4" />
                          )}
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
    </div>
  );
}
