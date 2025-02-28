import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <nav 
      className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 pt-safe"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              onClick={() => document.querySelector('main').scrollTo(0, 0)}
              to="/" 
              className="flex items-center group"
              aria-label="Home"
            >
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="mr-2"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle 
                  cx="20" 
                  cy="20" 
                  r="20" 
                  className="fill-blue-800 dark:fill-blue-400"
                />
                <path 
                  d="M16 12L10 20L16 28" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white dark:text-gray-900"
                />
                <path 
                  d="M24 12L30 20L24 28" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white dark:text-gray-900"
                />
                <path 
                  d="M21 14L19 26" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  className="text-white dark:text-gray-900"
                />
              </svg>
              <span 
                className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400
                transition-colors duration-300"
              >
                John Nooney
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div 
            className="hidden md:flex md:items-center md:space-x-8"
            role="menubar"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                onClick={() => document.querySelector('main').scrollTo(0, 0)}
                to={item.path}
                role="menuitem"
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`
                  relative px-3 py-2 rounded-lg text-sm font-medium 
                  transition-all duration-300 group focus:outline-none
                  ${location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-700' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  }
                `}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span 
                    className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400
                      rounded-full transition-all duration-300"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
              className="
                inline-flex items-center justify-center p-2 rounded-md 
                text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
              "
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden overflow-hidden"
            role="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-lg">
              {navigation.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    to={item.path}
                    role="menuitem"
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    onClick={() => {
                      setIsOpen(false);
                      document.querySelector('main').scrollTo(0, 0);
                    }}
                    className={`
                      block px-3 py-2 rounded-lg text-base font-medium 
                      transition-all duration-300 relative group focus:outline-none
                      ${location.pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-700' 
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                      }
                    `}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <span 
                        className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400
                          rounded-full transition-all duration-300"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
