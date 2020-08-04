import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../componentes/TemplateBase';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button/style';

function CadastroCategoria() {
  const dadosIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(dadosIniciais);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(dadosIniciais);
  }

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleInputChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

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
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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
