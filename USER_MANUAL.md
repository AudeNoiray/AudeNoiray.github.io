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
    - [Supprimer une publication](#supprimer-une-publication)
    - [Ajouter une publication](#ajouter-une-publication)
    - [Ajouter un co-auteur](#ajouter-un-co-auteur)
  - [Page projects](#page-projects)
  - [Page cv](#page-cv)
  - [Page teaching](#page-teaching)
  - [Page team](#page-team)
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

### Supprimer une publication

---

### Ajouter une publication

---

### Ajouter un co-auteur

## Page projects

## Page cv

## Page teaching

## Page team

## Guide HTML
