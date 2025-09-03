import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { personalInfo, socialLinks } from '../data/personalInfo';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const iconMap = {
    FaLinkedin,
    FaGithub,
    FaEnvelope
  };

  return (
    <section id="contact" className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            <span className="text-matrix-green">// </span>Let's Work Together
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-mono px-2">
            console.log("Ready to bring your ideas to life? Let's connect!")
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base text-center lg:text-left px-2 lg:px-0">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and innovation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass rounded-lg"
              >
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm sm:text-base break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass rounded-lg"
              >
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass rounded-lg"
              >
                <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-center lg:text-left text-sm sm:text-base">Follow Me</h4>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 sm:p-3 glass rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      {IconComponent && <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-3 sm:p-6 md:p-8 rounded-xl space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 sm:py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-center text-xs sm:text-sm"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
