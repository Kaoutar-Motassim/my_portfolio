import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CodeRain() {
  const [drops, setDrops] = useState([]);

  // Coding characters including various programming symbols
  const characters = [
    // Letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Numbers
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    // Programming symbols
    '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\', '|', '&', '*', '+', '-', '=', '_', ':', ';', '?', '!', '@', '#', '$', '%', '^',
    // Special coding characters
    '&&', '||', '==', '!=', '<=', '>=', '=>', '->', '++', '--', '+=', '-=', '*=', '/=', '??', '?.', '||=', '&&=',
    // Keywords (shortened)
    'if', 'el', 'tr', 'fa', 'nu', 'fn', 'va', 'co', 'le', 're', 'fo', 'wh', 'do', 'br', 'ca', 'sw', 'tr', 'ca'
  ];

  // Mobile-friendly particle count
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dropCount = isMobile ? 15 : 30;

  useEffect(() => {
    const newDrops = Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      speed: Math.random() * 3 + 1, // 1-4 seconds
      delay: Math.random() * 5, // 0-5 second delay
      character: characters[Math.floor(Math.random() * characters.length)],
      opacity: Math.random() * 0.7 + 0.3, // 0.3-1.0 opacity
      size: Math.random() * 0.5 + 0.8 // 0.8-1.3 size multiplier
    }));
    setDrops(newDrops);
  }, []);

  // Regenerate character every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDrops(prevDrops => 
        prevDrops.map(drop => ({
          ...drop,
          character: characters[Math.floor(Math.random() * characters.length)]
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute font-mono text-primary/60 select-none"
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
            opacity: [0, drop.opacity, drop.opacity, 0]
          }}
          transition={{
            duration: drop.speed,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear"
          }}
          style={{
            left: `${drop.x}%`,
            fontSize: `${drop.size}rem`,
            transform: `scale(${drop.size})`,
          }}
        >
          <motion.span
            animate={{
              color: [
                'rgba(0, 212, 255, 0.6)',
                'rgba(0, 255, 157, 0.8)', 
                'rgba(78, 205, 196, 0.7)',
                'rgba(0, 212, 255, 0.6)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {drop.character}
          </motion.span>
        </motion.div>
      ))}

      {/* Additional floating code snippets */}
      {Array.from({ length: isMobile ? 3 : 6 }).map((_, i) => {
        const codeSnippets = [
          'const', 'function', 'return', 'import', 'export', 'class', 
          'async', 'await', 'try', 'catch', 'if', 'else', 'for', 'while',
          'let', 'var', 'new', 'this', 'super', 'extends'
        ];
        
        return (
          <motion.div
            key={`snippet-${i}`}
            className="absolute font-mono text-xs text-accent/40 select-none"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%'
              ],
              opacity: [0, 0.6, 0.4, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </motion.div>
        );
      })}

      {/* Binary rain effect */}
      {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute font-mono text-xs text-matrix-green/30 select-none"
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
            opacity: [0, 0.7, 0.7, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}
    </div>
  );
}
