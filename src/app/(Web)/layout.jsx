import React from 'react';
import Nav from '../../Component/Nav'
import Footer from '@/Component/Footer'

const WebLayout = ({children}) => {
    return (
        <div>
            <Nav/>
                <div className='mt-15'>{children}</div>
            <Footer/>
        </div>
    );
};

export default WebLayout;