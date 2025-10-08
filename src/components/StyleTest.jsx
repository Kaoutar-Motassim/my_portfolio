import React from 'react';

export default function StyleTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <h1 className="text-5xl font-extrabold text-white text-center tracking-wide">
          Style Test
        </h1>

        {/* Glassmorphism Card */}
        <div className="glass p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20 hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold mb-4 text-white">Glassmorphism Card</h2>
          <p className="text-white/80">
            This card has a glass effect with backdrop blur, semi-transparent background, soft shadows, and a subtle hover lift.
          </p>
        </div>

        {/* Gradient Card */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Gradient Background</h2>
          <p className="text-white/90">
            This card has a beautiful gradient background with smooth colors, rounded corners, and interactive hover effect.
          </p>
        </div>

        {/* Animated Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-primary text-white rounded-xl shadow-lg hover:shadow-neon hover:bg-blue-700 transform transition-all duration-300 hover:scale-105">
            Hover Me
          </button>
        </div>
      </div>

      {/* Neon shadow for button */}
      <style jsx>{`
        .hover\\:shadow-neon:hover {
          box-shadow: 0 0 10px #00d4ff, 0 0 20px #a21caf, 0 0 30px #00d4ff;
        }
      `}</style>
    </div>
  );
}
