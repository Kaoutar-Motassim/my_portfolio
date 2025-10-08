import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CodeRain() {
  const [drops, setDrops] = useState([]);
  const characters = [
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    '{','}','[',']','(',')','<','>','/','\\','|','&','*','+','-','=','_',
    ':',';','?','!','@','#','$','%','^',
    '&&','||','==','!=','<=','>=','=>','->','++','--','+=','-=','*=','/=','??','?.','||=','&&=',
    'if','el','tr','fa','nu','fn','va','co','le','re','fo','wh','do','br','ca','sw','tr','ca'
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dropCount = isMobile ? 15 : 30;

  useEffect(() => {
    const newDrops = Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      character: characters[Math.floor(Math.random() * characters.length)],
      opacity: Math.random() * 0.7 + 0.3,
      size: Math.random() * 0.7 + 0.8,
      xOffset: Math.random() * 20 - 10, // petit mouvement horizontal
      colorShift: Math.random() * 360 // pour varier la teinte
    }));
    setDrops(newDrops);
  }, []);

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
      {drops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute font-mono select-none"
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
            opacity: [0, drop.opacity, drop.opacity, 0],
            x: [drop.x, drop.x + drop.xOffset, drop.x, drop.x + drop.xOffset]
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
            color: `hsl(${drop.colorShift}, 100%, 60%)`
          }}
        >
          {drop.character}
        </motion.div>
      ))}

      {/* Floating code snippets */}
      {Array.from({ length: isMobile ? 3 : 6 }).map((_, i) => {
        const codeSnippets = [
          'const','function','return','import','export','class','async','await','try','catch','if','else','for','while','let','var','new','this','super','extends'
        ];
        return (
          <motion.div
            key={`snippet-${i}`}
            className="absolute font-mono text-xs select-none"
            initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%', opacity: 0 }}
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
              opacity: [0, 0.6, 0.4, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{ color: '#4ECDCC' }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </motion.div>
        );
      })}
    </div>
  );
}
