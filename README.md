# Solar System Visualization

A 3D interactive solar system web app built with **React**, **Three.js**, and **Vite**. Explore planets, view NASA data, and learn about our cosmic neighborhood.

---

## Features

- 3D solar system model with interactive planets  
- Quick facts on hover & detailed sidebar on click  
- APOD (Astronomy Picture of the Day)  
- Asteroid tracker and random space events  
- Integrates multiple NASA APIs  
- Responsive, modern UI

---

## Getting Started

### 1.Clone the repository

```
git clone <repository-url>
cd Solar-system
```

### 2.Install dependencies

```
npm install
```

### 3.Set up environment variables 
Create a .env.local file in the project root and add -

```
VITE_NASA_API_KEY=your_api_key_here
```

### 4.Run locally:

```
npm run dev
```

## Deployment Notes

If you're deploying to Netlify, Vercel etc:

Set your VITE_NASA_API_KEY as an environment variable in the hosting dashboard.

## Built With

React 18

Three.js

React Three Fiber

Vite

NASA APIs

## NOTE

GitHub Pages does not support securely handling environment variables, which means there's no way to use an API key without exposing it publicly.
As a result, I deployed the project on Vercel, which allows secure environment variable management and production-ready hosting.

**THANK YOU :)**
