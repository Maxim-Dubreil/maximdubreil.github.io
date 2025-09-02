# Portfolio Project

This project is a web application created with React and Vite, designed to be deployed on GitHub Pages.

## Configuration

To reuse this workflow, make sure to correctly configure the base URL with your GitHub `username` for deployment on GitHub Pages.

1. **Configure Vite**

   In the `vite.config.js` file, add the `base` property with your GitHub repository name.

   ```javascript
   // vite.config.js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     base: "/_githubusername_.github.io/",
   });
   ```

2. **Configure React Router**

   When using `react-router-dom` for navigation, wrap your application with `BrowserRouter` and set the `basename`.

   ```jsx
   // src/main.jsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import { BrowserRouter } from "react-router-dom";
   import App from "./App";

   ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       <BrowserRouter basename="/_githubusername_.github.io/">
         <App />
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

## Quick Start Locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run preview`: Runs a local server to preview the production build.

## Deployment

This project includes a GitHub Actions workflow for automated deployment to GitHub Pages. The workflow is defined in `.github/workflows/deploy.yml`.

Deployment is triggered on each `push` to the `main` branch only, which automatically builds the application and makes the github.io page work.

## Project Structure

```text
portfolio-github/
├── public/
│   └── ...
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── pages/
│       ├── Home.jsx
│       └── About.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── vite.config.js
```
