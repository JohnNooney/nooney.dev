import { motion } from 'framer-motion';
import Link from '../components/Link';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="p-15 mb-15">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white min-h-[3em] flex items-center justify-center">
              <TypeAnimation
                sequence={["Hi, I'm John Nooney", 1000]}
                wrapper="span"
                speed={20}
                className="text-blue-600 dark:text-blue-400 block"
                repeat={0}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
              Software Engineer passionate about building innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="w-64 inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-200 shadow-md hover:shadow-xl"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="w-64 inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-xl"
                >
                  About Me
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive and intuitive user interfaces with modern technologies'
              },
              {
                title: 'Backend Development',
                description: 'Creating robust and scalable server-side applications'
              },
              {
                title: 'Cloud Solutions',
                description: 'Deploying and managing applications in cloud environments'
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-50/80 dark:bg-gray-700/60 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                    {skill.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
