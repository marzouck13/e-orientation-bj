
# 🎓 Orientation-Bénin : Plateforme d'Orientation Universitaire

## 📝 Présentation Générale

**Orientation-Bénin** est une solution logicielle innovante conçue pour résoudre l'un des défis majeurs des nouveaux bacheliers au Bénin : l'incertitude liée au classement universitaire. En s'appuyant sur les données rigoureuses du **Guide d'Orientation Officiel**, cette plateforme offre un simulateur d'éligibilité précis, ergonomique et accessible.

L'objectif est de démocratiser l'accès à l'information et de permettre à chaque étudiant, qu'il vienne d'une série générale (A, B, C, D) ou technique (F, G, DT, DEAT), de projeter son avenir académique avec des chiffres fiables.

---

## ✨ Fonctionnalités Majeures

### 1. Moteur de Simulation Haute Précision

* **Calcul de la Moyenne de Classement (MC)** : Intégration des formules officielles incluant les matières de base et les matières spécifiques à chaque filière.
* **Gestion Multicritère** : Prise en compte automatique des coefficients par série.
* **Support des Séries Spéciales** : Gestion avancée des diplômes techniques (DEAT, DT) grâce à un système d'alias intelligent.

### 2. Catalogue de Filières Intelligent

* **Exploration Centralisée** : Regroupement des offres de l'UAC, l'UNSTIM, l'UNA et l'UP.
* **Filtrage Dynamique** : Le système n'affiche que les filières où le bachelier est légalement autorisé à postuler selon sa série.
* **Indicateur d'Éligibilité** : Feedback visuel immédiat basé sur les notes saisies.

### 3. Expérience Utilisateur (UX/UI)

* **Design Pixel Perfect** : Interface moderne utilisant le *Glassmorphism* (effets de transparence et de flou).
* **Animations Fluides** : Utilisation de transitions "Reveal" au défilement pour une navigation dynamique.
* **Mobile-First** : Optimisation complète pour les smartphones, outils principaux des étudiants.

---

## 🏗️ Architecture du Projet (Deep Dive)

Le projet adopte une philosophie de **séparation des préoccupations (SoC)**, garantissant que la logique métier est totalement indépendante de la présentation.

### 📂 Organisation des Dossiers

* **`src/data/`** : L'unique source de vérité.
* `bacData.js` : Définition des objets `DONNEES_BAC` et `ALIAS_SERIES`. C'est ici que sont stockés les coefficients et les règles de correspondance.
* `dataFilieres.js` : Une base de données JSON structurée listant les établissements et leurs critères de sélection.


* **`src/utils/`** : La couche logique.
* `calculateurMoteur.js` : Contient les fonctions `calculerMoyenneClassement` et `resoudreSerie`. Ce module traite les données brutes pour générer les scores de classement.


* **`src/components/`** : La couche de présentation.
* Composants React modulaires (Navbar, Simulateur, Footer) réutilisables et stylisés.



---

## ⚙️ Spécifications Techniques

### Algorithmes de Résolution

Le système utilise un algorithme de résolution partielle pour les séries techniques. Par exemple, une série saisie comme `DEAT/NTA` est automatiquement résolue en série parente `DEAT` pour récupérer les coefficients de base, tout en conservant sa spécificité pour l'éligibilité aux filières agro-alimentaires.

### Stack Technologique

* **Core** : React.js (Fonctionnement SPA).
* **State Management** : Hooks natifs (useState, useEffect, useMemo).
* **Styling** : CSS3 avancé avec variables et Bootstrap 5 pour la grille de mise en page.
* **Icônes** : Lucide React & FontAwesome pour une sémantique visuelle claire.

---

## 🚀 Installation et Déploiement

### Prérequis

* Node.js (v16 ou supérieur)
* NPM ou Yarn

### Procédure

1. **Clonage du dépôt** :
```bash
git clone https://github.com/marzouck13/orientation-benin.git

```


2. **Installation des dépendances** :
```bash
npm install

```


3. **Lancement en mode développement** :
```bash
npm run dev

```


4. **Build pour la production** :
```bash
npm run build

```



---

## 🔒 Confidentialité et Sécurité

* **Traitement Local** : Toutes les simulations de notes sont effectuées côté client. Aucune donnée personnelle de note n'est stockée sur un serveur distant.
* **Intégrité du Code** : Les fichiers de données officiels sont protégés contre les modifications accidentelles pour garantir la véracité des résultats produits.

---

## 👨‍💻 Auteurs & Contributeurs

Ce projet est le fruit d'un travail rigoureux visant l'excellence technique au service de la communauté étudiante.

* **Lead Developer & UI Designer** : [Marzouck AFFO]
* **Écosystème** : [Aura Digital Ecosysteme]
* **Partenaire Communautaire** : Amis étudiant de la GEI UNSTIM / INSTI Lokossa

---

## 📄 Licence

Ce projet n'est pas sous licence MIT. Cependant, les données relatives au Guide d'Orientation restent la propriété intellectuelle du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (MESRS) du Bénin.

---

*Dernière mise à jour : Mai 2026*