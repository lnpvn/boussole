# Boussole — site de présentation

Site statique de présentation du projet associatif Boussole, qui relie les parents et l'école pour accompagner chaque enfant de 2 à 18 ans. Le pilote n'est pas encore ouvert : ce site présente le projet « en préparation » et prépare le terrain pour son lancement, à partir d'avril 2027.

Le contenu du site s'appuie sur `boussole-fiche-produit.md` (la description complète du produit) et suit les consignes de `prompt-site-boussole.md`. Les règles de travail pour toute nouvelle contribution sont résumées dans `CLAUDE.md`.

## Voir le site en local

Aucune installation n'est nécessaire : le site est en HTML/CSS/JavaScript natifs, sans build.

```bash
python3 -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000) dans un navigateur.

## Structure du projet

```
/
├── index.html              Accueil
├── parents.html             Espace parents
├── professionnels.html      Espace professionnels (écoles)
├── soutenir.html             Nous soutenir (lien uniquement en pied de page)
├── mentions-legales.html
├── confidentialite.html
├── 404.html
├── assets/
│   ├── css/style.css        Feuille de style unique, partagée par toutes les pages
│   ├── js/main.js            Script minimal (formulaires en mode démo, bouton de sortie rapide)
│   └── img/logo.svg          Logo (repris inline dans chaque page)
├── verifier-poids.sh         Mesure le poids et le nombre de requêtes de chaque page
├── CLAUDE.md                 Règles de travail pour les prochaines sessions
└── boussole-fiche-produit.md, prompt-site-boussole.md   Documents source (ne pas modifier)
```

## Écoconception

Ce site applique lui-même ce qu'il promet : sobre et respectueux des ressources. Choix faits, dans l'esprit du RGESN (référentiel général d'écoconception de services numériques) :

- **HTML/CSS/JavaScript natifs**, sans framework ni outil de compilation.
- **Une seule feuille de style** (`assets/css/style.css`), mise en cache par le navigateur entre les pages.
- **JavaScript minimal** (`assets/js/main.js`, moins de 5 Ko), chargé avec `defer` ; le site reste lisible et navigable sans JavaScript.
- **Polices système uniquement**, aucune police téléchargée, aucun Google Fonts.
- **Zéro requête vers un site tiers** : pas de CDN, pas d'iframe, pas de carte ni de vidéo intégrée. Le favicon est un SVG intégré directement dans l'en-tête HTML (`data:` URI), pour ne pas ajouter de requête.
- **Aucune image bitmap** : le logo et les icônes sont en SVG, et l'aperçu de l'application est construit entièrement en HTML/CSS.
- **Mode sombre automatique** (`prefers-color-scheme`), plus économe sur les écrans OLED.
- **Respect de `prefers-reduced-motion`** : pas d'animation superflue.
- **Feuille de style d'impression** sobre, qui masque le menu et les formulaires.

Mesure réelle du poids des pages (exécuter `./verifier-poids.sh`) :

| Page | Poids total | Requêtes |
| --- | --- | --- |
| index.html | ~31 Ko | 3 |
| parents.html | ~33 Ko | 3 |
| professionnels.html | ~33 Ko | 3 |
| soutenir.html | ~34 Ko | 3 |
| mentions-legales.html | ~25 Ko | 3 |
| confidentialite.html | ~27 Ko | 3 |
| 404.html | ~23 Ko | 3 |

Bien en dessous des objectifs du cahier des charges (150 Ko et 5 requêtes maximum par page). Les 3 requêtes sont la page HTML elle-même, la feuille de style et le script — tous deux mis en cache dès la première page visitée.

**Hébergement recommandé** : un hébergeur statique alimenté en énergie renouvelable (par exemple un hébergeur labellisé ou utilisant des data centers fonctionnant aux énergies renouvelables), puisque le site n'a besoin que de servir des fichiers statiques, sans serveur applicatif ni base de données.

## Accessibilité

Le site vise la conformité au RGAA (niveau AA du WCAG) : lien d'évitement, navigation complète au clavier, focus toujours visible, contraste d'au moins 4,5:1, zones cliquables d'au moins 44 × 44 px, champs de formulaire avec `label` visible, conception mobile d'abord. Une déclaration d'accessibilité formelle sera publiée après un audit complet (voir `[À COMPLÉTER]` dans `mentions-legales.html`).

## État du prototype

Les formulaires du site fonctionnent en **mode démonstration** : ils valident les champs puis affichent un message de confirmation, sans envoyer ni stocker aucune donnée. Plusieurs informations restent à compléter avant l'ouverture publique (nom officiel de l'association, adresse, hébergeur, e-mails de contact, chiffres de l'étude de marché...) — elles sont toutes listées dans `CLAUDE.md`, section « Emplacements `[À COMPLÉTER]` restants ».
