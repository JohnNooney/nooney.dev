import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C#', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Swift', level: 60 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'WPF', level: 80 },
      { name: 'SwiftUI', level: 60 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Spring', level: 90 },
      { name: 'Express', level: 75 },
      { name: 'PostgreSQL', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'GCP', level: 75 },
      { name: 'Jenkins', level: 85 },
      { name: 'Kubernetes', level: 80 },
    ],
  },
];

// Helper function to generate dynamic progress bar color
const getProgressBarColor = (level) => {
  if (level >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-600';
  if (level >= 80) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
  if (level >= 70) return 'bg-gradient-to-r from-purple-500 to-indigo-500';
  return 'bg-gradient-to-r from-yellow-500 to-orange-500';
};

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="section-title mb-12 text-center font-bold">Skills & Expertise</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div 
                      className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <motion.div
                        className={`h-2.5 rounded-full ${getProgressBarColor(skill.level)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
