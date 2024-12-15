const express = require('express');
const repositoriesRoutes = require('./routes/repositories.routes')


const app = express();

app.use(express.json());
app.use('/repositories', repositoriesRoutes);

module.exports = app;