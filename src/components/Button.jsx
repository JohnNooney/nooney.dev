import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  primary: 'bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-light hover:to-primary',
  secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
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
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        px-6 py-3 rounded-lg 
        transition-all duration-300 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${buttonVariants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
