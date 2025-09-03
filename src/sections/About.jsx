import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          <span className="text-matrix-green">// </span>About Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-mono px-2">console.log("Get to know the developer behind the code")</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative">
            {/* Terminal window frame */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden glass bg-dark-surface border border-primary/30 p-2 sm:p-3 md:p-4">
              {/* Terminal header */}
              <div className="flex items-center justify-between bg-dark-card p-2 sm:p-3 md:p-4 rounded-t-lg">
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-error rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-warning rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-matrix-green rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm text-matrix-green font-mono font-bold">profile.exe</span>
                <div className="w-8 sm:w-12 md:w-16"></div>
              </div>
              
              {/* Profile image */}
              <div className="flex-1 bg-dark-card rounded-b-lg p-3 sm:p-4 md:p-6 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
                    <img 
                      src={personalInfo.image} 
                      alt="Aymen Chabbaki" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating code particles */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-matrix-green rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-3 h-3 sm:w-5 sm:h-5 bg-accent rounded-full animate-pulse delay-150"></div>
            <div className="absolute top-1/4 -right-1 sm:-right-2 w-2 h-2 sm:w-4 sm:h-4 bg-secondary rounded-full animate-pulse delay-300"></div>
          </div>
        </motion.div>

        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2"
        >
          {/* Terminal window for bio */}
          <div className="glass bg-dark-surface border border-primary/30 rounded-lg p-3 sm:p-4 md:p-6">
            {/* Terminal header */}
            <div className="flex items-center justify-between bg-dark-card p-2 sm:p-3 md:p-4 rounded-t-lg">
              <div className="flex space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-error rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-warning rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-matrix-green rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm text-matrix-green font-mono font-bold">about.js</span>
              <div className="w-8 sm:w-12 md:w-16"></div>
            </div>
            
            <div className="p-3 sm:p-4 md:p-6 bg-dark-surface rounded-b-lg">
              <div className="font-mono text-xs sm:text-sm md:text-base space-y-1 sm:space-y-2 md:space-y-3">
                <div className="text-matrix-green">
                  <span className="text-primary">const</span> aboutMe = <span className="text-accent">{`{`}</span>
                </div>
                <div className="text-matrix-green ml-3 sm:ml-4 md:ml-6">
                  bio: <span className="text-secondary">"{personalInfo.bio.slice(0, 60)}..."</span>,
                </div>
                <div className="text-matrix-green ml-3 sm:ml-4 md:ml-6">
                  passions: <span className="text-accent">[</span>
                </div>
                <div className="text-matrix-green ml-6 sm:ml-8 md:ml-12">
                  <span className="text-secondary">"AI & Machine Learning"</span>,
                </div>
                <div className="text-matrix-green ml-6 sm:ml-8 md:ml-12">
                  <span className="text-secondary">"Full Stack Development"</span>,
                </div>
                <div className="text-matrix-green ml-6 sm:ml-8 md:ml-12">
                  <span className="text-secondary">"Problem Solving"</span>
                </div>
                <div className="text-matrix-green ml-3 sm:ml-4 md:ml-6">
                  <span className="text-accent">]</span>
                </div>
                <div className="text-matrix-green">
                  <span className="text-accent">{`};`}</span>
                </div>
                <div className="text-matrix-green mt-3 sm:mt-4 md:mt-6">
                  <span className="text-primary">export default</span> aboutMe;
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts - Terminal Style */}
          <div className="glass bg-dark-surface border border-accent/30 p-3 sm:p-4 md:p-6 rounded-lg">
            <div className="flex items-center justify-between bg-dark-card p-2 sm:p-3 md:p-4 rounded-t-lg">
              <div className="flex space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-error rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-warning rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-matrix-green rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm text-matrix-green font-mono font-bold">funFacts.json</span>
              <div className="w-8 sm:w-12 md:w-16"></div>
            </div>
            
            <div className="p-3 sm:p-4 md:p-6 bg-dark-surface rounded-b-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-accent font-mono">// Fun Facts Array</h3>
              <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm md:text-base">
                {personalInfo.funFacts.slice(0, 3).map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <span className="text-primary">[{index}]:</span>
                    <span className="text-secondary text-xs sm:text-sm">"{fact}"</span>
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
              className="group relative inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-mono font-bold text-sm sm:text-base rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon-primary transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">$ ./connect</span>
              <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
