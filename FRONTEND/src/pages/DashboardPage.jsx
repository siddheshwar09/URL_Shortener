import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-white">
    <div className="bg-slate-900 -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl border border-teal-600 border-opacity-40 hover:border-opacity-70 hover:shadow-teal-500/20 transition-all duration-300">
      <h1 className="text-2xl font-bold text-white text-center mb-6">URL Shortener</h1>
      <UrlForm/>
      <UserUrl/>
    </div>
  </div>
  )
}

export default DashboardPage