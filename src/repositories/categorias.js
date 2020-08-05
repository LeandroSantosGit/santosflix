import config from '../config';

const URL_CATEGORIES = `${config.URL_SERVER}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (dadosServidor) => {
      if (dadosServidor.ok) {
        const resposta = await dadosServidor.json();
        return resposta;
      }
      throw new Error('Dados não encontrado!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (dadosServidor) => {
      if (dadosServidor.ok) {
        const resposta = await dadosServidor.json();
        return resposta;
      }
      throw new Error('Dados não encontrado!');
    });
}

export default { getAllWithVideos, getAll };