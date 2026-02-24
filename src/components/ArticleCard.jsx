export default function ArticleCard({ article }) {
  return (
    <a href={`/articles/${article.slug}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden card-hover h-full border border-gray-100 shadow-sm">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-sky-100 overflow-hidden">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              {article.category === 'Artificial Intelligence' && '🤖'}
              {article.category === 'Technology' && '💻'}
              {article.category === 'Science' && '🔬'}
              {article.category === 'Business' && '💼'}
              {article.category === 'Cybersecurity' && '🔒'}
              {article.category === 'Health' && '🏥'}
            </div>
          )}
          
          {/* Trending Badge */}
          {article.trending && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 rounded-full text-xs font-semibold flex items-center space-x-1">
              <span>🔥</span>
              <span>Trending</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 border border-gray-100 shadow-sm">
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-500 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{article.readingTime} min read</span>
              </span>
            </div>
            <div className="text-blue-500 group-hover:translate-x-2 transition-transform">
              →
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
