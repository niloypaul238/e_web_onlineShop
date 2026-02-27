"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import Image from 'next/image';

const Slidr = () => {
  const slides = [
    {
      title: "Explore Your\nSignature Scent",
      subtitle: "FRAGRANCES DEFINE YOU",
      btn: "SHOP NOW",
      image: "https://i.ibb.co.com/53ZY8Ck/Rectangle-3-1.png",
      bg: "bg-[#f4f5fa]",
    },
    {
      title: "Find Your\nPerfect Fragrance",
      subtitle: "BEST COLLECTION",
      btn: "SHOP NOW",
      image: "https://i.ibb.co.com/gbNRRTH0/Rectangle-3.png",
      bg: "bg-[#f4f5fa]",
    },
  ];
  const method = [
    {
      id: 1,
      icon: 'https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg',
      title: 'Fast & Free Delivery',
      dis: 'Free delivery on all orders'
    },
    {
      id: 2,
      icon: 'https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg',
      title: 'Secure Payment',
      dis: 'Free delivery on all orders'
    },
    {
      id: 3,
      icon: 'https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg',
      title: 'Money Back Guarantee',
      dis: 'Free delivery on all orders'
    },
    {
      id: 4,
      icon: 'https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg',
      title: 'Online Support',
      dis: 'Free delivery on all orders'
    }
  ]
  return (
    <div className='mt-10'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 6000 }}
        loop
        className="h-100 md:h-125]"
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>
            <div
              className={`w-full h-full ${slide.bg} flex items-center px-6 md:px-16`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">

                {/* Left Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false }}
                  >
                    <p className="uppercase tracking-widest text-sm mb-3">
                      {slide.subtitle}

                    </p></motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                  ><h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
                      {slide.title}
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false }}>
                    <Link href={'/shoping'} className="bg-purple-700 cursor-pointer text-white md:px-6 px-3 py-2 md:py-3 rounded-lg hover:bg-purple-800 transition">
                      {slide.btn}
                    </Link>
                  </motion.div>

                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  {/* <Image alt="image" height={300} width={300} src={slide.image}/> */}
                  <motion.div
                    initial={{ opacity: 0, x: 90 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false }}>

                    <Image
                      src={slide.image}
                      alt={slide.image}
                      width={250}
                      height={250}
                      priority
                      sizes="100vw"
                      quality={100}
                      className='h-40 object-contain mx-auto'
                    />
                    {/* <img src="/Rectangle 3 (1).png"  alt="ds" /> */}

                  </motion.div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-5 w-11/12 mx-auto '>
        {
          method.map(item => {
            return (
              <div key={item.id} className='w-full border sm:border-0 border-indigo-600/40 p-4  rounded flex flex-col items-center justify-center space-y-2'>
                <Image
                  src={item.icon}
                  alt={item.icon}
                  width={50}
                  height={50}
                  priority
                  sizes="100vw"
                  quality={100}
                  className='object-contain mx-auto'
                />
                <div className='flex flex-col items-center justify-center space-y-2'>
                  <h1>{item.title}</h1>
                  <h1 className='text-gray-400'>{item.dis}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Slidr;