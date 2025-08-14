import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="py-12 fold-closed:py-8 md:py-20 px-4 fold-closed:px-2 md:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 fold-closed:mb-6 md:mb-16"
      >
        <h2 className="text-3xl fold-closed:text-2xl sm:text-4xl md:text-5xl font-bold mb-2 fold-closed:mb-1 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          <span className="text-matrix-green">// </span>About Me
        </h2>
        <p className="text-base fold-closed:text-sm md:text-lg text-gray-300 font-mono">console.log("Get to know the developer behind the code")</p>
      </motion.div>

      <div className="grid fold-open:grid-cols-1 lg:grid-cols-2 gap-8 fold-closed:gap-4 md:gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center fold-open:order-1"
        >
          <div className="relative">
            {/* Terminal window frame */}
            <div className="w-48 h-48 fold-closed:w-40 fold-closed:h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden glass bg-dark-surface border border-primary/30 p-1">
              {/* Terminal header */}
              <div className="flex items-center justify-between bg-dark-card p-1.5 fold-closed:p-1 md:p-2 rounded-t-lg">
                <div className="flex space-x-1 fold-closed:space-x-0.5">
                  <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-error rounded-full"></div>
                  <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-warning rounded-full"></div>
                  <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-matrix-green rounded-full"></div>
                </div>
                <span className="text-[10px] fold-closed:text-[8px] md:text-xs text-matrix-green font-mono">profile.exe</span>
                <div className="w-8 fold-closed:w-6 md:w-12"></div>
              </div>
              
              {/* Image container */}
              <div className="p-2 fold-closed:p-1.5 md:p-4 h-full flex items-center justify-center bg-dark-surface">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full border-2 border-primary/30"
                />
              </div>
            </div>
            
            {/* Neon glow effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 fold-closed:-inset-1 md:-inset-4 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-xl"
            />
          </div>
        </motion.div>

        {/* Bio and Fun Facts */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 fold-closed:space-y-3 md:space-y-6 fold-open:order-2"
        >
          {/* Terminal-style bio */}
          <div className="glass bg-dark-surface border border-primary/30 p-1 rounded-lg">
            {/* Terminal header */}
            <div className="flex items-center justify-between bg-dark-card p-1.5 fold-closed:p-1 md:p-2 rounded-t-lg">
              <div className="flex space-x-1 fold-closed:space-x-0.5">
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-error rounded-full"></div>
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-warning rounded-full"></div>
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-matrix-green rounded-full"></div>
              </div>
              <span className="text-[10px] fold-closed:text-[8px] md:text-xs text-matrix-green font-mono">about.js</span>
              <div className="w-8 fold-closed:w-6 md:w-12"></div>
            </div>
            
            {/* Terminal content */}
            <div className="p-3 fold-closed:p-2 md:p-4 bg-dark-surface rounded-b-lg">
              <div className="font-mono text-xs fold-closed:text-[10px] sm:text-sm space-y-1 fold-closed:space-y-0.5 md:space-y-2">
                <div className="text-matrix-green">
                  <span className="text-primary">const</span> aboutMe = <span className="text-accent">{`{`}</span>
                </div>
                <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4">
                  bio: <span className="text-secondary">"{personalInfo.bio.slice(0, 80)}..."</span>,
                </div>
                <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4 fold-closed:hidden">
                  passions: <span className="text-accent">[</span>
                </div>
                <div className="text-matrix-green ml-4 fold-closed:ml-2 md:ml-8 fold-closed:hidden">
                  <span className="text-secondary">"AI & Machine Learning"</span>,
                </div>
                <div className="text-matrix-green ml-4 fold-closed:ml-2 md:ml-8 fold-closed:hidden">
                  <span className="text-secondary">"Full Stack Development"</span>,
                </div>
                <div className="text-matrix-green ml-4 fold-closed:ml-2 md:ml-8 fold-closed:hidden">
                  <span className="text-secondary">"Problem Solving"</span>
                </div>
                <div className="text-matrix-green ml-2 fold-closed:ml-1 md:ml-4 fold-closed:hidden">
                  <span className="text-accent">]</span>
                </div>
                <div className="text-matrix-green hidden fold-closed:block ml-2">
                  skills: <span className="text-secondary">"AI, React, Node"</span>
                </div>
                <div className="text-matrix-green">
                  <span className="text-accent">{`};`}</span>
                </div>
                <div className="text-matrix-green mt-2 fold-closed:mt-1 md:mt-4 fold-closed:hidden">
                  <span className="text-primary">export default</span> aboutMe;
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts - Terminal Style */}
          <div className="glass bg-dark-surface border border-accent/30 p-1 rounded-lg">
            <div className="flex items-center justify-between bg-dark-card p-1.5 fold-closed:p-1 md:p-2 rounded-t-lg">
              <div className="flex space-x-1 fold-closed:space-x-0.5">
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-error rounded-full"></div>
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-warning rounded-full"></div>
                <div className="w-2 h-2 fold-closed:w-1.5 fold-closed:h-1.5 md:w-3 md:h-3 bg-matrix-green rounded-full"></div>
              </div>
              <span className="text-[10px] fold-closed:text-[8px] md:text-xs text-matrix-green font-mono">funFacts.json</span>
              <div className="w-8 fold-closed:w-6 md:w-12"></div>
            </div>
            
            <div className="p-3 fold-closed:p-2 md:p-4 bg-dark-surface rounded-b-lg">
              <h3 className="text-lg fold-closed:text-base md:text-xl font-semibold mb-2 fold-closed:mb-1 md:mb-4 text-accent font-mono">// Fun Facts Array</h3>
              <div className="space-y-2 fold-closed:space-y-1 md:space-y-3 font-mono text-xs fold-closed:text-[10px] sm:text-sm">
                {personalInfo.funFacts.slice(0, 3).map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 fold-closed:space-x-1 md:space-x-3"
                  >
                    <span className="text-primary">[{index}]:</span>
                    <span className="text-secondary">"{fact}"</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative inline-flex items-center space-x-2 fold-closed:space-x-1 px-6 fold-closed:px-4 md:px-8 py-3 fold-closed:py-2 md:py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-mono font-bold text-sm fold-closed:text-xs md:text-base rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon-primary transform hover:scale-105"
            >
              <span className="relative z-10 fold-closed:hidden">$ ./connect</span>
              <span className="relative z-10 hidden fold-closed:inline">connect</span>
              <svg className="relative z-10 w-3 h-3 fold-closed:w-2.5 fold-closed:h-2.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
