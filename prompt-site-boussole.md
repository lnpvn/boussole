# Prompt pour Claude Code : site Boussole

> Mode d'emploi : placez ce fichier dans le dossier du projet, à côté de `boussole-fiche-produit.md`, puis écrivez à Claude Code :
> « Lis prompt-site-boussole.md et boussole-fiche-produit.md, puis suis les instructions du prompt. »

---

## 0. Ton rôle et ta façon de travailler

Tu es développeur web front-end, spécialiste de l'écoconception et de l'accessibilité. Tu construis le site de présentation de **Boussole**, un projet associatif décrit en détail dans `boussole-fiche-produit.md`. Cette fiche est ta source de vérité : en cas de doute ou de contradiction, c'est elle qui fait foi.

Je suis débutante en développement. Je travaille sur un Chromebook, dans l'environnement Linux, et je présenterai ce site devant le jury d'un hackathon puis dans le cadre de mon master. Je dois pouvoir comprendre et expliquer ce que tu construis.

Règles de travail, à respecter strictement :

1. **Avant d'écrire du code**, propose-moi un plan : arborescence des fichiers, contenu de chaque page section par section, palette de couleurs et choix techniques. Attends ma validation.
2. **Avance page par page**, dans cet ordre : fichiers communs (CSS, header, footer), accueil, parents, professionnels, nous soutenir, pages légales. Après chaque page, explique-moi en quelques phrases simples ce que tu as fait, et dis-moi comment la voir dans le navigateur.
3. **Fais un commit Git après chaque étape validée**, avec un message clair en français. N'effectue jamais de `git push` sans me le demander.
4. **Crée un fichier `CLAUDE.md`** à la racine qui résume les règles de ce prompt (écoconception, accessibilité, ton, interdits), pour que les prochaines sessions les respectent.
5. **Ne modifie jamais** `boussole-fiche-produit.md`, et ne touche à aucun fichier en dehors du dossier du projet.
6. Pour prévisualiser, utilise un serveur local simple : `python3 -m http.server 8000`, puis http://localhost:8000.

---

## 1. Ce qu'est le site

Un site statique de quatre pages principales, avec une identité commune et un message propre à chaque public :

| Page | Fichier | Public | Action principale (un seul bouton principal par page) |
| --- | --- | --- | --- |
| Accueil | `index.html` | Tout le monde | Orienter vers la bonne page : « Je suis parent », « Je suis un professionnel de l'école » |
| Parents | `parents.html` | Parents d'enfants de 2 à 18 ans | « Recevoir mon accès gratuitement » |
| Professionnels | `professionnels.html` | Directions, enseignants, CPE | « Devenir école partenaire du pilote » |
| Nous soutenir | `soutenir.html` | Financeurs, mécènes, partenaires, experts bénévoles | « Soutenir le pilote » |

Pages complémentaires : `mentions-legales.html`, `confidentialite.html`, et une page `404.html` sobre.

Le lien vers « Nous soutenir » se trouve **dans le pied de page uniquement**, pas dans le menu principal : un parent ne doit pas tomber par hasard sur un discours de financement qui parle de familles vulnérables.

Le site présente un projet **en préparation** : le pilote démarre en avril 2027. Le site doit donner envie, sans jamais laisser croire que l'application est déjà disponible.

---

## 2. Identité et ton

- **Nom affiché** : Boussole. Signature : « Prévenir aujourd'hui pour demain ».
- **Promesse centrale** : Boussole relie les parents et l'école pour accompagner chaque enfant, de 2 à 18 ans.
- **Ce que Boussole n'est pas** : ni une école, ni du soutien scolaire, ni un service qui remplace les professionnels ou les dispositifs de l'Éducation nationale. Boussole oriente et fait le lien.
- **Ton** : chaleureux, simple, jamais culpabilisant. Message de fond pour les parents : « Vous n'avez pas à tout savoir. Nous sommes là pour vous guider. »
- **Sans stigmatisation** : Boussole s'adresse à tous les parents. Sur les pages parents et accueil, n'emploie jamais les mots « familles vulnérables », « défaillantes », « en difficulté » pour désigner le public. Le décrochage ou les violences touchent tous les milieux.
- **Langage simple** : phrases courtes, mots courants, pas de jargon (ni administratif, ni technique, ni psychologique). Vise un niveau compréhensible par un parent qui maîtrise moyennement le français.
- **Vocabulaire imposé** : on parle de « proposition d'accompagnement » ou de « mise en relation », jamais de « signalement ».

