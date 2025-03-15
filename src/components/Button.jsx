import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  primary: 'bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-400 hover:to-blue-800 text-white',
  secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  wip: 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-400 dark:border-gray-500',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  ...props 
}) => {
  // Force disabled state for WIP buttons
  const isDisabled = disabled || variant === 'wip';
  
  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      className={`
        px-6 py-3 rounded-lg 
        transition-all duration-300 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${buttonVariants[variant]}
        ${isDisabled ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
