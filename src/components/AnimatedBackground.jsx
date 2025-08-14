import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  // Matrix-style falling characters
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*(){}[]<>/+-=_|\\~`".split("");
  
  // Reduce particles for mobile performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 5 : 20;
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural network-style animated blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-48 h-48 fold-closed:w-32 fold-closed:h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-r from-primary/20 to-neural-purple/20 rounded-full blur-xl animate-neural-pulse"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-3/4 right-1/4 w-64 h-64 fold-closed:w-40 fold-closed:h-40 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-accent/15 to-matrix-green/15 rounded-full blur-xl animate-neural-pulse"
      />
      
      <motion.div
        animate={{
          x: [0, 75, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/2 w-40 h-40 fold-closed:w-24 fold-closed:h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-secondary/20 to-neural-cyan/20 rounded-full blur-xl animate-neural-pulse"
      />
      
      {/* Matrix-style falling characters - reduced for mobile */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: -100, 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            opacity: 0 
          }}
          animate={{ 
            y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute text-matrix-green text-xs fold-closed:text-[10px] md:text-sm font-mono pointer-events-none hidden sm:block"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
        </motion.div>
      ))}
      
      {/* Circuit board pattern overlay - simplified for mobile */}
      <div 
        className="absolute inset-0 opacity-[0.02] fold-closed:opacity-[0.01] sm:opacity-[0.03] md:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00D4FF 1px, transparent 1px),
            linear-gradient(to bottom, #00D4FF 1px, transparent 1px),
            radial-gradient(circle at 20% 50%, #00FF41 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, #FF6B6B 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 160px 160px, 160px 160px',
        }}
      />
      
      {/* Binary code overlay - reduced for mobile performance */}
      <div className="absolute inset-0 opacity-[0.01] fold-closed:opacity-[0.005] sm:opacity-[0.02] md:opacity-[0.05] font-mono text-xs fold-closed:text-[10px] text-primary hidden sm:block">
        {Array.from({ length: isMobile ? 20 : 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
