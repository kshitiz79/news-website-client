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
          title: "Mar-a-Lago Security: 21-Year-Old Killed by Secret Service",
          excerpt: "Tension erupted last weekend at the Mar-a-Lago residence in Florida. A 21-year-old man from Italy was shot by Secret Service after attempting to bypass security checkpoints.",
          category: "News",
          image: "https://images.unsplash.com/photo-1514755102307-5c7bd88663a7?q=80&w=2000&auto=format&fit=crop",
          slug: "mar-a-lago-security-incident",
          publishedAt: "February 23, 2026",
          trending: true
        },
        {
          id: 2,
          title: "Journey into the Unknown: \"The Leeds Train\" by Daniele Tenzon",
          excerpt: "A deep dive into the latest literary masterpiece that is taking the world by storm, exploring themes of travel, mystery, and human connection.",
          category: "Books",
          image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop",
          slug: "leeds-train-review",
          publishedAt: "February 23, 2026",
          trending: true
        },
        {
          id: 3,
          title: "Injuries in modern football: a systemic problem, not an accidental one",
          excerpt: "As the intensity of the game increases, researchers are finding that the rise in injuries is a direct result of the modern football system's demands on athletes.",
          category: "Sport",
          image: "https://images.unsplash.com/photo-1508098662722-e99c43a406b2?q=80&w=2000&auto=format&fit=crop",
          slug: "football-injuries-study",
          publishedAt: "February 10, 2026"
        },
        {
          id: 4,
          title: "Juventus-Napoli 3-0: Spalletti dominates Conte at the Stadium",
          excerpt: "A tactical masterclass from Spalletti saw Juventus cruise to a comfortable victory against a struggling Napoli side.",
          category: "Sport",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
          slug: "juventus-napoli-match-report",
          publishedAt: "January 25, 2026"
        },
        {
          id: 5,
          title: "Renewal of the National Collective Bargaining Agreement for Metalworkers",
          excerpt: "After months of negotiations, a new agreement has been reached that promises better wages and conditions for millions of workers.",
          category: "Economy",
          image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop",
          slug: "metalworkers-agreement",
          publishedAt: "February 23, 2026"
        },
        {
          id: 6,
          title: "Italian Economy: Recovery consolidates, but pace remains cautious",
          excerpt: "Economic indicators suggest a steady growth for Italy, though global uncertainties keep investors and policymakers on high alert.",
          category: "Economy",
          image: "https://images.unsplash.com/photo-1526303328184-bfd44b10b33b?q=80&w=2000&auto=format&fit=crop",
          slug: "italian-economy-report",
          publishedAt: "February 23, 2026"
        },
        {
          id: 7,
          title: "Cristiano Ronaldo continues to enchant: spectacular assist for Al Nassr",
          excerpt: "Even at his age, Ronaldo proves he is still world-class with a performance that silenced critics in the Asian Championship.",
          category: "Sport",
          image: "https://images.unsplash.com/photo-1529900668413-582731eaa968?q=80&w=2000&auto=format&fit=crop",
          slug: "ronaldo-al-nassr-assist",
          publishedAt: "December 26, 2025"
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
