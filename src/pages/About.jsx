import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title">About Me</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            I am a passionate Software Engineer with a strong foundation in both frontend and backend development.
            My journey in software development has been driven by a curiosity to solve complex problems and create
            meaningful solutions that impact users' lives.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
          <div className="mb-8">
            <h3 className="text-xl font-medium">Bachelor's in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-300">University of Example, 2020-2024</p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Interests</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Web Development</li>
            <li>Cloud Computing</li>
            <li>Machine Learning</li>
            <li>Open Source Contributing</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
