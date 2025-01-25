import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
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
        <h1 className="section-title mb-12">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Email</h3>
                  <a
                    href="mailto:john@nooney.dev"
                    className="text-primary hover:text-primary/80 text-base"
                  >
                    john@nooney.dev
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Phone</h3>
                  <a
                    href="tel:07305967405"
                    className="text-primary hover:text-primary/80 text-base"
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
                      className="text-gray-600 hover:text-primary dark:text-gray-300 text-base transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/john-nooney"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary dark:text-gray-300 text-base transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary py-3 text-base font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
