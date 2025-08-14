import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">My journey in tech and learning</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-4 border-primary rounded-full z-10"></div>
                
                {/* Timeline Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass p-6 rounded-xl"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          item.type === 'education' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' 
                            : 'bg-green-100 dark:bg-green-900/30 text-green-600'
                        }`}>
                          {item.type === 'education' ? (
                            <FaGraduationCap className="w-5 h-5" />
                          ) : (
                            <FaBriefcase className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-primary font-medium">{item.institution}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {item.period}
                      </span>
                    </div>

                    {/* Content */}
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      {item.description}
                    </p>
                    
                    {/* Location */}
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
