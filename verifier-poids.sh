#!/usr/bin/env bash
# Affiche le poids total et le nombre de requêtes de chaque page du site,
# ressources locales comprises (CSS, JS, images). Objectif du prompt :
# moins de 150 Ko et 5 requêtes maximum par page.
set -euo pipefail

DOSSIER="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DOSSIER"

printf "%-26s %14s %10s\n" "Page" "Poids total" "Requêtes"
printf "%-26s %14s %10s\n" "--------------------------" "------------" "--------"

for page in *.html; do
  poids_total=$(wc -c < "$page")
  nb_requetes=1

  # On ne compte que les ressources du site (dossier assets/) : les liens
  # vers les autres pages HTML ne sont pas des requêtes déclenchées par
  # l'affichage de la page elle-même.
  ressources=$(grep -oE '(href|src)="[^"]+"' "$page" 2>/dev/null \
    | sed -E 's/^(href|src)="//; s/"$//' \
    | grep -E '^assets/' | sort -u || true)

  while IFS= read -r ressource; do
    [ -z "$ressource" ] && continue
    if [ -f "$ressource" ]; then
      taille=$(wc -c < "$ressource")
      poids_total=$((poids_total + taille))
      nb_requetes=$((nb_requetes + 1))
    fi
  done <<< "$ressources"

  poids_ko=$(awk -v o="$poids_total" 'BEGIN { printf "%.1f", o / 1024 }')
  printf "%-26s %11s Ko %8s\n" "$page" "$poids_ko" "$nb_requetes"
done

echo
echo "Rappel : la feuille de style et le script (assets/css, assets/js) sont"
echo "mis en cache par le navigateur après la première page visitée : le"
echo "poids réel des pages suivantes, lors d'une même visite, est donc"
echo "encore plus faible que ce tableau (calculé pour une visite \"à froid\")."
