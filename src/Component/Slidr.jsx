"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
    return (
        <div>
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
                    ><h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
                        {slide.title}
                      </h1>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: false }}>
                      <button className="bg-purple-700 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
                        {slide.btn}
                      </button>
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
                      <img src="/Rectangle 3 (1).png" alt="ds" />

                    </motion.div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    );
};

export default Slidr;