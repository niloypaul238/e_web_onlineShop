'use client'
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { CreatCont } from '../app/Context';
import { Bounce, toast } from 'react-toastify';
const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { whiteListData, setWhiteListData } = useContext(CreatCont);
    const { cart, setCart } = useContext(CreatCont)
    const router = useRouter()

    useEffect(() => {
        fetch('https://e-web-onlineshop.onrender.com/orders')
            .then(res => res.json())
            .then(data => setProduct(data))
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
            setCart([...cart, filterProduct])

        }
    }



    return (
        <div className='w-11/12 my-10 mx-auto '>
            <div className='grid  gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <img src={filterProduct?.images} className='' alt="" />
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
                                        <span key={item} className='border px-3 border-gray-600 rounded bg-red-400 cursor-pointer '>{item}</span>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-2'>
                            <p className=''>Quantity</p>
                            <div className='flex '>
                                <span className='border px-3'>-</span>
                                <span className='border px-3'>0</span>
                                <span className='border px-3'>+</span>
                            </div>
                        </div>
                        <div className='mt-3 flex items-center gap-x-3.5'>
                            <button onClick={addToCart} className='flex border border-gray-500 cursor-pointer  p-2  rounded'>Add To Cart<ShoppingCart /></button> <Heart onClick={whitleListFun} size={50} className='pl-4 cursor-pointer ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Details;