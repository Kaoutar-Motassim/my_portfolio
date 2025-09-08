import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Generate grid dots
  const gridDots = [];
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 30; j++) {
      gridDots.push({ x: i * 40, y: j * 40, id: `${i}-${j}` });
    }
  }

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card"
      />
      
      {/* Interactive grid */}
      <div className="absolute inset-0" style={{ width: '200%', height: '120%' }}>
        {gridDots.map((dot) => {
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - dot.x, 2) + Math.pow(mousePosition.y - dot.y, 2)
          );
          const isClose = distance < 150;
          
          return (
            <motion.div
              key={dot.id}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{ left: dot.x, top: dot.y }}
              animate={{
                scale: isClose ? 2 : 1,
                opacity: isClose ? 0.8 : 0.2,
                backgroundColor: isClose ? '#00D4FF' : '#00D4FF80',
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-accent/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a21caf" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }, (_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 10}%`}
            y1="20%"
            x2={`${60 + i * 5}%`}
            y2="80%"
            stroke="url(#connectionGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Mouse follower glow */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Code-like overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="font-mono text-xs leading-relaxed p-8 text-matrix-green">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            {`const developer = {
  name: "Aymen Chabbaki",
  skills: ["React", "Node.js", "Python", "AI/ML"],
  passion: "Creating amazing digital experiences",
  currentProject: "Portfolio Website",
  available: true
};

function buildFuture() {
  while (developer.available) {
    createAwesomeProjects();
    learnNewTechnologies();
    solveProblems();
  }
}`}
          </motion.div>
        </div>
      </div>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
