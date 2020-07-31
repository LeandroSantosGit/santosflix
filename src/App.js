import React from 'react';

import Menu from './componentes/Menu';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';
import dadosVideos from './data/dados_videos.json';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      
      <BannerMain 
        videoTitle={dadosVideos.categorias[0].videos[0].titulo}
        url={dadosVideos.categorias[0].videos[0].url}
        videoDescription={"Oque é Front-End ?"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosVideos.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosVideos.categorias[1]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosVideos.categorias[2]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosVideos.categorias[3]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosVideos.categorias[4]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosVideos.categorias[5]}
      />
      
      <Footer />
    </div>
  );
}

export default App;
