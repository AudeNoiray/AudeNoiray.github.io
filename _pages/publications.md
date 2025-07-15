---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<style>
.category-menu {
  display: flex;
  flex-direction: column; /* empile verticalement */
  align-items: flex-start; /* alignement à gauche */
  gap: 0.5em; /* espace entre les boutons */
}
</style>

(\*authors whose postdoctoral or ^ doctoral project I supervised)

<div id="menu-categories" class="category-menu">
  <button data-cat="peer-reviewed">Peer-reviewed publications</button>
  <button data-cat="conference">Conferences and Invited Talks</button>
  <button data-cat="book-chapters">Book chapters</button>
  <button data-cat="dissertations">Academic dissertations</button>
  <button data-cat="workshops">Workshops</button>
</div>

<div class="publications" id="peer-reviewed">
  <h2>Peer-reviewed publications</h2>
  {% bibliography --file peer-reviewed.bib %}
</div>

<div class="publications" id="conference" style="display:none;">
  <h2>Conferences and Invited Talks</h2>
  {% bibliography --file conference.bib %}
</div>

<div class="publications" id="book-chapters" style="display:none;">
  <h2>Book chapters</h2>
  {% bibliography --file book-chapters.bib %}
</div>

<div class="publications" id="dissertations" style="display:none;">
  <h2>Academic dissertations</h2>
  {% bibliography --file dissertations.bib %}
</div>

<div class="publications" id="workshops" style="display:none;">
  <h2>Workshops</h2>
  {% bibliography --file workshops.bib %}
</div>

---

<script>
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-categories');
  const sections = document.querySelectorAll('.publications');

  menu.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
      const cat = button.getAttribute('data-cat');

      sections.forEach(section => {
        section.style.display = (section.id === cat) ? 'block' : 'none';
      });
    });
  });
});
</script>
