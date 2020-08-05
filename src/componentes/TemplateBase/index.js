import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './style';

function TemplateBase({ children, paddingAll }) {
    return (
        <>
            <Menu />
                <Main paddingAll={paddingAll}>
                    { children }
                </Main>
            <Footer />
        </> 
    );
}

export default TemplateBase;