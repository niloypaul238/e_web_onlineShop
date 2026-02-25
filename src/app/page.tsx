import React from 'react';
import Nav from '@/Component/Nav'
import HomeSlider from '@/Component/HomeSlider'
import Footer from '@/Component/Footer'
const page = () => {
  return (
    <div>
        <div className=''><Nav/></div>
        <HomeSlider/>
        <Footer/>
    </div>
  );
};

export default page;
