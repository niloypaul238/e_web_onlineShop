"use client"
import React, { createContext, useState } from 'react';
export const CreatCont = createContext()
const Context = ({children}) => {
    const [whiteListData,setWhiteListData] = useState([])
    const [cart,setCart] = useState([])
    return (
        <CreatCont.Provider value={{whiteListData,setWhiteListData,cart,setCart}}>
            {children}
        </CreatCont.Provider>
    );
};

export default Context;