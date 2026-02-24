"use client";

import { useState, useEffect } from 'react';
import TrafficChart from './../../components/Analytics/TrafficChart';
import RevenueChart from './../../components/Analytics/RevenueChart';

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dashboard data
    setTimeout(() => {
      setStats({
        totalArticles: 1247,
        totalViews: 234567,
        totalRevenue: 1234.56,
        avgTimeOnPage: 245,
        topArticles: [
          { title: "OpenAI Releases GPT-5", views: 45678, revenue: 234.56, ctr: 12.5 },
          { title: "Apple Vision Pro 2 Leaked", views: 38901, revenue: 198.23, ctr: 10.8 },
          { title: "Quantum Computing Breakthrough", views: 32456, revenue: 167.89, ctr: 9.2 },
          { title: "Tesla's New AI Chip", views: 28734, revenue: 145.67, ctr: 8.5 },
          { title: "Major Cybersecurity Breach", views: 25123, revenue: 128.45, ctr: 7.9 }
        ],
        recentActivity: [
          { action: "Article Published", title: "AI Regulation in Europe", time: "2 hours ago" },
          { action: "Trending Topic Detected", title: "Quantum Computing", time: "4 hours ago" },
          { action: "Article Published", title: "Fusion Energy Breakthrough", time: "6 hours ago" },
          { action: "Social Post", title: "Twitter thread posted", time: "8 hours ago" }
        ],
        categoryStats: [
          { name: "AI", articles: 342, views: 89234, color: "from-blue-500 to-cyan-500" },
          { name: "Technology", articles: 298, views: 76543, color: "from-blue-400 to-sky-500" },
          { name: "Science", articles: 187, views: 45678, color: "from-yellow-500 to-orange-500" },
          { name: "Business", articles: 156, views: 34567, color: "from-green-500 to-emerald-500" },
          { name: "Cybersecurity", articles: 134, views: 28901, color: "from-red-500 to-rose-500" }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="skeleton rounded-xl h-32 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton rounded-xl h-32"></div>
            ))}
          </div>
          <div className="skeleton rounded-xl h-96"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Analytics Dashboard</span>
            </h1>
            <p className="text-gray-500">Monitor your AI news automation performance</p>
          </div>
          <a
            href="/dashboard/news"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Manage News
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Articles */}
          <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-green-500 text-sm font-semibold">+12%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalArticles.toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm">Total Articles</div>
          </div>

          {/* Total Views */}
          <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-green-500 text-sm font-semibold">+24%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalViews.toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm">Total Views</div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-green-500 text-sm font-semibold">+18%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ${stats.totalRevenue.toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm">Total Revenue</div>
          </div>

          {/* Avg Time on Page */}
          <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-green-500 text-sm font-semibold">+8%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {Math.floor(stats.avgTimeOnPage / 60)}:{(stats.avgTimeOnPage % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-gray-500 text-sm">Avg Time on Page</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <TrafficChart />
          <RevenueChart />
        </div>

        {/* Top Articles & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Articles */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Performing Articles</h2>
            <div className="space-y-4">
              {stats.topArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-blue-500">#{index + 1}</span>
                      <h3 className="text-gray-900 font-semibold">{article.title}</h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{article.views.toLocaleString()} views</span>
                      <span>•</span>
                      <span>${article.revenue.toFixed(2)}</span>
                      <span>•</span>
                      <span>{article.ctr}% CTR</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    {activity.action === "Article Published" && "📝"}
                    {activity.action === "Trending Topic Detected" && "🔥"}
                    {activity.action === "Social Post" && "📱"}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-semibold mb-1">{activity.action}</div>
                    <div className="text-gray-500 text-sm mb-1">{activity.title}</div>
                    <div className="text-gray-500 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Performance */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.categoryStats.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg mb-4`}></div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">{category.name}</h3>
                <div className="text-gray-500 text-sm mb-1">{category.articles} articles</div>
                <div className="text-blue-400 font-semibold">{category.views.toLocaleString()} views</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
