# Manuel utilisateur

Ce manuel utilisateur explique comment personnaliser le site web avec des instructions pour modifier le texte, les images et les différentes sections. Il est organisé en fonction des différents onglets du site, avec pour chacun les modifications possibles à effectuer.

A chaque modification, le site peut mettre plusieurs minutes à s'actualiser. Pensez à vérifier environ dix minutes plus tard pour voir si les changements ont bien été pris en compte.

## Sommaire

- [Manuel utilisateur](#manuel-utilisateur)
  - [Page about](#page-about)
    - [Modifier le texte de présentation](#modifier-le-texte-de-présentation)
    - [Modifier la photo de profil](#modifier-la-photo-de-profil)
    - [Modifier le texte sous la photo](#modifier-le-texte-sous-la-photo)
    - [Gérer les "selected publications"](#gérer-les-selected-publications)
    - [Gérer les réseaux sociaux](#gérer-les-réseaux-sociaux)
    - [Gérer les "news"](#gérer-les-news)
      - [Modifier le nombre de news](#modifier-le-nombre-de-news)
      - [Supprimer une news](#supprimer-une-news)
      - [Ajouter une news](#ajouter-une-news)
  - [Page archives](#page-archives)
  - [Page publications](#page-publications)
    - [Organisation des publications](#organisation-des-publications)
    - [Ajouter une publication](#ajouter-une-publication)
    - [Supprimer une publication](#supprimer-une-publication)
    - [Ajouter un co-auteur](#ajouter-un-co-auteur)
  - [Page projects](#page-projects)
  - [Page cv](#page-cv)
    - [Structure générale](#structure-générale)
    - [Ajouter une nouvelle entrée](#ajouter-une-nouvelle-entrée)
    - [Détail des champs possible par section](#détail-des-champs-possibles-par-section)
  - [Page teaching](#page-teaching)
  - [Page team](#page-team)
    - [Ajouter un membre](#ajouter-un-membre)
    - [Modifier le profil d'un membre](#modifier-le-profil-dun-membre)
    - [Supprimer un membre](#supprimer-un-membre)
  - [Guide HTML](#guide-html)

## Page about

### Modifier le texte de présentation

Ouvrir le fichier [\_pages/about.md](_pages/about.md).  
Modifier le texte situé après l’en-tête du fichier (la partie entourée de `---`) pour changer le contenu principal de la page.

---

### Modifier la photo de profil

Ajouter la nouvelle photo dans le dossier [asset/img/](asset/img/).  
Dans le fichier [\_pages/about.md](_pages/about.md), remplacer le nom du fichier image à la ligne 9 (`image : …`) par le nom de la nouvelle photo.

---

### Modifier le texte sous la photo

Dans le fichier [\_pages/about.md](_pages/about.md), chercher la ligne qui commence par `more_info: ...` (ligne 11).  
Remplacer le texte à cet endroit. Le texte est écrit en HTML, chaque ligne doit être encadrée par les balises \<p>...\</p>.

---

### Gérer les "selected publications"

Les publications affichées dans la section _Selected publications_ de la page About sont listées dans le fichier [\_bibliography/papers.bib](_bibliography/papers.bib).

Les publications sont rangées dans les fichiers [book-chapters.bib](_bibliography/book-chapters.bib), [conference.bib](_bibliography/conference.bib), [dissertation.bib](_bibliography/dissertation.bib) et [peer-reviewed.bib](_bibliography/peer-reviewed.bib), en fonction de leurs catégories.

Pour **ajouter une publication** dans _Selected publications_ :

1. Trouver la publication a ajouté dans l'un des fichiers listés ci-dessus.
2. Copier toute l'entrée (le bloc de texte qui commence par `@article{...}` ou `@inproceedings(...)`) dans le fichier [\_bibliography/papers.bib](_bibliography/papers.bib).
3. Ajouter la ligne suivante dans l'entrée : `selected = {true}` (faire attention aux virgules, chaque ligne de l'entrée d'une publication se termine par une virgule sauf la dernière).

Pour **supprimer une publication** :

Supprimer l'entrée correspondante dans le fichier [\_bibliography/papers.bib](_bibliography/papers.bib).

---

### Gérer les réseaux sociaux

Ouvrir le fichier [\_data/socials.yml](_data/socials.yml).

Pour **ajouter un réseau social** : décommenter (supprimer le #) de la ligne correspondante au réseau souhaité et ajouter l’identifiant ou l'URL du profil dans le champ correspondant.

Pour **supprimer un réseau social** : commenter la ligne du réseau à enlever (ajouter # au début de la ligne).

---

### Gérer les "news"

#### Modifier le nombre de news

Pour modifier le nombre de news qui s'affichent sur la page about : dans le fichier [\_pages/about.md](_pages/about.md), trouver la section annoucements → limit (ligne 21) et changer la valeur.

#### Supprimer une news

Dans le dossier [\_news](_news), supprimer le fichier .md correspondant à la news à supprimer.

#### Ajouter une news

1. Ouvrir le dossier [\_news](_news).
2. Créer un nouveau fichier avec un nom en .md (par exemple : `nouvelle-news.md`).
3. Rédiger la news en suivant un des deux formats possibles :

- **News courte** : la news apparaît sur une seule ligne et n'est pas cliquable (par exemple : le fichier [\_news/voc2speak.md](_news/voc2speak.md)).

Format à utiliser : (remplacer la date dans l'en-tête et le corps du texte)

```yaml
---
layout: post
date: 2024-06-10
inline: true
---
Texte de la news qui s'affiche sur la page About et dans la page Archive.
```

- **News longues** : la news est cliquable et mène à une page dédiée, utile pour un contenu plus détaillé (par exemple : le fichier [\_news/journeePhonetiqueClinique.md](_news/journeePhonetiqueClinique.md)).

Format à utiliser : (remplacer la date et le titre dans l'en-tête et le corps du texte)

```yaml
---
layout: post
date: 2024-06-10
title: "Texte de la news qui va s’afficher sur la ligne"
inline: false
---
Texte complet de la news qui va être affichée sur la page dédiée lorsque l’on clique dessus.
Ce texte peut être écrit en HTML ou en markdown si besoin d’une mise en page spécifique (cf. Guide HTML).
```

## Page archives

La page _Archives_ permet d'afficher l'ensemble des **news** ajoutées au site. Elle répertorie chronologiquement toutes les actualités.  
Il n'est pas nécessaire de modifier cette page manuellement. Elle se met à jour toute seule lors de l'ajout ou de la suppression d'une news.
Pour **ajouter ou supprimer des news**, voir la section correspondante dans la [page about](#gérer-les-news).

## Page publications

### Organisation des publications

Toutes les publications sont stockées dans le dossier [\_bibliography/](_bibliography/), au format BibTex. Elles sont réparties dans quatre fichiers .bib en fonctions de leur type :

- `peer-reviewed.bib` - **Peer-reviewed publications**
- `book-chapters.bib` - **Book chapters**
- `dissertations.bib` - **Academic dissertations**
- `conference.bib` - **Conferences and Invited Talks**

Sur la page _Publications_, des boutons permettent de choisir la catégorie afficher.

A l'intérieur de chaque fichier, les publications sont triés par ordre chronologique décroissant.

L'ordre des publications dans le fichier n'a pas d'impact sur l'affichage final du site mais permet de garder le fichier propre, lisible et facile à maintenir.

---

### Ajouter une publication

1. **Ouvrir le fichier .bib dans le dossier [\_bibliography/](_bibliography/) qui correspond au type de la publication à ajouter** (Voir ci-dessus les noms de fichier correspondant aux différents type de publications).

2. **Choisir le bon type de publication** : `@article`, `@inproceedings`, `@incollection`, `@unpublished` ou `@misc`.
Un type de publication peut être utilisé de manière assez flexible : choisissez celui dont l’affichage convient le mieux sur le site.

| Type             |                               Utilisation                                |
| ---------------- | :----------------------------------------------------------------------: |
| `@article`       |          Pour les articles parus dans des revues scientifiques.           |
| `@inproceedings` | Pour les communications publiées dans les actes de colloques/conférences. |
| `@incollection`  |                Pour un chapitre dans un livre collectif.               |
| `@unpublished`   |                Pour les academics dissertations.                  |
| `@misc`          |         Pour une présentation orale non publiée, comme un talk.           |

3. **Créer une nouvelle entrée dans le fichier**

Ajouter un bloc comme celui-ci dans le fichier [\_bibliography/papers.bib](_bibliography/papers.bib), en remplaçant les valeurs par les informations de la publication et par le bon type :

```bibtex
@article{NomCle,
  author = {Nom, Prénom and Nom2, Prénom2},
  title = {Titre de la publication},
  year = {2025}
}
```

**À noter :**

- La clé `NomCle` et les champs `author`, `title` et `year` doivent être **obligatoirement rempli**.

- `NomCle` est un **identifiant unique**, appelé clé BibTex. Il doit être **différent pour chaque publication** du fichier. Il n'est **jamais affiché sur le site** (son seul but est de servir d'identifiant interne) et il ne doit pas contenir d'espace ou de caractères spéciaux.

- Le champ `author` doit respecter une **syntaxe stricte** pour que l'affichage fonctionne correctement : les auteurs sont séparés par `and` et chaque auteur est écrit sous la forme `NomDeFamille, Initiale.`. Par exemple :

```bibtex
author = {Nom1, A. and Nom2, B. and Nom3, C.}
```

- Chaque champ est écrit sur une ligne distincte, la valeur du champ est toujours entre **accolades** et chaque ligne se termine par une **virgule** `,` (sauf la dernière) :

```bibtex
nomduchamp = {valeurs},
```

4. **Ajouter les champs optionnels**

Selon le type de la publication, certains champs peuvent être ajoutés pour donner plus d'informations.

| Champ       |                Description                |               Type                |
| ----------- | :---------------------------------------: | :-------------------------------: |
| `journal`   |              Nom de la revue              |            `@article`             |
| `booktitle` | Titre du livre ou des actes de conférence | `@inproceedings`, `@incollection` |
| `volume`    |            Volume de la revue             |                                   |
| `number`    |            Numéro de la revue             |                                   |
| `pages`     |        Plage de pages (ex: 16-18)         |                                   |
| `publisher` |             Maison d'édition              |          `@incollection`          |
| `editor`   |             Editeur du livre              |          `@incollection`          |
| `location`  |     Lieu de la conférence ou du talk      |       `@inproceedings`, `@misc`   |
| `date`      |    Date de la conférence ou du talk       |    `@inproceedings`, `@misc`      |
| `pdf`       |      Lien direct vers la publication (peut être un lien vers une page web ou nom de fichier pdf)     |                                   |
| `event`     |  Nom de l'évènement où le talk a lieu    |              `@misc`              |
| `note`     |  Pour ajouter des informations complémentaires    |              `@unpublished`              |
| `additional_info` |  Informations supplémentaires       |                                   |

**À noter :**
- Pour ajouter un pdf dans le document, mettre le fichier pdf dans le dossier [assets/pdf/](assets/pdf/). Il faudra dans le champ `pdf` mettre le nom du pdf (exemple : `pdf = {nomdupdf.pdf}`).

- Le champ `additional_info` peut contenir n’importe quelle information complémentaire. Il peut notamment être utilisé pour remplacer certains champs existants, dans le but d’ajuster la mise en page de manière plus souple.

- Les champs peuvent être remplis en markdown (cf. [Guide markdown](#guide-markdown)) ce qui permet de pouvoir y mettre du texte en gras ou en italique ou des liens.

Quelques exemples d'entrées de publications :

```bibtex
@article{agerelateddifferencesincoherence2021,
  title = {Age-related differences in coherence between brain activation and speech envelope at word and sentence levels},
  author = {Kolozsvári^, O. and  Xu. W and Parviainen, T. and Nieminen, L. and Noiray, A. and Hämäläinen, J},
  year = {2021},
  journal = {Journal of Speech, Language, and Hearing Research},
  volume = {2},
  number = {2},
  pages = {226-253},
  pdf = {https://direct.mit.edu/nol/article/2/2/226/97419/Coherence-Between-Brain-Activation-and-Speech},
  category = {Peer-reviewed publications}
}
```

```bibtex
@inproceedings{articulatingpape2025,
  title = {Articulating while listening? The perception-production link in pre-babbling infants},
  author = {Frota, S. and Severino, C. and Pejovic, J. and Paulino, N. and Vigário, M. and  Noiray, A},
  year = {2025},
  booktitle = {Conférence Phonology and Phonetics in Europe (PaPe)},
  pages = {2p},
}
```

```bibtex
@incollection{liproundinganticipatory2010,
  title = {Lip Rounding Anticipatory Control: Crosslinguistically Lawful and Ontogenetically Attuned},
  author = {Noiray, A. and Cathiard, M.A. and Abry, C. and Ménard, L},
  year = {2010},
  editor = { F. Gayraud and E. Marsico},
  booktitle = {Speech Motor Control: New developments in basic and applied research},
  publisher = {Oxford University Press},
  pages = {153-171},
}
```

```bibtex
@unpublished{developmentofspokenlanguage,
  title = {Towards an integrative interactive approach to the development of spoken language fluency.},
  author = {Noiray, A.},
  year = {2022},
  note = {Habilitation à Diriger des Recherches (HDR). Presented publically at Université Lyon 2.}
}
```

```bibtex
@misc{mampf2021,
  author = {Aude Noiray},
  title = {Towards an integrative-interactive approach to spoken language development},
  event = {Colloque Mampf},
  location = {LMU, Munich},
  date = {15 juillet},
  year = {2021}
}
```

---

### Supprimer une publication

1. Identifier dans quelle catégorie se trouve la publication à supprimer.
2. Trouver et ouvrir le fichier .bib correspondant : [book-chapters.bib](_bibliography/book-chapters.bib), [conference.bib](_bibliography/conference.bib), [dissertation.bib](_bibliography/dissertation.bib) et [peer-reviewed.bib](_bibliography/peer-reviewed.bib).
3. Rechercher l'entrée à supprimer.
   Une entrée est sous cette forme :

```bibtex
@article{NomCle,
...}

-- ou

@inproceedings{NomCle,
...}
```

4. Supprimer l'ensemble du bloc correspondant à la publication.
   Il faut veiller à bien supprimer l'ensemble de l'entrée.

---

### Ajouter un co-auteur

Les co-auteurs permettent de rendre les nom des auteurs dans les publications cliquables, en les associant à leur site web personnel.

Cette association est gérée dans le fichier [\_data/coauthors.yml](_data/coauthors.yml).

Chaque co-auteur est défini par une clé qui correspond à son **nom de famille en minuscules et sans accents**, et comprend :

- une liste des différentes formes possibles de son prénom qui peuvent apparaître dans les publications (prénom complet, initiale, initiale avec un point, etc.)

- l'URL vers son site personnel.

Pour ajouter un co-auteur, il faut insérer une nouvelle entrée dans le fichier [\_data/coauthors.yml](_data/coauthors.yml), en suivant ce format :

```yaml
"nom_de_famille":
  - firstname: ["P", "P.", "Prénom"]
    url: https://nom_prenom.com
```

## Page projects

### Ajouter un projet

1. Créer un nouveau fichier .md dans le dossier [\_projects/](_projects/), par exemple `nouveau-projet.md`.

2. Copier-coller dans ce fichier le modèle ci-dessous et le modifier avec les informations spécifiques du projet.
   Ce fichier doit être écrit en markdown ou en html. Plus d'informations dans les sections [Guide Html](#guide-html) ou [Guide Markdown](#guide-markdown). Privilégier plutôt le markdown qui est plus simple. Le langage HTML peut servir principalement pour de la mise en page plus complexe comme l'insertion de photos à une certaine taille, etc.

```markdown
---
layout: page
title: TITRE_DU_PROJET
description: courte description du projet visible sur la page principale (optionnel)
img: /assets/img/projects/image-projet.png  (optionnel)
importance: 1
---

Texte du projet

---

### Collaborators

NOM Collaborateur 1, NOM Collaborateur 2, etc.

---

### Publications

**Peer-reviewed publications**:  
Auteur, A., Auteur, B. (année). _Titre de l'article_. _Nom de la revue_, volume(numéro), pages. [lien]

**Communications**:  
Auteur, A., & Auteur, B. (année). _Titre de la présentation_. _Nom de la conférence_, date, lieu.

---

### Fundings

**Period**: AAAA–AAAA

Organisme de financement, programme (référence du projet)

<img src="/assets/img/fundings/logo-funding.png" alt="logo" style="height:100px; vertical-align:middle; margin-left:5px;">
```

- Il est possible de supprimer complètement une section si elle n'est pas nécessaire (par exemple : Fundings), en supprimant toute la partie du fichier qui y fait référence.

- Pour ajouter une image, placer la dans le dossier [assets/img/](assets/img/) ou dans le dossier [assets/img/fundings](assets/img/fundings/) pour le logo d'un financeur. Il est possible de créer d'autre dossier dans [img/](assets/img/), il faut juste toujours faire attention de mettre le bon chemin dans le fichier .md.

- Le champ `importance` dans l'en tête détermine l'ordre d'affichage des projets dans l'onglet projet du site web. Plus la valeur est petite, plus le projet s'affiche en haut de la page.

3. Pour ajouter une image sur la page avec les onglets des différents projets, mettre l'image dans le dossier [assets/img/projects](assets/img/projects/). Dans l'en tête du fichier, met le nom de l'image dans la ligne `image: assets/img/projects/nom-img.png`.

---

### Supprimer un projet

Dans le dossier [\_projects/](_projects/), supprimer le fichier .md associé au projet.

## Page cv

### Structure générale

Toutes les informations de la page CV du site sont enregistrées dans un seul fichier : [assets/json/resume.json](assets/json/resume.json).

Ce fichier est organisé en **blocs**, chacun correspondant à une section du CV :

- `basics` - Informations générales
- `education` - Education
- `professional experiences` - Professional experiences
- `fundings` - Third-Part Funding, Scholarships & Awards
- `collaboration` - Collaborations on Funded Projects
- `scientificActivities` - Other Scientific Activities
- `supervision` - Student (Co)-Supervision
- `organization` - Organization of Scientific Events
- `trainingActivities` - Training Activities
- `reviewing` - Reviewing Services

Chaque bloc est de la forme :

```json
"bloc1" : [
  {
    "clé1": "valeur1",
    "clé2": "valeur2",
    "clé3": "valeur3"
  },
  {
    "clé1": "valeur4",
    "clé2": "valeur5",
    "clé3": "valeur6"
  }
],
"bloc2" : [
  {
    "cléA": "valeur7",
    "cléB": "valeur8",
    "cléC": "valeur9"
  }
]
```

Chaque élément dans un bloc est écrit entre `{ }`, sous forme de paires clé-valeur.

### Ajouter une nouvelle entrée

1. Repérer le bon bloc dans le fichier.

2. Copier-coller un exemple d'élément du bloc concernée (exemples pour chaque blocs disponibles dans le paragraphe [Détail des champs possibles par section](#détail-des-champs-possibles-par-section)).

3. Modifier les valeurs et supprimer les champs inutiles.

4. Vérifier la mise en page (accolades, virgules...). Si il y a une erreur dans la mise en page du fichier [resume.json](assets/json/resume.json), rien ne s'affichera sur la page web.

### Détail des champs possibles par section

- `education`

```json
{
  "studyType": "Nom du diplôme ou de la formation",
  "degree": "Domaine ou section (optionnel)",
  "institution": "Etablissement de la formation",
  "location": "Ville (optionnel)",
  "year": "Année d'obtention, format AAAA",
  "details": ["Informations complémentaires (optionnel)", "Mettre une info par ligne entre guillement", "et séparé chaque ligne par une virgule"]
}
```

- `professional experiences`

```json
{
  "position": "Intitulé du poste",
  "place": "Nom du laboratoire ou de l'unité",
  "location": "Université ou organisme, pays",
  "startDate": "Format AAAA, date de début",
  "endDate": "Format AAAA, date de fin (laisser guillement vide si en cours)"
}
```

- `fundings` - Third-Part Funding, Scholarships & Awards

```json
{
  "title": "Nom du financement, prix ou bourse",
  "place": "Nom de l'organisme financeur (optionnel)",
  "date": "Date de début, format AAAA",
  "endDate": "format AAAA, date de fin (laisser vide ou supprimer le champs si date de début et de fin sont les mêmes) (optionnel)",
  "amount": "Montant (optionnel)",
  "coauthors": "Co-auteurs si prix partagé (optionnel)",
  "details": ["Informations complémentaires (optionnel)", 
    "Mettre une info par ligne entre guillement", "et séparer chaque ligne par une virgule"]
}
```

- `collaboration` - Collaborations on Funded Projects

```json
{
  "project": "Titre du projet",
  "date": "Période (format libre ou 'AAAA - AAAA')",
  "funder": "Organisme financeur",
  "pi": "Nom du (ou des) PI"
}
```

- `scientificActivities` - Other Scientific Activities

```json
{
  "date": "Année ou période de l'activité (format AAAA ou AAAA - AAAA)",
  "title": "Titre ou fonction",
  "description": "Texte descriptif ou rôle détaillé"
}
```

- `supervision` - Student (Co)-Supervision

```json
{
  "date": "Année ou période de supervision (format AAAA ou AAAA - AAAA)",
  "name": "Nom de la personne supervisée",
  "level": "Niveau du projet (`PhD project` ou  `Post-doctoral project`)",
  "title": "Titre ou description du projet",
  "institution": "Etablissement ou université",
  "note": "Lien vers la thèse, mention complémentaire..."
}
```

- `organization` - Organization of Scientific Events

```json
{
  "date": "Année ou période (format AAAA ou AAAA - AAAA)",
  "event": "Nom de l'événement",
  "location": "Lieu de l'événement",
  "role": "Rôle joué dans l'organisation",
  "details": ["Informations complémentaires (optionnel)", 
    "Une information par ligne entre guillement et chaque ligne séparée par des virgules."]
}
```

- `trainingActivities` - Training Activities

```json
{
  "year": "format AAA",
  "date": "Date précise ou plages de dates (sans l'année)",
  "title": "Titre de l'intervention",
  "location": "Lieu",
  "note": "Infos complémentaires (optionnel)"
}
```

- `reviewing` - Reviewing Services

```json
{
  "category": "Nom de la catégorie",
  "items": ["Liste des éléments associés à cette catégorie", 
    "Un élément par ligne entre guillement et chaque ligne séparée par des virgules."]
}
```

## Page teaching

Les informations de la page Teaching sont stockées dans le fichier [\_data/teaching.yml](_data/teaching.yml). Chaque poste correspond à une entrée dans ce fichier.

Pour **ajouter un poste d'enseignement** :

1. Ouvrir le fichier [\_data/teaching.yml](_data/teaching.yml).

2. Copier-coller un bloc existant et adapter les valeurs.
   Exemple de bloc à copier :

```yaml
- date: "Période (par exemple : 2014-2019)"
  role: "Intitulé du rôle"
  institution: "Nom de l'université"
  programmes:
    - Liste des parcours ou formations concernés par le cours
    - Une formation par tiret
```

## Page team

### Ajouter un membre

1. Aller dans le **dossier [\_pages/team](_pages/team)**.

2. Créer un **nouveau fichier en .md** pour le nouveau membre, par exemple **nomprenom.md** (sans espace ni accent).

3. **Rédiger le contenu du fichier** en markdown (exemple ci-dessous).

- Ouvrir le fichier **nomprenom.md**.
- Exemple de contenu à utiliser :

```markdown
## [Prénom Nom](https://lien-vers-sa-page-personnelle.fr)

ou juste

## Prénom Nom (si la personne n'a pas de page personnelle)

Texte de présentation de la personne.
Pour ajouter des liens dans le texte, écrit le texte cliquable entre crochet, suivi entre parenthèse du lien, par exemple :
[Nom du projet](https://lien-du-projet.com)
```

4. Ajouter cette personne dans le fichier [\_pages/profiles.md](_pages/profiles.md)

- Ouvrir le fichier [profiles.md](_pages/profiles.md).
- Dans la section qui commence par `profiles: ...`, il y a une liste de bloc de ce type :

```markdown
profiles:

# Aude

- align: right
  image: prof_pic.jpg
  content: team/aude.md

# Suzanne Fuchs

- align: left
  content: team/suzannefuchs.md

# Elina Rubertus

- align: right
  content: team/elinarubertus.md
```

- **Ajouter un nouveau bloc** à la suite des autres, sous le même format, en remplaçant par le lien du fichier .md créé.

```markdown
# Nouveau membre

- align: right
  content: team/nomprenom.md
```

- La ligne `align: left` ou `align: right` permet d'alterner le côté d'affichage des photos (si il y en a).

5. **Ajouter une photo** (optionnel).

- Placer une image de la personne dans le dossier [assets/img](assets/img).
- Dans le bloc [profiles.md](_pages/profiles.md), ajoute une ligne `image: ...` avec le nom de l'image.

```markdown
# Nouveau membre

- align: right
  image: assets/img/nomprenom.png
  content: team/nomprenom.md
```

---

### Modifier le profil d'un membre

Il est possible de modifier le texte, les liens ou la photo d'un membre de la page Team.

Pour modifier le **texte de présentation**, trouver le fichier correspondant dans le dossier [\_pages/team](_pages/team) et apporter les modififations nécessaires.

Pour **modifier ou ajouter une photo de profil**, placer la nouvelle photo de la personne dans le dossier [assets/img](assets/img) et dans le bloc du fichier [profiles.md](_pages/profiles.md) correspondant, ajoute une ligne `image: ...` avec le nom de l'image ou remplacer par le nom de la nouvelle photo.

Pour **supprimer la photo**, supprimer la ligne `image: ...` dans le bloc du fichier [profiles.md](_pages/profiles.md) correspondant à la personne.

---

### Supprimer un membre

1. Dans le fichier [\_pages/profiles.md](_pages/profiles.md), repère le bloc du membre à enlever et le supprimer.

2. Dans le dossier [\_pages/team](_pages/team), supprimer le fichier .md du membre à enlever. (optionnel)

3. Si une image avait été ajoutée pour cette personne dans [assets/img](assets/img), tu peux aussi la supprimer. (optionnel)

## Guide HTML

### Mettre du texte en italique

Encadrer le texte à mettre en italique par les balises `<em>texte italique</em>`.

### Mettre en gras

### Mettre un lien

### Sauter une ligne

## Guide MarkDown

### Mettre en italique

### Mettre en gras

### Mettre un lien
