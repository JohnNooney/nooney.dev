import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpg';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="section-title mb-12 text-center font-bold">About Me</h1>
        
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Profile Image - Now visible on mobile and desktop */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg max-w-xs w-full">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={profilePic}
                  alt="John Nooney" 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center md:text-left">
              I am a passionate Software Engineer with a strong foundation in both frontend and backend development.
              My journey in software development has been driven by a curiosity to solve complex problems and create
              meaningful solutions that impact users' lives.
            </p>

            <div className="space-y-8">
              {/* Education Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white text-center md:text-left">
                  Education
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 text-center md:text-left">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                    University of Example, 2020-2024
                  </p>
                </div>
              </div>

              {/* Interests Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white text-center md:text-left">
                  Interests
                </h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  {['Web Development', 'Cloud Computing', 'Machine Learning', 'Open Source'].map((interest, index) => (
                    <li key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
