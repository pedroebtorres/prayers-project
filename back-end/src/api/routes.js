const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = express();

const prayersController = require('../controllers/Prayers');

routes.use(cors({
    origin: '*',
}));

routes.use(express.json());

routes.use(morgan('tiny'));

routes.get('/prayers', prayersController.getAllPrayers);

routes.post('/prayers', prayersController.addPrayer);

module.exports = routes;