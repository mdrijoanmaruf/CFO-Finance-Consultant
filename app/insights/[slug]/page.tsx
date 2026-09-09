import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiCalendar, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import BgAnimation from "@/Components/Shared/BG-Animation";
import { ArticleCard } from "@/Components/Insights/ArticleGrid";
import { articles } from "@/Components/Insights/insightsData";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate article body from the article data (realistic placeholder content)
function generateArticleBody(title: string, excerpt: string, category: string): string {
  return `${excerpt}

## The Context

Over the course of more than two decades working at the intersection of corporate finance, governance, treasury, and strategic advisory, I have come to understand that the most valuable insights are those grounded in practical, real-world experience — not theoretical frameworks disconnected from how businesses actually operate.

This insight reflects that accumulated experience. The perspectives I share here are shaped by direct engagement with boards of directors, banking institutions, regulatory authorities, development partners, and senior leadership teams across corporate, conglomerate, and consulting environments.

## Key Principles

**1. Start with Business Reality**

Any financial strategy, governance framework, or advisory recommendation must begin with a clear-eyed understanding of the business context. The industry, the ownership structure, the competitive dynamics, the regulatory environment — all of these shape what is actually possible and practical.

**2. Integrate Multiple Perspectives**

The most complex financial and governance challenges rarely sit neatly within a single discipline. They intersect financial management, legal compliance, tax obligations, and organizational governance simultaneously. My background in Finance (MBA), Law (LLB), Corporate Governance (CS), and Taxation (ITP) allows me to navigate these intersections rather than treat them in isolation.

**3. Focus on Implementation**

Strategic advice that cannot be implemented is not advice — it is intellectual entertainment. Every recommendation I make is designed with implementation in mind: the practical steps, the organizational constraints, the resource requirements, and the change management considerations.

## Practical Applications

The principles outlined above have direct application across a range of organizational contexts:

- **Corporate enterprises** seeking to strengthen financial discipline, improve governance, and optimize treasury management
- **SMEs and family-owned businesses** looking to build more professional and scalable finance and governance frameworks
- **Development organizations** requiring donor-compliant financial management systems and audit-ready operations
- **Boards of Directors** seeking independent financial and governance advisory to complement their internal capabilities

## Conclusion

Sound financial leadership, robust corporate governance, and effective strategic advisory are not luxuries — they are the infrastructure that enables organizations to sustain performance, manage risk, and create long-term value.

If this insight has raised questions or challenges relevant to your organization, I encourage you to reach out directly. A structured conversation about your specific situation is always more valuable than any generalized article can provide.

---

*MD. Al Amin Bhuiyan is a CFO and Corporate Finance Consultant with 22+ years of experience. He holds an MBA (Finance), LLB, Chartered Secretary (CS), and Income Tax Practitioner (ITP) qualification.*`;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  
  const url = `https://al-amin-pi.vercel.app/insights/${slug}`;
  
  return {
    title: `${article.title} | Insights – MD. Al Amin Bhuiyan`,
    description: article.excerpt,
    keywords: [article.category, "Corporate Finance", "CFO Insights"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: url,
      type: "article",
      publishedTime: article.date,
      authors: ["https://al-amin-pi.vercel.app/about"],
    },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const body = generateArticleBody(article.title, article.excerpt, article.category);
  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);
  const fallbackRelated = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const relatedArticles = related.length > 0 ? related : fallbackRelated;

  // Convert markdown-like body to paragraphs/headings
  const bodyLines = body.split("\n");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: "MD. Al Amin Bhuiyan",
      url: "https://al-amin-pi.vercel.app/about",
    },
    datePublished: article.date,
    dateModified: article.date,
    publisher: {
      "@type": "Organization",
      name: "MD. Al Amin Bhuiyan",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://al-amin-pi.vercel.app/insights/${slug}`,
    },
  };

  return (
    <main className="relative bg-[#060e1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BgAnimation />

      {/* Cover */}
      <div
        className={`relative min-h-[40vh] flex items-end bg-gradient-to-br ${article.coverGradient} overflow-hidden pt-32 pb-0`}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(200,169,110,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-15">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative max-w-[900px] mx-auto px-6 lg:px-10 pb-16 w-full z-10">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#c8a96e] transition-colors duration-300 mb-8 group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Insights
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#c8a96e]/30"
              style={{ color: "#c8a96e", background: "rgba(200,169,110,0.10)" }}
            >
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <FiCalendar className="w-3.5 h-3.5" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <FiClock className="w-3.5 h-3.5" />
              {article.readingTime} min read
            </span>
          </div>

          <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article content */}
      <div className="relative max-w-[900px] mx-auto px-6 lg:px-10 py-12 lg:py-16 z-10">
        <div className="space-y-5">
          {bodyLines.map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-white font-bold text-xl sm:text-2xl mt-10 mb-4 leading-tight"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("**") && line.endsWith("**") && !line.includes(" ")) {
              return null;
            }
            if (line.startsWith("---")) {
              return <hr key={i} className="border-white/10 my-8" />;
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-white/70 text-base leading-relaxed flex gap-3">
                  <span className="text-[#c8a96e] mt-1.5 text-xs">✦</span>
                  <span dangerouslySetInnerHTML={{ __html: line.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
                </li>
              );
            }
            if (line.trim() === "") return <div key={i} className="h-1" />;
            if (line.startsWith("*") && line.endsWith("*")) {
              return (
                <p key={i} className="text-white/45 text-sm italic leading-relaxed">
                  {line.replace(/^\*|\*$/g, "")}
                </p>
              );
            }
            // Bold inline
            return (
              <p
                key={i}
                className="text-white/70 text-base leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: line.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>"),
                }}
              />
            );
          })}
        </div>

        {/* Author Bio Strip */}
        <div className="mt-16 p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl shrink-0 border border-[#c8a96e]/25 shadow-lg"
            style={{ background: "linear-gradient(135deg, #c8a96e 0%, #a07840 100%)" }}
          >
            AA
          </div>
          <div className="flex-1">
            <div
              className="w-8 h-0.5 rounded-full mb-3"
              style={{ background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)" }}
            />
            <p className="text-white font-bold text-lg mb-0.5">MD. Al Amin Bhuiyan</p>
            <p className="text-[#c8a96e] text-xs font-semibold tracking-wider uppercase mb-3">
              CFO · Corporate Finance & Governance Consultant
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              An accomplished finance executive and consultant with 22+ years of progressive
              experience in corporate finance, governance, treasury, tax, and strategic advisory.
              Currently serving as CFO of Global Brand PLC (BDT 1,200 Crore turnover). Holds MBA
              (Finance), LLB, Chartered Secretary (CS), and Income Tax Practitioner (ITP) qualifications.
            </p>
            {/* Social share */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/md-al-amin-bhuiyan-b8517933/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-[#c8a96e] hover:border-[#c8a96e]/30 transition-all text-xs font-medium"
              >
                <FiLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:alamin.hs@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-[#c8a96e] hover:border-[#c8a96e]/30 transition-all text-xs font-medium"
              >
                <FiMail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Insights */}
      {relatedArticles.length > 0 && (
        <section className="relative py-12 lg:py-16 z-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Related Insights
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/15 text-white/80 hover:border-[#c8a96e]/50 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Browse All Insights
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
