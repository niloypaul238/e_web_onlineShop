import Link from 'next/link';
import React from 'react';

const DressGallery = () => {
    const blogs  = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1637666532931-b835a227b955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    date: "27 Sep 2017",
    title: "Kids to Beautiful Style",
    description: "Trendy and comfortable clothing collection specially designed for kids to look stylish and feel confident."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=60",
    date: "15 Mar 2018",
    title: "Modern Fashion Wear",
    description: "A modern fashion collection inspired by street style, perfect for daily casual wear."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=60",
    date: "05 Aug 2019",
    title: "Elegant Clothing Store",
    description: "Elegant and premium quality outfits designed for formal and special occasions."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&auto=format&fit=crop&q=60",
    date: "12 Dec 2020",
    title: "Urban Style Collection",
    description: "Urban-inspired clothing with bold colors and unique designs for young fashion lovers."
  }
];;
    return (
        <div className='w-11/12 mx-auto mb-20 mt-30'>

            <div className='gap-1 h-100 border-gray-500/20 grid grid-rows-6 border p-2 grid-cols-6'>
                <div className=' col-span-2  row-span-3'>
                    <img src="https://i.ibb.co.com/gLwYtcvw/images-4.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='  row-span-2 col-span-2'>
                    <img src="https://i.ibb.co.com/YHzhgwC/download-3.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='  row-span-3 col-span-2'>
                    <img src="https://i.ibb.co.com/60f8Ykrr/download-4.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='  col-span-2  '>
                    <img src="https://i.ibb.co.com/sJD5xptD/Guide-AW25-566x167-Skidor.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='  col-span-3 row-span-3  '>
                    <img src="https://i.ibb.co.com/5gFwvWRF/Mens-Ethnic-Wear-Online-1024x1024.webp" className='w-full h-full object-cover' alt="" />
                </div>
                <div className=' col-span-1 row-span-3'>
                    <img src="https://images.unsplash.com/photo-1700295805070-5e6f0cd0f846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D" className='w-full h-full  object-cover' alt="" />
                </div>
                <div className=' '>
                    <img src="https://i.ibb.co.com/Wpzd1Q4Q/download-5.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className=' row-span-3'>
                    <img src="https://plus.unsplash.com/premium_photo-1678218575597-5d0a2810825f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-full object-cover' alt="" />
                </div>
                <div className=' row-span-2'>
                    <img src="https://i.ibb.co.com/YHzhgwC/download-3.jpg" className='w-full h-full object-cover' alt="" />
                </div>
            </div>

            <div>
                <section className="py-16 ">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-sm tracking-widest text-gray-500 uppercase">
                            Latest From
                        </p>
                        <h2 className="text-3xl font-semibold mt-2">Our Blog</h2>
                    </div>

                    {/* Grid */}
                    <div className="= mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="group">
                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <p className="text-indigo-500 text-sm">{blog.date}</p>
                                    <h3 className="text-lg font-medium mt-2 hover:text-indigo-500 cursor-pointer">
                                        {blog.title}
                                    </h3>
                                    <Link href={`/Blog/${blog.id}`} className="mt-2 text-sm text-gray-600 hover:text-indigo-500 cursor-pointer">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DressGallery;