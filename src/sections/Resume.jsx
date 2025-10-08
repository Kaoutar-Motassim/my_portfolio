import { motion } from 'framer-motion';
import { Download, FileText, Code, User, Briefcase } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume PDF in the public folder
    link.download = 'Kaoutar_Motassim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeHighlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Python, C, C++, SQL, JavaScript, HTML, CSS, Flask, React, AI & Machine Learning, Web Development"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experience",
      description: "Active in university tech clubs, leading projects and workshops on AI, web development, and software solutions"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Education",
      description: "Bachelor’s degree in Computer Science (in progress), focusing on programming, algorithms, and data structures"
    }
  ];

  return (
    <section id="resume" className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            <span className="text-matrix-green">// </span>Resume
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-mono px-2">
            console.log("Download my complete professional profile")
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Resume Preview/Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-surface border border-dark-border rounded-lg p-6 shadow-neural">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-matrix-green mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Resume</h3>
                  <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {resumeHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-dark-card/50 border border-primary/10"
                  >
                    <div className="text-accent mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-xs">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="bg-gradient-to-br from-dark-surface via-dark-card to-dark-surface border border-primary/20 rounded-xl p-8 shadow-neural">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Download Resume</h3>
                <p className="text-slate-400 text-sm">
                  Get the complete overview of my skills, experience, and achievements in PDF format.
                </p>
              </motion.div>

              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 flex items-center justify-center space-x-3 shadow-neural"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </motion.button>

              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 font-mono">
                  {"{ format: 'PDF', size: '~2MB', updated: 'recent' }"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
