import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const linkVariants = {
  secondary: 'bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-light hover:to-primary',
  primary: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light',
};

const Link = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  external = false,
  ...props 
}) => {
  const baseClasses = `
    inline-block px-6 py-3 rounded-lg 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${linkVariants[variant]}
    ${className}
  `;

  // For external links
  if (external) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  // For internal links
  return (
    <RouterLink
      to={to}
      {...props}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
      >
        {children}
      </motion.div>
    </RouterLink>
  );
};

export default Link;
