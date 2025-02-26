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

### Visual Hierarchy and Layering

#### Base Layer (Background)
- Light theme: `bg-gray-100`
- Dark theme: `bg-gray-900`

#### Primary Cards (Main Sections)
```jsx
<div className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg">
  {/* Primary content */}
</div>
```
- Light theme: `bg-white/95` with `backdrop-blur-lg`
- Dark theme: `bg-gray-800/80` with `backdrop-blur-lg`
- Shadow: `shadow-lg`
- Corners: `rounded-xl`
- Hover: `hover:shadow-xl`

#### Secondary Cards (Nested Elements)
```jsx
<div className="bg-gray-50/80 dark:bg-gray-700/60 rounded-xl shadow-sm">
  {/* Secondary content */}
</div>
```
- Light theme: `bg-gray-50/80`
- Dark theme: `bg-gray-700/60`
- Shadow: `shadow-sm`
- Hover: `hover:shadow-md`

#### Interactive Elements
```jsx
<input className="bg-gray-50/80 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
```
- Background follows Secondary Card guidelines
- Focus states use ring effects
- Transitions: `transition-all duration-200`

### Color Scheme
- **Primary Colors**
  - Blue (accent): `text-blue-600` dark:`text-blue-400`
  - Gray (text): `text-gray-700` dark:`text-gray-300`

- **Text Colors**
  - Headers: `text-gray-900` dark:`text-white`
  - Body: `text-gray-700` dark:`text-gray-300`
  - Links: `text-gray-700` → `hover:text-blue-600`
  - Accents: `text-blue-600` dark:`text-blue-400`

### Typography
- Headers: `text-4xl font-bold`
- Subheaders: `text-2xl font-semibold`
- Body: `text-base` or `text-lg`
- Navigation: `text-sm font-medium`

### Components

#### Buttons
Primary Button:
```jsx
<button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-200 shadow-md hover:shadow-xl">
  Button Text
</button>
```

Secondary Button:
```jsx
<button className="px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-xl">
  Button Text
</button>
```

#### Page Structure
Each page should follow this basic structure:
```jsx
<section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Page Title
        </h1>
        {/* Page content */}
      </div>
    </motion.div>
  </div>
</section>
```

### Spacing Guidelines

#### Container Padding
- **Page Sections**: `py-16` for vertical padding
- **Primary Cards**: `p-16` for desktop, `p-8` for mobile
- **Secondary Cards**: `p-8` for desktop, `p-6` for mobile
- **Interactive Elements**: `px-8 py-3` for buttons

#### Margins and Gaps
- **Section Margins**: `mb-16` between major sections
- **Content Spacing**:
  - Large gaps (between sections): `space-y-8` or `gap-8`
  - Medium gaps (between related items): `space-y-6` or `gap-6`
  - Small gaps (between text elements): `space-y-4` or `gap-4`
  - Minimal gaps (between tight elements): `space-y-2` or `gap-2`

#### Text Spacing
- **Headers**: `mb-8` after main headers
- **Subheaders**: `mb-6` after subheaders
- **Paragraphs**: `mb-4` between paragraphs
- **List Items**: `space-y-2` between items
- **Line Height**:
  - Headers: `leading-tight`
  - Body Text: `leading-relaxed`
  - Large Text: `leading-loose`

#### Responsive Spacing
```jsx
// Example of responsive container
<div className="p-6 sm:p-8 md:p-12 lg:p-16">
  {/* Content */}
</div>

// Example of responsive margins
<div className="mb-8 md:mb-12 lg:mb-16">
  {/* Content */}
</div>

// Example of responsive grid/flex gaps
<div className="space-y-4 sm:space-y-0 sm:space-x-6">
  {/* Content */}
</div>
```

#### Fixed Dimensions
- **Buttons**: `w-64` (256px) width
- **Icons**: 
  - Small: `w-6 h-6`
  - Medium: `w-8 h-8`
  - Large: `w-12 h-12`
- **Container Max Width**: `max-w-7xl`
- **Content Max Width**: `max-w-2xl` for readable text blocks

#### Grid and Flex Layouts
```jsx
// Grid layout with responsive gaps
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Grid items */}
</div>

// Flex layout with responsive spacing
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
  {/* Flex items */}
</div>
```

#### Component-Specific Rules
- **Navigation**: `px-4 py-2` for nav items
- **Cards**: 
  - Outer padding: `p-8`
  - Inner content: `space-y-4`
  - Between cards: `gap-8`
- **Forms**:
  - Between fields: `space-y-6`
  - Label to input: `mb-2`
  - Input padding: `px-4 py-2`

These spacing guidelines ensure consistent rhythm and hierarchy across the application while maintaining responsiveness and readability.

### Animation Guidelines
- Use Framer Motion for animations
- Page transitions: Fade in with slight y-offset
- Hover effects: Scale between 1.02-1.05
- Button clicks: Scale down to 0.95
- Transitions: 200-300ms duration
- Use `backdrop-blur-lg` for depth

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
