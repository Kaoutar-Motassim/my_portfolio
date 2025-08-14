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
        // Z Fold 5 specific breakpoints
        'fold-closed': '344px',    // Z Fold 5 closed (cover screen)
        'fold-open': '673px',      // Z Fold 5 open (inner screen width)
        'fold-height': '884px',    // Z Fold 5 inner screen height
        // Custom breakpoints for foldable devices
        'foldable-sm': {'raw': '(min-width: 344px) and (max-width: 672px)'},
        'foldable-lg': {'raw': '(min-width: 673px) and (max-width: 884px)'},
        'foldable-portrait': {'raw': '(orientation: portrait) and (min-width: 344px) and (max-width: 673px)'},
        'foldable-landscape': {'raw': '(orientation: landscape) and (min-width: 673px)'},
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
        
        // Matrix/Coding theme
        matrix: {
          green: '#00FF41',      // Matrix green
          lime: '#39FF14',       // Bright lime
          cyan: '#00FFFF',       // Electric cyan
        },
        
        // Gradient colors
        gradient: {
          from: '#667eea',       // Purple start
          via: '#764ba2',        // Purple middle
          to: '#f093fb',         // Pink end
        },
        
        // Neural network theme
        neural: {
          blue: '#1e3a8a',       // Deep blue
          purple: '#6366f1',     // Indigo
          pink: '#ec4899',       // Hot pink
          cyan: '#06b6d4',       // Cyan
        }
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'matrix-rain': 'linear-gradient(180deg, rgba(0,255,65,0.1) 0%, rgba(0,255,65,0.05) 50%, transparent 100%)',
        'neural-network': 'radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)',
        'code-bg': 'linear-gradient(135deg, #0A0E27 0%, #1A1D3A 100%)',
      },
      
      boxShadow: {
        'neon-primary': '0 0 20px rgba(0, 212, 255, 0.3)',
        'neon-secondary': '0 0 20px rgba(255, 107, 107, 0.3)',
        'neon-accent': '0 0 20px rgba(78, 205, 196, 0.3)',
        'neon-matrix': '0 0 20px rgba(0, 255, 65, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neural': '0 0 30px rgba(99, 102, 241, 0.2)',
      },
      
      keyframes: {
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' 
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' 
          },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'currentColor' },
        },
      },
      
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        'matrix-fall': 'matrix-fall 3s linear infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s both',
        'blink': 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}

