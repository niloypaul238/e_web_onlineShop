import React from 'react';
import WhiteListProducts from '../../../Component/WhiteListProducts';
const page = () => {
    return (
        <div>
            <div className='w-11/12 my-10 mx-auto text-red-400  border-red-600'>
                <p className='text-red-800 text-2xl'> WhiteList</p>
                <div>
                    <WhiteListProducts/>
                </div>
            </div>
        </div>
    );
};

export default page;