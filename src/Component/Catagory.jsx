"use client"
import { Eye, Heart, Link } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Catagory = () => {
    const [alldata, setAlldata] = useState([])
    const [cata, setCata] = useState(["All"])
    const [filterInput, setFilterInput] = useState(["All"])
    const [active, setActive] = useState("All")
    const [shwoProduct, setShowProduct] = useState([])
    const [inputType, setInputType] = useState('')

    useEffect(() => {
        fetch('http://localhost:5001/orders')
            .then(res => res.json())
            .then(data => {
                setAlldata(data)
                setShowProduct(data)
            })
    }, [])

    alldata.map((data) => {
        if (!cata.includes(data.category)) {
            setCata([...cata, data.category])
            setFilterInput([...cata, data.category])
        }
    })


    const onCatagory = (e) => {
        setInputType(e);
        const inputVal = e.toUpperCase()
        const fil = cata.filter(item => inputVal !== "" ? item.toUpperCase().includes(inputVal) : cata)
        setFilterInput(fil);
    }

    const onclinkFun = (e) => {
        setActive(e);
        const filterProducts = e !== "All" ? alldata.filter(item => item.category == e) : alldata;
        setShowProduct(filterProducts)

    }

    return (
        <div className='sm:grid w-11/12 mx-auto gap-5 my-10 grid-cols-12'>
            <div className='relative col-span-3 group rounded-2xl'>
                <div className='flex flex-col gap-x-3 mt-2 pr-4'>
                    <div className='border-b pb-1 mb-2 border-gray-500'>
                        <p className='text-xl text-gray-500 '>Product Category</p>
                        <input onChange={(e) => onCatagory(e.target.value)} value={inputType} type="text" className='border w-full border-gray-500/10 my-1 rounded p-1 text-gray-600 outline' placeholder='Search Category' />
                    </div>
                    {
                        filterInput?.map(item => {
                            return <p onClick={() => onclinkFun(`${item}`)} key={item} className={`cursor-pointer hover:bg-indigo-500 hover:text-white transform-bg duration-200 text-indigo-600 ${active == item ? 'bg-indigo-500 text-white' : ""}`}>{item}</p>
                        })
                    }
                </div>
                <span className='absolute top-0 right-0 group-hover:h-full to-0 h-10  w-1 rounded-full transition-h duration-500 bg-linear-to-t from-indigo-900'></span>
            </div>
            <div className='col-span-9'>

                <div className='grid w-full grid-cols-4 gap-2'>
                    {
                        shwoProduct.map(item => {
                            return (
                                <div key={item.id} className='overflow-hidden py-4 group relative  rounded flex flex-col justify-center items-center'>

                                    <span
                                        class="absolute rounded top-0 right-0 h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>

                                    <span
                                        class="absolute rounded top-0 left-0 w-px h-0 bg-indigo-500 transition-all duration-300 delay-300 group-hover:h-full"></span>

                                    <span
                                        class="absolute rounded bottom-0 left-0 h-px w-0 bg-indigo-500 transition-all duration-300 delay-600 group-hover:w-full"></span>

                                    <span
                                        class="absolute rounded bottom-0 right-0 w-px h-0 bg-indigo-500 transition-all duration-300 delay-900 group-hover:h-full"></span>

                                    <div className='h-50 overflow-hidden'>
                                        <div className='justify-center group-hover:top-1/2 transition-top duration-300  gap-x-3 top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-full absolute'><Heart className='bg-indigo-600 rounded-full text-white p-2 cursor-pointer hover:bg-white hover:text-indigo-600 transition-bg duration-500' size={30} /><Eye className='bg-indigo-600 rounded-full text-white p-2 cursor-pointer hover:bg-white hover:text-indigo-600 transition-bg duration-500' size={30} /><Link className='bg-indigo-600 rounded-full text-white p-2 cursor-pointer hover:bg-white hover:text-indigo-600 transition-bg duration-500' size={30} /></div>
                                        <img src={item.images} className='h-full' alt="" />
                                    </div>

                                    <p className='text-center group-hover:text-indigo-600 transition-text duration-300'>{item.name.length > 17 ? `${item.name.slice(0, 17)}...` : item.name}</p>
                                    <p>{item.price} {item.currency}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagory;