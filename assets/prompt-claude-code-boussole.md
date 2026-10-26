# Brief pour Claude Code — Refonte du site Boussole

## Ton rôle

Tu es à la fois expert en web design, en graphisme, en UX writing et en marketing d'impact social. Tu travailles sur le site statique de Boussole, publié sur GitHub Pages : https://lnpvn.github.io/boussole/

Le projet a beaucoup changé depuis la première version du site. Ta mission est de mettre tout le site à jour avec le nouveau positionnement, et de l'améliorer pour qu'il convainque trois publics différents : les parents, les financeurs et les partenaires.

## Méthode de travail (à respecter dans cet ordre)

1. **Explore le dépôt avant de modifier quoi que ce soit.** Liste les pages, le CSS, le JavaScript, les images, le système de formulaires et le sélecteur de langue. Repère ce qui est réutilisable.
2. **Fais l'inventaire de tout le contenu obsolète** à l'aide de la section « Ce qui a changé » ci-dessous, et donne-moi la liste des fichiers concernés.
3. **Propose-moi un plan** : architecture des pages, direction graphique, structure de chaque landing page. Attends ma validation avant de coder.
4. **Implémente page par page**, en commençant par la LP parents.
5. **Vérifie la cohérence à la fin** avec la checklist en bas de ce brief.

Garde la stack actuelle (HTML, CSS et JavaScript statiques, compatibles GitHub Pages). N'ajoute ni framework lourd, ni backend, ni dépendance inutile.

---

## Source de vérité : le projet tel qu'il est aujourd'hui

**En une phrase :** Boussole est un guide numérique gratuit qui aide les parents, en autonomie, à comprendre l'école, à ne pas rater les échéances, à se servir de Pronote et de Parcoursup, et à trouver le bon interlocuteur selon leur problématique.

**Argument central :** « Google traduit les mots, nous expliquons ce qu'ils veulent dire et ce qu'il faut faire, dans une seule interface. » La traduction seule ne suffit pas. Notre différence est un parcours pratique par âge, par démarche et par zone (zone de vacances scolaires, services de la commune), avec des informations datées qui renvoient toujours vers la source officielle.

**Les quatre piliers :**
- **Comprendre** : un lexique de l'école et des fiches numériques simples, en six langues et en audio.
- **Anticiper** : un calendrier des vacances, examens, inscriptions, bourses et Parcoursup, avec des rappels personnalisés pour les parents qui créent un compte.
- **Se servir de Pronote et de Parcoursup** : des tutoriels courts pour chacun des deux outils, et de l'aide pour retrouver ses identifiants.
- **Trouver** : un annuaire vérifié des services et des associations du territoire, pour savoir à qui s'adresser.

**Les formats :**
- Lexique de l'école : les mots de l'école expliqués simplement (conseil de classe, CPE, vie scolaire…), traduits et lus en audio.
- Audio : un bouton « Écouter » sur chaque mot et chaque fiche, qui lit le texte à voix haute dans la langue choisie. Ce ne sont pas des podcasts.
- Fiches « Ce courrier veut dire quoi ? » : un courrier ou un message type de l'école, expliqué simplement, avec ce qu'il faut faire ensuite.
- Fiches démarches : étapes, documents à préparer, échéance, lien officiel, date de mise à jour.
- Tutoriels Pronote et tutoriels Parcoursup : pas-à-pas courts, en vidéo ou en images.
- Calendrier et rappels selon la zone de vacances (A, B ou C).
- Trois parcours guidés : entrée à l'école, au collège ou au lycée ; recherche d'une aide ; arrivée en France.
- Livret papier : contenu essentiel, QR code et contacts des lieux partenaires.

**Langues :** français, anglais, portugais, arabe maghrébin, bambara et turc.

**Public :** parents d'enfants de la maternelle au lycée, avec une attention particulière aux familles allophones ou peu familières du système scolaire français.

**Diffusion :** par des structures de confiance (centres sociaux, associations, médiathèques) et par des parents d'élèves relais. **Pas par l'école.**

**Accès :** consultation sans compte. Un compte facultatif (e-mail ou téléphone, langue, classe des enfants) permet de recevoir les rappels.

**Ce que Boussole ne fait pas :**
- Il ne remplace ni l'école, ni Pronote, ni la CAF, ni la mairie : il aide les parents à s'en servir.
- Il ne stocke pas de dossier scolaire et ne pose aucun diagnostic sur l'enfant.
- Il ne fait pas les démarches à la place du parent et ne promet pas l'obtention d'une aide.
- Il n'assure ni signalement ni suivi individuel : il oriente vers les professionnels et les associations.

**Le pilote :**
- Une commune de Seine-Saint-Denis, à choisir.
- Trois établissements : un collège en éducation prioritaire, une école primaire de son secteur et le lycée où la plupart de ses élèves poursuivent leurs études.
- Environ 80 familles : 30 à l'école primaire, 30 au collège, 20 au lycée.
- Calendrier indicatif : cadrage d'octobre 2026 à janvier 2027, maquette en février et mars 2027, test avec une dizaine de familles d'avril à juin 2027, pilote de septembre 2027 à juillet 2028, bilan en juillet 2028.

**Partenaires à approcher, par ordre de priorité :**
1. Centre social ou association locale : tester le prototype et diffuser le QR code.
2. Représentants de parents : relire les fiches et tester les parcours.
3. Cité éducative et Programme de réussite éducative (PRE) : mise en relation et critères du territoire.
4. CAF départementale : vérifier les dispositifs et appels à projets pertinents.
5. CASNAV et OEPRE : valider les contenus et faire relire les traductions.

Ce sont des partenaires **potentiels**, pas acquis.

**Modèle économique :** B2C dans l'usage, B2B2C dans le financement. Les parents utilisent Boussole gratuitement. Le service est financé par les collectivités, la CAF et les fondations, et diffusé par les structures de proximité. Comme ces financeurs sont surtout publics, on parle aussi de B2G2C (« business to government to consumer ») : une structure propose un service à un acteur public, qui le finance et le met gratuitement à disposition des habitants. Ce modèle reste à confirmer. Le budget est en cours de chiffrage : **n'affiche aucun montant**.

**Indicateurs du pilote (chaîne d'impact) :** portée, usage, autonomie (trouver l'information sans aide, identifier le bon interlocuteur, faire la démarche), compréhension, prise en main de Pronote, lien avec l'école, réussite scolaire (assiduité, passage en 6e, orientation, brevet, vœux Parcoursup confirmés dans les délais). La réussite scolaire est un effet de long terme, auquel Boussole contribue sans pouvoir se l'attribuer seul.

---

## Ce qui a changé : à supprimer ou à corriger partout

| Ancienne version du site | Nouvelle version |
|---|---|
| « Boussole relie les parents et l'école » | Boussole aide les parents à comprendre l'école, en autonomie |
| Référent Boussole, « Écrire au référent », « Parler à quelqu'un », « Une vraie personne vous répond » | **Supprimé.** Plus de référent : Boussole oriente vers les services et associations de l'annuaire |
| Espace professionnels, l'école qui repère les difficultés et propose un accompagnement | **Supprimé.** Pas d'espace pro, pas de signalement, pas d'accord à signer |
| « Avec votre école… rien n'est partagé sans votre signature » | **Supprimé** |
| Vidéos et podcasts d'experts (psychologues, médecins) | Lexique, fiches « Ce courrier veut dire quoi ? », fiches démarches, tutoriels Pronote et Parcoursup, audio |
| « De 2 à 18 ans », étape « Premiers repères » | De la maternelle au lycée |
| Quatre langues (français, anglais, arabe maghrébin, bambara) | Six langues : français, anglais, portugais, arabe maghrébin, bambara, turc |
| Diffusion par l'école | Diffusion par des structures de confiance et des parents d'élèves relais |
| Pilote en avril 2027, 2 à 3 écoles, 60 familles, quartier prioritaire d'Île-de-France | Pilote de septembre 2027 à juillet 2028, 3 établissements, environ 80 familles, Seine-Saint-Denis |
| Budget de 59 600 €, 77 % pour l'humain, 250 familles sur trois territoires en 2029 | **Supprimé.** Budget en cours de chiffrage |
| Mention des violences au sein du foyer comme problème central | **Supprimé** du discours |
| Onglets de l'app : Accueil, Démarches, Partenaires, Référent | À refaire selon les nouveaux écrans : Accueil, Comprendre l'école, Pronote et Parcoursup, Calendrier, Trouver de l'aide, Profil |
| Experts bénévoles (prêter sa voix aux vidéos) | Locuteurs natifs pour enregistrer le lexique audio, relecteurs des traductions |

