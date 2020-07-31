import React from 'react';
import logoImg from '../../assets/logo/logo.png';

import './style.css';
import Button from '../Button/style';
//import ButtonLink from './ButtonLink';

function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logoImg" src={logoImg} alt="SantosFlix" />
            </a>
            <Button as="a" className="buttonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;