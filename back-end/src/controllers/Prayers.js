const { Prayer } = require('../models');

const getAllPrayers = async (_req, res) => Prayer
    .findAll()
    .then((prayers) => res.status(200).json(prayers))
    .catch((error) => {
        console.error(error);
        res.status(500).end();
    });

const addPrayer = async (req, res) => Prayer
    .create({ prayerWhom: req.body.whom, prayerReason: req.body.reason })
    .then((prayerAdded) => res.status(200).json(prayerAdded))
    .catch((error) => {
        console.error(error);
        res.status(500).end();
    });
module.exports = {
    getAllPrayers,
    addPrayer,
};