Mets aussi à jour les balises `meta description`, les titres de page, le texte alternatif des maquettes de téléphone, la page de démo, les mentions légales et la politique de confidentialité (données minimales du compte facultatif, pas de traceur publicitaire).

---

## Nouvelle architecture du site

| Page | Rôle | Remplace |
|---|---|---|
| `index.html` | Page d'aiguillage courte : la promesse en une phrase, puis trois entrées claires (« Je suis parent », « Je veux financer Boussole », « Je veux devenir partenaire ») | Accueil actuel |
| `parents.html` | LP parents | Page parents actuelle |
| `financeurs.html` | LP financeurs | `soutenir.html` |
| `partenaires.html` | LP partenaires | `professionnels.html` |
| `demo.html` | Démo interactive de l'application, mise à jour | Démo actuelle |

Les anciennes URL (`soutenir.html`, `professionnels.html`) doivent rediriger vers les nouvelles pages, avec une redirection HTML compatible GitHub Pages, pour ne casser aucun lien ni QR code déjà diffusé.

Navigation principale : Parents · Financeurs · Partenaires, avec la démo accessible depuis la LP parents.

---

## LP 1 — Parents (`parents.html`)

**Objectif :** que le parent comprenne en cinq secondes que Boussole est pour lui, gratuit et dans sa langue, puis qu'il essaie la démo ou laisse son contact.

**Contraintes de rédaction :**
- Langage très simple (niveau A2-B1), phrases courtes, aucun jargon administratif, vouvoiement.
- Le lecteur peut lire difficilement le français, être sur un vieux téléphone, être méfiant envers les institutions. Le ton est chaleureux, rassurant, jamais condescendant ni stigmatisant : « tous les parents se posent ces questions ».
- Un seul appel à l'action principal, répété : « Recevoir mon accès gratuit ». L'action secondaire est « Essayer la démo ».

**Structure proposée :**
1. **Hero** : promesse claire, par exemple « Comprendre l'école de votre enfant, dans votre langue. » Sous-titre : gratuit, sans compte, de la maternelle au lycée. Sélecteur des six langues bien visible. Maquette de téléphone avec le nouvel écran d'accueil (prochaines échéances, fiche du moment).
2. **« Vous vous reconnaissez ? »** : un courrier de l'école que vous ne comprenez pas, une date à ne pas rater, Pronote qui ne marche pas, Parcoursup qui inquiète, vous ne savez pas à qui demander.
3. **Les quatre piliers** : Comprendre, Anticiper, Pronote et Parcoursup, Trouver. Une icône, un titre, une phrase pour chacun.
4. **Démonstration « Ce courrier veut dire quoi ? »** : c'est notre meilleur argument, mets-le en scène. Montre un vrai faux courrier type (convocation, mot du professeur principal) avec, à côté, l'explication simple et « Ce que vous devez faire ». Un petit composant interactif « avant / après » est idéal.
5. **Le bouton « Écouter »** : montre un mot du lexique avec le bouton audio et le choix de la langue.
6. **Les trois parcours guidés** : entrée à l'école, au collège ou au lycée ; recherche d'une aide ; arrivée en France.
7. **De la maternelle au lycée** : une frise simple par étape (maternelle, primaire, entrée en 6e, collège, lycée et Parcoursup).
8. **Un exemple de calendrier** : les prochaines échéances en zone C, avec un rappel.
9. **Ce que Boussole ne fait pas** : formulé comme une réassurance (« Boussole ne remplace pas l'école ni Pronote. Il vous aide à vous en servir. » « Aucune information sur votre enfant n'est partagée. »).
10. **Nos engagements** : gratuit, sans publicité, sans compte obligatoire, données minimales, informations datées et vérifiées avec un lien vers le site officiel.
11. **Comment trouver Boussole** : QR code sur le livret, centres sociaux, médiathèques, parents d'élèves relais, ou directement en ligne. Rien à installer depuis un store.
12. **FAQ courte** : C'est payant ? Faut-il un compte ? Mes données sont-elles partagées avec l'école ? Dans quelles langues ? Ça marche sur mon téléphone ?
13. **Formulaire** : prénom, e-mail ou téléphone, langue préférée, consentement. Rien de plus.

