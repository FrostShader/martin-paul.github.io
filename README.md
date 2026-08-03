# Blog

Ce site utilise astro.
Il est visible sous https://martin-paul.fr/

## Installation

Dans un terminal : `sudo apt install git node`

Installer vscode pour pouvoir éditer le site.

## Pour mettre en ligne un article

- créer ou modifier les fichiers sous le répertoire "content"
- astuce : vous pouvez prévisualiser sur vscode en tappant CTRL+SHIFT+P puis en tappant "preview markdown" : une fenêtre s'ouvrira avec le contenu formaté
- ouvrir un terminal sous vscode
- taper `npm run dev` et ouvrez un navigateur à l’adresse http://localhost:4321/ pour tester le site
- taper `npm run build`  pour générer le site
- si ok, commiter et pousser les fichiers via git
- ensuite, publier le blog en tappant `./to_ghpages` dans le terminal (il est possible qu'il faille se connecter sur github)

## Liens

- Guide markdown : https://code-garage.fr/blog/le-guide-simplifie-sur-la-syntaxe-markdown
