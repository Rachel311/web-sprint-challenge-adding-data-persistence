const router = require('express').Router();
const Task = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const all = await Task.getTask();
        res.json(all);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Task.createTask(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
});

module.exports = router;