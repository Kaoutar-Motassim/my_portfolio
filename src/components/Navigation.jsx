import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Zap, Rocket, TrendingUp, Mail, FileText, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDesktopVisible, setIsDesktopVisible] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'timeline', label: 'Experience', icon: TrendingUp },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const shortLabels = {
    'hero': 'Home',
    'about': 'About',
    'skills': 'Skills',
    'projects': 'Projects',
    'timeline': 'Experience',
    'resume': 'Resume',
    'contact': 'Contact'
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 640;
      setIsMobileVisible(true);
      setIsDesktopVisible(!isMobile && scrollY > 100);

      const sections = navItems.map(item => document.getElementById(item.id));
      let current = 'hero';
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) current = section.id;
        }
      });
      setActiveSection(current);
    };

    const handleResize = () => handleScroll();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [navItems]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isDesktopVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 glass bg-dark-surface/90 backdrop-blur-md border-b border-primary/20 hidden sm:block"
      >
        <div className="max-w-6xl mx-auto px-4 fold-open:px-6 lg:px-6 py-3 fold-open:py-4 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl fold-open:text-2xl font-bold font-mono text-primary hover:text-accent transition-colors"
          >
            <span className="text-matrix-green">$</span> kaoutar.dev
          </motion.button>

          <div className="flex items-center space-x-2 fold-open:space-x-4 lg:space-x-6">
            {navItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 fold-open:px-4 py-2 rounded-lg font-mono text-sm fold-open:text-base transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? 'bg-primary text-dark-bg shadow-neon-primary'
                    : 'text-gray-300 hover:text-primary hover:bg-primary/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="fold-open:hidden">{shortLabels[item.id] || item.label}</span>
                <span className="hidden fold-open:inline">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isMobileVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 glass bg-dark-surface/95 backdrop-blur-md border-b border-primary/20 sm:hidden"
      >
        <div className="px-2 fold-closed:px-1 py-2 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm fold-closed:text-xs font-bold font-mono text-primary"
          >
            <span className="text-matrix-green">$</span> kaoutar.dev
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="p-2 fold-closed:p-1 text-primary hover:text-accent transition-colors z-50 relative"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg fold-closed:text-base block"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Slide-in Mobile Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 h-full w-64 sm:w-72 bg-dark-surface/98 backdrop-blur-md border-r border-primary/20 z-30 sm:hidden"
      >
        <div className="pt-16 p-4">
          <div className="mb-6 p-4 bg-dark-card border border-primary/30 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-matrix-green text-sm font-mono font-bold">navigation.js</span>
              </div>
            </div>
            <div className="text-matrix-green font-mono text-xs">
              <span className="text-primary">const</span> menu = <span className="text-accent">[</span>
            </div>
          </div>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => { scrollToSection(item.id); setIsMobileMenuOpen(false); }}
                whileHover={{ x: 10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary to-accent text-dark-bg shadow-neon-primary'
                    : 'text-gray-300 hover:text-primary hover:bg-primary/10 hover:border-primary/30 border border-transparent'
                }`}
              >
                <span className="text-lg"><item.icon className="w-5 h-5" /></span>
                <span>{item.label}</span>
                {activeSection === item.id && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto text-dark-bg font-bold">→</motion.span>}
              </motion.button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-dark-card border border-accent/30 rounded-lg">
            <div className="text-matrix-green font-mono text-xs">
              <span className="text-accent">];</span>
            </div>
            <div className="text-matrix-green font-mono text-xs mt-1">
              <span className="text-primary">export default</span> menu;
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 sm:hidden"
        />
      )}
    </>
  );
}
