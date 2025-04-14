---
title: "Malek RIHANI - Développeur SIG & Data"
author: "Malek RIHANI"
date: "2025-09-01"
theme: jekyll-theme-merlot
markdown: kramdown
output:
  html_document:
    toc: true
    toc_float:
      collapsed: false
      smooth_scroll: true
---

## À propos de moi

- **Email :** [malekrihani6@gmail.com](mailto:malekrihani6@gmail.com)  
- **Téléphone :** +33 07 45 75 41 14  
- **Date de naissance :** 22/01/2002  
- **Permis :** B  

Diplômé d’un BUT Sciences des Données, je me spécialise dans le développement SIG, l’automatisation des traitements de données et la visualisation cartographique interactive.  
J’aime créer des outils simples et efficaces avec Python, PostGIS, Folium ou Leaflet, pour rendre les données vraiment utiles.

---

## Compétences

**Langages :** Python, SQL (PostgreSQL/PostGIS), JavaScript, HTML/CSS, VBA, R  
**Cartographie :** QGIS, Leaflet, Folium, ArcGIS  
**Automatisation :** PL/pgSQL (triggers, fonctions), FME, ETL, cron  
**Visualisation :** Power BI, Tableau, Dash, Tkinter  
**Données :** Traitement CSV/Excel, scraping, API, spatial joins

---

## Diplômes

- **BUT Sciences des Données** (2022–2025) – IUT Carcassonne  
- **BUT Informatique (1ère année)** – Estiam Paris  
- **Baccalauréat général – Spécialité Informatique**, Tunis

---

## Expériences

### Développeur SIG – Alternance  
**SDIS de l'Aude** | 2023 – 2025

- Travail sur bases de données spatiales (PostGIS), scripts Python et fonctions PL/pgSQL.  
- Participation à des projets de couverture, digitalisation et automatisation de données terrain.  
- Développement de cartes interactives et outils web SIG (Leaflet, Lizmap, QGIS).

---

## Projets

Quelques exemples de projets que j’ai réalisés ou auxquels j’ai contribué :

- 📍 Visualisation de données spatiales avec **Folium** et **PostGIS**  
- 🧠 Automatisation de traitements géo avec **triggers PL/pgSQL**  
- 🗺️ Cartes web avec **Leaflet** et données GeoJSON  
- 📊 Tableaux de bord avec **Dash** ou **Tkinter**  
- 🧹 Nettoyage et structuration de données CSV + spatialisation

---

## Galerie

> *Cliquez sur une image pour l’agrandir*

![Carte n°1](images/carte1.png)  
![Carte n°2](images/carte2.png)  
![Carte n°3](images/carte3.png)

---

## Langues

- **Français :** Natif  
- **Anglais :** B2

---

## Centres d'intérêt

- SIG & Open Data  
- Sport & randonnées  
- Développement web léger  
- Voyage, photo, cartographie papier

---

## Diagramme UML (Portfolio)

```mermaid
classDiagram
    class Portfolio {
        +String nom
        +String description
        +afficherPortfolio()
        +afficherProjets()
        +afficherCV()
    }
    class Projet {
        +String titre
        +String description
        +String date
        +afficherDetails()
    }
    class CV {
        +String nom
        +String parcours
        +afficherCV()
    }

    Portfolio "1" --> "1..*" Projet : contient
    Portfolio "1" --> "1..1" CV : contient
