import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'timeline', label: 'Experience', icon: '📈' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  // Short labels for Z Fold 5 cover screen
  const shortLabels = {
    'hero': 'Home',
    'about': 'About',
    'skills': 'Skills',
    'projects': 'Work',
    'timeline': 'Exp',
    'contact': 'Contact'
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      let current = 'hero';

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop/Tablet Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 glass bg-dark-surface/90 backdrop-blur-md border-b border-primary/20 hidden sm:block"
      >
        <div className="max-w-6xl mx-auto px-4 fold-open:px-6 lg:px-6 py-3 fold-open:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl fold-open:text-2xl font-bold font-mono text-primary hover:text-accent transition-colors"
            >
              <span className="text-matrix-green">$</span> aymen.dev
            </motion.button>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2 fold-open:space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 fold-open:px-4 py-2 rounded-lg font-mono text-sm fold-open:text-base transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-dark-bg shadow-neon-primary'
                      : 'text-gray-300 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <span className="fold-open:hidden">{item.label}</span>
                  <span className="hidden fold-open:inline">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation (Z Fold 5 Cover Screen & Small Mobile) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 glass bg-dark-surface/95 backdrop-blur-md border-b border-primary/20 sm:hidden"
      >
        <div className="px-2 fold-closed:px-1 py-2">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm fold-closed:text-xs font-bold font-mono text-primary"
            >
              <span className="text-matrix-green">$</span> <span className="fold-closed:hidden">aymen</span><span className="hidden fold-closed:inline">a</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 fold-closed:p-1 text-primary hover:text-accent transition-colors"
            >
              <span className="text-lg fold-closed:text-base">☰</span>
            </motion.button>
          </div>

          {/* Mobile Menu Dropdown */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 space-y-1 fold-closed:space-y-0.5">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full text-left px-3 fold-closed:px-2 py-2 fold-closed:py-1 rounded-lg font-mono text-sm fold-closed:text-xs transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-dark-bg'
                      : 'text-gray-300 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <span className="mr-2 fold-closed:mr-1">{item.id}</span>
                  <span className="fold-closed:hidden">{item.label}</span>
                  <span className="hidden fold-closed:inline">{shortLabels[item.id]}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
