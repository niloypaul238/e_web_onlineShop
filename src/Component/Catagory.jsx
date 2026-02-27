"use client"
import { Eye, Heart, Link2 } from 'lucide-react';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CreatCont } from '../app/Context';
import { MoonLoader } from 'react-spinners';
import Image from 'next/image';

const Catagory = () => {
    const [alldata, setAlldata] = useState([])
    const [shwoProduct, setShowProduct] = useState([])
    const [cata, setCata] = useState(["All"])
    const [filterInput, setFilterInput] = useState(["All"])
    const [active, setActive] = useState("All")
    const [erro, setErro] = useState(null)
    const [loading, setLoading] = useState(false)

    const [inputType, setInputType] = useState('')
    const { whiteListData, setWhiteListData } = useContext(CreatCont)

    // fetch datta
    const fetchData = async () => {
        setLoading(true)


        try {
            const fet = await fetch('https://e-web-onlineshop.onrender.com/orders')
            const data = await fet.json()
            setAlldata(data)
            setShowProduct(data)
        } catch (error) {
            setErro(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])






    alldata?.map(data => {
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

    const model = (e) => {
        const findModelProduct = alldata.find(item => item.id == e)

        Swal.fire({
            html: `
                <div>
                    <img src="${findModelProduct.images}" class='h-50 mx-auto'  alt="" />
                    <p class="text-left text-2xl text-indigo-500">${findModelProduct.name} </p>
                    <div class="flex flex-col justify-start">
                        <p class="flex justify-between items-center"><span>Brand : ${findModelProduct.brand}</span> <span class="text-indigo-800 bg-indigo-800/10 p-1 rounded">${findModelProduct.createdAt}</span></p>
                        <p class="text-left">Color : ${findModelProduct.color}</p>
                        <p class="text-left"> </p>
                        <Link href="/" >View Details</Link>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
        });
    }

    const whitleListFun = (e) => {
        const filterProduct = alldata.find(item => item.id == e)
        const findPro = whiteListData.find(item => item?.id === e)
        if (findPro) {
            alert("added")
        } else {
            setWhiteListData([...whiteListData, filterProduct])
        }
    }


    if (loading) {
        return <div className='flex justify-center items-center w-full'><MoonLoader
            size={28}
            speedMultiplier={1}
        /></div>
    }
    if (erro) {
        return <p className='text-center uppercase text-red-500'>{erro}</p>
    }

    return (
        <div className='sm:grid w-11/12 mx-auto gap-5 my-10 grid-cols-12'>
            <div className='relative  col-span-3 group rounded-2xl'>
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

                <div className='grid w-full  sm:grid-cols-2 md:grid-cols-4 gap-2'>
                    {
                        shwoProduct.map(item => {
                            return (
                                <div key={item.id} className='overflow-hidden cursor-pointer p-4 group relative flex flex-col justify-center items-center'>

                                    <span
                                        className="absolute rounded top-0 right-0 h-px w-0 bg-indigo-500 transition-all duration-200 group-hover:w-full"></span>

                                    <span
                                        className="absolute rounded top-0 left-0 w-px h-0 bg-indigo-500 transition-all duration-200 delay-200 group-hover:h-full"></span>

                                    <span
                                        className="absolute rounded bottom-0 left-0 h-px w-0 bg-indigo-500 transition-all duration-200 delay-200 group-hover:w-full"></span>

                                    <span
                                        className="absolute rounded bottom-0 right-0 w-px h-0 bg-indigo-500 transition-all duration-200 delay-200 group-hover:h-full"></span>

                                    <div className='md:h-50 overflow-hidden bg-white'>
                                        <div>
                                            <div className='justify-center group-hover:top-1/2 md:opacity-0 opacity-100 group-hover:opacity-100 transition-top duration-300
                                          gap-x-3 top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-full absolute'>
                                                <Heart onClick={() => whitleListFun(item.id)} className='bg-indigo-600 rounded-full text-white p-2 cursor-pointer hover:bg-white hover:text-indigo-600 transition-bg duration-500' size={30} />
                                                <Eye onClick={() => { model(item.id) }} className='bg-indigo-600 rounded-full text-white p-2 cursor-pointer hover:bg-white hover:text-indigo-600 transition-bg duration-500' size={30} />
                                                <Link href={`/productDetails/${item.id}`}>
                                                    <Link2 className='bg-indigo-600 rounded-full text-white p-2 cursor-pointer hover:bg-white hover:text-indigo-600 transition-bg duration-500' size={30} />
                                                </Link>

                                            </div>
                                            <Image className="w-full transition duration-500 group-hover:scale-130 h-40 md:h-87.5 object-cover"
                                                src={item.images}
                                                alt={item.name}
                                                width={100}
                                                height={100}
                                                priority
                                                sizes="100vw"
                                                quality={100}
                                            />
                                            {/* <img  className='h-full' alt="" /> */}
                                        </div>
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