import React from 'react';
import { FooterBase } from './style';

function Footer() {
  return (
  <FooterBase>
    <legend>Leandro Santos</legend>
      <div>
        <p>
          Orgulhosamente criado durante a
          {' '}
          <a href="https://www.alura.com.br/">
            Imersão React da Alura
          </a>
        </p>
      </div>
    </FooterBase>
  );
}

export default Footer;