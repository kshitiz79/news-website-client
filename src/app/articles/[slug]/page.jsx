"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SocialShare from './../../../components/SocialShare';
import ArticleCard from './../../../components/ArticleCard';

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching article
    setTimeout(() => {
      setArticle({
        id: 1,
        title: "OpenAI Releases GPT-5: The Future of AI is Here",
        excerpt: "OpenAI has unveiled GPT-5, marking a significant leap in artificial intelligence capabilities.",
        content: `
          <p>In a groundbreaking announcement today, OpenAI has officially released GPT-5, the latest iteration of their flagship language model. This release marks a significant milestone in the evolution of artificial intelligence, bringing unprecedented capabilities in reasoning, multimodal understanding, and real-world problem-solving.</p>

          <h2>Key Features of GPT-5</h2>
          <p>GPT-5 introduces several revolutionary features that set it apart from its predecessors:</p>
          <ul>
            <li><strong>Enhanced Reasoning:</strong> The model demonstrates human-level reasoning capabilities across complex domains including mathematics, science, and philosophy.</li>
            <li><strong>Multimodal Understanding:</strong> Seamless integration of text, images, audio, and video processing in a single unified model.</li>
            <li><strong>Real-time Learning:</strong> Ability to learn and adapt from conversations without requiring retraining.</li>
            <li><strong>Improved Accuracy:</strong> 99.9% accuracy on benchmark tests, a significant improvement over GPT-4.</li>
          </ul>

          <h2>Impact on Industries</h2>
          <p>The release of GPT-5 is expected to revolutionize multiple industries:</p>
          <p><strong>Healthcare:</strong> Advanced diagnostic capabilities and personalized treatment recommendations.</p>
          <p><strong>Education:</strong> Personalized learning experiences tailored to individual student needs.</p>
          <p><strong>Software Development:</strong> Automated code generation and debugging at unprecedented levels.</p>
          <p><strong>Creative Industries:</strong> Enhanced tools for content creation, design, and artistic expression.</p>

          <h2>Ethical Considerations</h2>
          <p>OpenAI has emphasized their commitment to responsible AI development. GPT-5 includes advanced safety features, bias mitigation techniques, and transparent decision-making processes. The company has also announced partnerships with regulatory bodies to ensure ethical deployment.</p>

          <h2>Availability and Pricing</h2>
          <p>GPT-5 will be available through OpenAI's API starting next month, with tiered pricing based on usage. Enterprise customers can access dedicated instances with custom fine-tuning capabilities.</p>

          <h2>Looking Forward</h2>
          <p>This release represents a pivotal moment in AI history. As we stand on the brink of artificial general intelligence (AGI), GPT-5 demonstrates that the future of AI is not just about processing power, but about creating systems that truly understand and assist humanity.</p>
        `,
        category: "Artificial Intelligence",
        image: "/images/ai-1.jpg",
        slug: "openai-gpt-5-release",
        publishedAt: "2026-01-28",
        readingTime: 5,
        author: "AI News Team",
        tags: ["AI", "OpenAI", "GPT-5", "Machine Learning", "Technology"]
      });

      setRelatedArticles([
        {
          id: 2,
          title: "Apple Vision Pro 2 Leaked: Revolutionary AR Features",
          excerpt: "Leaked documents reveal Apple's next-generation Vision Pro.",
          category: "Technology",
          slug: "apple-vision-pro-2-leak",
          publishedAt: "2026-01-28",
          readingTime: 4
        },
        {
          id: 3,
          title: "Quantum Computing Breakthrough Achieved",
          excerpt: "Scientists create stable 1000-qubit quantum processor.",
          category: "Science",
          slug: "quantum-computing-breakthrough",
          publishedAt: "2026-01-27",
          readingTime: 6
        },
        {
          id: 4,
          title: "Tesla's New AI Chip Outperforms NVIDIA",
          excerpt: "Tesla unveils proprietary AI training chip.",
          category: "Technology",
          slug: "tesla-ai-chip-nvidia",
          publishedAt: "2026-01-27",
          readingTime: 5
        }
      ]);

      setLoading(false);
    }, 800);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="skeleton rounded-xl h-96 mb-8"></div>
          <div className="skeleton rounded-xl h-64"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
          <a href="/" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/articles" className="hover:text-white transition-colors">Articles</a>
            <span>/</span>
            <span className="text-white">{article.category}</span>
          </div>

          {/* Category & Date */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
              {article.category}
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">{article.readingTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author & Share */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                AI
              </div>
              <div>
                <div className="text-white font-semibold">{article.author}</div>
                <div className="text-gray-400 text-sm">AI-Generated Content</div>
              </div>
            </div>
            <SocialShare article={article} />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {article.image && (
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-li:mb-2
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-white font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <a
                key={tag}
                href={`/tag/${tag.toLowerCase()}`}
                className="px-4 py-2 glass rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((relatedArticle) => (
            <ArticleCard key={relatedArticle.id} article={relatedArticle} />
          ))}
        </div>
      </section>
    </div>
  );
}
