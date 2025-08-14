import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/personalInfo';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const iconMap = {
    FaLinkedin,
    FaGithub,
    FaEnvelope
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-slate-300 mb-4 max-w-md">
              {personalInfo.tagline}
            </p>
            <p className="text-slate-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'skills', 'projects', 'timeline', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-slate-300 hover:text-primary transition-colors capitalize"
                  >
                    {section === 'timeline' ? 'Experience' : section}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300">{personalInfo.location}</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-slate-300 hover:text-primary transition-colors block"
              >
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-slate-300 hover:text-primary transition-colors block"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400"
        >
          <p className="flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </p>
          <p className="flex items-center space-x-1 mt-2 md:mt-0">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
