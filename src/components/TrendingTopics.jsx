export default function TrendingTopics({ articles, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="skeleton rounded-xl h-64"></div>
        ))}
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-6xl mb-4">📰</div>
        <p>No trending topics at the moment</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article, index) => (
        <a
          key={article.id}
          href={`/articles/${article.slug}`}
          className="group relative overflow-hidden rounded-xl glass card-hover"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
          </div>

          {/* Content */}
          <div className="relative p-8 h-full flex flex-col justify-between min-h-[16rem]">
            <div>
              {/* Trending Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/90 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                <span className="animate-pulse">🔥</span>
                <span>Trending</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 line-clamp-2">
                {article.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  {article.category}
                </span>
                <span>{article.readingTime} min read</span>
              </div>
              <div className="text-blue-400 group-hover:translate-x-2 transition-transform text-2xl">
                →
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      ))}
    </div>
  );
}
