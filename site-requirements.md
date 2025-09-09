# Personal Website Specification

## 1. Project Overview
### 1.1 Purpose
Create a professional portfolio website to showcase software engineering skills, experience, and potential for contract or full-time employment.

### 1.2 Deployment Strategy
- Platform: Firebase Hosting
- Frontend Framework: React
- Deployment Pipeline: Automated CI/CD using GitHub Actions

## 2. Website Architecture
### 2.1 Core Pages
1. Home Page
2. About Me
3. Skills
4. Experience
5. Projects Portfolio
6. Contact

### 2.2 Technical Requirements
- Responsive Design (Mobile, Tablet, Desktop)
- Accessibility Compliance (WCAG 2.1)
- Performance Optimization
- SEO Friendly

## 3. Detailed Page Specifications

### 3.1 Home Page
#### Objectives
- Create immediate professional impact
- Provide quick overview of professional identity

#### Components
- Hero Section
  - Professional headshot
  - Brief tagline summarizing professional expertise
  - Call-to-action buttons (View Resume, Contact)

- Quick Skills Highlight
  - Condensed skills visualization
  - Interactive skill tags/icons

- Recent Projects Preview
  - 3-4 most recent/significant projects
  - Compact project cards with technologies used

### 3.2 About Me Page
#### Objectives
- Provide comprehensive professional narrative
- Demonstrate unique value proposition

#### Components
- Professional Biography
  - Detailed background story
  - Career transition highlights
  - Professional philosophy

- Personal Interests Section
  - Visual representation of interests
  - Brief descriptions

- Education and Certifications
  - Academic achievements
  - Professional training
  - Certifications with verifiable links

### 3.3 Skills Page
#### Objectives
- Comprehensive skill visualization
- Demonstrate technical breadth and depth

#### Components
- Categorized Skills Matrix
  1. Languages
     - Proficiency levels
     - Years of experience
  2. Cloud Technologies
  3. DevOps Tools
  4. Frameworks and Libraries
  5. Database Technologies

- Skill Visualization
  - Interactive skill bars/graphs
  - Hover/click interactions for detailed information

### 3.4 Experience Page
#### Objectives
- Showcase professional journey
- Highlight key achievements

#### Components
- Professional Experience Timeline
  - Chronological work history
  - Company logos
  - Role descriptions
  - Key achievements with quantifiable metrics

- Detailed Role Expansions
  - Expandable/collapsible sections
  - Technologies used per role
  - Project highlights

### 3.5 Projects Portfolio
#### Objectives
- Demonstrate practical skills
- Showcase project diversity

#### Components
- Project Grid/Gallery
  - Filterable by:
    - Technology
    - Project Type
    - Year
  - Project Cards
    - Project image/screenshot
    - Brief description
    - Technologies used
    - Links to:
      - GitHub repository
      - Live demo (if applicable)
      - Detailed project page

- Project Detail Pages
  - Comprehensive project documentation
  - Problem statement
  - Solution approach
  - Technical challenges
  - Technologies and tools
  - Lessons learned

### 3.6 Contact Page
#### Objectives
- Facilitate professional connections
- Multiple communication channels

#### Components
- Contact Form
  - Name
  - Email
  - Message
  - Validation and submission handling

- Direct Contact Information
  - Email: john@nooney.dev
  - GitHub: github.com/JohnNooney

- Social Media Links
  - LinkedIn
  - GitHub
  - Optional: Professional social platforms

## 4. Technical Implementation Details

### 4.1 Frontend Framework
- React (Latest Stable Version)
- State Management: React Hooks
- Routing: React Router

### 4.2 Styling
- Tailwind CSS for responsive design
- Optional: Framer Motion for animations
- CSS Variables for theming

### 4.3 Performance Optimization
- Code Splitting
- Lazy Loading for Components
- Image Optimization
- Minimal External Dependencies

### 4.4 SEO and Metadata
- React Helmet for metadata management
- Semantic HTML5 Structure
- Schema.org Markup for Rich Snippets

### 4.5 Deployment and CI/CD
- Firebase Hosting
- GitHub Actions for Automated Deployment
- Environment-based Configurations

## 5. Deployment Workflow Specification

### 5.1 GitHub Actions Deployment Workflow
#### Objectives
- Automate deployment of the React application to Firebase
- Ensure consistent and reliable continuous deployment
- Implement comprehensive build and validation checks

#### Workflow Configuration: `.github/workflows/deploy.yml`

```yaml
name: Deploy Personal Website

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    # Checkout the repository
    - name: Checkout Repository
      uses: actions/checkout@v4
    
    # Setup Node.js environment
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20.x'
        cache: 'npm'
    
    # Install dependencies
    - name: Install Dependencies
      run: npm ci
    
    # Run linting
    - name: Run Linter
      run: npm run lint
    
    # Run unit tests
    - name: Run Unit Tests
      run: npm run test
    
    # Build the application
    - name: Build React Application
      run: npm run build
    
    # Deploy to Firebase only on main branch
    - name: Deploy to Firebase
      if: github.ref == 'refs/heads/main'
      uses: w9jds/firebase-action@master
      with:
        args: deploy --only hosting
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

### 5.2 Deployment Configuration Requirements

#### Firebase Configuration
- Create `firebase.json` in project root:
```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### GitHub Secrets Configuration
Required Secrets:
- `FIREBASE_TOKEN`: Authentication token for Firebase CLI
  - Generate via: `firebase login:ci`

### 5.3 Deployment Workflow Features
- Triggered on:
  - Pushes to main branch
  - Pull requests to main branch
- Comprehensive checks:
  - Dependency installation
  - Linting
  - Unit testing
  - Application build
- Conditional Firebase deployment only on main branch

### 5.4 Local Deployment Preparation
- Install Firebase CLI: `npm install -g firebase-tools`
- Login to Firebase: `firebase login`
- Initialize Firebase in project: `firebase init hosting`

## 6. Future Expansion Considerations
- Blog Integration
- Interactive Resume Download
- Multilingual Support
- Dark/Light Mode Toggle

## 7. Additional Notes
- Prioritize clean, modern design
- Ensure mobile responsiveness
- Optimize for fast loading
- Maintain professional aesthetic

## 8. Recommended Technology Stack
- Frontend: React
- Styling: Tailwind CSS
- Deployment: Firebase
- CI/CD: GitHub Actions
- Optional Enhancements: Framer Motion, React Spring
