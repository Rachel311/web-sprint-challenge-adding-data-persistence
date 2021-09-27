const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(helmet())
server.use(express.json());

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Sprint Challenge!'
    });
});

//***********************500 error middleware***********//
//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      devMessage: 'Something bad inside the server!'
    });
  });

module.exports = server