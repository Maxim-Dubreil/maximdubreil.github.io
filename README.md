# Portfolio Project

Ce projet est une application web créée avec React et Vite, conçue pour être déployée sur GitHub Pages.

## Configuration

Explication pour réutiliser mon workflow, assurez-vous de configurer correctement la base de l'URL avec votre _username_ `GitHub` pour le déploiement sur GitHub Pages.

1. **Configurer Vite**

   Dans le fichier `vite.config.js`, ajoutez la propriété `base` avec le nom de votre dépôt GitHub.

   ```javascript
   // vite.config.js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     base: "/_githubusername_.github.io/",
   });
   ```

2. **Configurer React Router**

   Avec l'utilisation de `react-router-dom` pour la navigation, enveloppez votre application avec `BrowserRouter` et définissez le `basename`.

   ```jsx
   // src/main.jsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import { BrowserRouter } from "react-router-dom";
   import App from "./App";

   ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       <BrowserRouter basename="/maximdubreil.github.io">
         <App />
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

## Démarrage rapide en local

1. **Installer les dépendances**

   ```bash
   npm install
   ```

2. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

## Scripts disponibles

- `npm run dev`: Lance l'application en mode développement.
- `npm run build`: Compile l'application pour la production.
- `npm run preview`: Lance un serveur local pour prévisualiser le build de production.

## Déploiement

Ce projet inclut un workflow GitHub Actions pour un déploiement automatisé sur GitHub Pages. Le workflow est défini dans `.github/workflows/deploy.yml`.

Le déploiement est déclenché à chaque `push` uniquement sur la branche `main`, permettant ainsi de build l'application automatiquement, faisant fonctionner la page github.io.

## Structure du projet

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
