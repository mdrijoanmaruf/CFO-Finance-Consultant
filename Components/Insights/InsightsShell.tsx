"use client";

import { useState, useMemo } from "react";
import InsightsBanner from "@/Components/Insights/InsightsBanner";
import CategoryFilterBar from "@/Components/Insights/CategoryFilterBar";
import FeaturedArticle from "@/Components/Insights/FeaturedArticle";
import ArticleGrid from "@/Components/Insights/ArticleGrid";
import InsightsCTA from "@/Components/Insights/InsightsCTA";
import { articles } from "@/Components/Insights/insightsData";

const ARTICLES_PER_PAGE = 9;

export default function InsightsShell() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  const featuredArticle = articles.find((a) => a.featured)!;

  const filtered = useMemo(() => {
    return articles
      .filter((a) => !a.featured) // featured shown separately
      .filter((a) => activeCategory === "All" || a.category === activeCategory)
      .filter((a) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
        );
      });
  }, [searchQuery, activeCategory]);

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <InsightsBanner searchQuery={searchQuery} onSearchChange={(v) => { setSearchQuery(v); setVisibleCount(ARTICLES_PER_PAGE); }} />
      <CategoryFilterBar active={activeCategory} onSelect={(c) => { setActiveCategory(c); setVisibleCount(ARTICLES_PER_PAGE); }} />

      {/* Show featured only when no filters active */}
      {!searchQuery && activeCategory === "All" && (
        <FeaturedArticle article={featuredArticle} />
      )}

      <ArticleGrid articles={visibleArticles} />

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center pb-16">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + ARTICLES_PER_PAGE)}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/15 text-white/80 hover:border-[#c8a96e]/50 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Load More Insights
          </button>
        </div>
      )}

      <InsightsCTA />
    </>
  );
}
