import { motion } from 'framer-motion';
import { achievements } from '../data/timeline';
import * as Icons from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

export default function Achievements() {
  return (
    <section id="achievements" className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            <span className="text-matrix-green">// </span>Achievements & Certifications
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-mono px-2">
            console.log("Recognition and continuous learning milestones")
          </p>
        </motion.div>

        {/* Grid Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
                className="glass p-3 sm:p-4 md:p-6 rounded-xl text-center group cursor-pointer relative"
              >
                {/* Icon */}
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  <div className={`p-2 sm:p-3 md:p-4 rounded-full ${
                    achievement.type === 'certification' 
                      ? 'bg-blue-100 dark:bg-blue-900/30' 
                      : 'bg-yellow-100 dark:bg-yellow-900/30'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && (
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${
                        achievement.type === 'certification' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`} />
                    )}
                  </div>
                </div>

                {/* Image du certificat */}
                {achievement.image && (
                  <img
                    src={`/${achievement.image}`}
                    alt={achievement.title}
                    className="w-full h-auto rounded mb-2 shadow-md"
                  />
                )}

                {/* Titre et issuer */}
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                  {achievement.issuer}
                </p>

                {/* Type & Year */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                  <span className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
                    achievement.type === 'certification'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600'
                  }`}>
                    {achievement.type === 'certification' ? 'Certification' : 'Award'}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                    {achievement.year}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
