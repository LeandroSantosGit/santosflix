import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import TemplateBase from '../../../componentes/TemplateBase';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button/style';
import VideosRepository from '../../../repositories/videos';
import CategoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoriaTitulo = categorias.map(({ titulo }) => titulo);
    const { values, handleInputChange } = useForm([]);

    useEffect(() => {
      CategoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
          setCategorias(categoriasFromServer);
        });
    }, []);

  return (
    <>
      <TemplateBase>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          const categoriaSelecionada = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });
          
          VideosRepository.createVideos({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaSelecionada.id,
          })
          .then(() => {
            history.push('/');
          });

        }} >
          <FormField
            label="Titulo do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleInputChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleInputChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleInputChange}
            suggestions={categoriaTitulo}
          />

        <Button>Cadastrar</Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </TemplateBase>
    </>
  );
}

export default CadastroVideo;