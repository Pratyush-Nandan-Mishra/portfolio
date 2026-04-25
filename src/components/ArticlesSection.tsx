interface Article {
  title: string;
  url: string;
  platform: string;
  date: string;
  readTime: string;
}

interface Props {
  articles: Article[];
  mediumUrl: string;
}

export default function ArticlesSection({ articles, mediumUrl }: Props) {
  return (
    <section id="articles" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Articles</h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10 rounded" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111] border border-zinc-800 rounded-xl p-5 flex flex-col gap-3 hover:border-cyan-800/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.04)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 bg-zinc-800 rounded-full px-2.5 py-1">
                  {article.platform}
                </span>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>

              <div className="mt-auto flex items-center gap-3 text-xs text-gray-600">
                <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        {mediumUrl && (
          <div className="mt-10 text-center">
            <a
              href={mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View all articles on Medium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
