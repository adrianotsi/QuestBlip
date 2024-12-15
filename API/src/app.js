const express = require('express');
const cors = require('cors');
const repositoriesRoutes = require('./routes/repositories.routes');


const app = express();
app.use(cors())
app.use(express.json());
app.use('/repositories', repositoriesRoutes);
app.get('/', (req, res) => {
    res.send('Oh, hello world! How you doing?');
});

module.exports = app;