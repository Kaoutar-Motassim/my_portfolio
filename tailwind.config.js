/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "Fira Code", "Source Code Pro", "Monaco", "Consolas", "monospace"],
        mono: ["JetBrains Mono", "Fira Code", "Source Code Pro", "Monaco", "Consolas", "monospace"],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // AI/Coding Theme Colors
        primary: '#00D4FF',      // Cyan - AI/Tech blue
        secondary: '#FF6B6B',    // Coral - Energy/Innovation
        accent: '#4ECDC4',       // Teal - Modern tech
        success: '#45B7D1',     // Blue success
        warning: '#FFA726',     // Orange warning
        error: '#EF5350',       // Red error
        
        // Dark theme backgrounds
        dark: {
          bg: '#0A0E27',         // Deep space blue
          surface: '#1A1D3A',    // Dark surface
          card: '#252A52',       // Card background
          border: '#3A3F66',     // Border color
        },
        
        // Matrix/Terminal colors
        'matrix-green': '#00ff9f',
        'terminal-green': '#39ff14',
        'neon-blue': '#00d4ff',
        'cyber-purple': '#9d4edd',
        'tech-orange': '#ff6b35',
        
        // Gradient colors
        gradient: {
          from: '#667eea',       // Purple start
          via: '#764ba2',        // Purple middle
          to: '#f093fb',         // Pink end
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #00D4FF 1px, transparent 1px), linear-gradient(to bottom, #00D4FF 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-primary': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-secondary': '0 0 20px rgba(255, 107, 107, 0.5)',
        'neon-accent': '0 0 20px rgba(78, 205, 196, 0.5)',
        'neural': '0 8px 32px rgba(0, 212, 255, 0.15)',
        'cyber': '0 4px 16px rgba(157, 78, 221, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
        'code-scroll': 'codeScroll 15s linear infinite',
        'blink': 'blink 1s infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        codeScroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        pulseNeon: {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.5), 0 0 15px rgba(0, 212, 255, 0.5)' 
          },
          '50%': { 
            textShadow: '0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.8)' 
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
