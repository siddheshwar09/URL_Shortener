
import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img src="/src/img/Hero Section.png" alt="Hero Section" className="w-full rounded-2xl shadow-2xl hover:shadow-teal-500/20 transform hover:scale-105 transition-transform duration-300 object-cover" />
            </div>
          </div>

          {/* Right: URL Shortener Form */}
          <div className="lg:pl-8">
              <div className="bg-slate-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-teal-500 border-opacity-30 hover:border-opacity-60 hover:shadow-teal-500/20">
                <h2 className="text-4xl font-bold text-white mb-2">URL Shortener</h2>
                <p className="text-emerald-100 mb-8">Shorten your long URLs and share them easily</p>
              <UrlForm />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section 1 */}
      <div className="bg-black py-16 mt-20 border-y border-teal-600 border-opacity-30 hover:border-opacity-60 shadow-lg hover:shadow-teal-500/20 transition-all duration-300" style={{boxShadow: '0 10px 30px rgba(20, 184, 166, 0.1), 0 -10px 30px rgba(20, 184, 166, 0.1)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info Box */}
            <div className="order-2 lg:order-1">
              <div className="bg-slate-900 rounded-xl p-8 border border-teal-600 border-opacity-40 hover:border-opacity-70 shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Why Use URL Shortener?</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex items-start">
                    <span className="text-teal-400 font-bold mr-3">✓</span>
                    <span>Create short, memorable links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 font-bold mr-3">✓</span>
                    <span>Track your link analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 font-bold mr-3">✓</span>
                    <span>Easy to share on social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 font-bold mr-3">✓</span>
                    <span>Customize your URLs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Image Box */}
            <div className="order-1 lg:order-2">
              <img src="/src/img/Section_1.png" alt="Info Section 1" className="w-full rounded-2xl shadow-xl hover:shadow-teal-500/20 transform hover:scale-105 transition-transform duration-300 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section 2 */}
      <div className="bg-black py-16 border-t border-teal-600 border-opacity-30 hover:border-opacity-60 shadow-lg hover:shadow-teal-500/20 transition-all duration-300" style={{boxShadow: '0 10px 30px rgba(20, 184, 166, 0.1)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Box */}
            <div>
              <img src="/src/img/Section_2.png" alt="Info Section 2" className="w-full rounded-2xl shadow-xl hover:shadow-teal-500/20 transform hover:scale-105 transition-transform duration-300 object-cover" />
            </div>

            {/* Right: Info Box */}
            <div className="lg:pl-8">
              <div className="bg-slate-900 rounded-xl p-8 border border-teal-600 border-opacity-40 hover:border-opacity-70 shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Features</h3>
                <p className="text-emerald-100 mb-6">Our URL shortener comes with powerful features to help you manage and track your links effectively.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                    <span className="text-emerald-100">Real-time analytics and statistics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                    <span className="text-emerald-100">customize your Url </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                    <span className="text-emerald-100">Link expiration settings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                    <span className="text-emerald-100">Url 	Clicks count</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-20 border-t border-teal-600 border-opacity-40 hover:border-opacity-70 shadow-lg hover:shadow-teal-500/30 transition-all duration-300" style={{boxShadow: '0 -10px 30px rgba(20, 184, 166, 0.15)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: About */}
            <div>
              <h4 className="text-xl font-bold mb-4">About URL Shortener</h4>
              <p className="text-gray-400 leading-relaxed">
                A modern, fast, and reliable URL shortening service designed to help you create, manage, and track shortened URLs with ease. Perfect for marketing campaigns, social media sharing, and more.
              </p>
            </div>

            {/* Right: Created By */}
            <div>
              <h4 className="text-xl font-bold mb-4">Development Team</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">→</span>
                  <span>bhagyashree</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">→</span>
                  <span>siddheshwar</span>
                </li>
                
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">→</span>
                  <span>sanskruti</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">→</span>
                  <span>samira</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-teal-600 border-opacity-30 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 URL Shortener. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default HomePage