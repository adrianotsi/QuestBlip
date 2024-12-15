const express = require('express');
const { getRepositories } = require('../controllers/repositories.controller');

const router = express.Router();

router.get('/', getRepositories);

module.exports = router;