import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // TODO: Implement actual form submission logic
      console.log('Form submitted:', formData);
      // Simulate async submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
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

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="section-title mb-12 text-center">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Email</h3>
                  <a
                    href="mailto:john@nooney.dev"
                    className="text-primary-dark hover:text-primary transition-colors duration-300"
                  >
                    john@nooney.dev
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Phone</h3>
                  <a
                    href="tel:07305967405"
                    className="text-primary-dark hover:text-primary transition-colors duration-300"
                  >
                    07305967405
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Social</h3>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://github.com/JohnNooney"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-dark dark:text-gray-300 text-base transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/john-nooney"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-dark dark:text-gray-300 text-base transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
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
