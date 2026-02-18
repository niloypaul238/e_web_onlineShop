import React from 'react';
import Nav from '../../Component/Nav'
const WebLayout = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    );
};

export default WebLayout;