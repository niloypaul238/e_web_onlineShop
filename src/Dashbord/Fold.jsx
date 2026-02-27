import React from 'react';

const Fold = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Image */}
                    <div className="w-full h-[350px]">
                        <img
                            src={findBlogs.img}
                            alt={findBlogs.title}
                            className="w-full h-full object-cover"
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
                            <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                                Read More
                            </button>

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

export default Fold;