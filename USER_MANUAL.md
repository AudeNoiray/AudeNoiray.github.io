# Manuel utilisateur

Ce manuel utilisateur explique comment personnaliser le site web avec des instructions pour modifier le texte, les images et les différentes sections. Il est organisé en fonction des différents onglets du site, avec pour chacun les modifications possibles à effectuer.

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

Modifier le texte situé après l’en-tête du fichier pour changer le contenu principal de la page.

---

### Modifier la photo de profil

Placer la nouvelle photo dans le dossier asset/img/.
Dans le fichier [\_pages/about.md](_pages/about.md) remplacer le nom du fichier image à la ligne 9 (image : …) par le nom de la nouvelle photo.

---

### Modifier le texte sous la photo

Dans le fichier [\_pages/about.md](_pages/about.md), trouver la section profile → more_info (ligne 11 environ).
Remplacer le texte à cet endroit (le texte est écrit en HTML, chaque ligne doit être encadrée par les balises \<p>...\</p>).

---

### Gérer les "selected publications"

Les publications affichées sur la page about proviennent du fichier [\_bibliography/papers.bib](_bibliography/papers.bib).

Pour **ajouter une publication** dans selected publications : trouver la publication correspondante dans le fichier et ajouter la ligne _selected = {true}_ (faire attention aux virgules, chaque ligne de l'entrée de publication se termine par une virgule sauf la dernière).

Pour **supprimer une publication** : trouver la publication correspondante dans le fichier et supprimer la ligne selected = {true} (faire attention aux virgules).

---

### Gérer les réseaux sociaux

Ouvrir le fichier [\_data/socials.yml](_data/socials.yml).

Pour **ajouter un réseau social** : décommenter (supprimer le #) de la ligne correspondante au réseau souhaité et ajouter l’identifiant dans le champ correspondant.

Pour **supprimer un réseau social** : commenter la ligne du réseau à enlever (ajouter # au début de la ligne).

---

### Gérer les "news"

#### Modifier le nombre de news

Pour modifier le nombre de news qui s'affichent sur la page about : dans le fichier [\_pages/about.md](_pages/about.md), trouver la section annoucements → limit (ligne 21) et modifier le nombre.

#### Supprimer une news

Dans le dossier [\_news](_news), supprimer le fichier correspondant à la news à supprimer.

#### Ajouter une news

Dans le dossier [\_news](_news), créer un nouveau fichier avec un nom en .md (par exemple : nouvelle-news.md).
Rédiger la news en suivant un des deux formats possibles :

- **News courte** : la news apparaît sur une seule ligne et n'est pas cliquable (par exemple : le fichier [\_news/voc2speak.md](_news/voc2speak.md)).

Format à utiliser : (remplacer la date dans l'en-tête et le corps du texte)

```yaml
---
layout: post
date: 2024-06-10
inline: true
---
Nom de la news qui s'affiche sur la page about et dans la page archive.
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
Ce texte peut être écrit en HTML si besoin d’une mise en page spécifique (cf. Guide HTML).
```

## Page archives

La page _archives_ permet d'afficher l'ensemble des **news** ajoutées au site. Elle répertorie chronologiquement toutes les actualités.  
Pour **ajouter ou supprimer des news**, voir la section correspondante dans la [page about](#gérer-les-news).

## Page publications

### Organisation des publications

Toutes les publications sont stockées dans le fichier [\_bibliography/papers.bib](_bibliography/papers.bib), au format BibTex.

Les publications sont regroupées selon 4 catégories :

- **Peer-reviewed publications**
- **Book chapters with reviewing committee**
- **Academic dissertations**
- **Peer-reviewed presentations in conferences**

A l'intérieur de chaque catégorie, les publications sont triés par ordre chronologique décroissant.

L'ordre des publications dans le fichier n'a pas d'impact sur l'affichage final du site mais permet de garder le fichier propre, lisible et facile à maintenir.

---

### Ajouter une publication

1. **Ouvrir le fichier [\_bibliography/papers.bib](_bibliography/papers.bib)**

Toutes les publications sont enregistrées dans ce fichier, il faut l'éditer pour ajouter une nouvelle publication.

2. **Choisir le bon type de publication** : `@article`, `@inproceedings` ou `@incollection`

| Type             |                               Utilisation                                |
| ---------------- | :----------------------------------------------------------------------: |
| `@article`       |          Pour les articles parus dans des revues scientifiques           |
| `@inproceedings` | Pour les communications publiées dans les actes de colloques/conférences |
| `@incollection`  |                   Un chapitre dans un livre collectif                    |

3. **Créer une nouvelle entrée dans le fichier**

Ajouter un bloc comme celui-ci dans le fichier [\_bibliography/papers.bib](_bibliography/papers.bib), en remplaçant les valeurs par les informations de la publication :

```bibtex
@article{NomCle,
  author = {Nom, Prénom and Nom2, Prénom2},
  title = {Titre de la publication},
  year = {2025},
  category = {Peer-reviewed publications}
}

-- ou

@inproceedings{NomCle,
  author = {Nom, Prénom and Nom2, Prénom2},
  title = {Titre de la publication},
  year = {2025},
  category = {Peer-reviewed publications}
}
```

**À noter :**

- La clé `NomCle` et les champs `author`, `title`, `year` et `category` doivent être **obligatoirement rempli**.

- `NomCle` est un **identifiant unique**, appelé clé BibTex. Il doit être **différent pour chaque publication** du fichier. Il n'est **jamais affichée sur le site** (son seul but est de servir d'identifiant interne) et il peut être choisie librement.

- Le champ `author` doit respecter une **syntaxe stricte** pour que l'affichage fonctionne : les auteurs sont séparés par `and` et chaque auteur est écrit sous la forme `NomDeFamille, Initiale.`. Par exemple :

```bibtex
author = {Nom1, A. and Nom2, B. and Nom3, C.}
```

- Chaque champ est écrit sur une ligne distincte, la valeur du champ est toujours entre **accolades** et chaque ligne se termine par une **virgule** `,` (sauf la dernière) :

```bibtex
nomduchamp = {valeurs},
```

- Le champ `category` doit correspondre **exactement** à l'une des 4 catégories suivantes (respecter les majuscules, espaces, orthographe) :
  - `Peer-reviewed publications`
  - `Peer-reviewed presentations in conferences`
  - `Book chapters with reviewing committee`
  - `Academic dissertations`.

4. **Ajouter les champs optionnels nécessaires**

Selon le type de la publication, certains champs peuvent être ajoutés pour donner plus d'informations.

| Champ       |                Description                |               Type                |
| ----------- | :---------------------------------------: | :-------------------------------: |
| `journal`   |              Nom de la revue              |            `@article`             |
| `booktitle` | Titre du livre ou des actes de conférence | `@inproceedings`, `@incollection` |
| `volume`    |            Volume de la revue             |                                   |
| `number`    |            Numéro de la revue             |                                   |
| `pages`     |        Plage de pages (ex: 18-14)         |                                   |
| `publisher` |             Maison d'édition              |          `@incollection`          |
| `editor`    |             Editeur du livre              |          `@incollection`          |
| `location`  |           Lieu de la conférence           |         `@inproceedings`          |
| `month`     |           Mois de présentation            |         `@inproceedings`          |
| `url`       |      Lien direct vers la publication      |                                   |

Quelques exemples d'entrées de publications :

```bibtex
@article{agerelateddifferencesincoherence2021,
  title = {Age-related differences in coherence between brain activation and speech envelope at word and sentence levels},
  author = {Kolozsvári°, O. and  Xu. W and Parviainen, T. and Nieminen, L. and Noiray, A. and Hämäläinen, J},
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
  title={Articulating while listening? The perception-production link in pre-babbling infants},
  author={Frota, S. and Severino, C. and Pejovic, J. and Paulino, N. and Vigário, M. and  Noiray, A},
  year={2025},
  booktitle = {Conférence Phonology and Phonetics in Europe (PaPe)},
  pages = {2p},
  category = {Peer-reviewed presentations in conferences}
}
```

```bibtex
@incollection{liproundinganticipatory2010,
  title={Lip Rounding Anticipatory Control: Crosslinguistically Lawful and Ontogenetically Attuned},
  author={Noiray, A. and Cathiard, M.A. and Abry, C. and Ménard, L},
  year={2010},
  editors={ F. Gayraud and E. Marsico},
  booktitle = {Speech Motor Control: New developments in basic and applied research},
  publisher={Oxford University Press},
  pages = {153-171},
  category = {Book chapters with reviewing committee}
}
```

---

### Supprimer une publication

Les publications sont répertoriées dans le fichiers [\_bibliography/papers.bib](_bibliography/papers.bib). Pour supprimer une publication du site, il faut supprimer l'entrée correspondante dans ce fichier.

Une entrée commence par une ligne de ce type :

```bibtex
@article{NomCle,
...}

-- ou

@inproceedings{NomCle,
...}
```

et se termine par une accolade fermante.
Il faut veiller à bien supprimer l'ensemble de l'entrée.

---

### Ajouter un co-auteur

Les co-auteurs permettent d'associer les nom des auteurs des publications à leurs sites webs.

Cette association est gérée dans le fichier [\_data/coauthors.yml](_data/coauthors.yml).

Chaque co-auteur est défini par une clé qui correspond à son **nom de famille en minuscules**, et comprend :

- une liste des différentes formes possibles de son prénom qui peuvent apparaître dans les publications (prénom complet, initiale, initiale avec un point, etc.)

- une URL vers son site personnel.

Pour ajouter un co-auteur, il faut insérer une nouvelle entrée dans le fichier [\_data/coauthors.yml](_data/coauthors.yml), en suivant ce format :

```yaml
"nom_de_famille":
  - firstname: ["P", "P.", "Prénom"]
    url: https://nom_prenom.com
```

## Page projects

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
- `organization` - Organization of Conferences, Workshops & Scientific Events
- `trainingActivities` -Training Activities
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
],
...
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
  "details": ["Informations complémentaires (optionnel)", "Mettre une info par ligne entre guillement", "et séparer chaque ligne par une virgule"]
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

- `organization` - Organization of Conferences, Workshops & Scientific Events

```json
{
  "date": "Année ou période (format AAAA ou AAAA - AAAA)",
  "event": "Nom de l'événement",
  "location": "Lieu de l'événement",
  "role": "Rôle joué dans l'organisation",
  "details": ["Informations complémentaires (optionnel)", "Une information par ligne entre guillement et chaque ligne séparée par des virgules."]
}
```

- `trainingActivities` -Training Activities

```json
{
  "year": "format AAA",
  "date_detail": "Date précise ou plages de dates (sans l'année)",
  "title": "Titre de l'intervention",
  "location": "Lieu",
  "note": "Infos complémentaires (optionnel)"
}
```

- `reviewing` - Reviewing Services

```json
{
  "category": "Nom de la catégorie",
  "items": ["Liste des éléments associés à cette catégorie", "Un élément par ligne entre guillement et chaque ligne séparée par des virgules."]
}
```

## Page teaching

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

Mettre en italique

Mettre en gras

Mettre un lien

Sauter une ligne

## Guide MarkDown

Mettre en italique

Mettre en gras

Mettre un lien
