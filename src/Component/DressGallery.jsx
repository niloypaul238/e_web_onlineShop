import React from 'react';

const DressGallery = () => {
    const blogs = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1637666532931-b835a227b955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
            date: "27 Sep 2017",
            title: "Kids to Beautyfull Style",
        },
        {
            id: 2,
            img: "https://plus.unsplash.com/premium_photo-1661319067088-61e0b9e079b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "27 Sep 2017",
            title: "Styles your Feshon Hero",
        },
        {
            id: 3,
            img: "https://plus.unsplash.com/premium_photo-1683133261283-78fe47339160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxjbG90aGluZyUyMHN0b3JlfGVufDB8fDB8fHww",
            date: "27 Sep 2017",
            title: "As a Full Setup Your Life Dress",
        },
    ];
    return (
        <div className='w-11/12 mx-auto mb-20 mt-30'>

            <div className='gap-1 h-100 border-gray-500/20 grid grid-rows-6 border p-2 grid-cols-6'>
                <div className=' col-span-2  row-span-3'>
                    <img src="https://i.ibb.co.com/gLwYtcvw/images-4.jpg" className='w-full h-full object-contain' alt="" />
                </div>
                <div className='  row-span-2 col-span-2'>
                    <img src="https://i.ibb.co.com/YHzhgwC/download-3.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='  row-span-3 col-span-2'>
                    <img src="https://i.ibb.co.com/60f8Ykrr/download-4.jpg" className='w-full h-full object-contain' alt="" />
                </div>
                <div className='  col-span-2  '>
                    <img src="https://i.ibb.co.com/sJD5xptD/Guide-AW25-566x167-Skidor.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='  col-span-3 row-span-3  '>
                    <img src="https://i.ibb.co.com/5gFwvWRF/Mens-Ethnic-Wear-Online-1024x1024.webp" className='w-full h-full object-contain' alt="" />
                </div>
                <div className=' col-span-1 row-span-3'>
                    <img src="https://i.ibb.co.com/jZMn06JN/download-1.jpg" className='w-full h-full object-contain' alt="" />
                </div>
                <div className=' '>
                    <img src="https://i.ibb.co.com/Wpzd1Q4Q/download-5.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className=' row-span-3'>
                    <img src="https://i.ibb.co.com/jZMn06JN/download-1.jpg" className='w-full h-full object-contain' alt="" />
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
                                    <p className="mt-2 text-sm text-gray-600 hover:text-indigo-500 cursor-pointer">
                                        Read more
                                    </p>
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