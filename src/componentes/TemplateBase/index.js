import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './style';

function TemplateBase({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    { children }
                </Main>
            <Footer />
        </> 
    );
}

export default TemplateBase;