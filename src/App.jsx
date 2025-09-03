import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
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
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-2 sm:px-4 pb-12 sm:pb-16 md:pb-20">
        <AnimatedBackground />
        
        {/* Matrix-style background overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card"
        ></motion.div>
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-2 sm:px-4 lg:px-8 sm:pt-24 md:pt-12 lg:pt-12">
          {/* Terminal-style header */}
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8 md:mb-12 lg:mb-8 xl:mb-12 p-3 sm:p-6 md:p-8 bg-dark-surface border border-dark-border rounded-lg shadow-neural max-w-5xl w-full"
          >
            <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
              <div className="flex space-x-2 sm:space-x-3">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-error rounded-full"
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-warning rounded-full"
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-matrix-green rounded-full"
                ></motion.div>
              </div>
              <div className="flex-1 text-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-matrix-green text-sm sm:text-base md:text-lg font-bold"
                >
                  aymen@portfolio:~$
                </motion.span>
              </div>
            </div>
            
            <div className="text-left font-mono text-xs sm:text-sm md:text-base lg:text-lg space-y-1 sm:space-y-2 md:space-y-3">
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
                className="text-matrix-green ml-3 sm:ml-4 md:ml-6"
              >
                name: <span className="text-secondary">"Aymen Chabbaki"</span>,
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-matrix-green ml-3 sm:ml-4 md:ml-6"
              >
                role: <span className="text-secondary">"Full Stack Developer & AI Engineer"</span>,
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-matrix-green ml-3 sm:ml-4 md:ml-6"
              >
                skills: <span className="text-accent">[</span><span className="text-secondary">"React", "Node.js", "Python", "AI/ML"</span><span className="text-accent">]</span>,
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-matrix-green ml-3 sm:ml-4 md:ml-6"
              >
                passion: <span className="text-secondary">"Building the future with code"</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-matrix-green"
              >
                <span className="text-accent">{`};`}</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main title with glitch effect */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-neon"
          >
            Aymen Chabbaki
          </motion.h1>
          
          {/* Typewriter effect subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-matrix-green"
          >
            <span className="border-r-2 border-primary animate-blink">
              <span className="hidden sm:inline">Full Stack Developer & AI Engineer</span>
              <span className="sm:hidden">Full Stack Dev & AI</span>
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed px-2"
          >
            <span className="text-primary">//</span> Crafting intelligent solutions with cutting-edge technology
          </motion.p>
          
          {/* Neon buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center w-full max-w-md sm:max-w-none"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold text-sm sm:text-base md:text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon-primary transform w-full sm:w-auto"
            >
              <span className="relative z-10">$ ./hire_me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg font-bold text-sm sm:text-base md:text-lg rounded-lg transition-all duration-300 hover:shadow-neon-primary transform w-full sm:w-auto"
            >
              <span className="group-hover:hidden">ls ./projects</span>
              <span className="hidden group-hover:inline">cd ./projects</span>
            </motion.button>
          </motion.div>
          
          {/* Terminal cursor */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="mt-4 sm:mt-8 md:mt-12 lg:mt-16 text-matrix-green animate-blink"
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">▊</span>
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
