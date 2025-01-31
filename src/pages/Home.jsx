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
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto py-16">
        <motion.div
          className="text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-800 dark:text-blue-400">
            {' '}
            <TypeAnimation
              sequence={["Hi, I'm John Nooney", 1000]}
              wrapper="span"
              speed={20}
              className="text-primary"
              repeat={0}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Software Engineer passionate about building innovative solutions
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Link
              to="/contact"
              variant="primary"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              variant="secondary"
            >
              About Me
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
                className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-300">
                  {skill.title}
                </h3>
                <p className="dark:text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
