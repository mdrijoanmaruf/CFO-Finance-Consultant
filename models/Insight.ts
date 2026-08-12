import mongoose, { Schema, Document } from "mongoose";

export interface IInsight extends Document {
  slug: string;
  title: string;
  titleBn: string;
  excerpt: string;
  excerptBn: string;
  content: string;
  contentBn: string;
  coverImage: string;
  category: string;
  date: string;
  readingTime: number;
  featured: boolean;
  published: boolean;
  coverGradient: string;
  tags: string[];
  views: number;
  order: number;
  seoTitle: string;
  seoDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

const InsightSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    titleBn: { type: String, default: "" },
    excerpt: { type: String, required: true },
    excerptBn: { type: String, default: "" },
    content: { type: String, default: "" },
    contentBn: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    category: { type: String, required: true },
    date: { type: String, required: true },
    readingTime: { type: Number, default: 5 },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    coverGradient: {
      type: String,
      default: "from-[#0a1628] via-[#0d1f3c] to-[#060e1c]",
    },
    tags: { type: [String], default: [] },
    views: { type: Number, default: 0 },
    order: { type: Number, default: 0 },
    seoTitle: { type: String, default: "" },
    seoDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Insight ||
  mongoose.model<IInsight>("Insight", InsightSchema);