---

## 3. Contenu page par page

Pour tous les textes, appuie-toi sur la fiche produit. Les formulations ci-dessous sont des propositions : tu peux les améliorer, à condition de rester fidèle au sens.

### 3.1 Accueil (`index.html`)

1. **Hero** : titre « Boussole relie les parents et l'école pour accompagner chaque enfant, de 2 à 18 ans. » Sous-titre court qui présente les deux espaces. Mention « Gratuit pour les familles ».
2. **Deux portes d'entrée**, bien visibles et faciles à toucher sur mobile : « Je suis parent » → parents.html ; « Je suis un professionnel de l'école » → professionnels.html.
3. **Comment ça marche, en trois temps** : le parent trouve des réponses seul ; quand ça ne suffit pas, l'école et le référent prennent le relais ; le référent oriente vers la bonne association. Formulation clé : « Quand le parent ne se rend pas compte d'une difficulté, c'est l'école qui la repère. »
4. **Schéma léger en SVG ou en HTML/CSS** du lien Parents ↔ Référent Boussole ↔ École, et vers les associations et structures locales.
5. **Bandeau « Projet en préparation »** : pilote dans un quartier d'Île-de-France à partir d'avril 2027.

### 3.2 Parents (`parents.html`)

1. **Hero** : titre « Le parcours scolaire de votre enfant ne devrait jamais être un parcours du combattant. » Sous-titre : informations adaptées à l'âge, démarches expliquées simplement, aide près de chez vous et une personne à qui parler. Badge « Gratuit ». Bouton principal. Aperçu de l'application (voir 3.6).
2. **Vous vous reconnaissez ?** Trois ou quatre situations du quotidien, sans dramatiser : « Une question sur l'école ? », « Une démarche que vous ne comprenez pas ? », « Votre enfant semble fatigué ou triste ? », « Vous ne savez pas à qui vous adresser ? ».
3. **Ce que vous trouvez dans Boussole**, quatre blocs alignés sur l'espace parents de la fiche : Comprendre (vidéos et podcasts d'experts sans jargon, adaptés au niveau de l'enfant) ; Faire ses démarches (fiches simples, dans votre langue, avec le lien vers le site officiel) ; Trouver de l'aide près de chez vous (avec votre code postal) ; Parler à quelqu'un (un référent répond à vos questions).
4. **De 2 à 18 ans** : frise simple (liste HTML stylée, pas de carrousel) : premiers repères, maternelle, CP et primaire, entrée en 6e, collège, lycée. Message : « Les besoins changent avec l'âge. Boussole aussi. »
5. **Dans votre langue** : français, arabe maghrébin, bambara, anglais, soninké, en audio et en sous-titres. Préciser honnêtement « au lancement : arabe et bambara ; anglais et soninké avant la rentrée 2027 ».
6. **Avec votre école** : votre école peut aussi vous proposer Boussole, **toujours avec votre accord**. Rien n'est partagé sans votre signature.
7. **Nos engagements** : Gratuit, Humain (une vraie personne vous répond), Sans jugement, Vos données protégées (un surnom pour votre enfant, aucune question de santé, suppression à tout moment).
8. **Formulaire « Recevoir mon accès gratuitement »** (voir section 6).
9. **Encadré « Besoin d'aide tout de suite ? »** : 3919 (violences faites aux femmes), 119 (enfance en danger), 17 (police), en liens `tel:` cliquables. Ton calme, sans pathos.

### 3.3 Professionnels (`professionnels.html`)

