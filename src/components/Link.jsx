import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const linkVariants = {
  secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600',
  primary: 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600',
  outline: 'border-2 border-gray-600 dark:border-gray-400 text-gray-800 dark:text-white hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white',
  ghost: 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
  about: 'bg-white dark:bg-gray-800 w-full min-h-[200px] flex flex-col p-6 shadow-lg hover:shadow-xl text-gray-800 dark:text-white',
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
      onClick={() => document.querySelector('main').scrollTo(0, 0)}
      {...props}
    >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-block 
        rounded-lg 
        transition-all 
        duration-300 
          ${variant === 'about' ? 'w-full' : ''}
      `}
    >
        <div
        className={`
          inline-block 
            px-4 py-2 
          rounded-lg 
          transition-all 
          duration-300 
          ${linkVariants[variant]} 
          ${className}
        `}
      >
        {children}
        </div>
    </motion.div>
    </RouterLink>
  );
};

export default Link;
