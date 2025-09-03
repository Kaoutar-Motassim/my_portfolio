import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Full Stack', 'AI', 'Mobile', 'Web'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            <span className="text-matrix-green">// </span>Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-mono mb-4 sm:mb-6 md:mb-8 px-2">
            console.log("Showcasing my latest innovations in tech")
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-mono font-medium transition-all duration-300 border text-xs sm:text-sm md:text-base ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary to-accent text-dark-bg border-primary shadow-neon-primary'
                    : 'glass border-primary/30 text-matrix-green hover:border-primary hover:shadow-md'
                }`}
              >
                ./{category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass bg-dark-surface border border-primary/30 rounded-xl overflow-hidden group cursor-pointer hover:border-primary/60 hover:shadow-neon-primary/20"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-dark-card p-2 sm:p-3 md:p-4">
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-error rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-warning rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-matrix-green rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm text-matrix-green font-mono truncate max-w-[120px] sm:max-w-none">
                  {project.title.toLowerCase().replace(/ /g, '_')}.js
                </span>
                <div className="w-8 sm:w-12 md:w-16"></div>
              </div>
              
              {/* Project Image */}
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-dark-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-3xl sm:text-4xl md:text-6xl text-primary/30 font-mono">
                    {project.category === 'AI' ? '🤖' : 
                     project.category === 'Mobile' ? '📱' : 
                     project.category === 'Full Stack' ? '💻' : '🌐'}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-primary/20 backdrop-blur-sm rounded-lg text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-accent/20 backdrop-blur-sm rounded-lg text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                  >
                    <FaGithub className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </motion.a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="absolute top-2 left-2 sm:top-4 sm:left-4"
                  >
                    <span className="px-2 py-1 sm:px-3 bg-gradient-to-r from-accent to-secondary text-dark-bg text-xs sm:text-sm font-mono font-semibold rounded-full">
                      FEATURED
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 md:p-6 bg-dark-surface">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold group-hover:text-primary transition-colors font-mono leading-tight flex-1 mr-2">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-accent font-mono shrink-0">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-dark-card border border-primary/30 text-matrix-green text-xs rounded font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 sm:px-3 text-xs sm:text-sm font-mono font-medium rounded-full border ${
                    project.category === 'AI' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' :
                    project.category === 'Mobile' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                    project.category === 'Full Stack' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                    'bg-primary/10 text-primary border-primary/30'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-mono font-bold rounded-lg hover:shadow-neon-primary transition-all duration-300 border border-primary/30 text-sm sm:text-base w-full sm:w-auto max-w-xs"
          >
            $ cat ./all_projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