Garde dans le pied de page les numéros d'urgence gratuits, déjà présents sur le site.

---

## LP 2 — Financeurs (`financeurs.html`)

**Cible :** communes et intercommunalités, CAF (en tant que financeur), Cité éducative, fondations, mécènes d'entreprise.

**Objectif :** prouver que Boussole est un projet sérieux, réaliste et mesurable, puis obtenir une prise de contact ou une demande de dossier.

**Ton :** professionnel, factuel, transparent. On parle impact, faisabilité et coût maîtrisé. Toujours distinguer les **objectifs** des **résultats** : rien n'est encore obtenu, ne le laisse jamais croire.

**Structure proposée :**
1. **Hero** : le problème et la solution en une phrase, par exemple « Les dispositifs existent. Beaucoup de familles ne savent pas s'en servir. » Appel à l'action : « Recevoir le dossier de présentation ».
2. **Le constat** : informations dispersées, démarches complexes, barrière de la langue, outils numériques comme Pronote et Parcoursup mal maîtrisés. Pas de chiffres inventés : prévois des emplacements « [chiffre à sourcer] » que je remplirai.
3. **La solution** : les quatre piliers, en version courte.
4. **Pourquoi c'est un bon investissement** : pas de poste à financer pour un suivi individuel, pas de doublon avec Pronote ni avec les associations existantes, diffusion par des structures déjà en contact avec les familles, une seule application web légère, six langues dès le départ.
5. **La chaîne d'impact** : un schéma visuel en étapes, de la portée jusqu'à la réussite scolaire, avec les indicateurs de chaque niveau. Précise que la réussite scolaire est un effet de long terme.
6. **Le pilote** : Seine-Saint-Denis, trois établissements, environ 80 familles, calendrier indicatif sous forme de frise. Mention claire : « Objectifs prévisionnels ».
7. **Notre modèle** : un schéma simple B2C, B2B2C et B2G2C (qui utilise, qui finance, qui diffuse), avec la courte définition du B2G2C.
8. **Comment nous soutenir** : financement territorial, appels à projets parentalité, fondations, mécénat financier ou de compétences.
9. **Formulaire** : nom, organisation, type de financeur, e-mail, message.

---

## LP 3 — Partenaires (`partenaires.html`)

**Cible :** centres sociaux, associations de médiation, médiathèques, représentants et associations de parents d'élèves, Cité éducative et PRE, CAF (en tant que partenaire terrain), CASNAV et OEPRE.

**Objectif :** montrer ce que le partenaire y gagne, ce qu'on lui demande concrètement, et obtenir une prise de contact.

**Ton :** partenarial et concret. Le message clé : « Boussole vous aide à orienter les familles, sans vous ajouter de travail. »

**Structure proposée :**
1. **Hero** : par exemple « Vos familles ont des questions sur l'école. Boussole leur donne des réponses claires, dans leur langue. » Appel à l'action : « Devenir partenaire ».
2. **Ce que vous y gagnez** : moins de questions répétitives sur Pronote, les courriers et les dates ; un outil à recommander aux familles ; votre structure référencée dans l'annuaire ; un livret et des affiches prêts à distribuer.
3. **Ce que nous vous demandons** : des demandes légères et précises par type de partenaire, reprises de la liste des cinq partenaires prioritaires (tester, diffuser, relire, valider les langues).
4. **Les parents d'élèves relais** : un bloc dédié, car ils sont essentiels à la diffusion de parent à parent.
5. **Comment ça se passe** : trois ou quatre étapes simples (premier échange, test du prototype, diffusion, retours).
6. **Le kit partenaire** : aperçu du livret, de l'affiche et du QR code.
7. **Formulaire** : nom, structure, type de partenaire, e-mail, message.

La CAF est à la fois financeur et partenaire terrain : ajoute un lien croisé entre les deux pages.

