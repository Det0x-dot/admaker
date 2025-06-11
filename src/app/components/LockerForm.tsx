'use client';

import { useState } from 'react';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { API_KEYS } from '../config/apiKeys';

interface LockerFormData {
  username: string;
  title: string;
  target: string;
}

interface LockerResponse {
  id?: string;
  error?: string;
  title?: string;
  target?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  url?: string;
  data?: {
    url: string;
  };
}

export default function LockerForm() {
  const [formData, setFormData] = useState<LockerFormData>({
    username: API_KEYS[0].username,
    title: '',
    target: '',
  });
  const [result, setResult] = useState<LockerResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/lockers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secretApiKey: API_KEYS.find(k => k.username === formData.username)?.key || '',
          title: formData.title,
          target: formData.target,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        setResult({ error: data.message || 'Failed to create locker. Please check your API key.' });
      } else {
        // If we have a successful response with data
        setResult(data);
      }
    } catch (_error) {
      setResult({ error: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Select User
          </label>
          <div className="mt-1">
            <select
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              required
            >
              {API_KEYS.map((config) => (
                <option key={config.username} value={config.username}>
                  {config.username}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              required
              placeholder="Enter locker title"
            />
          </div>
        </div>

        <div>
          <label htmlFor="target" className="block text-sm font-medium text-gray-700">
            Target URL
          </label>
          <div className="mt-1">
            <input
              type="url"
              id="target"
              value={formData.target}
              onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              required
              placeholder="https://example.com"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            loading ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating...
            </>
          ) : (
            'Create Locker'
          )}
        </button>
      </form>

      {result && (
        <div className={`mt-6 p-4 rounded-md ${result.error ? 'bg-red-50' : 'bg-green-50'}`}>
          {result.error ? (
            <div className="flex items-start">
              <ExclamationCircleIcon className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <p className="mt-2 text-sm text-red-700">{result.error}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5" />
              <div className="ml-3 w-full">
                <h3 className="text-sm font-medium text-green-800">Locker Created!</h3>
                <div className="mt-3">
                  {(result.data?.url || result.url) && (
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-green-200 p-2">
                      <input
                        type="text"
                        readOnly
                        value={result.data?.url || result.url}
                        className="flex-1 text-sm text-gray-600 bg-transparent border-none focus:ring-0"
                      />
                      <button
                        onClick={() => {
                          const url = result.data?.url || result.url;
                          if (url) {
                            navigator.clipboard.writeText(url);
                            // You could add a toast notification here
                          }
                        }}
                        className="px-3 py-1 text-xs font-medium text-green-700 hover:text-green-800 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
                      >
                        Copy
                      </button>
                      <a
                        href={result.data?.url || result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs font-medium text-green-700 hover:text-green-800 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
                      >
                        Open
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
