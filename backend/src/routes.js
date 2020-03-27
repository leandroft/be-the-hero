const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** Login - Criar sessão */
routes.post('/sessions', SessionController.create);

/** Listagem das ONGs
 * Possui mesmo nome mas método diferente da Criação das ONGs
 */
routes.get('/ongs', OngController.index);
/** Criação das ONGs */
routes.post('/ongs', OngController.create);

/** Listar casos apenas de uma ONG específica */
routes.get('/profile', ProfileController.index);

/** Listar Casos */
routes.get('/incidents', IncidentsController.index);
/** Criar Casos */
routes.post('/incidents', IncidentsController.create);

/** Deletar Caso */
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;