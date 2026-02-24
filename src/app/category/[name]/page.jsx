"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ArticleCard from './../../../components/ArticleCard';

export default function CategoryPage() {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    const categorySlug = params.name;
    
    // Category information
    const categories = {
      'artificial-intelligence': {
        name: 'Artificial Intelligence',
        description: 'Latest developments in AI, machine learning, and neural networks',
        icon: '🤖',
        color: 'from-blue-500 to-cyan-500'
      },
      'technology': {
        name: 'Technology',
        description: 'Breaking tech news, gadgets, and innovation',
        icon: '💻',
        color: 'from-blue-400 to-sky-500'
      },
      'science': {
        name: 'Science',
        description: 'Scientific discoveries and research breakthroughs',
        icon: '🔬',
        color: 'from-yellow-500 to-orange-500'
      },
      'business': {
        name: 'Business',
        description: 'Business news, startups, and market trends',
        icon: '💼',
        color: 'from-green-500 to-emerald-500'
      },
      'cybersecurity': {
        name: 'Cybersecurity',
        description: 'Security threats, data protection, and privacy news',
        icon: '🔒',
        color: 'from-red-500 to-rose-500'
      },
      'health': {
        name: 'Health',
        description: 'Medical breakthroughs and health technology',
        icon: '🏥',
        color: 'from-teal-500 to-cyan-500'
      }
    };

    setCategoryInfo(categories[categorySlug] || {
      name: categorySlug,
      description: 'Explore articles in this category',
      icon: '📰',
      color: 'from-gray-500 to-gray-700'
    });

    // Simulate fetching articles
    setTimeout(() => {
      const allArticles = [
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
          excerpt: "Leaked documents reveal Apple's next-generation Vision Pro.",
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
          title: "Tesla's New AI Chip Outperforms NVIDIA",
          excerpt: "Tesla unveils its proprietary AI training chip.",
          category: "Technology",
          slug: "tesla-ai-chip-nvidia",
          publishedAt: "2026-01-27",
          readingTime: 5
        },
        {
          id: 5,
          title: "Major Cybersecurity Breach Affects 50 Million Users",
          excerpt: "A sophisticated cyberattack has compromised user data.",
          category: "Cybersecurity",
          slug: "major-cybersecurity-breach",
          publishedAt: "2026-01-27",
          readingTime: 7
        },
        {
          id: 6,
          title: "AI-Powered Drug Discovery Finds Cure",
          excerpt: "Researchers using AI have discovered a potential cure.",
          category: "Health",
          slug: "ai-drug-discovery-cure",
          publishedAt: "2026-01-26",
          readingTime: 5
        },
        {
          id: 7,
          title: "Neural Networks Achieve Human-Level Reasoning",
          excerpt: "New AI architecture demonstrates unprecedented reasoning capabilities.",
          category: "Artificial Intelligence",
          slug: "neural-networks-reasoning",
          publishedAt: "2026-01-26",
          readingTime: 6
        },
        {
          id: 8,
          title: "Fusion Energy Breakthrough Achieved",
          excerpt: "Scientists achieve sustained net-positive fusion reaction.",
          category: "Science",
          slug: "fusion-energy-breakthrough",
          publishedAt: "2026-01-25",
          readingTime: 6
        },
        {
          id: 9,
          title: "AI Regulation Bill Passes in Europe",
          excerpt: "Comprehensive AI regulation framework approved.",
          category: "Business",
          slug: "ai-regulation-europe",
          publishedAt: "2026-01-25",
          readingTime: 5
        }
      ];

      const filtered = allArticles.filter(
        article => article.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
      );
      
      setArticles(filtered);
      setLoading(false);
    }, 800);
  }, [params.name]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="skeleton rounded-xl h-64 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton rounded-xl h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Category Hero */}
      <div className={`relative bg-gradient-to-br ${categoryInfo.color} py-20`}>
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-7xl mb-6 animate-fadeIn">{categoryInfo.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
            {categoryInfo.name}
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto animate-fadeIn">
            {categoryInfo.description}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{articles.length}</div>
              <div className="text-gray-700 text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {articles.filter(a => a.trending).length}
              </div>
              <div className="text-gray-700 text-sm">Trending</div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span>/</span>
          <a href="/articles" className="hover:text-blue-600 transition-colors">Articles</a>
          <span>/</span>
          <span className="text-gray-900">{categoryInfo.name}</span>
        </div>

        {articles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={article.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {articles.length >= 6 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-gray-50 border border-gray-100 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 hover:text-blue-600 transition-all shadow-sm">
                  Load More Articles
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles yet</h3>
            <p className="text-gray-400 mb-6">
              Check back soon for articles in this category
            </p>
            <a href="/articles" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors inline-block">
              Browse All Articles
            </a>
          </div>
        )}
      </div>

      {/* Related Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'AI', icon: '🤖', slug: 'artificial-intelligence' },
              { name: 'Technology', icon: '💻', slug: 'technology' },
              { name: 'Business', icon: '💼', slug: 'business' },
              { name: 'Science', icon: '🔬', slug: 'science' },
              { name: 'Cybersecurity', icon: '🔒', slug: 'cybersecurity' }
            ]
              .filter(cat => cat.slug !== params.name)
              .map((category) => (
                <a
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center card-hover group"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <div className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
