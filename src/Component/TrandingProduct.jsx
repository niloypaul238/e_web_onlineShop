"use client"
import { ArrowLeft, ArrowRight, Heart, Search, ShoppingCart } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import { CreatCont } from '@/app/Context';
import { MoonLoader } from 'react-spinners';
import Image from 'next/image';


const TrandingProduct = () => {

    const { whiteListData, setWhiteListData } = useContext(CreatCont)
    const [product, setProduct] = useState([])
    const [erro, setErro] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {

            const feth = await fetch('https://e-web-onlineshop.onrender.com/orders')
            const data = await feth.json()
            const tranding = data.filter(item => item.featureProduct == true)
            setProduct(tranding);
        } catch (error) {

            setErro(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => { fetchData() }, [])

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
    if (erro) {
        return <p className='text-center uppercase text-red-500'>{erro}</p>
    }

    return (
        <div className='w-11/12 mx-auto my-12 '>
            <p className='text-3xl text-indigo-600 my-4'>Trending This Week</p>
            <div>

                <div className="w-full flex relative mx-auto ">
                    <div className='absolute z-33 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full flex justify-between '>
                        <button className="custom-prev text-white hover:text-indigo-700 bg-gray-400 rounded-full p-1"><ArrowLeft /></button>
                        <button className="custom-next text-white hover:text-indigo-700 bg-gray-400 rounded-full p-1"><ArrowRight /></button>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {product.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div>
                                    <div href={`/productDetails/${item.id}`} className={`group relative text-center border md:border-0 border-gray-500/50 p-2 md:p-0`}>
                                        {/* Image */}
                                        <div className="relative overflow-hidden">
                                            <Image className="w-full transition duration-500 group-hover:scale-130 h-40 md:h-87.5 object-cover"
                                                src={item?.images[0]}
                                                width={20}
                                                height={20}
                                                alt={item?.name}
                                                priority
                                                sizes="100vw"
                                                quality={100}
                                            />
                                            {/* <img
                                            src=
                                            alt=
                                            
                                        /> */}

                                            {/* Hover Icons */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                <Link href={`/productDetails/${item.id}`} className="bg-white hover:bg-red-500 cursor-pointer transition duration-500 hover:text-white p-3 rounded-full shadow">
                                                    <ShoppingCart size={18} />
                                                </Link>
                                                <button className="bg-white hover:bg-red-500 cursor-pointer transition duration-500 hover:text-white p-3 rounded-full shadow">
                                                    <Heart onClick={() => whitleListFun(item.id)} size={18} />
                                                </button>
                                                <button className="bg-white hover:bg-red-500 cursor-pointer transition duration-500 hover:text-white p-3 rounded-full shadow">
                                                    <Search size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <h3 className="mt-4 text-sm font-medium group-hover:text-red-500">
                                            {item.name}
                                        </h3>

                                        <div className="mt-1s md:flex flex-col text-sm">
                                            <div>
                                                <span className="font-semibold">${item.price}.00</span>
                                                <span className="ml-2 line-through text-gray-400">
                                                    ${item.oldPrice}.00
                                                </span>
                                            </div>


                                            <Link href={`/productDetails/${item.id}`} className='bg-indigo-500 flex justify-center md:hidden w-full p-1 mt-2 text-white'>Read More</Link>
                                        </div>
                                    </div>
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

export default TrandingProduct;