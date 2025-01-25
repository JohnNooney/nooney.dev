# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Firebase.

## Features

- Responsive design for all devices
- Dark mode support
- Animated page transitions and UI elements
- Contact form with Firebase integration
- SEO optimized
- Automated deployment with GitHub Actions

## Tech Stack

- React
- Tailwind CSS
- Firebase
- Framer Motion
- React Router
- React Helmet

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/JohnNooney/nooney.dev.git
   cd nooney.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Firebase Hosting
   - Copy your Firebase configuration to `src/firebase.js`

4. Set up environment variables:
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The website is automatically deployed to Firebase Hosting when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

To deploy manually:
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

4. Deploy:
   ```bash
   firebase deploy
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
