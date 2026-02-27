'use client'
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { CreatCont } from '../app/Context';
import { Bounce, toast } from 'react-toastify';
import Image from 'next/image';
import { MoonLoader } from 'react-spinners';
import Link from 'next/link';
const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { whiteListData, setWhiteListData } = useContext(CreatCont);
    const { cart, setCart } = useContext(CreatCont)
    const router = useRouter()
    const [quantity, setQuantitiy] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState("")
    // const [info, setInfo] = useState(
    //     {
    //         size: size,
    //         qt: quantity
    //     }
    
   
    const clientDataFetch = async () => {
        setLoading(true)
        try {
            const fetchr =await fetch('https://e-web-onlineshop.onrender.com/orders')
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
        const findPro = cart.find(item => item?.id === id)
        if (findPro) {
            alert("Already added cart")

        } else {
            toast.success('Add to Cart successfull !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            const newObj = { ...filterProduct,findPro }
            setCart([...cart, newObj])

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
                    src={filterProduct?.images[0]}
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
                                        <span name={`${size}`} onClick={() => { setSize(item) }} key={item} className={`px-3 rounded bg-indigo-400 cursor-pointer  ${item == size && "bg-white border"}`}>{item}</span>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-2'>
                            <p className=''>Quantity</p>
                            <div className='flex '>
                                <span name="mainus" onClick={() => setQuantitiy(quantity < 1 ? quantity == 1 : quantity - 1)} className='border cursor-pointer px-3'>-</span>
                                <span className='border px-3'>{quantity}</span>
                                <span name="plus" onClick={() => setQuantitiy(quantity + 1)} className='border px-3 cursor-pointer'>+</span>
                            </div>
                        </div>
                        <div className='mt-3 flex items-center gap-x-3.5'>
                            <button onClick={addToCart} className='flex cursor-pointer  bg-indigo-400 text-white float-end  p-2 mt-3'>Add To Cart<ShoppingCart /></button> <Heart onClick={whitleListFun} size={50} className='pl-4 cursor-pointer ' />
                        </div>
                    </div>
                </div>
                <div className=''><button className='bg-indigo-400 text-white float-end w-30 p-2 mt-3' onClick={()=>router.back()}>Back</button></div>
            </div>
        </div>


    );
};

export default Details;