"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import {
  FiArrowLeft,
  FiClock,
  FiEye,
  FiTag,
  FiArrowRight,
  FiBookmark,
  FiTwitter,
  FiLinkedin,
  FiLink,
  FiCheck,
  FiCalendar,
  FiGlobe,
} from "react-icons/fi";

interface Post {
  _id: string;
  title: string;
  titleBn?: string;
  slug: string;
  excerpt: string;
  excerptBn?: string;
  content: string;
  contentBn?: string;
  coverImage: string;
  tags: string[];
  author: { name: string; photo?: string; avatar?: string } | null;
  readTime: number;
  views: number;
  publishedAt: string | null;
  createdAt: string;
}

// ── Reading progress bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-[#c8a96e] to-[#a07840]"
        style={{ width: `${progress}%`, transition: "width 0.075s linear" }}
      />
    </div>
  );
}

// ── Delayed view counter ──────────────────────────────────────────────────────
function ViewCounter({ target }: { target: number }) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (target !== count) {
      const timer = setTimeout(() => {
        setCount(target);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [target, count]);

  return <>{count.toLocaleString()}</>;
}

export default function BlogPostClient({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [post, setPost] = useState<Post | null>(null);
  const [related, setRelated] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [views, setViews] = useState(0);
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<"en" | "bn">("en");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        const data = await res.json();
        if (data.success && data.data) {
          setPost(data.data);
          setViews(data.data.views || 0);
          
          // Optionally increment view count if you have an endpoint for it
          fetch(`/api/blog/${data.data._id}/view`, { method: "POST" })
            .then((r) => r.json())
            .then((d) => {
              if (d.success) setViews(d.views);
            })
            .catch(() => {});
            
          if (data.data.tags?.[0]) {
            fetch(`/api/blog?status=published&tag=${encodeURIComponent(data.data.tags[0])}&limit=4`)
              .then((r) => r.json())
              .then((d) => {
                if (d.success)
                  setRelated(
                    d.data
                      .filter((p: Post) => p._id !== data.data._id)
                      .slice(0, 3)
                  );
              })
              .catch(() => {});
          }
        } else {
          setNotFound(true);
        }
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const formatDate = (d: string | null) =>
    d
      ? new Date(d).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pageBg = (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(200,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 50%, rgba(10,30,70,0.6) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute top-[76px] left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.3) 30%, rgba(200,169,110,0.3) 70%, transparent)",
        }}
        aria-hidden="true"
      />
    </>
  );

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[#060e1c] overflow-hidden pt-[76px]">
        {pageBg}
        <div className="w-full h-72 md:h-80 bg-white/5 animate-pulse" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-8" />
          <div className="space-y-3 mb-6">
            <div className="h-8 bg-white/10 rounded animate-pulse w-full" />
            <div className="h-8 bg-white/10 rounded animate-pulse w-4/5" />
          </div>
          <div className="flex gap-4 mb-10 pb-8 border-b border-white/10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-4 w-20 bg-white/10 rounded animate-pulse"
              />
            ))}
          </div>
          <div className="space-y-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 bg-white/10 rounded animate-pulse ${
                  i % 5 === 4 ? "w-2/3" : "w-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="relative min-h-screen bg-[#060e1c] overflow-hidden flex flex-col items-center justify-center px-4 text-center">
        {pageBg}
        <div className="relative w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-white/10">
          <FiBookmark className="w-12 h-12 text-[#c8a96e]" />
        </div>
        <h1 className="relative text-3xl font-bold text-white mb-3">
          Post Not Found
        </h1>
        <p className="relative text-white/50 mb-8 max-w-md">
          This article doesn&apos;t exist or has been removed. It may have been unpublished.
        </p>
        <Link
          href="/blog"
          className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white rounded-xl font-semibold shadow-[0_0_15px_rgba(200,169,110,0.3)] hover:shadow-[0_0_25px_rgba(200,169,110,0.5)] transition-all transform hover:-translate-y-0.5"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    post.title
  )}&url=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : ""
  )}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : ""
  )}`;

  return (
    <>
      <ReadingProgress />

      <div className="relative min-h-screen bg-[#060e1c] overflow-hidden selection:bg-[#c8a96e]/30 selection:text-white pt-[76px]">
        {pageBg}

        {/* ── Hero cover — full width ──────────────────────────────────── */}
        <div className="relative w-full h-72 md:h-112 overflow-hidden border-b border-white/10">
          {post.coverImage ? (
            <>
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#060e1c]/60 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1120] to-[#060e1c]" />
          )}

          {/* Title + tags rendered over hero */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#c8a96e] text-[11px] font-bold uppercase tracking-wider rounded-lg border border-[#c8a96e]/30 shadow-lg"
                    >
                      <FiTag className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl drop-shadow-2xl">
                {lang === "bn" && post.titleBn ? post.titleBn : post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta + share bar */}
          <div className="relative -mt-6 mb-10 z-10">
            <div className="bg-[#0a1120]/90 backdrop-blur-md rounded-2xl shadow-xl shadow-black/40 border border-white/10 px-6 py-5 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
                {post.author && (
                  <span className="flex items-center gap-2.5 font-semibold text-white/90">
                    {post.author.photo || post.author.avatar ? (
                      <img
                        src={post.author.photo || post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover shrink-0 border border-white/10"
                      />
                    ) : (
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c8a96e] to-[#a07840] flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-inner">
                        {post.author.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                    {post.author.name}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="w-4 h-4 text-white/40" />
                  {formatDate(post.publishedAt || post.createdAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiClock className="w-4 h-4 text-white/40" />
                  {post.readTime} min read
                </span>
                <span className="flex items-center gap-1.5 text-[#c8a96e] font-semibold">
                  <FiEye className="w-4 h-4" />
                  <span className="tabular-nums">
                    <ViewCounter target={views} />
                  </span>
                  <span className="font-normal text-white/40">views</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLang(lang === "en" ? "bn" : "en")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors mr-2"
                >
                  <FiGlobe className="w-4 h-4 shrink-0 text-[#c8a96e]" />
                  {lang === "en" ? "বাংলায় পড়ুন" : "Read in English"}
                </button>
                <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
                <span className="text-[11px] text-white/40 font-bold uppercase tracking-wider hidden sm:block ml-2">
                  Share:
                </span>
                <a
                  href={twitterShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Share on Twitter"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/50 text-white/60 hover:text-[#1DA1F2] flex items-center justify-center transition-all border border-white/10"
                >
                  <FiTwitter className="w-4 h-4" />
                </a>
                <a
                  href={linkedinShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Share on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 text-white/60 hover:text-[#0A66C2] flex items-center justify-center transition-all border border-white/10"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy link"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/60 hover:text-white flex items-center justify-center transition-all border border-white/10"
                >
                  {copied ? (
                    <FiCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <FiLink className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 font-semibold hover:text-[#c8a96e] mb-8 group transition-colors"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* ── Article card ─────────────────────────────────────────── */}
          <div className="bg-[#0a1120]/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-12 mb-12">
            {(lang === "bn" && post.excerptBn
              ? post.excerptBn
              : post.excerpt) && (
              <p className="text-xl text-[#c8a96e] leading-relaxed mb-10 pb-10 border-b border-white/10 font-medium italic">
                {lang === "bn" && post.excerptBn
                  ? post.excerptBn
                  : post.excerpt}
              </p>
            )}
            <article
              className="
                prose prose-invert max-w-none text-white/80 leading-loose
                [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mt-12 [&_h1]:mb-6 [&_h1]:pb-4 [&_h1]:border-b [&_h1]:border-white/10
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4
                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:mb-6 [&_p]:text-[16px]
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-2 [&_li::marker]:text-[#c8a96e]
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li::marker]:text-[#c8a96e]
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#c8a96e] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-white/60 [&_blockquote]:my-8 [&_blockquote]:bg-[#c8a96e]/5 [&_blockquote]:py-4 [&_blockquote]:pr-6 [&_blockquote]:rounded-r-xl
                [&_a]:text-[#c8a96e] [&_a]:underline [&_a]:decoration-[#c8a96e]/40 [&_a]:underline-offset-4 [&_a]:hover:text-[#a07840] [&_a]:transition-colors
                [&_strong]:font-bold [&_strong]:text-white
                [&_code]:bg-black/60 [&_code]:text-[#c8a96e] [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg [&_code]:text-[14px] [&_code]:font-mono [&_code]:border [&_code]:border-white/10
                [&_pre]:bg-black/80 [&_pre]:text-white/90 [&_pre]:rounded-2xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:my-8 [&_pre]:border [&_pre]:border-white/10 [&_pre]:shadow-inner
                [&_pre_code]:bg-transparent [&_pre_code]:border-none [&_pre_code]:p-0 [&_pre_code]:text-inherit
                [&_img]:rounded-2xl [&_img]:shadow-2xl [&_img]:my-10 [&_img]:border [&_img]:border-white/5
                [&_hr]:border-white/10 [&_hr]:my-12
              "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  lang === "bn" && post.contentBn
                    ? post.contentBn
                    : post.content
                ),
              }}
            />
          </div>

          {/* Tags footer */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-16">
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/5 text-white/70 text-[13px] font-medium rounded-full border border-white/10 hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-colors cursor-default"
                >
                  <FiTag className="w-3.5 h-3.5" /> {tag}
                </span>
              ))}
            </div>
          )}

          {/* ── Related posts ─────────────────────────────────────────── */}
          {related.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Related{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Articles
                  </span>
                </h2>
                <div className="h-px bg-white/10 flex-1" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <div key={r._id}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group bg-[#0a1120]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-[#c8a96e]/10 hover:border-[#c8a96e]/40 transition-all duration-300 hover:-translate-y-1 block h-full flex flex-col"
                    >
                      <div className="h-40 overflow-hidden bg-black/40 relative">
                        {r.coverImage ? (
                          <img
                            src={r.coverImage}
                            alt={r.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FiBookmark className="w-8 h-8 text-white/10 group-hover:text-[#c8a96e]/40 transition-colors duration-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] to-transparent opacity-60" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        {r.tags[0] && (
                          <span className="text-[10px] font-bold text-[#c8a96e] uppercase tracking-widest mb-2 block">
                            {r.tags[0]}
                          </span>
                        )}
                        <h3 className="text-base font-bold text-white/90 line-clamp-2 group-hover:text-[#c8a96e] transition-colors mb-3">
                          {r.title}
                        </h3>
                        <div className="flex items-center gap-4 text-[11px] font-medium text-white/40 mt-auto pt-3 border-t border-white/10">
                          <span className="flex items-center gap-1.5">
                            <FiClock className="w-3 h-3" /> {r.readTime || 1} min
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FiEye className="w-3 h-3" /> {r.views || 0}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── CTA ──────────────────────────────────────────────────── */}
          <div className="mb-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1120] to-black border border-[#c8a96e]/20 p-8 sm:p-16 text-center shadow-2xl">
            {/* Subtle glow inside CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c8a96e] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-[#c8a96e] text-[11px] font-bold uppercase tracking-widest mb-6 border border-[#c8a96e]/30 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for projects
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/60 text-[15px] mb-10 max-w-lg mx-auto leading-relaxed font-light">
                Let&apos;s build something extraordinary together. I'm ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white rounded-xl font-bold shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:shadow-[0_0_30px_rgba(200,169,110,0.5)] transition-all transform hover:-translate-y-1"
                >
                  Get in Touch <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
