import React from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../componentes/TemplateBase';

function CadastroCategoria() {
    return (
        <>
        <TemplateBase>
            <h1>Cadastro de Categoria</h1>
            <Link to="/cadastro/categoria">
                Voltar
            </Link>
        </TemplateBase>
        </>
    );
}

export default CadastroCategoria;