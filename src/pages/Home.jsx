import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML / CSS",
  "Git / GitHub",
  "API REST",
];

const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Brève description du projet.",
    link: "#",
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Brève description du projet.",
    link: "#",
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Brève description du projet.",
    link: "#",
  },
];

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Bienvenue</h1>
        <p style={styles.subtitle}>
          Je suis Développeur. Voici un aperçu rapide de mes compétences et
          projets.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>À propos</h2>
        <p style={styles.text}>
          Phrase de présentation rapide: ton expérience, ta spécialité, ce que
          tu cherches (stage, freelance, CDI).
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Compétences</h2>
        <ul style={styles.skillList}>
          {skills.map((s) => (
            <li key={s} style={styles.skillItem}>
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Projets</h2>
        <div style={styles.projectGrid}>
          {projects.map((p) => (
            <article key={p.id} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{p.title}</h3>
              <p style={styles.projectDesc}>{p.description}</p>
              <a href={p.link} style={styles.link}>
                Voir
              </a>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.text}>
          Email:{" "}
          <a style={styles.link} href="mailto:ton.email@example.com">
            ton.email@example.com
          </a>
        </p>
        <p style={styles.text}>
          GitHub:{" "}
          <a
            style={styles.link}
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noreferrer"
          >
            tonprofil
          </a>
        </p>
        <p style={styles.text}>
          LinkedIn:{" "}
          <a
            style={styles.link}
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noreferrer"
          >
            tonprofil
          </a>
        </p>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Ton Nom
      </footer>
    </main>
  );
}

const baseFont = "'Inter', system-ui, Arial, sans-serif";

const styles = {
  container: {
    fontFamily: baseFont,
    fullWidth: "100vw",
    minHeight: "100vh",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "2rem 1.25rem",
    lineHeight: 1.5,
    color: "#1e1e1e",
  },
  hero: {
    marginBottom: "3rem",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(2rem, 6vw, 3rem)",
    margin: 0,
    fontWeight: 600,
  },
  subtitle: {
    marginTop: "1rem",
    fontSize: "1.05rem",
    color: "#444",
  },
  section: {
    marginBottom: "2.75rem",
  },
  h2: {
    fontSize: "1.5rem",
    margin: "0 0 1rem",
    fontWeight: 600,
  },
  text: {
    margin: "0 0 0.75rem",
  },
  skillList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skillItem: {
    background: "#f2f2f2",
    padding: "0.5rem 0.75rem",
    borderRadius: 6,
    fontSize: ".9rem",
  },
  projectGrid: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  },
  projectCard: {
    border: "1px solid #e3e3e3",
    padding: "1rem",
    borderRadius: 8,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  },
  projectTitle: {
    margin: 0,
    fontSize: "1.05rem",
  },
  projectDesc: {
    margin: 0,
    fontSize: ".88rem",
    color: "#555",
    flexGrow: 1,
  },
  link: {
    color: "#0d62ff",
    textDecoration: "none",
    fontSize: ".85rem",
  },
  footer: {
    marginTop: "3rem",
    paddingTop: "1.5rem",
    fontSize: ".75rem",
    textAlign: "center",
    color: "#777",
    borderTop: "1px solid #e3e3e3",
  },
};
