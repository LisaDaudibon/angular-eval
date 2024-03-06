# Mediasquare - Évaluation Module Angular

Le but de cette évaluation est de créer un site de gestion de film.  
Partons du principe que notre serveur expose une API avec un catalogue de films qu'il récupère via une base de données.

![citation](./citation.png)

## Fonctionnalités principales

Dans l'ordre de priorité de développement voici le fonctionnalités que devra comporter l'application :

- Récupérer depuis l'API les films et les afficher (GET <http://localhost:3000/movies>)

- Permettre de gérer nos ressources films :
  - Ajouter (POST <http://localhost:3000/movies>)
  - Supprimer (DELETE <http://localhost:3000/movies/:id>)
  - Modifier (PUT <http://localhost:3000/movies/:id>)

- Avoir une gestion de favoris (nos films préférés) :
  - Pouvoir ajouter un film à nos favoris (PATCH <http://localhost:3000/movies/:id> en modifiant seulement la propriété favoris)
  - Pouvoir supprimer un film de nos favoris  (PATCH <http://localhost:3000/movies/:id> en modifiant seulement la propriété favoris)

- Rechercher un film via le moteur de recherche (GET <http://localhost:3000/movies?q=STRING>)

## Prérequis

L'application sera faite avec Angular (application déjà initialisée pour vous, c'est cadeau). Pour simuler notre serveur nous utiliserons le paquet `json-server` qui lit et écrit dans un fichier JSON et génère une **API**. Pour cela vous aurez besoin de lancer en parallèle le front et l'API dans **deux terminaux différents**.

Pour lancer l'application :

```bash
npm run start
```

Pour lancer l'API :

```bash
npm run api:start
```

Accessible à l'adresse [suivante](http://localhost:3000/) une fois lancée (**vérifiez bien que votre API marche sinon je suis là**).

# Intégration des maquettes

Les maquettes des différentes pages sont dans le dossier `graphics`.

Le HTML à récupérer et à découper se trouve dans le dossier `templates` (une partie a déjà était découpée pour vous, c'est cadeau).
**N'est pas fourni le html des pages de formulaires.**
Le style fourni est dans `src/styles.scss`. Oui, du SCSS mais pas de panique vous pouvez faire du CSS dans vos composants. Et ça ressemble beaucoup à du CSS.

Plusieurs composants sont fournis pour vous aider à démarrer votre projet.

## Layout global aka _App Shell_

- Au clic sur le logo on retourne sur la page d'accueil
- La navigation de droite mène sur deux routes (page d'accueil et mes favoris)

## Page d'accueil

- Les cartes (film) sont **cliquables** et permettent de naviguer sur la page de **détails du film**
- L'**étoile** après le titre du film **ajoute ou supprime le film des favoris** (pas de navigation vers mes favoris)
- Le bouton **ajouter un film** emmène vers la page d'**ajout de film** (formulaire)

## Ajouter un film / modifier un film

- Formulaire d'ajout et modification d'un film qui doit envoyer une requête **POST** (ajout) / **PUT** (modification) sur l'API avec les bonnes données
  - ce formulaire doit être géré dans un composant spécifique (movie-form)
  - il doit prendre en entrée un film (cas d'une modification) ou undefined (cas d'un ajout)
  - il doit remonter un événement lors du click sur le bouton submit au parent avec les données renseignées par l'utilisateur
- Tous les champs sont obligatoires **SAUF** l'URL de l'image
- Le formulaire doit avertir l'utilisateur s'il y a des erreurs, des champs obligatoires ou pas
- Une fois le formulaire validé on retourne sur la page d'accueil (le nouveau film doit apparaître).
- La catégorie du film sera traité comme une chaîne de caractère et il faudra utiliser `.split(', ')` pour créer un tableau à partir de cette chaîne avant d'envoyer les données à l'API. Exemple: "comédie, science-fiction" => ['comédie', 'science-fiction']
- Les valeurs seront pré-remplis dans les différents champs du formulaire dans le cas d'une modification d'un film

Exemple de payload envoyé à l'API pour ajouter un film :

```json
{
  "title": "Mourir peut attendre",
  "picture": "https://fr.web.img5.acsta.net/pictures/20/04/21/16/11/1133098.jpg",
  "synopsis": "Bond a quitté les services secrets, mais son repos est de courte durée lorsque son vieil ami Felix Leiter de la CIA lui demande son aide, ce qui entraîne Bond sur la piste d'un ennemi armé de nouvelles armes technologiques redoutables.",
  "release_date": 2021,
  "realisator": "Cary Joji Fukunaga",
  "rating": 7.6,
  "categories": ["Espionnage"]
}
```

## Détail d'un film

- Au clic sur le crayon nous irons vers la page de **modification du film** (très similaire normalement à l'ajout, peut être mutualiser les deux ?)
- Au clic sur la poubelle on supprime le film et on retourne à l'accueil (le film ne doit plus être affiché)
- Le bouton **Regarder le film** ne fait rien.

## Recherche d'un film

- Un endpoint de recherche est disponible sur <http://localhost:3000/movies?q=STRING>
- Les résultats de la recherche s'afficheront dans la page d'accueil (exemple, je tape du, je dois voir seulement dune).

## Films favoris

- Cette page sera la même que la page d'accueil mais ne listera que les films mis en favoris.
- Pour récupérer les films uniquement favoris vous utiliserez le endpoint <http://localhost:3000/movies?starred=true>
