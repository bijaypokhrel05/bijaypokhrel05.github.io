# Bijay Pokhrel Darji - Portfolio

A high-performance, interactive portfolio built with React, Three.js, and Framer Motion. This site features a technical terminal-inspired design with real-time 3D backgrounds and dynamic UI animations.

## Quick Start

The entire project is contained within the `frontend/` directory.

```bash
# Navigate to the project
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Core Technologies

- **Frontend**: React 19 + Vite
- **3D Graphics**: Three.js (Interactive particle backgrounds)
- **Animations**: Framer Motion (Floating terminals & role-cycling effects)
- **Styling**: Tailwind CSS (Premium glassmorphism & dark-mode-first design)
- **Form Handling**: Formspree (Serverless contact form integration)

## Project Structure

```
├── frontend/               # Main application directory
│   ├── src/
│   │   ├── components/     # UI Components
│   │   │   ├── layout/     # Header, Footer, Navigation
│   │   │   └── sections/   # Hero, About, Projects, Skills, Experience
│   │   ├── context/        # ThemeContext (Persistent Dark/Light mode)
│   │   ├── App.tsx         # Main application entry
│   │   └── index.css       # Global styles & theme variables
│   ├── tailwind.config.js  # Design system & color palette
│   └── vite.config.ts      # Vite configuration
└── README.md               # Root documentation
```

## Features

- **Interactive Hero**: A Three.js particle system that reacts to mouse movement.
- **Floating Terminals**: UI elements that gently hover using physics-based animations.
- **Role Cycler**: A cinematic letter-by-letter transition for professional titles.
- **Formspree Integration**: Fully functional contact form sending messages directly to Gmail.
- **Persistent Theme**: User-preferred dark/light mode that stays active across sessions.

---
Built with technical excellence in mind.
