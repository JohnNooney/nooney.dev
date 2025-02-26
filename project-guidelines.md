# Project Guidelines - nooney.dev

## Project Overview
Personal portfolio website built with React, Tailwind CSS, and Firebase. The website showcases professional experience, projects, and provides contact functionality.

## Project Structure
```
nooney.dev/
├── public/                 # Static files
├── src/                    # Source code
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable components
│   │   ├── Button.jsx    # Custom button component
│   │   ├── Footer.jsx    # Site footer
│   │   ├── Link.jsx      # Custom link component
│   │   └── Navbar.jsx    # Navigation bar
│   ├── pages/            # Page components
│   │   ├── About.jsx     # About page
│   │   ├── Contact.jsx   # Contact form page
│   │   ├── Experience.jsx# Work experience page
│   │   ├── Home.jsx      # Landing page
│   │   ├── Projects.jsx  # Projects portfolio
│   │   └── Skills.jsx    # Skills showcase
│   ├── App.jsx           # Main app component
│   ├── App.css           # App-specific styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── firebase.json          # Firebase configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Style Guidelines

### Color Scheme
- **Light Mode**
  - Background: `bg-gray-50`
  - Cards/Containers: `bg-white`
  - Text:
    - Headers: `text-blue-800`
    - Body: `text-gray-700`
    - Links: `text-gray-700` → `hover:text-blue-600`
  - Accents: `text-blue-600`

- **Dark Mode**
  - Background: `bg-gray-900`
  - Cards/Containers: `bg-gray-800`
  - Text:
    - Headers: `text-blue-400`
    - Body: `text-gray-300`
    - Links: `text-gray-300` → `hover:text-blue-400`
  - Accents: `text-blue-500`

### Typography
- Headers: `text-4xl font-bold`
- Subheaders: `text-2xl font-semibold`
- Body: `text-base` or `text-lg`
- Navigation: `text-sm font-medium`

### Components

#### Buttons
- Primary: `bg-blue-600 text-white hover:bg-blue-700`
- Secondary: `bg-gray-100 text-gray-800 hover:bg-gray-200`
- Outline: `border-2 border-gray-600 text-gray-800 hover:bg-gray-600 hover:text-white`
- Ghost: `text-gray-700 hover:text-blue-600`

#### Cards
```jsx
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
  {/* Card content */}
</div>
```

#### Links
```jsx
<Link
  variant="primary|secondary|outline|ghost|about"
  to="/path"
  className="additional-classes"
>
  Link Text
</Link>
```

### Page Structure
Each page should follow this basic structure:
```jsx
<section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-400">
        Page Title
      </h1>
      {/* Page content */}
    </motion.div>
  </div>
</section>
```

## Page Descriptions

### Home (`/`)
Landing page featuring:
- Personal introduction
- Type animation for name
- Key skill areas
- Call-to-action buttons

### About (`/about`)
Personal information including:
- Profile image
- Bio
- Education history
- Personal interests
- Links to other sections

### Skills (`/skills`)
Showcase of technical skills:
- Skill categories
- Progress indicators
- Technology icons
- Detailed descriptions

### Experience (`/experience`)
Professional experience timeline:
- Work history
- Education
- Key achievements
- Technologies used

### Projects (`/projects`)
Portfolio of projects:
- Project cards
- Category filters
- Links to live demos/GitHub
- Technology tags

### Contact (`/contact`)
Contact form and information:
- Email form
- Contact details
- Social media links
- Form validation

## Best Practices
1. Use semantic HTML elements
2. Ensure proper contrast ratios for accessibility
3. Implement smooth transitions between states
4. Maintain consistent spacing using Tailwind's spacing scale
5. Use motion.div for page transitions
6. Implement proper aria-labels for accessibility
7. Maintain responsive design across all breakpoints
8. Use proper error handling in forms
9. Implement loading states for async operations
10. Keep components modular and reusable

## Development Workflow
1. Create feature branches from `main`
2. Follow conventional commits
3. Test in both light and dark modes
4. Ensure responsive design works
5. Test accessibility
6. Create PR for review
7. Deploy to staging for testing
8. Merge to main and deploy to production
