const axios = require('axios')

const getOldestRepositories = async () => {
        try{
            //Requisição na API do Github
            let {data} = await axios ('https://api.github.com/orgs/takenet/repos')
            let repos = data

            //Filtrando os o resultado
            return repos
            .filter(repo => repo.language === 'C#')
            .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
            .slice(0, 5)
            .map(repo => ({
              name: repo.name,
              description: repo.description,
              avatar_url: repo.owner.avatar_url,
            }));
        }catch(e){
            console.error(e)
            repos.status(500).send('Something broke! Sorry for this :/');
        }
        
    }

module.exports = { getOldestRepositories }