# Tempo

*Tempo* : « le temps » et « le rythme », en italien.

Un agenda pensé autrement, pour une seule personne, qui sépare **ce qui revient** de **ce qui arrive**.

## Principes

1. **Séparer ce qui revient de ce qui arrive.** La trame (sans date, stable) en fond ; la semaine réelle par-dessus.
2. **L'habillage de Corsia** : mêmes couleurs, mêmes polices, même sobriété.
3. **À l'ouverture, la journée en cours.** La semaine est à un geste, avec la rangée de jours en haut.

## Comment ça marche

- **Mes trames** : une trame par type de période (périodes de cours, sans cours…). Chaque trame est une semaine type faite de blocs : un jour, une catégorie, une heure de début et de fin.
- **Mes périodes** : quelle trame s'applique du … au …. Un congé est une période sans trame. Quand deux périodes se chevauchent, la plus récemment ajoutée l'emporte (un congé au milieu d'une période de cours, par exemple). En dehors des périodes, une trame par défaut, ou rien.
- **Ma journée** (écran d'ouverture) : les blocs du jour, avec « En cours », « Ensuite », le temps libre entre deux blocs et une ligne violette pour l'heure qu'il est. En haut, les 14 prochains jours, avec un point par catégorie et un cadre en pointillés pour les congés.
- **Reprendre de Ma trame** : le fichier exporté par Ma trame s'importe une fois ; chaque modèle devient une trame, les catégories gardent leur nom et leur couleur.

## Données

Tout reste sur le téléphone (stockage local, préfixe `tempo.`). Pas de serveur, pas de compte, pas d'accès à l'agenda du téléphone, aucun appel extérieur (les polices sont hébergées avec l'appli).

Sur iPhone, l'appli installée sur l'écran d'accueil a son propre stockage, séparé de Safari : la **sauvegarde** (fichier JSON) sert à changer de téléphone ou à réinstaller.

## À venir

- Les rendez-vous et les exceptions d'un jour (la semaine réelle).
- Les séances de Corsia, par son lien de secours.

## Fichiers

- `index.html` : l'appli (HTML, CSS, JavaScript), avec `VERSION` affichée en bas de l'écran.
- `sw.js` : mise en cache hors connexion — **augmenter `CACHE_NAME` à chaque mise à jour**.
- `manifest.webmanifest`, `icones/`, `polices/`.

## Crédits

- Polices : Fraunces et Atkinson Hyperlegible, licence SIL OFL 1.1 (voir `polices/`).
