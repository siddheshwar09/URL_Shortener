import React, { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api'
import { useSelector } from 'react-redux'
import { QueryClient } from '@tanstack/react-query'
import { queryClient } from '../main'

const UrlForm = () => {
  
  const [url, setUrl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState()
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)
  const [customSlug, setCustomSlug] = useState("")
  const {isAuthenticated} = useSelector((state) => state.auth)

  const validateUrl = (urlString) => {
    // Check if URL starts with http:// or https://
    if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
      return "Please enter a valid URL starting with http:// or https:// and ensure it is a correct, supported website address."
    }
    
    // Check for unsupported file extensions
    const unsupportedExtensions = ['.exe', '.bat', '.sh', '.zip', '.rar', '.torrent', '.apk', '.iso', '.dmg']
    const lowerUrl = urlString.toLowerCase()
    for (const ext of unsupportedExtensions) {
      if (lowerUrl.endsWith(ext)) {
        return "Please enter a valid URL starting with http:// or https:// and ensure it is a correct, supported website address."
      }
    }
    
    return null
  }

  const handleSubmit = async () => {
    const validationError = validateUrl(url)
    if (validationError) {
      setError(validationError)
      return
    }

    try{
      const shortUrl = await createShortUrl(url,customSlug)
      setShortUrl(shortUrl)
      queryClient.invalidateQueries({queryKey: ['userUrls']})
      setError(null)
    }catch(err){
      setError(err.message)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-emerald-100 mb-1">
            Enter your Url
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onInput={(event)=>setUrl(event.target.value)}
            placeholder="https://example.com"
            required
            className="w-full px-4 py-2 border border-teal-600 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-800 text-white focus:border-opacity-100 transition-all duration-200 shadow-sm focus:shadow-teal-500/30"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-teal-500 text-black py-2 px-4 rounded-md hover:bg-teal-600 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 disabled:opacity-50 shadow-md hover:shadow-teal-500/40 transition-all duration-200 border border-teal-400"
        >Shorten URL
        </button>
         {error && (
          <div className="mt-4 p-3 bg-red-900 text-red-200 rounded-md">
            {error}
          </div>
        )}
        {isAuthenticated && (
          <div className="mt-4">
            <label htmlFor="customSlug" className="block text-sm font-medium text-emerald-100 mb-1">
              Custom URL (optional)
            </label>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder="Enter custom slug"
              className="w-full px-4 py-2 border border-teal-600 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-slate-800 text-white focus:border-opacity-100 transition-all duration-200 shadow-sm focus:shadow-teal-500/30"
            />
          </div>
        )}
        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2 text-white">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-teal-600 border-opacity-50 rounded-l-md bg-slate-800 text-white shadow-sm"
              />
               <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-all duration-200 font-semibold shadow-md ${
                  copied 
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-500/30' 
                    : 'bg-teal-500 text-black hover:bg-teal-600 hover:shadow-teal-500/40 border border-teal-400'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
  )
}

export default UrlForm