"use client";

import { useState } from "react";
import Link from "next/link";
import BgAnimation from "@/Components/Shared/BG-Animation";
import {
  FiMail,
  FiPhone,
  FiArrowRight,
  FiCheck,
  FiAlertCircle,
  FiLoader,
  FiExternalLink,
} from "react-icons/fi";

const AREAS_OF_INTEREST = [
  "CFO & Strategic Finance Advisory",
  "Corporate Governance & Board Advisory",
  "Financial Management & Process Improvement",
  "Treasury, Banking & Financing",
  "Tax, VAT & Regulatory Compliance",
  "Procurement & Contract Advisory",
  "Donor-Funded Project Advisory",
  "Fractional CFO Services",
  "Financial Due Diligence",
  "Other / General Enquiry",
];

interface FormData {
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  requirement: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  organization: "",
  designation: "",
  email: "",
  phone: "",
  areaOfInterest: "",
  requirement: "",
};

const inputBase =
  "w-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#c8a96e]/50 focus:bg-white/[0.05] text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Submission failed");
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="relative bg-[#060e1c] min-h-screen">
      <BgAnimation />

      {/* ── Page Banner ───────────────────────────────────────────────── */}
      <section className="relative pt-32 lg:pt-40 pb-14 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(200,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 50%, rgba(10,30,70,0.5) 0%, transparent 60%)",
          }}
        />

        {/* Decorative vertical grid lines */}
        <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Get in Touch
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>

          <h1 className="text-white font-bold leading-[1.15] tracking-tight text-3xl sm:text-4xl lg:text-4xl xl:text-5xl max-w-4xl mb-5">
            Let's Discuss Your{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Business Challenge
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-[17px] leading-relaxed max-w-[600px]">
            Whether you need fractional CFO advisory, a governance review, or a
            strategic financial assessment — start with a confidential conversation.
            Fill in the form and I'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────── */}
      <section className="relative pb-20">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">

            {/* ── Form card ─────────────────────────────────────── */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10">
              {/* Top gold accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(200,169,110,0.3) 30%, rgba(200,169,110,0.3) 70%, transparent)",
                }}
              />

              <h2 className="text-white font-bold text-lg mb-1">
                Consultation Request Form
              </h2>
              <p className="text-white/45 text-sm mb-8">
                All information shared is treated as{" "}
                <span className="text-[#c8a96e]/80">strictly confidential</span>.
              </p>

              {/* ── Success state ─── */}
              {status === "success" && (
                <div className="flex flex-col items-center text-center gap-5 py-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#c8a96e]/10 border border-[#c8a96e]/30 flex items-center justify-center">
                    <FiCheck className="w-8 h-8 text-[#c8a96e]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Request Submitted
                    </h3>
                    <p className="text-white/55 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out. Your request has been received
                      and I'll get back to you within 1–2 business days.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c8a96e] hover:text-white transition-colors duration-300 group"
                  >
                    Submit another request
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* ── The form ─── */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Row 1: Name + Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                        Full Name <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required className={inputBase} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="organization" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                        Organization <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input id="organization" name="organization" type="text" placeholder="Company / organization" value={form.organization} onChange={handleChange} required className={inputBase} />
                    </div>
                  </div>

                  {/* Row 2: Designation + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="designation" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                        Designation <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input id="designation" name="designation" type="text" placeholder="Your job title" value={form.designation} onChange={handleChange} required className={inputBase} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                        Email Address <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required className={inputBase} />
                    </div>
                  </div>

                  {/* Row 3: Phone + Area of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                        Phone Number <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" placeholder="+880 …" value={form.phone} onChange={handleChange} required className={inputBase} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="areaOfInterest" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                        Area of Interest <span className="text-[#c8a96e]">*</span>
                      </label>
                      <select
                        id="areaOfInterest"
                        name="areaOfInterest"
                        value={form.areaOfInterest}
                        onChange={handleChange}
                        required
                        className={`${inputBase} appearance-none cursor-pointer`}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled className="bg-[#0a1628] text-white/40">
                          Select an area…
                        </option>
                        {AREAS_OF_INTEREST.map((area) => (
                          <option key={area} value={area} className="bg-[#0a1628] text-white">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="requirement" className="text-white/65 text-xs font-semibold tracking-wider uppercase">
                      Brief Description of Requirement <span className="text-[#c8a96e]">*</span>
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      rows={5}
                      placeholder="Briefly describe your business challenge or the advisory you're seeking…"
                      value={form.requirement}
                      onChange={handleChange}
                      required
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-red-400 text-sm">
                      <FiAlertCircle className="w-4 h-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      id="contact-submit-btn"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <FiLoader className="w-4 h-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Request a Consultation
                          <FiArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ── Sidebar ────────────────────────────────────────── */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-32">

              {/* Direct contact card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(200,169,110,0.5), transparent)",
                  }}
                />
                <p className="text-[#c8a96e] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                  Direct Contact
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="tel:01911089774"
                    id="contact-phone-link"
                    className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0a1628]/80 border border-white/[0.07] flex items-center justify-center group-hover:border-[#c8a96e]/40 group-hover:bg-[#c8a96e]/10 transition-all duration-300 shrink-0">
                      <FiPhone className="w-4 h-4 text-white/40 group-hover:text-[#c8a96e] transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-wider font-semibold mb-0.5">
                        Mobile
                      </p>
                      <p className="text-sm font-semibold text-white">01911089774</p>
                    </div>
                  </a>

                  <a
                    href="mailto:alamin.hs@gmail.com"
                    id="contact-email-link"
                    className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0a1628]/80 border border-white/[0.07] flex items-center justify-center group-hover:border-[#c8a96e]/40 group-hover:bg-[#c8a96e]/10 transition-all duration-300 shrink-0">
                      <FiMail className="w-4 h-4 text-white/40 group-hover:text-[#c8a96e] transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-wider font-semibold mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-white break-all">
                        alamin.hs@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* LinkedIn card */}
              <a
                href="https://www.linkedin.com/in/md-al-amin-bhuiyan-b8517933/"
                id="contact-linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] hover:border-[#0077b5]/40 bg-white/[0.02] hover:bg-[#0077b5]/[0.06] p-6 flex items-center gap-4 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center group-hover:bg-[#0077b5]/20 group-hover:border-[#0077b5]/40 transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm mb-0.5">
                    Connect on LinkedIn
                  </p>
                  <p className="text-white/40 text-xs truncate">
                    md-al-amin-bhuiyan-b8517933
                  </p>
                </div>
                <FiExternalLink className="w-4 h-4 text-white/25 group-hover:text-white/60 transition-colors duration-300 shrink-0" />
              </a>

              {/* Response notice */}
              <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-[#c8a96e]/[0.05] border border-[#c8a96e]/15">
                <div className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a96e] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8a96e]" />
                </div>
                <p className="text-white/55 text-[13px] leading-relaxed">
                  <span className="text-[#c8a96e] font-semibold">Typically responds</span>{" "}
                  within 1–2 business days. All enquiries are treated as strictly
                  confidential.
                </p>
              </div>

              {/* Credentials strip */}
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                <p className="text-[#c8a96e] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
                  Qualifications
                </p>
                <ul className="flex flex-col gap-2">
                  {["MBA – Finance", "LLB", "Chartered Secretary (CS)", "Income Tax Practitioner (ITP)"].map((cred) => (
                    <li key={cred} className="flex items-center gap-2 text-xs text-white/55">
                      <span className="text-[#c8a96e] text-[9px]">✦</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
