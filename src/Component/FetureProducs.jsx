"use client"
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Heart, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { CreatCont } from '@/app/Context';
import { MoonLoader } from 'react-spinners';

const FetureProducs = () => {
    const [product, setProduct] = useState([])
    const { whiteListData, setWhiteListData } = useContext(CreatCont)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {

            const feth = await fetch('https://e-web-onlineshop.onrender.com/orders')
            const data = await feth.json()
            const tranding = data.filter(item => item.featureProduct == true)
            setProduct(tranding);
        } catch (error) {

            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        // 
    }, [])
    const whitleListFun = (id) => {
        const filterProduct = whiteListData?.find(item => item?.id === id)
        if (filterProduct) {
            alert('added')
        } else {
            const tranding = product.find(item => item.id == id)
            setWhiteListData([...whiteListData, tranding])
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
        <div className='w-11/12 mx-auto mt-25 mb-9 '>
            <p className='text-3xl  text-indigo-600  my-4'>You May Like</p>
            <div>

                <div className="w-full flex relative mx-auto ">

                    <Swiper
                        navigation={false}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {product.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="group cursor-pointer relative text-center">
                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.images}
                                            alt={item.name}

                                            className="w-full transition duration-500 group-hover:scale-130 h-62.5 object-cover"
                                        />

                                        {/* Hover Icons */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <Link href={`/productDetails/${item.id}`} className="bg-white hover:bg-indigo-500 cursor-pointer transition duration-500 hover:text-white p-3 rounded-full shadow">
                                                <ShoppingCart size={18} />
                                            </Link>
                                            <button className="bg-white hover:bg-indigo-500 cursor-pointer transition duration-500 hover:text-white p-3 rounded-full shadow">
                                                <Heart onClick={() => whitleListFun(item.id)} size={18} />
                                            </button>
                                            <button className="bg-white hover:bg-indigo-500 cursor-pointer transition duration-500 hover:text-white p-3 rounded-full shadow">
                                                <Link href={"/shoping"}><Search size={18} /></Link>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <h3 className="mt-4 text-sm font-medium group-hover:text-indigo-500">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-sm">
                                        <span className="font-semibold">${item.price}.00</span>
                                        <span className="ml-2 line-through text-gray-400">
                                            ${item.oldPrice}.00
                                        </span>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* {
                    product.map((iteam, index) => {
                        return (
                            <div key={iteam.id}>
                                <img src={iteam.images} className='h-20' alt="" />
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    );
};

export default FetureProducs;