// Boussole — script minimal, chargé avec defer.
// Le site reste utilisable sans JavaScript : ce fichier ajoute du confort,
// jamais une fonction indispensable à la lecture du contenu.
(function () {
  "use strict";

  /* --- Bouton « Quitter le site » : remplace la page, sans retour arrière possible --- */
  var boutonSortie = document.querySelectorAll("[data-quitter-site]");
  var SITE_NEUTRE = "https://www.meteofrance.com";

  function quitterLeSite() {
    window.location.replace(SITE_NEUTRE);
  }

  boutonSortie.forEach(function (bouton) {
    bouton.addEventListener("click", quitterLeSite);
  });

  if (boutonSortie.length > 0) {
    document.addEventListener("keydown", function (evenement) {
      if (evenement.key === "Escape") {
        quitterLeSite();
      }
    });
  }

  /* --- Formulaires en mode démonstration ---
     Aucune donnée n'est envoyée : l'AIPD et les documents juridiques ne sont
     pas encore faits. On valide le formulaire, puis on affiche un message
     de confirmation à la place.
     Pour brancher un envoi réel plus tard : remplacer le contenu de cette
     fonction par un appel fetch() vers le service choisi. */
  var formulairesDemo = document.querySelectorAll("[data-formulaire-demo]");

  formulairesDemo.forEach(function (formulaire) {
    formulaire.addEventListener("submit", function (evenement) {
      evenement.preventDefault();

      if (!formulaire.checkValidity()) {
        formulaire.reportValidity();
        return;
      }

      var confirmation = formulaire.querySelector("[data-formulaire-confirmation]");
      var champs = formulaire.querySelectorAll(".champ, .champ--case, .bouton--principal");

      champs.forEach(function (champ) {
        champ.hidden = true;
      });

      if (confirmation) {
        confirmation.hidden = false;
        confirmation.focus();
      }
    });
  });
})();
