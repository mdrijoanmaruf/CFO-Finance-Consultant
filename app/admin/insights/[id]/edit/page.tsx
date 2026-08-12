"use client";

import { use, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiSave,
  FiGlobe,
  FiLoader,
  FiImage,
  FiCamera,
  FiX,
  FiInfo,
  FiEdit2,
  FiTag,
  FiSettings,
  FiEye,
  FiExternalLink,
} from "react-icons/fi";

const RichTextEditor = dynamic(
  () => import("@/Components/admin/RichTextEditor"),
  { ssr: false }
);

const CATEGORIES = [
  "Corporate Finance", "CFO Insights", "Corporate Governance",
  "Treasury & Banking", "Tax & VAT", "Procurement", "Business Management",
  "Leadership", "Industry Insights", "Career & Professional Development",
  "Personal Reflections",
];

const GRADIENTS = [
  "from-[#0a1628] via-[#0d1f3c] to-[#060e1c]",
  "from-[#0d1628] via-[#121c30] to-[#080e1a]",
  "from-[#0a1a20] via-[#0d1e28] to-[#060e14]",
  "from-[#0a1420] via-[#0c1828] to-[#060c14]",
  "from-[#141020] via-[#181428] to-[#0a0814]",
  "from-[#0e1428] via-[#121830] to-[#080c18]",
];

