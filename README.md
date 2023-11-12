# ArgentBank

Ce projet consiste à proposer une application React pour la gestion de comptes bancaires pour ArgentBank.
Sa documentation est en ligne sur 
https://leen1515.github.io/argentbank/

## Fonctionnalités
Voici les parties qui sont disponibles :
- Connexion et déconnexion des utilisateurs.
- Affichage et édition des informations personnelles.
- Visualisation des soldes de comptes.

Il y a 3 pages principales :
- Une landing page
- Une page de connexion
- Une page profil, le tableau de bord
- 
La partie des soldes de comptes est gérée avec un composant React et des props, Pour le moment ses données lui sont communiquées en dur.
La gestion des messages d'erreur du aux données est centralisé, Ils sont gérés avec interceptors de Axios.

## Technologies Utilisées

- React
- Redux pour la gestion des états
- Axios pour les requêtes API
- Styled Component pour la gestion du css
- React-Router pour la gestion des routes
- js-docs pour la partie documentation

## Installation et Démarrage
Cette application fonctionne avec la base de donnée MongoDb.
Il y a besoin d'installer MongoDbCompass, de le demarrer, et d'y migrer les données présentes du projet server de l'api pour le tester.

Le server api fonctionne avec node12. Il faut le cloner depuis le git d'openclassrooms, J'utilise nvm pour alterner entre les versions de node avant de le mettre en route.

```bash
nvm use 12
```
Pour démarrer le server API
```bash
git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git


npm install

npm run dev:server

npm run populate-db
```

et je retourne en node 18 pour travailler avec mon projet:

```bash
nvm use 18
```

```bash
git clone https://github.com/leen1515/argentbank.git
cd argentbank
npm install
npm start
```

Bonne visite !  
