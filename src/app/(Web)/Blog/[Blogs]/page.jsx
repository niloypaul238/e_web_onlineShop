import React from 'react';
import BackButton from '../../../../Component/BackButton';
import Image from 'next/image';

export async function generateMetadata({ params }) {
    const { Blogs } = await params
    return {
        title: `Blog ${Blogs}`,
    };
}
const blogs = [
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
        description: "A modern fashion collection inspired by street style, perfect for daily casual wear.Lightweight satin lends the Mauve Kenzie dress a fluid drape, highlighting its soft ripples and elegant flow. An asymmetric silhouette is defined by a sleeveless side, knotted loosely at the shoulder, and a seamless short sleeve. A side slit completes the look with enhanced movement."
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
];

const Blogs = async ({ params }) => {
    const { Blogs } = await params
    const findBlogs = blogs.find(item => item.id === Number(Blogs))

    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Image */}
                    <div className="w-full h-[350px]">
                        <Image className="w-full transition duration-500 group-hover:scale-130 h-40 md:h-87.5 object-cover"
                            src={findBlogs.img}
                            alt={findBlogs.title}
                            width={20}
                            height={20}
                            priority
                            sizes="100vw"
                            quality={100}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                        <p className="text-sm text-gray-500 mb-2">{findBlogs.date}</p>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            {findBlogs.title}
                        </h1>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            {findBlogs.description}
                        </p>

                        {/* Extra UI */}
                        <div className="mt-6 flex items-center justify-between">
                            <BackButton />

                            <div className="flex gap-3 text-gray-400 text-sm">
                                <span>#Kids</span>
                                <span>#Fashion</span>
                                <span>#Style</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;