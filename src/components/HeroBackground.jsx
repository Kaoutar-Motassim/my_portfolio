import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const hero = e.currentTarget;
      const rect = hero.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Grid dots
  const cols = 50;
  const rows = 30;
  const spacing = 40;
  const gridDots = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      gridDots.push({ x: i * spacing, y: j * spacing, id: `${i}-${j}` });
    }
  }

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card"
      />

      {/* Interactive grid */}
      <div className="absolute inset-0 w-[200%] h-[120%]">
        {gridDots.map((dot) => {
          const distX = useTransform(mouseX, (mx) => mx - dot.x);
          const distY = useTransform(mouseY, (my) => my - dot.y);
          const distance = useTransform([distX, distY], ([dx, dy]) => Math.sqrt(dx * dx + dy * dy));
          const scale = useTransform(distance, [0, 150], [2, 1]);
          const opacity = useTransform(distance, [0, 150], [0.8, 0.2]);
          const color = useTransform(distance, [0, 150], ['#00D4FF', '#00D4FF80']);

          return (
            <motion.div
              key={dot.id}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: dot.x,
                top: dot.y,
                scale,
                opacity,
                backgroundColor: color,
              }}
            />
          );
        })}
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 bg-accent/40 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(p.id) * 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a21caf" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
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
              repeatType: 'reverse',
              ease: 'easeInOut',
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
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Mouse follower glow */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full pointer-events-none"
        style={{
          left: mouseX,
          top: mouseY,
          x: -192,
          y: -192,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Code overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="font-mono text-xs leading-relaxed p-8 text-matrix-green">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 1 }}>
            {`const developer = {
  name: "Kaoutar Motassim",
  skills: ["Python","C/C++","JavaScript","HTML & CSS","MySQL/PostgreSQL","Flask","React.js","Express.js","Socket.IO"],
  passion: "AI, Web Dev & new tech",
  currentProject: "Portfolio Website",
  github: "https://github.com/Kaoutar-Motassim",
  available: true
};

function buildFuture() {
  while(developer.available) {
    createAwesomeProjects();
    learnNewTechnologies();
    solveProblems();
  }
}`}
          </motion.div>
        </div>
      </div>

      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
