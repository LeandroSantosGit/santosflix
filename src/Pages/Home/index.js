import React, { useState, useEffect } from 'react';

import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import TemplateBase from '../../componentes/TemplateBase';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <TemplateBase paddingAll={0} >

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain 
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Oque é Front-End ?"}
              />

              <Carousel 
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel 
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      
    </TemplateBase>
  );
}

export default Home;