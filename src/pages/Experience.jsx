import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company A',
    period: '2022 - Present',
    description: 'Led development of key features for enterprise applications using React and Node.js. Mentored junior developers and implemented best practices.',
    achievements: [
      'Improved application performance by 40%',
      'Led team of 5 developers',
      'Implemented CI/CD pipeline',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker'],
  },
  {
    title: 'Software Engineer',
    company: 'Tech Company B',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Developed new customer-facing features',
      'Reduced bug count by 60%',
      'Optimized database queries',
    ],
    technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Redis'],
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Professional Experience
          </h1>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 relative pl-8 border-l-2 border-primary last:mb-0"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mt-1">
                    {experience.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {experience.period}
                  </p>
                  
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {experience.description}
                  </p>

                  <div className="mt-4">
                    <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
