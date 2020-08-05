import config from '../config';

const URL_VIDEOS = `${config.URL_SERVER}/videos`;

function createVideos(objetoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoVideo),
  })
    .then(async (dadosServidor) => {
      if (dadosServidor.ok) {
        const resposta = await dadosServidor.json();
        return resposta;
      }
      throw new Error('Vídeos não cadastrado!');
    });
}

export default { createVideos };