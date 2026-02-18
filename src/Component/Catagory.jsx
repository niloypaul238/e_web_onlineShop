"use client"
import React, { useEffect, useState } from 'react';

const Catagory = () => {
    const [alldata,setAlldata] = useState([])
    const [cata , setCata] = useState([])

    useEffect(() =>{
        
            fetch('http://localhost:5001/orders')
            .then(res =>res.json())
            .then(data => setAlldata(data))     
        
    },[])

    alldata.map( (data)=>{
        if (!cata.includes(data.category)) {
           setCata([...cata,data.category])
        }
    } )
    return (
        <div className='flex gap-x-3 mt-2'>
            
           {
            cata?.map(item => {
                return <p key={item} className='cursor-pointer  text-indigo-600'>{item}</p>
            })
           } 
        </div>
    );
};

export default Catagory;