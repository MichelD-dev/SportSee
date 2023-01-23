<a name="readme-top"></a>

# SportSee
****
#### Services de coaching sportif.

#### Formation OpenClassrooms - Développeur d'applications JavaScript React
#### Projet 12

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Prerequisites

- [NodeJS (**>=version 14**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## L'architecture du projet :

Ce projet, dit frontend, est connecté à un service API backend que vous devez aussi lancer en local.

Le projet backend se trouve ici: https://github.com/MichelD-dev/P12-NodeJs-backend

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Organiser son espace de travail :

Pour une bonne organisation, vous pouvez créer un dossier SportSee dans lequel vous allez cloner le projet backend et par la suite, le projet frontend:

Créer deux dossiers SportSee-back et SportSee-front

Initialiser chacun:

```
$ git init
```

Copier dans SportSee-back le code Backend :

```
$ git clone https://github.com/MichelD-dev/P12-NodeJs-backend
```

Copier dans SportSee-front le code frontend :

```
$ git clone https://github.com/MichelD-dev/SportSee
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Ouvrir chaque dossier dans un terminal différent :

- Terminal 1:

```
$ cd SportSee-back
```
```
$ npm i
```
ou
```
$ yarn
```

Pour lancer le back:

```
$ npm run dev
```
ou
```
$ yarn dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- Terminal 2:

```
$ cd SportSee-front
```
```
$ npm i
```
ou
```
$ yarn
```
```
$ npm i -g live-server
```

Pour lancer le front avec les données mockées:

```
$ npm run dev
```
ou
```
$ yarn dev
```

Pour lancer le front avec les données issues de l'API:
```
$ npm run prod
```
ou
```
$ yarn prod
```

Si le site n’est pas lancé automatiquement :
Ouvrir le navigateur à l'adresse: http://localhost:5173/

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact:
Michel DELAUNAY - delaunaymichel@hotmail.fr  

Project Link: https://sportsee-coaching.netlify.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
