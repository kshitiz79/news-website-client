"use client";

import { useState, useEffect } from 'react';

export default function NewsListPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching articles
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: "Mar-a-Lago Security: 21-Year-Old Killed by Secret Service",
          category: "News",
          status: "Published",
          author: "Admin",
          date: "Feb 23, 2026",
          views: 1245
        },
        {
          id: 2,
          title: "Journey into the Unknown: \"The Leeds Train\" by Daniele Tenzon",
          category: "Books",
          status: "Published",
          author: "Editor",
          date: "Feb 23, 2026",
          views: 890
        },
        {
          id: 3,
          title: "Injuries in modern football: a systemic problem",
          category: "Sport",
          status: "Draft",
          author: "Admin",
          date: "Feb 20, 2026",
          views: 0
        },
        {
          id: 4,
          title: "Juventus-Napoli 3-0: Spalletti dominates Conte",
          category: "Sport",
          status: "Published",
          author: "Admin",
          date: "Jan 25, 2026",
          views: 3400
        },
        {
          id: 5,
          title: "Renewal of the Collective Agreement for Metalworkers",
          category: "Economy",
          status: "Published",
          author: "Editor",
          date: "Feb 23, 2026",
          views: 560
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-playfair">Manage News</h1>
            <p className="text-gray-500 mt-1">View, edit, and manage all your news articles.</p>
          </div>
          <a
            href="/dashboard/news/add"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-500/30"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Article
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4"><div className="h-4 bg-gray-100 rounded w-full"></div></td>
                      <td className="px-6 py-4"><div className="h-4 bg-gray-100 rounded w-24"></div></td>
                      <td className="px-6 py-4"><div className="h-4 bg-gray-100 rounded w-20"></div></td>
                      <td className="px-6 py-4"><div className="h-4 bg-gray-100 rounded w-16"></div></td>
                      <td className="px-6 py-4"><div className="h-4 bg-gray-100 rounded w-24"></div></td>
                      <td className="px-6 py-4"><div className="h-4 bg-gray-100 rounded w-20 float-right"></div></td>
                    </tr>
                  ))
                ) : articles.length > 0 ? (
                  articles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900 truncate max-w-xs">{article.title}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">By {article.author}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {article.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${
                          article.status === 'Published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {article.views.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {article.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <div className="flex items-center justify-end space-x-3">
                          <a 
                            href={`/dashboard/news/edit/${article.id}`} 
                            className="text-blue-600 hover:text-blue-800 font-bold"
                          >
                            Edit
                          </a>
                          <button 
                            onClick={() => handleDelete(article.id)}
                            className="text-red-600 hover:text-red-800 font-bold"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                      No news articles found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
