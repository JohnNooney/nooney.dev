export default function Footer() {
  return (
    <footer className="bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:bg-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} John Nooney. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/JohnNooney"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johnnooney"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:john@nooney.dev"
              className="text-gray-600 hover:text-primary dark:text-gray-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
