import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import HeroBackground from './components/HeroBackground';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  // Set dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen transition-colors duration-300 font-mono bg-dark-bg text-white overflow-x-hidden"
    >
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8">
          {/* Terminal-style header */}
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6 p-4 sm:p-6 bg-dark-surface/80 backdrop-blur-sm border border-dark-border rounded-lg shadow-2xl max-w-4xl w-full"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex space-x-2">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="w-3 h-3 bg-error rounded-full"
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="w-3 h-3 bg-warning rounded-full"
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="w-3 h-3 bg-matrix-green rounded-full"
                ></motion.div>
              </div>
              <div className="flex-1 text-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-gray-400 font-mono"
                >
                  aymen@portfolio:~$
                </motion.span>
              </div>
            </div>
            
            <div className="text-left font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-matrix-green"
              >
                <span className="text-primary">const</span> developer = <span className="text-accent">{`{`}</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-matrix-green ml-4"
              >
                name: <span className="text-secondary">"Aymen Chabbaki"</span>,
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-matrix-green ml-4"
              >
                role: <span className="text-secondary">"Full Stack Developer & AI Engineer"</span>,
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-matrix-green ml-4"
              >
                skills: <span className="text-accent">[</span><span className="text-secondary">"React", "Node.js", "Python", "AI/ML"</span><span className="text-accent">]</span>,
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-matrix-green ml-4"
              >
                available: <span className="text-accent">true</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-matrix-green"
              >
                <span className="text-accent">{`}`}</span>;
              </motion.div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Aymen Chabbaki
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-matrix-green"
          >
            <span className="border-r-2 border-primary animate-pulse">
              Full Stack Developer & AI Engineer
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto text-gray-300 leading-relaxed"
          >
            <span className="text-primary">//</span> Crafting intelligent solutions with cutting-edge technology
          </motion.p>
          
          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="interactive px-6 py-3 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              data-cursor-text="Get in touch!"
            >
              $ ./hire_me
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="interactive px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg font-bold rounded-lg transition-all duration-300"
              data-cursor-text="View my work"
            >
              ls ./projects
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Sections with page transition animations */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Achievements />
          <Resume />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
