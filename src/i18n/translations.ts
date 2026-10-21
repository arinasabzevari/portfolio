export type Lang = "en" | "fr";

export type Translations = {
  nav: { about: string; experience: string; projects: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    lede: string;
    explore: string;
    resume: string;
    focusLabel: string;
    focusValue: string;
    toolsLabel: string;
    toolsValue: string;
    langLabel: string;
    langValue: string;
    statusLabel: string;
    statusValue: string;
  };
  about: { label: string; title: string; body: string; degree: string; period: string; gpaLabel: string; languages: string; stack: string };
  skills: { label: string; title: string; groups: Record<string, string> };
  experience: { label: string; title: string; roles: { title: string; bullets: string[] }[] };
  projects: { label: string; title: string; items: { title: string; description: string }[] };
  contact: { label: string; title: string; body: string; linkedin: string; github: string };
  footer: { role: string; status: string };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm Arina",
      name: "Sabzevari.",
      lede: "A bilingual (English/French) full-stack software engineer with hands-on experience across web development, backend systems, data engineering, and AI-integrated applications.",
      explore: "Explore projects",
      resume: "Resume",
      focusLabel: "focus",
      focusValue: "full-stack + AI",
      toolsLabel: "tools",
      toolsValue: "React / Python / SQL",
      langLabel: "languages",
      langValue: "English / French",
      statusLabel: "status",
      statusValue: "open to opportunities",
    },
    about: {
      label: "About / Profile",
      title: "Engineering with ownership.",
      body: "Full-stack software engineer with a CS degree from Concordia University. I build across the stack, from backend systems and data engineering to AI-integrated apps, with hands-on experience running live platforms for a cybersecurity hackathon.",
      degree: "Bachelor of Computer Science",
      period: "May 2026",
      gpaLabel: "GPA",
      languages: "English / French",
      stack: "Python / Java / TypeScript / C++",
    },
    skills: {
      label: "Capabilities / 00",
      title: "The tools I reach for.",
      groups: { Languages: "Languages", "Front-End": "Front-End", "Back-End": "Back-End", "AI & ML": "AI & ML", Databases: "Databases", "Practices & Tools": "Practices & Tools" },
    },
    experience: {
      label: "Experience / 01",
      title: "Where I have shipped.",
      roles: [
        {
          title: "Full-Stack Engineer",
          bullets: [
            "Owned features end-to-end on the Hexploit Alliance CTF platform — designing backend APIs and relational database schemas (Node.js, PostgreSQL) and integrating them with a full-stack frontend.",
            "Used Claude Code daily as part of a real development workflow, reviewing every AI-generated suggestion against the codebase before shipping.",
            "Troubleshot and resolved real-time production issues under load during high-traffic events, performing root-cause analysis and applying fixes on the spot.",
            "Collaborated with a cross-functional team using Agile, Git-based workflows to plan, review, and iteratively ship improvements.",
          ],
        },
        {
          title: "Web Developer & Finance Lead",
          bullets: [
            "Built the full-stack application used to run a large-scale cybersecurity hackathon, from registration through live event operations.",
            "Managed and reconciled financial data while coordinating tasks and priorities across a team under real deadlines.",
            "Diagnosed and resolved bugs and performance issues across the stack during high-traffic production events, live.",
          ],
        },
      ],
    },
    projects: {
      label: "Projects / 02",
      title: "Systems with a point of view.",
      items: [
        { title: "CodeBlue", description: "Real-time triage platform combining a ChromaDB + Gemini RAG pipeline with multithreaded workflows to classify priority from live event data." },
        { title: "Network Traffic Anomaly Detection", description: "Distributed Python pipeline analyzing 500,000+ records, comparing Random Forest, SVM, and KNN models to classify anomalies at scale." },
        { title: "Club Management Platform", description: "Normalized PostgreSQL schema (20+ entities, 3NF) with REST APIs for scheduling, payments, and membership management." },
        { title: "ETERNITY", description: "Full-stack analytics platform built with React, TypeScript, and Python, featuring real-time data visualization." },
        { title: "Movie Success Prediction & Analytics", description: "Python, SQL, and Pandas project using 10,000+ records, predictive modeling, and Matplotlib/Seaborn dashboards." },
        { title: "Cybertruck 3D / OpenGL Rendering", description: "Modeled a vehicle in Blender and built a C++ OpenGL rendering pipeline (GLFW, GLEW, GLM) with real-time transformations and material shading." },
        { title: "Java Ladder & Snake Game", description: "Game built around OOP principles, modular architecture, and unit testing." },
      ],
    },
    contact: {
      label: "Contact / 03",
      title: "Let's build something useful.",
      body: "I'm open to opportunities where thoughtful engineering, reliable systems, and clear product thinking matter.",
      linkedin: "LinkedIn ↗",
      github: "GitHub ↗",
    },
    footer: { role: "Full-stack software engineer", status: "Open to relocation / 2026" },
  },
  fr: {
    nav: { about: "À propos", experience: "Expérience", projects: "Projets", contact: "Contact" },
    hero: {
      greeting: "Bonjour, je suis Arina",
      name: "Sabzevari.",
      lede: "Ingénieure logicielle full-stack bilingue (anglais/français) avec une expérience pratique en développement web, systèmes backend, ingénierie des données et applications intégrant l'IA.",
      explore: "Voir les projets",
      resume: "CV",
      focusLabel: "axe",
      focusValue: "full-stack + IA",
      toolsLabel: "outils",
      toolsValue: "React / Python / SQL",
      langLabel: "langues",
      langValue: "Anglais / Français",
      statusLabel: "statut",
      statusValue: "ouverte aux opportunités",
    },
    about: {
      label: "À propos / Profil",
      title: "Ingénierie, de bout en bout.",
      body: "Ingénieure logicielle full-stack diplômée en informatique de l'Université Concordia. Je construis à travers toute la pile technologique, des systèmes backend et de l'ingénierie des données jusqu'aux applications intégrant l'IA, avec une expérience concrète dans la gestion de plateformes en direct pour un hackathon de cybersécurité.",
      degree: "Baccalauréat en informatique",
      period: "Mai 2026",
      gpaLabel: "Moyenne",
      languages: "Anglais / Français",
      stack: "Python / Java / TypeScript / C++",
    },
    skills: {
      label: "Compétences / 00",
      title: "Les outils que j'utilise.",
      groups: { Languages: "Langages", "Front-End": "Front-End", "Back-End": "Back-End", "AI & ML": "IA & ML", Databases: "Bases de données", "Practices & Tools": "Pratiques & outils" },
    },
    experience: {
      label: "Expérience / 01",
      title: "Ce que j'ai livré.",
      roles: [
        {
          title: "Ingénieure Full-Stack",
          bullets: [
            "Responsable de fonctionnalités de bout en bout sur la plateforme CTF Hexploit Alliance — conception d'API backend et de schémas de base de données relationnelles (Node.js, PostgreSQL), intégrées à un frontend complet.",
            "Utilisation quotidienne de Claude Code dans un flux de développement réel, en validant chaque suggestion générée par l'IA avant sa mise en production.",
            "Diagnostic et résolution de problèmes de production en temps réel lors d'événements à fort trafic, avec analyse des causes profondes et correctifs appliqués sur place.",
            "Collaboration avec une équipe multidisciplinaire selon une méthode Agile et des flux Git pour planifier, réviser et livrer des améliorations de façon itérative.",
          ],
        },
        {
          title: "Développeuse Web et responsable des finances",
          bullets: [
            "Développement de l'application complète utilisée pour gérer un hackathon de cybersécurité à grande échelle, de l'inscription jusqu'aux opérations en direct.",
            "Gestion et rapprochement des données financières tout en coordonnant les tâches et priorités d'une équipe sous des délais réels.",
            "Diagnostic et résolution de bogues et de problèmes de performance sur l'ensemble de la pile technologique lors d'événements de production à fort trafic, en direct.",
          ],
        },
      ],
    },
    projects: {
      label: "Projets / 02",
      title: "Des systèmes qui ont du sens.",
      items: [
        { title: "CodeBlue", description: "Plateforme de triage en temps réel combinant un pipeline RAG (ChromaDB + Gemini) avec des workflows multithread pour classer les priorités à partir de données d'événements en direct." },
        { title: "Détection d'anomalies de trafic réseau", description: "Pipeline Python distribué analysant plus de 500 000 enregistrements, comparant les modèles Random Forest, SVM et KNN pour classer les anomalies à grande échelle." },
        { title: "Plateforme de gestion de club", description: "Schéma PostgreSQL normalisé (plus de 20 entités, 3NF) avec des API REST pour la gestion des horaires, des paiements et des adhésions." },
        { title: "ETERNITY", description: "Plateforme d'analyse full-stack construite avec React, TypeScript et Python, avec visualisation de données en temps réel." },
        { title: "Prédiction et analyse du succès des films", description: "Projet en Python, SQL et Pandas utilisant plus de 10 000 enregistrements, modélisation prédictive et tableaux de bord Matplotlib/Seaborn." },
        { title: "Rendu 3D / OpenGL du Cybertruck", description: "Modélisation d'un véhicule dans Blender et développement d'un pipeline de rendu OpenGL en C++ (GLFW, GLEW, GLM) avec transformations en temps réel et ombrage des matériaux." },
        { title: "Jeu Ladder & Snake en Java", description: "Jeu conçu selon les principes de la programmation orientée objet, avec une architecture modulaire et des tests unitaires." },
      ],
    },
    contact: {
      label: "Contact / 03",
      title: "Construisons quelque chose d'utile.",
      body: "Je suis ouverte aux opportunités où l'ingénierie réfléchie, la fiabilité des systèmes et une vision produit claire font la différence.",
      linkedin: "LinkedIn ↗",
      github: "GitHub ↗",
    },
    footer: { role: "Ingénieure logicielle full-stack", status: "Ouverte à la relocalisation / 2026" },
  },
};
