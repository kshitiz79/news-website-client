"use client";

import { useEffect, useState } from 'react';
import ArticleCard from './../components/ArticleCard';
import TrendingTopics from './../components/TrendingTopics';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching articles
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: "OpenAI Releases GPT-5: The Future of AI is Here",
          excerpt: "OpenAI has unveiled GPT-5, marking a significant leap in artificial intelligence capabilities with unprecedented reasoning and multimodal understanding.",
          category: "Artificial Intelligence",
          image: "/images/ai-1.jpg",
          slug: "openai-gpt-5-release",
          publishedAt: "2026-01-28",
          readingTime: 5,
          trending: true
        },
        {
          id: 2,
          title: "Apple Vision Pro 2 Leaked: Revolutionary AR Features",
          excerpt: "Leaked documents reveal Apple's next-generation Vision Pro with advanced eye-tracking, neural interface, and all-day battery life.",
          category: "Technology",
          image: "/images/tech-1.jpg",
          slug: "apple-vision-pro-2-leak",
          publishedAt: "2026-01-28",
          readingTime: 4,
          trending: true
        },
        {
          id: 3,
          title: "Quantum Computing Breakthrough: 1000-Qubit Processor Achieved",
          excerpt: "Scientists at MIT have successfully created a stable 1000-qubit quantum processor, bringing us closer to practical quantum computing.",
          category: "Science",
          image: "/images/science-1.jpg",
          slug: "quantum-computing-breakthrough",
          publishedAt: "2026-01-27",
          readingTime: 6
        },
        {
          id: 4,
          title: "Tesla's New AI Chip Outperforms NVIDIA's Latest GPU",
          excerpt: "Tesla unveils its proprietary AI training chip that delivers 2x performance of NVIDIA's H100 at half the power consumption.",
          category: "Technology",
          image: "/images/tech-2.jpg",
          slug: "tesla-ai-chip-nvidia",
          publishedAt: "2026-01-27",
          readingTime: 5
        },
        {
          id: 5,
          title: "Major Cybersecurity Breach Affects 50 Million Users",
          excerpt: "A sophisticated cyberattack has compromised user data from multiple tech companies, highlighting critical security vulnerabilities.",
          category: "Cybersecurity",
          image: "/images/security-1.jpg",
          slug: "major-cybersecurity-breach",
          publishedAt: "2026-01-27",
          readingTime: 7
        },
        {
          id: 6,
          title: "AI-Powered Drug Discovery Finds Cure for Rare Disease",
          excerpt: "Researchers using AI have discovered a potential cure for a rare genetic disorder, demonstrating AI's impact on healthcare.",
          category: "Health",
          image: "/images/health-1.jpg",
          slug: "ai-drug-discovery-cure",
          publishedAt: "2026-01-26",
          readingTime: 5
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const trendingArticles = articles.filter(a => a.trending);
  const latestArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* 3-Column News Layout */}
      <section className="py-12 bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Latest News */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6 border-b border-gray-900 pb-2">
                <h2 className="text-xl font-bold uppercase tracking-tight">Latest News</h2>
                <div className="bg-black text-white p-1 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="space-y-6">
                {(loading ? Array(5).fill({}) : articles.slice(0, 5)).map((article, i) => (
                  <div key={article.id || i} className={`group ${loading ? 'animate-pulse' : ''}`}>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 overflow-hidden">
                        {!loading && <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                          {loading ? <div className="h-4 bg-gray-200 w-full mb-1"></div> : article.title}
                        </h3>
                        {loading ? <div className="h-3 bg-gray-200 w-24 mt-2"></div> : <p className="text-[10px] text-gray-500 mt-1 uppercase font-semibold">{article.publishedAt}</p>}
                      </div>
                    </div>
                    {i < 4 && <div className="mt-6 border-b border-gray-100"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column: Breaking News */}
            <div className="lg:col-span-6 border-x border-gray-100 px-0 lg:px-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-4xl font-playfair font-bold">Breaking news</h2>
                <button className="bg-black text-white px-3 py-1 flex items-center text-[10px] font-bold uppercase tracking-wider">
                  News <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden mb-8">
                {loading ? (
                  <div className="w-full h-full skeleton"></div>
                ) : (
                  <img src={articles[0]?.image} alt="" className="w-full h-full object-cover" />
                )}
              </div>

              {!loading && (
                <div className="animate-fadeIn">
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 leading-tight tracking-tight text-gray-900">
                    {articles[0]?.title}
                  </h1>
                  <div className="flex items-center gap-4 text-[10px] font-bold mb-4">
                    <span className="text-gray-400">{articles[0]?.publishedAt}</span>
                    <span className="text-gray-400 uppercase">Featured, News</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {articles[0]?.excerpt}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Sport News */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6 border-b border-gray-900 pb-2">
                <h2 className="text-xl font-bold uppercase tracking-tight">Sport</h2>
                <div className="bg-black text-white p-1 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="space-y-6">
                {(loading ? Array(5).fill({}) : articles.slice(2, 7)).map((article, i) => (
                  <div key={article.id || i} className={`group ${loading ? 'animate-pulse' : ''}`}>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 overflow-hidden">
                        {!loading && <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                          {loading ? <div className="h-4 bg-gray-200 w-full mb-1"></div> : article.title}
                        </h3>
                        {loading ? <div className="h-3 bg-gray-200 w-24 mt-2"></div> : <p className="text-[10px] text-gray-500 mt-1 uppercase font-semibold">{article.publishedAt}</p>}
                      </div>
                    </div>
                    {i < 4 && <div className="mt-6 border-b border-gray-100"></div>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="gradient-text">Trending Now</span>
            </h2>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Live</span>
            </div>
          </div>
          <TrendingTopics articles={trendingArticles} loading={loading} />
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <a href="/articles" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-2">
              <span>View All</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton rounded-xl h-96"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <div key={article.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'AI', icon: '🤖', slug: 'artificial-intelligence', color: 'from-blue-500 to-cyan-500' },
              { name: 'Technology', icon: '💻', slug: 'technology', color: 'from-blue-400 to-sky-500' },
              { name: 'Business', icon: '💼', slug: 'business', color: 'from-green-500 to-emerald-500' },
              { name: 'Science', icon: '🔬', slug: 'science', color: 'from-yellow-500 to-orange-500' },
              { name: 'Cybersecurity', icon: '🔒', slug: 'cybersecurity', color: 'from-red-500 to-rose-500' }
            ].map((category) => (
              <a
                key={category.slug}
                href={`/category/${category.slug}`}
                className={`glass rounded-xl p-6 text-center card-hover group`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">
                  {category.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest AI and tech news delivered to your inbox daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
