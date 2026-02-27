'use client'
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { CreatCont } from '../app/Context';
import { Bounce, toast } from 'react-toastify';
import Image from 'next/image';
import { MoonLoader } from 'react-spinners';
const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { whiteListData, setWhiteListData } = useContext(CreatCont);
    const { cart, setCart } = useContext(CreatCont)
    const router = useRouter()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [quan, setQuan] = useState(1)
    const [size, setSize] = useState("")
    const [info, setInfo] = useState(
        {
            size: size,
            qt: quan
        })


    const clientDataFetch = async () => {
        setLoading(true)
        try {
            const fetchr = await fetch('https://e-web-onlineshop.onrender.com/orders')
            const data = await fetchr.json()
            setProduct(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        clientDataFetch()
    }, [])
    const filterProduct = product?.find(item => item.id === id)


    const quhandler = (e) => {
        const tar = e.target.textContent
        const infoCo = { ...info }

        if (tar == "+") {
            setQuan(quan + 1)
            infoCo.qt = quan + 1
        } else if (tar == "-") {
            setQuan(quan - 1)
            infoCo.qt = quan - 1
        }
        setInfo(infoCo);
    }
    const objectHandler = (e) => {
        const copy = { ...info }
        const tar = e.target.name;
        const val = e.target.textContent
        copy[tar] = val
        setInfo(copy)
    }

    const whitleListFun = () => {
        const findPro = whiteListData?.find(item => item?.id === id)
        if (findPro) {
            alert("Already added ")
            router.push('/whitelist')
        } else {
            setWhiteListData([...whiteListData, filterProduct])

        }
    }

    const addToCart = () => {
        const copys = { ...info }
        const findPro = cart.find(item => item?.id === id)
        if (findPro) {
            alert("Already added cart")

        } else {
            toast.success('Add to Cart successfull !', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

            const newObj = { ...filterProduct, ...copys }
            setCart([...cart, newObj])
            router.push('/cart')
        }
    }


    if (loading) {
        return <div className='flex justify-center items-center w-full'><MoonLoader
            size={28}
            speedMultiplier={1}
        /></div>
    }
    if (error) {
        return <p className='text-center uppercase text-red-500'>{error}</p>
    }


    return (
        <div className='w-11/12 my-10 mx-auto '>
            <div className='grid  gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <Image
                    src={filterProduct? filterProduct.images[0] : "https://images.unsplash.com/photo-1557683304-673a23048d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"}
                    width={100}
                    height={100}
                    alt={filterProduct?.name}
                    priority
                    sizes="100vw"
                    quality={100}
                    className='w-full h-full'
                />

                <div className='leading-6'>
                    <p className='text-2xl'>{filterProduct?.name}</p>
                    <div className='flex justify-between'><p>{filterProduct?.price} {filterProduct?.currency}</p><p className='text-gray-500'>SKU : {filterProduct?.sku}</p></div>
                    {/* <span className='border rounded px-3 border-gray-500/50'>{filterProduct?.status}</span> */}
                    <div className='mt-2'>
                        <p>Select size</p>
                        <div className='flex gap-2'>
                            {
                                filterProduct?.sizes?.map(item => {
                                    return (
                                        <button name="size" onClick={(e) => { { setSize(item); objectHandler(e) } }} key={item} className={`px-3 rounded bg-indigo-400 cursor-pointer  ${item == size && "bg-white border"}`}>{item}</button>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-2'>
                            <p className=''>Quantity</p>
                            <div className='flex '>
                                <span onClick={quhandler} name="qt" className='border cursor-pointer px-3'>-</span>
                                <span className='border px-3'>{quan}</span>
                                <span onClick={quhandler} name="qt" className='border px-3 cursor-pointer'>+</span>
                            </div>
                        </div>
                        <div className='mt-3 flex items-center gap-x-3.5'>
                            <button onClick={addToCart} className='flex cursor-pointer  bg-indigo-400 text-white float-end  p-2 mt-3'>Add To Cart<ShoppingCart /></button> <Heart onClick={whitleListFun} size={50} className='pl-4 cursor-pointer ' />
                        </div>
                    </div>
                </div>
                <div className=''><button className='bg-indigo-400 text-white md:float-end w-30 p-2 mt-3' onClick={() => router.back()}>Back</button></div>
            </div>
        </div>


    );
};

export default Details;