1. **Hero** : titre « Vous repérez une difficulté chez un élève. Boussole vous aide à passer le relais. » Sous-titre : un relais de confiance vers les associations, toujours avec l'accord des parents. Bouton principal.
2. **Le constat côté école** : signaux repérés sans relais, familles difficiles à joindre, besoins hors du champ scolaire (logement, démarches, isolement).
3. **Comment ça marche**, en étapes numérotées et courtes, reprenant le parcours de mise en relation de la fiche. L'étape « les parents signent l'Accord d'aide à l'éducation » doit être visuellement mise en avant : **aucune information n'est transmise avant l'accord des parents**.
4. **Ce que vous recevez** : guide des signaux d'une page, sensibilisation d'une heure pour l'équipe, supports traduits pour présenter Boussole aux familles, retour sur la suite donnée (avec l'accord des parents), premier contact du référent sous 5 jours ouvrés.
5. **Repérer sans diagnostiquer** : aperçu des signaux (absences répétées, chute des résultats, isolement, changement de comportement, fatigue, parents difficiles à joindre). Phrase obligatoire : « Un signal n'est pas un diagnostic, juste une raison d'en parler aux parents. »
6. **Ce que Boussole ne remplace pas** : un enfant en danger relève des circuits officiels (information préoccupante, 119) ; les psychologues de l'Éducation nationale, le RASED et l'équipe éducative restent en première ligne. Boussole intervient sur le soutien aux familles.
7. **Le pilote** : deux ou trois écoles partenaires dans un quartier d'Île-de-France, à partir d'avril 2027.
8. **Formulaire « Devenir école partenaire du pilote »** (voir section 6).

### 3.4 Nous soutenir (`soutenir.html`)

1. **Hero** : un projet qui relie familles, écoles et associations pour repérer plus tôt les difficultés et prévenir le décrochage.
2. **Le projet en bref** : deux espaces, un référent, des associations partenaires. Reprendre la promesse de la fiche.
3. **Le pilote** : 12 mois à partir d'avril 2027, deux ou trois écoles, 60 familles accompagnées, budget prévisionnel de 59 600 €. Présenter ces chiffres comme des **objectifs** et un **budget prévisionnel**, jamais comme des résultats.
4. **Où va l'argent** : 77 % pour l'humain (référent et coordination). Visualisation en barres HTML/CSS, pas de bibliothèque de graphiques.
5. **Un financement diversifié** : aucun financeur ne dépasse 40 % ; trajectoire sur trois ans (60, 150 puis 250 familles ; coût par famille de 993 € à 696 €).
6. **Comment nous soutenir** : mécénat, fondations, collectivités, partenariats associatifs, et **experts bénévoles** (psychologues, médecins, enseignants, assistantes maternelles) qui peuvent prêter leur voix aux vidéos.
7. **Formulaire « Soutenir le pilote »** (voir section 6).

