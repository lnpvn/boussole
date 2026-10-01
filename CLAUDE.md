# CLAUDE.md — Site Boussole

Ce fichier résume les règles à respecter pour toute nouvelle session de travail sur ce projet. La source de vérité sur le produit reste `boussole-fiche-produit.md` ; les instructions détaillées de construction du site sont dans `prompt-site-boussole.md`. **Ne modifie jamais ces deux fichiers.**

## Le projet

Site de présentation statique (4 pages principales + pages légales) pour Boussole, un projet associatif en préparation qui relie parents et écoles. Le pilote n'est pas encore ouvert : le site doit donner envie sans jamais laisser croire que l'application est déjà disponible.

## Écoconception : à respecter sur toute nouvelle page

- HTML, CSS et JavaScript natifs. Aucun framework, aucune dépendance, aucun outil de build.
- Une seule feuille de style partagée : `assets/css/style.css`. Pas de style en ligne (`style="..."`), pas de CSS inutilisé.
- `assets/js/main.js` reste minimal (sous les 5 Ko) et chargé avec `defer`. Le site doit rester lisible et navigable **sans JavaScript**.
- Polices système uniquement (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`). Aucune police téléchargée, aucun Google Fonts.
- Zéro requête vers un site tiers : pas de CDN, pas d'iframe, pas de carte, pas de vidéo intégrée.
- Le moins d'images possible. Les icônes et le logo sont en SVG, intégrés directement dans le HTML.
- Objectif par page : moins de 150 Ko transférés, 5 requêtes maximum. Vérifier avec `./verifier-poids.sh` après chaque ajout de contenu.
- Pas de carrousel, pas de pop-up, pas de défilement infini, pas d'animation hors transitions courtes au survol (respecter `prefers-reduced-motion`).
- Mode sombre automatique via `prefers-color-scheme` (déjà en place dans les variables CSS de `:root`).

## Accessibilité : viser le RGAA (niveau AA du WCAG)

- `lang="fr"` sur chaque page, un seul `<h1>` par page, hiérarchie de titres cohérente (H1 → H2 → H3).
- Lien d'évitement (`.lien-evitement`) en tout début de `<body>`, qui pointe vers `#contenu`.
- Navigation complète au clavier, focus toujours visible (`:focus-visible`).
- Contraste d'au moins 4,5:1 pour le texte ; ne jamais transmettre une information uniquement par la couleur.
- Zones cliquables d'au moins 44 × 44 px (déjà géré par les classes `.bouton`, les liens de nav, les champs de formulaire).
- Chaque champ de formulaire a un `<label>` visible et lié par `for`/`id`.
- Conception mobile d'abord : beaucoup de parents viendront d'un téléphone d'entrée de gamme, en scannant un QR code.

## Ton et vocabulaire

- Chaleureux, simple, jamais culpabilisant. Jamais les mots « familles vulnérables », « défaillantes », « en difficulté » pour désigner les parents.
- Toujours « proposition d'accompagnement » ou « mise en relation », jamais « signalement ».
- Phrases courtes, pas de jargon administratif, technique ou psychologique.

## Interdits : ne rien inventer

N'invente jamais : nombre d'utilisateurs, témoignages, partenaires signés, résultats, statistiques, labels, disponibilité sur l'App Store ou Google Play, noms de personnes de l'équipe. Les chiffres du pilote (60 familles, 59 600 €, etc.) sont des **objectifs et prévisions**, toujours présentés comme tels. Quand une information manque, utilise `[À COMPLÉTER]` ou un commentaire HTML `<!-- À COMPLÉTER : ... -->`.

## Formulaires

Tous les formulaires fonctionnent en **mode démonstration** : ils valident les champs, affichent un message de confirmation, mais n'envoient ni ne stockent aucune donnée (voir le commentaire dans `assets/js/main.js`, fonction de traitement de `[data-formulaire-demo]`). Ne pas brancher d'envoi réel tant que l'AIPD et les documents juridiques ne sont pas finalisés.

## Méthode de travail

1. Avant d'écrire du code pour une nouvelle fonctionnalité, proposer un plan court et attendre la validation.
2. Avancer étape par étape, expliquer simplement ce qui a été fait et comment le prévisualiser (`python3 -m http.server 8000`).
3. Un commit Git par étape validée, message clair en français. Jamais de `git push` sans demande explicite.
4. Ne pas toucher à un fichier en dehors de ce dossier de projet.

## Emplacements `[À COMPLÉTER]` restants

À remplir avant l'ouverture publique du site : nom officiel et forme juridique de l'association, adresse, numéro SIRET, responsable de publication, hébergeur, adresse(s) e-mail de contact, durée de conservation des données des formulaires, déclaration d'accessibilité RGAA après audit, chiffres de l'étude de marché sur le décrochage scolaire (page Nous soutenir).
