const router = require('express').Router();
const Resource = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const all = await Resource.getResource();
        res.json(all);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newResources = await Resource.createResource(req.body);
        res.status(201).json(newResources);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
