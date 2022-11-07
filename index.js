
// Express c'est un framework qui te permet de monter des serveur web avec node plus facilement (qusiment tout le temps utilisé d'ailleur)
const express = require('express');
const path = require('path');

// Une instance de express qui représente ton serveur web.
const app = express();
// On va dire a ton serveur de chopper les assets statiques pour les rendre quand on les demandes
app.use(express.static('public'))
// Un objet qui va te permettre de créer des routes pour ton application web.
const router = express.Router();

// On créer une route sur la racine de ton site donc la http://localhost:8080/
router.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/public/index.html'));
});

// On dit a ton serveur web d'utiliser le router que tu viens de créer.
app.use('/', router);
// On dit à ton serveur d'ecouter le port 8080.
app.listen(8080, () => {
  console.log('Serveur lancé sur le port 8080...');
});
