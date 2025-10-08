import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef({});

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👩‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'timeline', label: 'Experience', icon: '📈' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const shortLabels = {
    hero: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Work',
    timeline: 'Exp',
    contact: 'Contact'
  };

  useEffect(() => {
    // Store section DOM elements
    sectionsRef.current = navItems.reduce((acc, item) => {
      const el = document.getElementById(item.id);
      if (el) acc[item.id] = el;
      return acc;
    }, {});

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    Object.values(sectionsRef.current).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavButton = ({ item, isMobile = false }) => (
    <motion.button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        isMobile
          ? `w-full text-left px-3 py-2 rounded-lg font-mono text-sm ${
              activeSection === item.id
                ? 'bg-primary text-dark-bg'
                : 'text-gray-300 hover:text-primary hover:bg-primary/10'
            }`
          : `px-3 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-primary text-dark-bg shadow-neon-primary'
                : 'text-gray-300 hover:text-primary hover:bg-primary/10'
            }`
      }`}
    >
      <span className="mr-2">{item.icon}</span>
      <span className={isMobile ? 'hidden sm:inline' : ''}>
        {isMobile ? shortLabels[item.id] : item.label}
      </span>
    </motion.button>
  );

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 glass bg-dark-surface/90 backdrop-blur-md border-b border-primary/20 hidden sm:block"
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold font-mono text-primary hover:text-accent transition-colors"
          >
            <span className="text-matrix-green">$</span> kaoutar.dev
          </motion.button>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <NavButton key={item.id} item={item} />
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 glass bg-dark-surface/95 backdrop-blur-md border-b border-primary/20 sm:hidden"
      >
        <div className="px-2 py-2">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-bold font-mono text-primary"
            >
              <span className="text-matrix-green">$</span> kaoutar
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-primary hover:text-accent transition-colors"
            >
              ☰
            </motion.button>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pt-2 pb-1 space-y-1"
          >
            {navItems.map((item) => (
              <NavButton key={item.id} item={item} isMobile />
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
