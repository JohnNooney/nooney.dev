import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/solid';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "l6WMltDz_y7fKLYoO", 
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_mwl0z5q",     
        "template_6sa36mk",   
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      // Clear form and set success status
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ContactInfoItem = useCallback(({ icon: Icon, title, content, link, ariaLabel }) => (
    <motion.div 
      className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4 space-x-4">
        <div className="bg-primary/10 dark:bg-gray-600 p-3 rounded-full">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary-dark transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-300">{title}</h3>
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary transition-colors text-base font-medium"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    </motion.div>
  ), []);

  const SocialLinks = useCallback(() => (
    <motion.div 
      className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-4 space-x-4">
        <div className="bg-primary/10 dark:bg-gray-600 p-3 rounded-full">
          <GlobeAltIcon className="h-8 w-8 text-primary group-hover:text-primary-dark transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-300">Social</h3>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/JohnNooney"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center space-x-2 
            text-gray-600 hover:text-primary-dark 
            dark:text-gray-300 dark:hover:text-primary 
            transition-colors duration-300 font-semibold group"
          aria-label="GitHub Profile"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            className="fill-current group-hover:scale-110 transition-transform"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/johnnooney"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center space-x-2 
            text-gray-600 hover:text-primary-dark 
            dark:text-gray-300 dark:hover:text-primary 
            transition-colors duration-300 font-semibold group"
          aria-label="LinkedIn Profile"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            className="fill-current group-hover:scale-110 transition-transform"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.div>
  ), []);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 
          className="section-title mb-12 text-center text-4xl font-bold text-blue-800 dark:text-blue-400"
          aria-label="Contact Page" 
        >
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div 
            className="space-y-8 bg-primary/10 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            aria-label="Contact Details"
          >
            <div className="w-full max-w-md mx-auto">
              <h2 
                className="text-2xl font-bold mb-8 text-primary dark:text-blue-300 text-center"
                aria-label="Contact Information Section"
              >
                Contact Information
              </h2>
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={EnvelopeIcon}
                  title="Email"
                  content="john@nooney.dev"
                  link="mailto:john@nooney.dev"
                  ariaLabel="Email: john@nooney.dev"
                />
                <ContactInfoItem 
                  icon={PhoneIcon}
                  title="Phone"
                  content="07305967405"
                  link="tel:07305967405"
                  ariaLabel="Phone: 07305967405"
                />
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              aria-label="Contact Form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div 
                  role="alert" 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                >
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div 
                  role="alert" 
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                >
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
                aria-label={isSubmitting ? 'Sending Message' : 'Send Message'}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
