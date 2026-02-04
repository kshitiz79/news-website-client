"use client";

import { useState, useEffect } from 'react';
import ArticleCard from './../../components/ArticleCard';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate fetching articles
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: "OpenAI Releases GPT-5: The Future of AI is Here",
          excerpt: "OpenAI has unveiled GPT-5, marking a significant leap in artificial intelligence capabilities.",
          category: "Artificial Intelligence",
          slug: "openai-gpt-5-release",
          publishedAt: "2026-01-28",
          readingTime: 5,
          trending: true
        },
        {
          id: 2,
          title: "Apple Vision Pro 2 Leaked: Revolutionary AR Features",
          excerpt: "Leaked documents reveal Apple's next-generation Vision Pro with advanced features.",
          category: "Technology",
          slug: "apple-vision-pro-2-leak",
          publishedAt: "2026-01-28",
          readingTime: 4,
          trending: true
        },
        {
          id: 3,
          title: "Quantum Computing Breakthrough: 1000-Qubit Processor",
          excerpt: "Scientists at MIT have successfully created a stable 1000-qubit quantum processor.",
          category: "Science",
          slug: "quantum-computing-breakthrough",
          publishedAt: "2026-01-27",
          readingTime: 6
        },
        {
          id: 4,
          title: "Tesla's New AI Chip Outperforms NVIDIA's Latest GPU",
          excerpt: "Tesla unveils its proprietary AI training chip with impressive performance.",
          category: "Technology",
          slug: "tesla-ai-chip-nvidia",
          publishedAt: "2026-01-27",
          readingTime: 5
        },
        {
          id: 5,
          title: "Major Cybersecurity Breach Affects 50 Million Users",
          excerpt: "A sophisticated cyberattack has compromised user data from multiple companies.",
          category: "Cybersecurity",
          slug: "major-cybersecurity-breach",
          publishedAt: "2026-01-27",
          readingTime: 7
        },
        {
          id: 6,
          title: "AI-Powered Drug Discovery Finds Cure for Rare Disease",
          excerpt: "Researchers using AI have discovered a potential cure for a rare genetic disorder.",
          category: "Health",
          slug: "ai-drug-discovery-cure",
          publishedAt: "2026-01-26",
          readingTime: 5
        },
        {
          id: 7,
          title: "Meta Announces Revolutionary VR Headset",
          excerpt: "Meta's new VR headset promises unprecedented immersion and comfort.",
          category: "Technology",
          slug: "meta-vr-headset",
          publishedAt: "2026-01-26",
          readingTime: 4
        },
        {
          id: 8,
          title: "Breakthrough in Fusion Energy: Net Positive Achieved",
          excerpt: "Scientists achieve sustained net-positive fusion reaction for the first time.",
          category: "Science",
          slug: "fusion-energy-breakthrough",
          publishedAt: "2026-01-25",
          readingTime: 6
        },
        {
          id: 9,
          title: "AI Regulation Bill Passes in European Parliament",
          excerpt: "Comprehensive AI regulation framework approved, setting global precedent.",
          category: "Business",
          slug: "ai-regulation-europe",
          publishedAt: "2026-01-25",
          readingTime: 5
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const categories = ['all', 'Artificial Intelligence', 'Technology', 'Science', 'Business', 'Cybersecurity', 'Health'];

  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === 'all' || article.category === filter;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">All Articles</span>
          </h1>
          <p className="text-xl text-gray-400">
            Explore our latest AI-generated news and insights
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>


          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'glass text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          {loading ? (
            <p>Loading articles...</p>
          ) : (
            <p>
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
              {filter !== 'all' && ` in ${filter}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          )}
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton rounded-xl h-96"></div>
            ))}
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div key={article.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {!loading && filteredArticles.length > 0 && filteredArticles.length >= 9 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/10 transition-all">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
