"use client";

import { useState, useRef, ChangeEvent } from "react";
import Link from "next/link";
import BgAnimation from "@/Components/Shared/BG-Animation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Full name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address.";
    if (!password) errs.password = "Password is required.";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire up registration logic
    console.log({ name, email, password, photoFile });
  };

  return (
    <div className="relative min-h-screen bg-[#060e1c] flex items-center justify-center px-4 py-32">
      <BgAnimation />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-md z-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#c8a96e] text-[13px] tracking-wide transition-colors duration-200 mb-6"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
          {/* Gold top bar */}
          <div
            className="h-1 w-full"
            style={{ background: "linear-gradient(90deg, #c8a96e, #a07840, #c8a96e)" }}
          />

          <div className="px-8 pt-8 pb-10">
            {/* Header */}
            <div className="mb-8 text-center">
              <p className="text-[#c8a96e] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">
                Create Account
              </p>
              <h1 className="text-white text-2xl font-bold tracking-tight">
                Register
              </h1>
              <p className="text-white/40 text-sm mt-1">
                Join to access exclusive consulting resources
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Google */}
              <button
                type="button"
                id="register-google-btn"
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-sm font-medium text-white/80 border border-white/10 bg-white/4 hover:border-white/25 hover:bg-white/8 hover:text-white transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/25 text-[11px] tracking-widest uppercase">or sign up with email</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Photo upload */}
              <div className="flex flex-col items-center gap-3">
                <button
                  type="button"
                  id="register-photo-btn"
                  onClick={() => fileRef.current?.click()}
                  className="relative group w-20 h-20 rounded-full border-2 border-dashed border-white/20 hover:border-[#c8a96e]/60 transition-all duration-300 overflow-hidden flex items-center justify-center bg-white/5"
                  aria-label="Upload profile photo (optional)"
                >
                  {photoPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photoPreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-white/30 group-hover:text-[#c8a96e]/70 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  )}
                  {/* Hover overlay */}
                  {photoPreview && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                      </svg>
                    </div>
                  )}
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhoto}
                  aria-label="Photo upload"
                />
                <span className="text-white/30 text-[11px] tracking-wide">
                  Photo upload{" "}
                  <span className="text-white/20">(optional)</span>
                </span>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="register-name" className="text-white/60 text-xs font-medium tracking-widest uppercase">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    id="register-name"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                    placeholder="Your full name"
                    className={`w-full bg-white/5 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:bg-white/8 focus:shadow-[0_0_0_2px_rgba(200,169,110,0.3)] ${errors.name ? "border-red-500/60" : "border-white/10 focus:border-[#c8a96e]/50"}`}
                    autoComplete="name"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-[11px] mt-0.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="register-email" className="text-white/60 text-xs font-medium tracking-widest uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                    placeholder="you@example.com"
                    className={`w-full bg-white/5 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:bg-white/8 focus:shadow-[0_0_0_2px_rgba(200,169,110,0.3)] ${errors.email ? "border-red-500/60" : "border-white/10 focus:border-[#c8a96e]/50"}`}
                    autoComplete="email"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-[11px] mt-0.5">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="register-password" className="text-white/60 text-xs font-medium tracking-widest uppercase">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                    placeholder="Min. 6 characters"
                    className={`w-full bg-white/5 border rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:bg-white/8 focus:shadow-[0_0_0_2px_rgba(200,169,110,0.3)] ${errors.password ? "border-red-500/60" : "border-white/10 focus:border-[#c8a96e]/50"}`}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    id="register-toggle-password"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors duration-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-[11px] mt-0.5">{errors.password}</p>}

                {/* Strength bar */}
                {password.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {[2, 4, 6, 8].map((threshold) => (
                      <div
                        key={threshold}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          password.length >= threshold
                            ? password.length >= 8
                              ? "bg-emerald-500"
                              : password.length >= 6
                              ? "bg-[#c8a96e]"
                              : "bg-red-500/70"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="register-submit-btn"
                className="w-full mt-1 py-3.5 rounded-xl text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Create Account
              </button>

            </form>

            {/* Sign in link */}
            <p className="text-center text-white/35 text-[12px] mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                id="register-login-link"
                className="text-[#c8a96e] hover:text-[#e8c98e] transition-colors duration-200 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/20 text-[11px] mt-5 tracking-wide">
          © {new Date().getFullYear()} MD. Al Amin Bhuiyan. All rights reserved.
        </p>
      </div>
    </div>
  );
}
