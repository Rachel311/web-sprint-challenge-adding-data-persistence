const router = require('express').Router();
const Project = require('./model');


router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Project.getProject();
        res.json(allProjects);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.createProject(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        next(err);
    }
});


module.exports = router;
