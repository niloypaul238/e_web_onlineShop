import React from 'react';
import Nav from '../../Component/Nav'
import Footer from '@/Component/Footer'

const WebLayout = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    );
};

export default WebLayout;