function slugify(text: string) {
  return text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

function estimateReadTime(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function SectionHeader({ icon, iconClass, label, noMargin }: {
  icon: React.ReactNode; iconClass: string; label: string; noMargin?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${noMargin ? "" : "mb-4"}`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconClass}`}>
        {icon}
      </div>
      <h3 className="font-semibold text-white text-sm tracking-wide">{label}</h3>
    </div>
  );
}

export default function EditInsightPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken as string | undefined;

  const [loading, setLoading] = useState(true);
  const [slug, setSlugState] = useState("");
  const [form, setForm] = useState({
    title: "", titleBn: "", slug: "", excerpt: "", excerptBn: "",
    content: "", contentBn: "", coverImage: "", category: CATEGORIES[0],
    date: new Date().toISOString().split("T")[0], readingTime: 5,
    featured: false, published: true, coverGradient: GRADIENTS[0],
    tags: [] as string[], views: 0 as number | string, order: 0 as number | string,
    seoTitle: "", seoDescription: "",
  });
  const [activeLang, setActiveLang] = useState<"en" | "bn">("en");
  const [tagInput, setTagInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [coverUploading, setCoverUploading] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const res = await fetch(`/api/insights/${id}`);
        const data = await res.json();
        if (data.success) {
          const d = data.data;
          setSlugState(d.slug);
          setForm({
            title: d.title || "", titleBn: d.titleBn || "",
            slug: d.slug || "", excerpt: d.excerpt || "", excerptBn: d.excerptBn || "",
            content: d.content || "", contentBn: d.contentBn || "",
            coverImage: d.coverImage || "", category: d.category || CATEGORIES[0],
            date: d.date || new Date().toISOString().split("T")[0],
            readingTime: d.readingTime || 5, featured: d.featured || false,
            published: d.published !== false, coverGradient: d.coverGradient || GRADIENTS[0],
            tags: d.tags || [], views: d.views || 0, order: d.order || 0,
            seoTitle: d.seoTitle || "", seoDescription: d.seoDescription || "",
          });
        } else {
          toast.error("Failed to load insight");
          router.push("/admin/insights");
        }
      } catch {
        toast.error("Failed to load insight");
        router.push("/admin/insights");
      } finally {
        setLoading(false);
      }
    };
    fetchInsight();
  }, [id]);

  const set = (k: string, v: unknown) => setForm((f) => ({ ...f, [k]: v }));

  const handleTitleChange = (v: string) => {
    if (activeLang === "en") {
      setForm((f) => ({ ...f, title: v, seoTitle: f.seoTitle || v }));
    } else {
      set("titleBn", v);
    }
  };

  const handleContentChange = (html: string) => {
    if (activeLang === "en") { set("content", html); set("readingTime", estimateReadTime(html)); }
    else set("contentBn", html);
  };

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) setForm((f) => ({ ...f, tags: [...f.tags, t] }));
    setTagInput("");
  };

  const removeTag = (tag: string) => setForm((f) => ({ ...f, tags: f.tags.filter((t) => t !== tag) }));

  const handleCoverUpload = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) { toast.error("Image must be under 5 MB"); return; }
    setCoverUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: fd,
      });
      const data = await res.json();
      if (data.success) { set("coverImage", data.data.url); toast.success("Cover image uploaded"); }
      else toast.error(data.message || "Upload failed");
    } catch { toast.error("Upload failed"); }
    finally { setCoverUploading(false); }
  };

  const handleSave = async (publishNow?: boolean) => {
    if (!form.title.trim() || !form.excerpt.trim()) {
      toast.error("Title and excerpt are required"); return;
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        readingTime: estimateReadTime(form.content),
        published: publishNow !== undefined ? publishNow : form.published,
      };
      const res = await fetch(`/api/insights/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(publishNow ? "Insight published!" : "Changes saved");
        router.push("/admin/insights");
      } else {
        toast.error(data.error || "Failed to save");
      }
    } catch { toast.error("Failed to save"); }
    finally { setSaving(false); }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <FiLoader className="w-8 h-8 text-[#c8a96e] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Edit Insight</h1>
          <p className="text-[13px] text-white/50 mt-1 font-mono">/insights/{slug}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`/insights/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all shrink-0"
          >
            <FiExternalLink className="w-4 h-4" /> View Live
          </a>
          <Link
            href="/admin/insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all shrink-0"
          >
            <FiArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-md">
        {/* Gradient header */}
        <div className="bg-gradient-to-r from-[#c8a96e] to-[#a07840] px-6 py-5">
          <h2 className="text-lg font-bold text-white tracking-wide">Edit Insight</h2>
          <p className="text-white/80 text-[13px] mt-0.5">Update the details below</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Language Tabs */}
              <div className="flex bg-black/40 rounded-xl shadow-sm border border-white/10 p-1.5 gap-1">
                {(["en", "bn"] as const).map((lang) => (
                  <button key={lang} type="button" onClick={() => setActiveLang(lang)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      activeLang === lang
                        ? "bg-[#c8a96e]/20 text-[#c8a96e] border border-[#c8a96e]/30"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {lang === "en" ? "English" : "বাংলা (Bangla)"}
                  </button>
                ))}
              </div>

              {/* Basic Info */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiInfo className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Basic Information" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Title ({activeLang === "en" ? "English" : "Bangla"}) *
                    </label>
                    <input type="text" value={activeLang === "en" ? form.title : form.titleBn}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder={activeLang === "en" ? "Insight title" : "ইনসাইটের শিরোনাম"}
                      className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                  {activeLang === "en" && (
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Slug</label>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white/40 font-mono">/insights/</span>
                        <input type="text" value={form.slug}
                          onChange={(e) => set("slug", slugify(e.target.value))}
                          className="flex-1 px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none font-mono transition-all"
                        />
                      </div>
                    </div>
                  )}
                  {activeLang === "en" && (
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Category *</label>
                      <select value={form.category} onChange={(e) => set("category", e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] outline-none appearance-none cursor-pointer"
                        style={{ colorScheme: "dark" }}>
                        {CATEGORIES.map((c) => <option key={c} value={c} className="bg-[#0a1628]">{c}</option>)}
                      </select>
                    </div>
                  )}
                  {activeLang === "en" && (
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Publish Date</label>
                      <input type="date" value={form.date} onChange={(e) => set("date", e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] outline-none"
                        style={{ colorScheme: "dark" }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiEdit2 className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Content & Excerpt" />
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Excerpt ({activeLang === "en" ? "English" : "Bangla"}) *{" "}
                      <span className="text-white/30 font-normal normal-case ml-1">
                        ({(activeLang === "en" ? form.excerpt : form.excerptBn).length}/300)
                      </span>
                    </label>
                    <textarea value={activeLang === "en" ? form.excerpt : form.excerptBn}
                      onChange={(e) => set(activeLang === "en" ? "excerpt" : "excerptBn", e.target.value)}
                      placeholder={activeLang === "en" ? "Brief summary..." : "সংক্ষিপ্ত বিবরণ..."}
                      rows={3} maxLength={300}
                      className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none resize-none transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Body ({activeLang === "en" ? "English" : "Bangla"})
                    </label>
                    <RichTextEditor key={activeLang}
                      content={activeLang === "en" ? form.content : form.contentBn}
                      onChange={handleContentChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cover Image */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiImage className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Cover Image" noMargin />
                <div className="mb-4" />
                {form.coverImage ? (
                  <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-sm mb-4 group">
                    <img src={form.coverImage} alt="Cover" className="w-full h-40 object-cover" />
                    <button type="button" onClick={() => set("coverImage", "")} title="Remove image"
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-sm">
                      <FiX className="w-8 h-8" />
                    </button>
                  </div>
                ) : (
                  <div onClick={() => coverInputRef.current?.click()}
                    className="h-40 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#c8a96e]/50 hover:bg-[#c8a96e]/5 transition-all mb-4 text-center p-4">
                    {coverUploading ? <FiLoader className="w-8 h-8 text-[#c8a96e] animate-spin mb-2" /> : (
                      <>
                        <FiImage className="w-8 h-8 text-white/20 mb-3" />
                        <p className="text-[13px] font-medium text-white/60">Click to upload cover</p>
                        <p className="text-[11px] text-white/30 mt-1">Max 5 MB (JPEG, PNG, WEBP)</p>
                      </>
                    )}
                  </div>
                )}
                <input ref={coverInputRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleCoverUpload(f); e.target.value = ""; }} />
                <button type="button" onClick={() => coverInputRef.current?.click()} disabled={coverUploading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all disabled:opacity-60">
                  {coverUploading ? <FiLoader className="w-4 h-4 animate-spin" /> : <FiCamera className="w-4 h-4" />}
                  {coverUploading ? "Uploading..." : "Upload Image"}
                </button>
              </div>

              {/* Cover Gradient */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiImage className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Cover Gradient" />
                <div className="flex flex-wrap gap-3">
                  {GRADIENTS.map((g) => (
                    <button key={g} type="button" onClick={() => set("coverGradient", g)}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g} border-2 transition-all ${
                        form.coverGradient === g ? "border-[#c8a96e] scale-110 shadow-lg shadow-[#c8a96e]/30" : "border-white/10 hover:border-white/30"
                      }`} />
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiTag className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Tags" />
                <div className="flex gap-2 mb-4">
                  <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
                    placeholder="Add tag (Press Enter)"
                    className="flex-1 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none transition-all placeholder:text-white/20" />
                  <button type="button" onClick={addTag}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#c8a96e]/10 hover:bg-[#c8a96e]/20 text-[#c8a96e] border border-[#c8a96e]/30 rounded-xl transition-colors">
                    Add
                  </button>
                </div>
                {form.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {form.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-white/80 text-[11px] font-semibold tracking-wide uppercase rounded-full border border-white/10">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="hover:text-[#c8a96e] text-white/40 transition-colors">
                          <FiX className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Visibility */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiSettings className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Visibility" />
                <div className="space-y-4">
                  {[
                    { key: "published", label: "Published", desc: "Visible on the public Insights page" },
                    { key: "featured", label: "Featured", desc: "Show as the featured article at the top" },
                  ].map(({ key, label, desc }) => (
                    <label key={key} className="flex items-start gap-3 cursor-pointer">
                      <div className={`w-10 h-5 rounded-full transition-all relative shrink-0 mt-0.5 ${form[key as keyof typeof form] ? "bg-[#c8a96e]" : "bg-white/10"}`}
                        onClick={() => set(key, !form[key as keyof typeof form])}>
                        <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${form[key as keyof typeof form] ? "translate-x-5" : ""}`} />
                      </div>
                      <div>
                        <p className="text-sm text-white font-medium">{label}</p>
                        <p className="text-[11px] text-white/40">{desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* SEO */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5 space-y-4">
                <SectionHeader icon={<FiSettings className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="SEO Settings" />
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">SEO Title</label>
                  <input type="text" value={form.seoTitle} onChange={(e) => set("seoTitle", e.target.value)}
                    placeholder={form.title || "SEO title"}
                    className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none transition-all placeholder:text-white/20" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">Meta Description</label>
                  <textarea value={form.seoDescription} onChange={(e) => set("seoDescription", e.target.value)}
                    placeholder={form.excerpt || "Meta description..."}
                    rows={3}
                    className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none resize-none transition-all placeholder:text-white/20" />
                </div>
              </div>

              {/* View Count */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiEye className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="View Count" />
                <input type="number" min={0} value={form.views}
                  onChange={(e) => set("views", e.target.value === "" ? "" : parseInt(e.target.value) || 0)}
                  placeholder="0"
                  className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none transition-all placeholder:text-white/20" />
              </div>

              {/* Order */}
              <div className="bg-black/20 rounded-xl p-5 shadow-sm border border-white/5">
                <SectionHeader icon={<FiSettings className="w-4 h-4" />} iconClass="bg-[#c8a96e]/20 text-[#c8a96e]" label="Display Order" />
                <input type="number" value={form.order}
                  onChange={(e) => set("order", e.target.value === "" ? "" : parseInt(e.target.value) || 0)}
                  placeholder="0"
                  className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none transition-all placeholder:text-white/20" />
                <p className="text-[11px] text-white/40 mt-2 leading-relaxed">Lower numbers appear first.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
            <button type="button" onClick={() => handleSave(true)} disabled={saving}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#c8a96e] to-[#a07840] hover:shadow-lg hover:shadow-[#c8a96e]/20 disabled:opacity-60 rounded-xl transition-all">
              {saving ? <FiLoader className="w-4 h-4 animate-spin" /> : <FiGlobe className="w-4 h-4" />}
              Publish Changes
            </button>
            <button type="button" onClick={() => handleSave(undefined)} disabled={saving}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white rounded-xl transition-colors disabled:opacity-60">
              {saving ? <FiLoader className="w-4 h-4 animate-spin" /> : <FiSave className="w-4 h-4" />}
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
