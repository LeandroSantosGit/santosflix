import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../componentes/TemplateBase';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button/style';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const dadosIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const { values, handleInputChange, clearForm } = useForm(dadosIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    clearForm(dadosIniciais);
  }

  

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://santosflix.herokuapp.com/categorias';

    fetch(URL)
    .then(async (dadosServidor) => {
      const resposta = await dadosServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <>
      <TemplateBase>
        <h1>
          Cadastro de Categoria:
          { values.nome }
        </h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleInputChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleInputChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleInputChange}
          />

          <Button>Cadastrar</Button>
        </form>

        {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
        )}
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

        <Link to="/cadastro/categoria">
          Voltar
        </Link>
      </TemplateBase>
    </>
  );
}

export default CadastroCategoria;
