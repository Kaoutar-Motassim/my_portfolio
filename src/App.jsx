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
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
          {/* Terminal-style header */}
          <div className="mb-12 p-8 bg-dark-surface border border-dark-border rounded-lg shadow-neural max-w-5xl w-full">
            <div className="flex items-center mb-6">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-error rounded-full"></div>
                <div className="w-4 h-4 bg-warning rounded-full"></div>
                <div className="w-4 h-4 bg-matrix-green rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-matrix-green text-lg font-bold">aymen@portfolio:~$</span>
              </div>
            </div>
            
            <div className="text-left font-mono text-lg space-y-3">
              <div className="text-matrix-green">
                <span className="text-primary">const</span> developer = <span className="text-accent">{`{`}</span>
              </div>
              <div className="text-matrix-green ml-6">
                name: <span className="text-secondary">"Aymen Chabbaki"</span>,
              </div>
              <div className="text-matrix-green ml-6">
                role: <span className="text-secondary">"Full Stack Developer & AI Engineer"</span>,
              </div>
              <div className="text-matrix-green ml-6">
                skills: <span className="text-accent">[</span><span className="text-secondary">"React", "Node.js", "Python", "AI/ML"</span><span className="text-accent">]</span>,
              </div>
              <div className="text-matrix-green ml-6">
                passion: <span className="text-secondary">"Building the future with code"</span>
              </div>
              <div className="text-matrix-green">
                <span className="text-accent">{`};`}</span>
              </div>
            </div>
          </div>
          
          {/* Main title with glitch effect */}
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-neon">
            Aymen Chabbaki
          </h1>
          
          {/* Typewriter effect subtitle */}
          <div className="text-2xl font-semibold mb-6 text-matrix-green">
            <span className="border-r-2 border-primary animate-blink">
              Full Stack Developer & AI Engineer
            </span>
          </div>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            <span className="text-primary">//</span> Crafting intelligent solutions with cutting-edge technology
          </p>
          
          {/* Neon buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon-primary transform hover:scale-105"
            >
              <span className="relative z-10">$ ./hire_me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-neon-primary transform hover:scale-105"
            >
              <span className="group-hover:hidden">ls ./projects</span>
              <span className="hidden group-hover:inline">cd ./projects</span>
            </button>
          </div>
          
          {/* Terminal cursor */}
          <div className="mt-8 fold-closed:mt-2 md:mt-12 lg:mt-16 text-matrix-green animate-blink">
            <span className="text-2xl fold-closed:text-lg md:text-3xl lg:text-4xl">▊</span>
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