Pour le constat et les chiffres du décrochage scolaire : je les ajouterai depuis notre étude de marché. N'invente aucun chiffre. Prépare un emplacement avec un commentaire HTML `<!-- À COMPLÉTER : chiffres de l'étude de marché, avec source -->`, et rédige en attendant un texte qui tient sans chiffres.

### 3.5 Pages légales

- **Mentions légales** et **politique de confidentialité** : structure complète avec des emplacements clairement marqués `[À COMPLÉTER]` pour ce que tu ne connais pas (nom officiel de l'association, adresse, responsable de publication, hébergeur).
- La politique de confidentialité explique, en langage simple : quelles données sont collectées par chaque formulaire, pourquoi, combien de temps elles sont gardées, comment demander leur suppression, comment contacter l'association. Elle précise qu'il n'y a aucun cookie, aucun traceur et aucune mesure d'audience.

### 3.6 Aperçu de l'application

Dans le hero de la page parents, montre un aperçu de l'application **construit en HTML et CSS**, pas en image : un cadre de téléphone simple avec l'écran de l'espace enfant (« Moussa · CP »), deux ou trois cartes de contenus (par exemple une vidéo « Fatigue et débuts de lecture · 3 min »), la recherche par code postal et le bouton « Parler à un référent ». Ajoute une mention discrète « Aperçu du prototype ». Cet élément doit rester léger et lisible par un lecteur d'écran (ou masqué avec `aria-hidden` s'il est purement illustratif, avec un texte équivalent à côté).

---

## 4. Écoconception : exigences obligatoires

Le site doit être un exemple de cohérence entre projet à impact et numérique responsable. Inspire-toi du Référentiel général d'écoconception de services numériques (RGESN).

**Objectifs chiffrés, par page :**

- Poids total transféré **inférieur à 150 Ko**, police et images comprises.
- **5 requêtes maximum** (HTML, CSS, JS éventuel, logo, une image au plus).
- **Zéro requête vers un site tiers** : pas de Google Fonts, pas de CDN, pas de bibliothèque externe, pas d'iframe, pas de carte, pas de vidéo intégrée.
- Viser la note **A sur EcoIndex** et un score Lighthouse supérieur ou égal à 95 en performance, accessibilité et bonnes pratiques.

**Règles techniques :**

- HTML, CSS et JavaScript **natifs**, sans framework ni outil de compilation.
- **Une seule feuille de style** partagée (`assets/css/style.css`), mise en cache entre les pages. Pas de CSS inutilisé.
- **JavaScript minimal** (`assets/js/main.js`, moins de 5 Ko), chargé avec `defer`, uniquement pour ce qui est indispensable (validation des formulaires, bouton de sortie rapide, menu mobile si nécessaire). Le site doit rester lisible et navigable **sans JavaScript**.
- **Polices système uniquement** : `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Aucune police téléchargée.
- **Icônes et logo en SVG**, optimisés et intégrés directement dans le HTML quand ils sont petits.
- **Le moins d'images possible.** Pas de photo d'illustration générique. Si une image est vraiment utile : WebP ou AVIF, redimensionnée à sa taille d'affichage, moins de 40 Ko, avec `width`, `height` et `loading="lazy"`.
- **Aucune animation** sauf transitions très courtes au survol ; respecter `prefers-reduced-motion`.
- **Mode sombre automatique** avec `prefers-color-scheme`, qui consomme moins sur les écrans OLED et reste confortable le soir.
- **Feuille de style d'impression** sobre (masquer menu et formulaires), pour les écoles qui imprimeront les pages.
- **Pas de carrousel, pas de vidéo, pas de pop-up, pas de défilement infini.**
- HTML et CSS lisibles et commentés pour que je puisse les comprendre, mais sans code mort.

**Vérification :** à la fin, crée un petit script `verifier-poids.sh` qui affiche le poids de chaque page et de ses ressources, et donne-moi un tableau récapitulatif par page (poids, nombre de requêtes). Ajoute dans le `README.md` une section « Écoconception » qui liste les choix faits, utile pour ma soutenance, et recommande un hébergement statique alimenté en énergie renouvelable.

---

## 5. Accessibilité : exigences obligatoires

Viser la conformité au RGAA (niveau AA du WCAG) :

- Attribut `lang="fr"` sur chaque page ; structure de titres cohérente (un seul H1 par page, puis H2, H3).
- Lien « Aller au contenu » en début de page ; navigation complète au clavier ; focus toujours visible.
- Contraste d'au moins 4,5:1 pour le texte ; aucune information transmise uniquement par la couleur.
- Zones cliquables d'au moins 44 × 44 pixels ; texte de base d'au moins 16 px.
- Tous les champs de formulaire ont un `label` visible ; les erreurs sont annoncées en texte clair, pas seulement en rouge.
- Textes alternatifs pertinents ; les éléments décoratifs ont `alt=""` ou `aria-hidden="true"`.
- Conception **mobile d'abord** : la majorité des parents viendront depuis un téléphone, parfois d'entrée de gamme, en scannant un QR code.

---

## 6. Formulaires et données personnelles

**Point essentiel : le site est un prototype.** Tant que l'analyse d'impact (AIPD) et les documents juridiques ne sont pas faits, **aucune donnée ne doit être envoyée ni stockée**. Les formulaires fonctionnent donc en **mode démonstration** : ils valident les champs, puis affichent le message de confirmation, sans rien transmettre. Indique-le dans le code par un commentaire clair qui montre où brancher plus tard un envoi réel, et signale-le-moi dans ton récapitulatif.

Champs, en appliquant la minimisation des données :

- **Parents** : prénom, e-mail. Rien sur l'enfant.
- **Professionnels** : prénom et nom, fonction, nom de l'établissement, commune, e-mail professionnel.
- **Soutenir** : prénom et nom, organisation (facultatif), type de soutien (liste : mécénat, fondation, collectivité, partenariat associatif, expert bénévole, autre), e-mail, message court (facultatif).

