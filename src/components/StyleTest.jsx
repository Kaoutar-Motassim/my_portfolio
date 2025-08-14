import React from 'react';

export default function StyleTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white text-center">Style Test</h1>
        
        <div className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Glassmorphism Card</h2>
          <p className="text-slate-700 dark:text-slate-300">This should have a glass effect with backdrop blur.</p>
        </div>
        
        <div className="bg-gradient-to-r from-primary via-accent to-secondary p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Gradient Background</h2>
          <p className="text-white">This should have a beautiful gradient background.</p>
        </div>
        
        <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
          Hover Me
        </button>
      </div>
    </div>
  );
}