---

## Direction artistique

- **Personnalité** : chaleureuse, rassurante, accessible et digne de confiance, sans aucun aspect « guichet administratif » ni « aide sociale ». Boussole doit ressembler à un service moderne que tous les parents ont envie d'utiliser.
- **Motif** : la boussole, l'orientation, le chemin. Utilise-le avec subtilité : icônes, formes, pictogrammes de direction.
- **Couleurs** : une couleur principale forte et rassurante, une couleur d'accent chaleureuse, beaucoup de blanc. Toutes les combinaisons doivent respecter un contraste WCAG AA. Propose-moi deux pistes de palette avant de choisir.
- **Typographie** : une police très lisible qui gère correctement les accents français et l'alphabet arabe (par exemple la famille Noto Sans avec Noto Sans Arabic). Taille de texte de 16 px minimum, 18 px pour la LP parents.
- **Illustrations** : des familles diverses, des situations du quotidien, jamais de clichés misérabilistes. Pas de photos de stock génériques. Si on n'a pas d'illustrations, utilise des formes et des maquettes de téléphone.
- **Les maquettes de téléphone** sont un atout : refais-les avec les nouveaux écrans.
- **Trois tons distincts** dans une même identité : la LP parents est la plus chaleureuse et visuelle, la LP financeurs la plus sobre et structurée, la LP partenaires entre les deux.

## Exigences techniques

- **Mobile d'abord** : la majorité des parents viendront d'un QR code, sur un téléphone d'entrée de gamme. Teste à 360 px de large.
- **Pages légères** : images optimisées (WebP, dimensions explicites), aucun traceur publicitaire, le moins de JavaScript possible.
- **Accessibilité RGAA / WCAG AA** : structure de titres correcte, textes alternatifs, navigation au clavier, focus visible, lien « Aller au contenu », formulaires correctement étiquetés.
- **Langues** : garde le sélecteur de langue, avec les six langues. Prévois l'affichage de droite à gauche (`dir="rtl"`) pour l'arabe. Les langues non encore traduites restent marquées « Bientôt », honnêtement.
- **Formulaires** : garde le mécanisme actuel du dépôt. Si aucun envoi réel n'est branché, dis-le-moi plutôt que d'inventer un backend.
- **SEO de base** : titres et descriptions uniques par page, balises Open Graph pour le partage.

## Règles de contenu

- Aucun faux chiffre, aucun faux témoignage, aucun faux logo de partenaire. Utilise des emplacements visibles « [à compléter] » quand une information manque.
- Les partenaires sont « envisagés » ou « à approcher », jamais présentés comme acquis.
- Le pilote est présenté comme prévisionnel.
- Ne jamais promettre une baisse du décrochage. Boussole y contribue à long terme.
- N'utilise jamais les mots « signalement », « référent », « podcast » ou « atelier ».
- Typographie française : espaces avant les deux-points et les points-virgules, guillemets « », apostrophe ’.

## Checklist de fin

Avant de me rendre le travail :
- [ ] Recherche dans tout le dépôt et supprime chaque occurrence de : référent, professionnels (au sens de l'espace pro), signalement, podcast, atelier, 59 600, 77 %, 250 familles, avril 2027, 2 à 18 ans, 60 familles, violences au sein du foyer, « relie les parents et l'école ».
- [ ] Vérifie que les six langues apparaissent partout de la même façon.
- [ ] Vérifie que les anciennes URL redirigent bien vers les nouvelles.
- [ ] Vérifie chaque page sur mobile (360 px) et sur ordinateur.
- [ ] Vérifie les contrastes et la navigation au clavier.
- [ ] Donne-moi un récapitulatif des changements, page par page, et la liste des emplacements « [à compléter] ».

## Questions à me poser avant de commencer

1. Garde-t-on le slogan « Prévenir aujourd'hui pour demain » ? Il parle de prévention alors que nous ne promettons plus d'effet direct sur le décrochage. Propose-moi trois alternatives.
2. Quelle adresse e-mail de contact afficher ?
3. Garde-t-on le bouton « Quitter ce site rapidement » ? Il servait aux rubriques sur les violences, qui ont disparu.
