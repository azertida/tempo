# Tempo

*Tempo* : « le temps » et « le rythme », en italien.

Un agenda pensé autrement, pour une seule personne, qui sépare **ce qui revient** de **ce qui arrive**.

## Principes

1. **Séparer ce qui revient de ce qui arrive.** La trame (sans date, stable) en fond ; la semaine réelle par-dessus.
2. **L'habillage de Corsia** : mêmes couleurs (palette des catégories accordée à Corsia, le bleu en tête), mêmes polices, même sobriété.
3. **À l'ouverture, la journée en cours.** La semaine est à un geste, avec la rangée de jours en haut.

## Comment ça marche

- **Mes trames** : une trame par type de période (périodes de cours, sans cours…). Chaque trame est une semaine type faite de blocs : un jour, une catégorie, une heure de début et de fin.
- **Mon calendrier** : les périodes, c'est-à-dire quelle trame s'applique du … au …. Un congé est une période sans trame. Quand deux périodes se chevauchent, la plus récemment ajoutée l'emporte (un congé au milieu d'une période de cours, par exemple). En dehors des périodes, une trame par défaut, ou rien.
- **Ma journée** (écran d'ouverture) : les blocs de la trame en teinte pâle et les rendez-vous en carte pleine, avec « En cours », « Ensuite », le temps libre entre deux blocs et une ligne violette pour l'heure qu'il est. En haut, les 14 prochains jours, avec un point par catégorie et un cadre en pointillés pour les congés.
- **Rendez-vous** (« + Rendez-vous » sur Ma journée) : un titre, une date, une heure de début et de fin, une catégorie facultative. Quand un rendez-vous tombe pendant un bloc de la trame, la carte l'indique (« pendant Club »). Toucher un rendez-vous permet de le modifier ou de le supprimer.
- **Plus tard** (sous Ma journée, replié par défaut) : les rendez-vous au-delà des 14 jours de la rangée, triés par date, pour vérifier ce qui est noté et les modifier.
- **Exceptions** : toucher un bloc de la trame, puis « Pas ce jour-là » ; il apparaît barré ce jour-là seulement, et la trame reste intacte.
- Les rendez-vous et exceptions passés depuis plus de 60 jours s'effacent tout seuls.
- **Corsia** (dans « Ce que Tempo garde ») : on colle le lien de secours de Corsia. Tempo y lit le cercle et les habitudes, puis demande au serveur de Corsia le programme des cours et les fermetures (au plus toutes les 30 minutes). Les séances habituelles apparaissent dans Ma journée en bleu clair, une heure chacune, sauf pendant les fermetures ; « Pas ce jour-là » fonctionne aussi pour elles. Les « cette fois » et « pas cette fois » restent dans Corsia ; si les habitudes changent, on recolle le lien.
- **Reprendre de Ma trame** : le fichier exporté par Ma trame s'importe une fois ; chaque modèle devient une trame, les catégories gardent leur nom et prennent les couleurs de Tempo (les couleurs de Ma trame ne sont pas reprises).

## Données

Tout reste sur le téléphone (stockage local, préfixe `tempo.`). Pas de serveur à soi (seule exception : si Corsia est liée, Tempo lit le programme des cours sur le serveur de Corsia, sans rien y envoyer de ses données), pas de compte, pas d'accès à l'agenda du téléphone, aucun appel extérieur (les polices sont hébergées avec l'appli).

Sur iPhone, l'appli installée sur l'écran d'accueil a son propre stockage, séparé de Safari : la **sauvegarde** (fichier JSON) sert à changer de téléphone ou à réinstaller.

## Fichiers

- `index.html` : l'appli (HTML, CSS, JavaScript), avec `VERSION` affichée en bas de l'écran.
- `sw.js` : mise en cache hors connexion — **augmenter `CACHE_NAME` à chaque mise à jour**.
- `manifest.webmanifest`, `icones/`, `polices/`.

## Crédits

- Polices : Fraunces et Atkinson Hyperlegible, licence SIL OFL 1.1 (voir `polices/`).
