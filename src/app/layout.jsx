import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "AI News Automation | Latest Tech & AI News",
  description: "Automated AI-powered news platform delivering the latest trending topics in technology, artificial intelligence, and innovation.",
  keywords: "AI news, technology news, artificial intelligence, machine learning, tech trends",
  authors: [{ name: "AI News Team" }],
  openGraph: {
    title: "AI News Automation",
    description: "Latest AI and Technology News",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <span className="text-xl font-bold gradient-text-blue">News Automation</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/articles" className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </a>
                <a href="/category/artificial-intelligence" className="text-gray-300 hover:text-white transition-colors">
                  AI
                </a>
                <a href="/category/technology" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </a>
                <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </a>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Subscribe
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                  <span className="text-xl font-bold gradient-text-blue">News Automation</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Automated AI-powered news platform delivering the latest trending topics in technology, artificial intelligence, and innovation.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/articles" className="text-gray-400 hover:text-white transition-colors">Articles</a></li>
                  <li><a href="/category/artificial-intelligence" className="text-gray-400 hover:text-white transition-colors">AI News</a></li>
                  <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-white font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="/category/technology" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                  <li><a href="/category/business" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
                  <li><a href="/category/science" className="text-gray-400 hover:text-white transition-colors">Science</a></li>
                  <li><a href="/category/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 AI News Automation. Powered by AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
