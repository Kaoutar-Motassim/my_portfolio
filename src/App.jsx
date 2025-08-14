import { useState, useEffect } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for coding theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-mono ${
      darkMode 
        ? 'bg-dark-bg text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <Navigation />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section id="hero" className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <AnimatedBackground />
        
        {/* Matrix-style background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card opacity-95"></div>
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 fold-closed:px-2 fold-open:px-6">
          {/* Terminal-style header */}
          <div className="mb-4 fold-closed:mb-2 md:mb-8 p-3 fold-closed:p-2 fold-open:p-4 bg-dark-surface border border-dark-border rounded-lg shadow-neural max-w-4xl w-full">
            <div className="flex items-center mb-2 fold-closed:mb-1 md:mb-4">
              <div className="flex space-x-1 fold-closed:space-x-0.5 md:space-x-2">
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-error rounded-full"></div>
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-warning rounded-full"></div>
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-matrix-green rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-matrix-green text-xs fold-closed:text-[10px] md:text-sm">aymen@portfolio:~$</span>
              </div>
            </div>
            
            <div className="text-left font-mono text-xs fold-closed:text-[10px] sm:text-sm space-y-1 fold-closed:space-y-0.5 md:space-y-2">
              <div className="text-matrix-green">
                <span className="text-primary">const</span> developer = <span className="text-accent">{`{`}</span>
              </div>
              <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4">
                name: <span className="text-secondary">"Aymen Chabbaki"</span>,
              </div>
              <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4 fold-closed:hidden">
                role: <span className="text-secondary">"Full Stack Developer & AI Engineer"</span>,
              </div>
              <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4 hidden fold-closed:block">
                role: <span className="text-secondary">"Full Stack Dev"</span>,
              </div>
              <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4">
                skills: <span className="text-accent">[</span><span className="text-secondary fold-closed:hidden">"React", "Node.js", "Python", "AI/ML"</span><span className="text-secondary hidden fold-closed:inline">"React", "AI"</span><span className="text-accent">]</span>,
              </div>
              <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4 fold-closed:hidden">
                passion: <span className="text-secondary">"Building the future with code"</span>
              </div>
              <div className="text-matrix-green">
                <span className="text-accent">{`};`}</span>
              </div>
            </div>
          </div>
          
          {/* Main title with glitch effect */}
          <h1 className="text-3xl fold-closed:text-xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 fold-closed:mb-1 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-neon">
            Aymen Chabbaki
          </h1>
          
          {/* Typewriter effect subtitle */}
          <div className="text-lg fold-closed:text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 fold-closed:mb-1 md:mb-2 text-matrix-green">
            <span className="border-r-2 border-primary animate-blink fold-closed:hidden">
              Full Stack Developer & AI Engineer
            </span>
            <span className="border-r-2 border-primary animate-blink hidden fold-closed:inline">
              Dev & AI Engineer
            </span>
          </div>
          
          <p className="text-sm fold-closed:text-xs sm:text-base md:text-lg lg:text-xl mb-4 fold-closed:mb-2 md:mb-8 max-w-xl mx-auto text-gray-300">
            <span className="text-primary">//</span> <span className="fold-closed:hidden">Crafting intelligent solutions with cutting-edge technology</span><span className="hidden fold-closed:inline">Building smart solutions</span>
          </p>
          
          {/* Neon buttons */}
          <div className="flex gap-3 fold-closed:gap-2 md:gap-6 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-4 fold-closed:px-3 md:px-8 py-2 fold-closed:py-1.5 md:py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold text-sm fold-closed:text-xs md:text-base rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon-primary transform hover:scale-105"
            >
              <span className="relative z-10 fold-closed:hidden">$ ./hire_me</span>
              <span className="relative z-10 hidden fold-closed:inline">hire</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-4 fold-closed:px-3 md:px-8 py-2 fold-closed:py-1.5 md:py-4 border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg font-bold text-sm fold-closed:text-xs md:text-base rounded-lg transition-all duration-300 hover:shadow-neon-primary transform hover:scale-105"
            >
              <span className="group-hover:hidden fold-closed:hidden">ls ./projects</span>
              <span className="hidden group-hover:inline fold-closed:hidden">cd ./projects</span>
              <span className="hidden fold-closed:inline">projects</span>
            </button>
          </div>
          
          {/* Terminal cursor */}
          <div className="mt-4 fold-closed:mt-2 md:mt-8 text-matrix-green animate-blink">
            <span className="text-xl fold-closed:text-lg md:text-2xl">▊</span>
          </div>
        </div>
      </section>
      
      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
