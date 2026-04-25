'use client';

import { motion } from 'framer-motion';

interface Article {
  title: string;
  url: string;
  platform: string;
  date: string;
  readTime: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

const ACCENT_COLORS = [
  { text: '#22d3ee', bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.25)'  },
  { text: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  { text: '#4ade80', bg: 'rgba(74,222,128,0.1)',  border: 'rgba(74,222,128,0.25)'  },
  { text: '#fb923c', bg: 'rgba(251,146,60,0.1)',  border: 'rgba(251,146,60,0.25)'  },
  { text: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)' },
  { text: '#fbbf24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.25)'  },
];

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section id="articles" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">Writing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Articles</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-4" />
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article, i) => {
            const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <motion.a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ borderColor: accent.border, boxShadow: `0 0 24px ${accent.text}18` }}
                className="relative flex flex-col gap-4 bg-[#111] border border-zinc-800 rounded-2xl p-7 no-underline overflow-hidden group transition-all duration-300"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${accent.text}, transparent)` }}
                />

                {/* Platform + date */}
                <div className="flex items-center justify-between mt-1">
                  <span
                    className="text-xs font-semibold rounded-full px-3 py-1"
                    style={{ color: accent.text, background: accent.bg, border: `1px solid ${accent.border}` }}
                  >
                    {article.platform}
                  </span>
                  <span className="text-xs text-gray-600">
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-200 leading-snug group-hover:text-white transition-colors flex-grow">
                  {article.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {article.readTime}
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: 'rgb(75,85,99)' }}
                  >
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
