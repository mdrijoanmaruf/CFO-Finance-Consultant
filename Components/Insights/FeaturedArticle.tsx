import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { Article } from "./insightsData";

interface Props {
  article: Article;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function FeaturedArticle({ article }: Props) {
  return (
    <section className="relative py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
          <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
            Featured Insight
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
        </div>

        <Link href={`/insights/${article.slug}`} className="group block">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] hover:border-[#c8a96e]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            {/* Cover gradient banner */}
            <div
              className={`relative h-56 sm:h-72 bg-gradient-to-br ${article.coverGradient} flex items-end p-8`}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(200,169,110,0.12) 0%, transparent 70%)",
                }}
              />
              {/* Animated shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(200,169,110,0.06) 0%, transparent 50%)",
                }}
              />

              {/* Category + reading time */}
              <div className="relative flex items-center gap-3">
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#c8a96e]/30"
                  style={{ color: "#c8a96e", background: "rgba(200,169,110,0.10)" }}
                >
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-xs">
                  <FiClock className="w-3.5 h-3.5" />
                  {article.readingTime} min read
                </span>
              </div>
            </div>

            {/* Content area */}
            <div className="bg-white/[0.02] p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {formatDate(article.date)}
                  </div>
                  <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-[#e8c98e] transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed max-w-3xl">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-6 lg:mt-0 lg:shrink-0 lg:pt-12">
                  <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white group-hover:shadow-[0_0_20px_rgba(200,169,110,0.4)] transition-all duration-300">
                    Read Article
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
