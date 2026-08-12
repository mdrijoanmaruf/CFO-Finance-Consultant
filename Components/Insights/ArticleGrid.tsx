import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { Article } from "./insightsData";

interface Props {
  articles: Article[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group block h-full">
      <article className="h-full flex flex-col relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

        {/* Cover */}
        <div
          className={`relative h-36 bg-gradient-to-br ${article.coverGradient} shrink-0`}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 30% 40%, rgba(200,169,110,0.10) 0%, transparent 70%)",
            }}
          />
          {/* Category badge */}
          <div className="absolute bottom-4 left-5">
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-[#c8a96e]/30"
              style={{ color: "#c8a96e", background: "rgba(6,14,28,0.7)" }}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="relative flex-1 flex flex-col p-6">
          {/* Date + read time */}
          <div className="flex items-center gap-4 text-white/40 text-[11px] mb-4">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-3 h-3" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="w-3 h-3" />
              {article.readingTime} min
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-[#e8c98e] transition-colors duration-300 line-clamp-3">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/55 text-[13px] leading-relaxed mb-5 line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-2 text-[#c8a96e] text-xs font-semibold tracking-wide mt-auto">
            <span>Read More</span>
            <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ArticleGrid({ articles }: Props) {
  if (articles.length === 0) {
    return (
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
              📭
            </div>
            <p className="text-white/60 text-base">No articles match your search or filter.</p>
            <p className="text-white/40 text-sm">Try a different keyword or category.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
          <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
            All Insights
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
