// Boussole — script minimal, chargé avec defer.
// Le site reste utilisable sans JavaScript : ce fichier ajoute du confort,
// jamais une fonction indispensable à la lecture du contenu.
(function () {
  "use strict";

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

  /* --- Présélection du type de soutien depuis le lien cliqué ---
     Un bouton peut pointer vers "?type=dossier#formulaire" pour présélectionner
     une option du formulaire de la page "Financeurs". Sans JavaScript, le
     visiteur arrive simplement sur le formulaire sans présélection : rien
     n'est cassé. */
  var selectTypeSoutien = document.querySelector("#fin-type");

  if (selectTypeSoutien) {
    var typeDemande = new URLSearchParams(window.location.search).get("type");

    for (var i = 0; i < selectTypeSoutien.options.length; i++) {
      if (selectTypeSoutien.options[i].value === typeDemande) {
        selectTypeSoutien.value = typeDemande;
        break;
      }
    }
  }
})();
