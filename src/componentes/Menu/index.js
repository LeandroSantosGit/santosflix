import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logoImg from '../../assets/logo/logo.png';
import Button from '../Button/style';
//import ButtonLink from './ButtonLink';

function Menu() {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logoImg" src={logoImg} alt="SantosFlix" />
            </Link>
            <Button as={Link} className="buttonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;