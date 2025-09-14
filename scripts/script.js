const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fermer le menu quand on défile
window.addEventListener('scroll', () => {
  nav.classList.remove('active');
});



// ----- Affichage des cartes d'actus -----
const container = document.getElementById("actus-container");

if (container) { // Exécute uniquement si on est sur la page index
  actualites.forEach(actu => {
    const card = document.createElement("a");
    card.href = `article.html?id=${actu.id}`;
    card.className = "actu-card";

    card.innerHTML = `
      <img src="${actu.image}" alt="${actu.titre}">
      <h3>${actu.titre}</h3>
      <p>${actu.extrait}</p>
    `;

    container.appendChild(card);
  });
}

