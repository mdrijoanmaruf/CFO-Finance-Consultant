"use client";

import React from "react";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  // Simple fallback textarea for now. You can replace this with a real WYSIWYG editor like React-Quill later.
  return (
    <textarea
      value={content}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#c8a96e] focus:border-transparent outline-none resize-y"
      placeholder="Write your post content here..."
    />
  );
}
