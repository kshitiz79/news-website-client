"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function EditNewsPage() {
  const params = useParams();
  const [formData, setFormData] = useState({
    title: '',
    category: 'News',
    excerpt: '',
    content: '',
    image: '',
    status: 'Published'
  });

  useEffect(() => {
    // Simulate fetching article data for editing
    setFormData({
      title: "Mar-a-Lago Security: 21-Year-Old Killed by Secret Service",
      category: "News",
      excerpt: "Tension erupted last weekend at the Mar-a-Lago residence in Florida. A 21-year-old man from Italy was shot by Secret Service after attempting to bypass security checkpoints.",
      content: "<p>Tension erupted last weekend at the Mar-a-Lago residence in Florida...</p>",
      image: "https://images.unsplash.com/photo-1514755102307-5c7bd88663a7?q=80&w=2000&auto=format&fit=crop",
      status: "Published"
    });
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("News Article Updated Successfully (Dummy Action)");
    window.location.href = '/dashboard/news';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="/dashboard/news" className="text-blue-600 hover:text-blue-800 flex items-center mb-4 font-bold text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News List
          </a>
          <h1 className="text-3xl font-bold text-gray-900 font-playfair">Edit Article</h1>
          <p className="text-gray-500">Update the existing news article content.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Article Title</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                placeholder="Enter title..."
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option>News</option>
                <option>Sport</option>
                <option>Books</option>
                <option>Economy</option>
                <option>Technology</option>
                <option>AI</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Featured Image URL</label>
              <input
                type="url"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                placeholder="https://images.unsplash.com/photo-..."
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Excerpt</label>
              <textarea
                required
                rows="3"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Detailed Content</label>
              <textarea
                required
                rows="10"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all font-mono text-sm"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              ></textarea>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => window.location.href = '/dashboard/news'}
              className="px-6 py-3 border border-gray-200 text-gray-600 rounded-lg font-bold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
            >
              Update Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
