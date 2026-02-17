# 🎾 Tennis Tactique - Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

La bible de la progression continue au tennis - Site de documentation construit avec Astro + Starlight.

## 📚 À propos

Ce projet contient la méthodologie complète de Tennis Tactique par Alexis Santin :

- **Progression Rapide** - Les 4 stratégies d'entreprise pour progresser
- **La Tactique** - Cartographie 3D, stratégies de match, profils de joueurs
- **Le Mental** - Gestion des émotions, confiance, présence
- **Le Physique** - Respiration, récupération, sommeil

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Framework web moderne
- [Starlight](https://starlight.astro.build) - Thème documentation
- Markdown/MDX - Contenu

## 🚀 Installation

```bash
npm install
npm run dev
```

## 📖 Commandes

| Commande | Action |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installe les dépendances |
| `npm run dev`             | Serveur local à `localhost:4321` |
| `npm run build`           | Build pour production dans `./dist/` |
| `npm run preview`         | Preview du build avant déploiement |

## 🌐 Déploiement

Déployé sur Vercel - https://vercel.com

Le site est automatiquement déployé à chaque push sur la branche `main`.

## 📁 Structure

```
tennis-tactique/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── intro.md          # Page d'accueil
│   │       ├── progression/      # Partie 1
│   │       ├── tactique/         # Partie 2
│   │       ├── mental/           # Partie 3
│   │       ├── physique/         # Partie 4
│   │       └── lexique/          # Définitions
│   └── styles/
│       └── custom.css            # Styles personnalisés
├── astro.config.mjs              # Config Astro
└── package.json
```

## 🎯 Contribuer

Le contenu est en français. Pour ajouter/modifier des pages :

1. Créer un fichier `.md` dans `src/content/docs/[section]/`
2. Utiliser le frontmatter :
```yaml
---
title: Titre de la page
description: Description SEO
---
```

## 📄 License

Propriété Alexis Santin - © 2026
