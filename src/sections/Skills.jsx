import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import * as Icons from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    { title: "Programming Languages", data: skills.programming, color: "from-blue-500 to-purple-600" },
    { title: "Frontend", data: skills.frontend, color: "from-green-500 to-teal-600" },
    { title: "Backend", data: skills.backend, color: "from-yellow-500 to-orange-600" },
    { title: "Databases", data: skills.databases, color: "from-pink-500 to-red-600" },
    { title: "AI & Machine Learning", data: skills.ai, color: "from-indigo-500 to-blue-600" },
    { title: "Tools & DevOps", data: skills.tools, color: "from-gray-500 to-slate-600" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h3>
              
              <div className="space-y-4">
                {category.data.map((skill, index) => {
                  const IconComponent = Icons[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 min-w-[2rem]">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