Pour chaque formulaire : case de consentement **non précochée**, formulée simplement (« J'accepte que Boussole utilise mes coordonnées pour répondre à ma demande. ») ; lien visible vers la politique de confidentialité ; message de confirmation honnête. Pour les parents : « Merci ! Votre demande est bien enregistrée. Nous vous écrirons dès l'ouverture de Boussole. »

**Aucun cookie, aucun traceur, aucune mesure d'audience, aucun pixel publicitaire.** Pas de bandeau cookies, puisqu'il n'y a rien à accepter.

---

## 7. Sécurité des personnes

Sur la page parents, et sur toute page qui mentionne les violences :

- Un **bouton « Quitter le site »** toujours visible et facile à atteindre, qui remplace immédiatement la page par un site neutre (par exemple la météo) avec `location.replace()`, pour que le retour arrière ne ramène pas sur Boussole. Il doit aussi fonctionner avec la touche Échap.
- Les rubriques sensibles ne sont **jamais mises en avant** sur l'accueil.
- Les numéros d'urgence sont présentés calmement, en liens `tel:`.

---

## 8. Design

- **Univers** : chaleureux, rassurant, associatif, moderne, sans être enfantin, médical ni « startup ».
- **Palette** : bleu profond pour les titres et le texte fort, bleu doux pour les fonds de sections, touches de vert, et le **corail ou orange réservé aux boutons d'action principaux**. Tous les contrastes doivent rester conformes en mode clair comme en mode sombre. Définis les couleurs en variables CSS.
- **Logo** : si un fichier de logo existe dans `assets/img/`, utilise-le. Sinon, crée un logo provisoire très simple en SVG (un symbole de boussole et le mot « Boussole »), facile à remplacer.
- **Symbole de boussole** utilisé avec parcimonie comme élément graphique secondaire.
- Beaucoup d'air, des sections bien séparées, des blocs courts. Pas de dégradés lourds ni d'ombres multiples.
- Le header et le footer sont identiques sur toutes les pages. Le footer contient : Mentions légales, Confidentialité, Nous soutenir, Contact (adresse e-mail `[À COMPLÉTER]`), et la signature.

---

## 9. Interdits : ne rien inventer

N'invente jamais : nombre d'utilisateurs, témoignages, partenaires signés, logos de partenaires, résultats, statistiques, labels ou certifications, disponibilité sur l'App Store ou Google Play, noms de personnes de l'équipe.

Les chiffres de la fiche produit (60 familles, 59 600 €, etc.) sont des **objectifs et prévisions** : présente-les toujours comme tels. Quand une information manque, utilise un emplacement `[À COMPLÉTER]` ou un commentaire HTML, et liste-les tous dans ton récapitulatif final.

Formulations à privilégier quand c'est nécessaire : « en préparation », « prototype », « notre ambition », « à partir d'avril 2027 ».

---

## 10. Structure de fichiers attendue

```
/
├── index.html
├── parents.html
├── professionnels.html
├── soutenir.html
├── mentions-legales.html
├── confidentialite.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/ (logo.svg et éventuelles icônes)
├── verifier-poids.sh
├── CLAUDE.md
├── README.md
├── boussole-fiche-produit.md   (ne pas modifier)
└── prompt-site-boussole.md     (ne pas modifier)
```

---

## 11. Objectif final

En moins de 30 secondes sur sa page, chaque visiteur doit comprendre :

- **Un parent** : Boussole m'aide gratuitement à comprendre, faire mes démarches et trouver de l'aide pour mon enfant, dans ma langue, sans jugement ; je peux demander mon accès.
- **Un professionnel de l'école** : Boussole me donne un relais de confiance pour accompagner une famille, avec son accord, en complément des dispositifs existants ; je peux rejoindre le pilote.
- **Un financeur** : Boussole est un projet sérieux, centré sur l'humain, avec un pilote chiffré et un financement diversifié ; je peux le soutenir.

Et un jury doit constater que le site applique lui-même ce qu'il promet : sobre, accessible, respectueux des données.

**Commence maintenant par l'étape 1 : propose-moi ton plan, sans écrire de code.**
