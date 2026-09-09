import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { articles } from "@/Components/Insights/insightsData";

export default function InsightsSnippet() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="relative py-16 lg:py-24 bg-[#0a1628]/40 border-y border-white/[0.02] overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Latest Insights
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Professional Perspectives
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-[#c8a96e]/30 transition-all duration-300 group shrink-0"
          >
            View All Articles
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#c8a96e]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
            >
              <div
                className={`w-full aspect-[16/9] relative bg-gradient-to-br ${article.coverGradient} p-6 flex flex-col justify-between overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.15) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 self-start px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white uppercase mb-4 shadow-xl">
                  {article.category}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-8 relative">
                <div className="flex items-center gap-3 text-xs text-white/40 font-medium mb-3">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <FiClock className="w-3.5 h-3.5" />
                    {article.readingTime} min read
                  </span>
                </div>
                <h3 className="text-white font-bold text-[19px] leading-[1.3] mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#c8a96e] text-sm font-semibold group/btn">
                  Read Article
                  <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
