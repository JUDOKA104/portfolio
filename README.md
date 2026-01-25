<div align="center">
  <br />
    <a href="https://judoka104.github.io/portfolio" target="_blank">
      <img src="https://img.shields.io/badge/LIVE-DEMO-10B981?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  <br />
  
  # ⚡ Portfolio V2 — Enzo Oriol

  <p align="center">
    <b>Architecture Hybride & Performance Maximale</b><br>
    <i>Une vitrine technique développée avec Astro, React et Tailwind CSS.</i>
  </p>
</div>

---

## 📖 À propos

Ce dépôt contient le code source de mon portfolio personnel. L'objectif était de créer une **Single Page Application (SPA)** fluide, esthétique (Design Bento) et performante (Score Lighthouse 100), capable de présenter mes projets d'ingénierie complexe.

### ⚙️ Stack Technique du Portfolio

| Domaine | Technologies |
| :--- | :--- |
| **Core** | ![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white) **Astro 5.0** (Architecture Islands) |
| **UI / Components** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) **React 19** (Composants intéractifs) |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS** (Animations & Layout) |
| **Icons** | **Lucide React** |
| **Deploy** | **GitHub Pages / Vercel** |

---

## 🏆 Projets Présentés (Deep Dive)

Le portfolio met en avant plusieurs projets techniques dont voici les détails d'implémentation :

### 1. 🏎️ Vision Solver Bot (C++ / Python / OpenCV)
> *Automatisation haute performance & Vision par ordinateur.*

Ce projet est une démonstration d'optimisation algorithmique. Il résout des puzzles visuels en temps réel (<100ms).

* **Cœur C++ (`solver.cpp`)** : Utilisation de **Bitboards 64-bits** pour représenter l'état du jeu (performances x10 vs tableaux classiques). Algorithme **Beam Search** avec une largeur de faisceau de 2500 pour trouver la solution optimale sans exploser la mémoire.
* **Vision (`vision.cpp`)** : Traitement d'image avec **OpenCV** parallélisé via **OpenMP**.
* **Intégration (`bot.py`)** : Binding Python via `ctypes` pour piloter le moteur C++ depuis une interface haut niveau (Discord).

### 2. 🎨 Configurateur AVG (React / Firebase)
> *Application SPA de configuration produit.*

Une application web permettant de configurer des équipements sur-mesure avec une gestion d'état complexe.

* **Architecture** : React avec Context API pour la gestion globale de l'état.
* **Fonctionnalités** : Sérialisation JSON/Base64 pour le partage de configurations (Presse-papier) et synchronisation temps réel avec **Firebase Firestore**.

### 3. 🏢 Migration Odoo (Python / XML)
> *Contexte professionnel.*

Pilotage de la migration de parcs clients vers **Odoo 18**. Développement de modules custom (Helpdesk) utilisant le framework frontend **OWL 2** et le moteur de rendu **QWeb**.

---

## 📂 Structure du Projet

```text
src/
├── components/
│   ├── layout/          # Footer, Header...
│   ├── sections/        # Les gros blocs (Hero, Projets, Bio...)
│   │   ├── ProjetsSection.tsx   # Bento Grid & Logique d'affichage
│   │   ├── ContactSection.tsx   # Formulaire avec Hydration Fix
│   │   └── ...
│   └── ui/              # Petits composants (Badges, Effets...)
├── pages/
│   └── index.astro      # Point d'entrée unique (One Page)
└── styles/
    └── tailwind.css     # Configuration globale
```

---

<div align="center"> <p>Développé avec ❤️ et beaucoup de ☕ par <a href="https://github.com/JUDOKA104">Enzo Oriol</a>.</p> </div>
