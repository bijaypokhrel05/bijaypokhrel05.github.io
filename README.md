# Portfolio — Bijay Pokhrel

Professional software engineer portfolio: single-page app (React + Vite + TypeScript) with Express backend.

## Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion  
- **Backend:** Express, TypeScript (Node)

## Run locally

1. **Backend** (API + contact form + projects data):
   ```bash
   cd backend && npm install && npm run dev
   ```
   Server: `http://localhost:3001`

2. **Frontend** (SPA with proxy to backend):
   ```bash
   cd frontend && npm install && npm run dev
   ```
   App: `http://localhost:5173`

In development, the frontend proxies `/api` to the backend. For production, set `VITE_API_URL` to your API origin (see `frontend/.env.example`).

## Project layout

```
├── frontend/           # React SPA
│   ├── src/
│   │   ├── components/  # layout + sections (Hero, About, Skills, etc.)
│   │   ├── context/    # ThemeContext (dark/light, persisted)
│   │   └── types/
│   └── ...
├── backend/
│   ├── src/
│   │   ├── data/       # projects.json
│   │   ├── server.ts
│   │   └── types.ts
│   └── ...
└── README.md
```

## Features

- Single-page app with smooth scroll and section navigation  
- Dark / light theme toggle (preference stored in `localStorage`)  
- Hero with animated typing titles  
- About, Skills (categorized), Featured Projects (from API), Engineering Philosophy, Contact  
- Contact form submitted via Express; project data served from backend
