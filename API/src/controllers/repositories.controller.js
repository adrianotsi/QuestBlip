const { getOldestRepositories } = require('../services/github.service');

const getRepositories = async (req, res) => {
  try {
    const repositories = await getOldestRepositories();
    res.status(200).json(repositories);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao acessar a API do GitHub', error: error.message });
  }
};

module.exports = { getRepositories };
