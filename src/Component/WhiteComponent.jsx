import React, { useContext } from 'react';
import { CreatCont } from '../app/Context';

const WhiteComponent = () => {

        const [whiteListData, setWhiteListData] = useContext(CreatCont)
        console.log(whiteListData,"s");
    return (
        <div>
            
        </div>
    );
};

export default WhiteComponent;