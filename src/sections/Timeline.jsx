import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function Timeline() {
  return (
    <section id="timeline" className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            <span className="text-matrix-green">// </span>Experience & Education
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-mono px-2">
            console.log("My journey in tech and learning")
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform lg:-translate-x-px"></div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-slate-800 border-2 sm:border-4 border-primary rounded-full z-10"></div>
                
                {/* Timeline Card */}
                <div className={`ml-8 sm:ml-12 md:ml-20 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass p-3 sm:p-4 md:p-6 rounded-xl"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 md:mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-0">
                        <div className={`p-1.5 sm:p-2 rounded-lg ${
                          item.type === 'education' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' 
                            : 'bg-green-100 dark:bg-green-900/30 text-green-600'
                        }`}>
                          {item.type === 'education' ? (
                            <FaGraduationCap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          ) : (
                            <FaBriefcase className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg">{item.title}</h3>
                          <p className="text-primary font-medium text-xs sm:text-sm md:text-base">{item.institution}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 bg-accent/10 text-accent rounded-full shrink-0">
                        {item.period}
                      </span>
                    </div>

                    {/* Content */}
                    <p className="text-slate-600 dark:text-slate-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                      {item.description}
                    </p>
                    
                    {/* Location */}
                    <div className="flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
