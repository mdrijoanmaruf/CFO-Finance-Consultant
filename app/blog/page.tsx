"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  FiBookOpen,
  FiClock,
  FiEye,
  FiArrowRight,
  FiLoader,
  FiSearch,
} from "react-icons/fi";

// Note: using any for PostData fallback if the exact type isn't globally available.
// Modify import if you have the exact type in lib/homeData.
export interface PostData {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  readTime?: number;
  views?: number;
  publishedAt?: string;
  createdAt: string;
}

interface BlogClientProps {
  posts?: PostData[];
}

export default function BlogClient({ posts: initialPosts }: BlogClientProps) {
  const [allPosts, setAllPosts] = useState<PostData[]>(initialPosts || []);
  const [loading, setLoading] = useState(
    initialPosts ? initialPosts.length === 0 : true
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const postsPerPage = 9;

  useEffect(() => {
    if (allPosts.length === 0) {
      setLoading(true);
      fetch("/api/blog?status=published&limit=50")
        .then((res) => res.json())
        .then((data) => {
          if (data.success && Array.isArray(data.data)) {
            setAllPosts(data.data);
          }
        })
        .catch((err) =>
          console.error("[BlogClient] Client-side fetch failed:", err)
        )
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [allPosts.length, initialPosts]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        (post.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === "All" || (post.tags || []).includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [allPosts, searchQuery, selectedTag]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginatedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const formatDate = (d: string | null) =>
    d
      ? new Date(d).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  return (
    <div className="relative min-h-screen bg-[#060e1c] overflow-hidden selection:bg-[#c8a96e]/30 selection:text-white">
      {/* Background glow effects matching the Hero section */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(200,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 50%, rgba(10,30,70,0.6) 0%, transparent 50%)",
        }}
      />
      
      {/* Top Accent Line */}
      <div
        className="absolute top-[76px] left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.3) 30%, rgba(200,169,110,0.3) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-[#c8a96e]/30 rounded-full text-sm font-medium text-[#c8a96e] mb-6 shadow-sm shadow-[#c8a96e]/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a96e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8c98e]" />
          </span>
          Our Blog
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          Insights &{" "}
          <span
            className="inline-block"
            style={{
              background:
                "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ideas
          </span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8 font-light">
          Tips, tutorials, and industry insights from my personal notebook.
        </p>
      </section>

      {/* Filters and Search */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-[0_0_15px_rgba(200,169,110,0.3)] border border-transparent"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72 shrink-0">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#c8a96e]/50 focus:border-transparent transition-all placeholder:text-white/30 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 z-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FiLoader className="w-10 h-10 text-[#c8a96e] animate-spin mb-4" />
            <p className="text-white/60 font-medium tracking-wide">
              Loading articles...
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-black/20">
              <FiBookOpen className="w-10 h-10 text-[#c8a96e]" />
            </div>
            <p className="text-xl font-bold text-white mb-2 tracking-wide">
              No posts found
            </p>
            <p className="text-white/50 max-w-md">
              Check back soon for insights and articles or try adjusting your search terms.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post, index) => (
                <div key={post._id} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`group bg-[#0a1120]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl shadow-black/30 border border-white/10 hover:border-[#c8a96e]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full ${
                      index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    {/* Cover image */}
                    <div className="relative h-56 overflow-hidden bg-black/40 shrink-0">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FiBookOpen className="w-12 h-12 text-white/10 group-hover:text-[#c8a96e]/30 transition-colors duration-500" />
                        </div>
                      )}
                      
                      {/* Gradient overlay for text readability if needed, or just design */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] to-transparent opacity-60" />

                      {post.tags[0] && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#c8a96e] text-[11px] font-bold uppercase tracking-wider rounded-lg border border-[#c8a96e]/30 shadow-lg">
                            {post.tags[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-[20px] font-bold text-white mb-3 group-hover:text-[#c8a96e] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-[14px] text-white/60 mb-6 leading-relaxed line-clamp-3 flex-1 font-light">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-[12px] font-medium text-white/40 mt-auto pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 hover:text-[#c8a96e] transition-colors">
                            <FiClock className="w-3.5 h-3.5" />
                            {post.readTime || 1} min
                          </span>
                          <span className="flex items-center gap-1.5 hover:text-[#c8a96e] transition-colors">
                            <FiEye className="w-3.5 h-3.5" />
                            {post.views || 0}
                          </span>
                        </div>
                        <span className="text-white/50">
                          {formatDate(post.publishedAt || post.createdAt)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
                <p className="text-[13px] text-white/50 font-medium">
                  Showing <span className="text-white font-bold">{filteredPosts.length > 0 ? indexOfFirstPost + 1 : 0}</span> to{" "}
                  <span className="text-white font-bold">{Math.min(indexOfLastPost, filteredPosts.length)}</span> of{" "}
                  <span className="text-white font-bold">{filteredPosts.length}</span> articles
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center justify-center px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c8a96e]/30 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      type="button"
                      key={idx + 1}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`inline-flex items-center justify-center w-9 h-9 text-xs font-bold rounded-xl transition-all ${
                        currentPage === idx + 1
                          ? "bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-[0_0_10px_rgba(200,169,110,0.3)]"
                          : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-[#c8a96e]/30"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center justify-center px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c8a96e]/30 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a1120]/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-light">
            Let&apos;s turn your ideas into reality. Reach out today and let's discuss how we can work together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white rounded-xl font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:shadow-[0_0_30px_rgba(200,169,110,0.5)] transition-all transform hover:-translate-y-1"
          >
            Get in Touch
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
