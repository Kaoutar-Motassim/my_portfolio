import { motion } from 'framer-motion';
import { achievements } from '../data/timeline';
import * as Icons from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Certifications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Recognition and continuous learning milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon.startsWith('Si') ? Icons[achievement.icon] : FaTrophy;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-xl text-center group cursor-pointer"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${
                    achievement.type === 'certification' 
                      ? 'bg-blue-100 dark:bg-blue-900/30' 
                      : 'bg-yellow-100 dark:bg-yellow-900/30'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && (
                      <IconComponent className={`w-8 h-8 ${
                        achievement.type === 'certification' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-primary font-medium mb-2">
                  {achievement.issuer}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    achievement.type === 'certification'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600'
                  }`}>
                    {achievement.type === 'certification' ? 'Certification' : 'Award'}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {achievement.year}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "5+", label: "Certifications" },
            { number: "5+", label: "Projects Completed" },
            { number: "3+", label: "Years Learning" },
            { number: "100%", label: "Passion for Tech" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
