import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  titleBn?: string;
  slug: string;
  excerpt: string;
  excerptBn?: string;
  content: string;
  contentBn?: string;
  coverImage?: string;
  tags: string[];
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  readTime: number;
  views: number;
  order: number;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  author: {
    name: string;
    photo?: string;
    avatar?: string;
  };
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    titleBn: { type: String },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    excerptBn: { type: String },
    content: { type: String, required: true },
    contentBn: { type: String },
    coverImage: { type: String },
    tags: [{ type: String }],
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    seoTitle: { type: String },
    seoDescription: { type: String },
    readTime: { type: Number, default: 1 },
    views: { type: Number, default: 0 },
    order: { type: Number, default: 0 },
    publishedAt: { type: Date },
    author: {
      name: { type: String },
      photo: { type: String },
      avatar: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
