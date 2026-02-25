import React from 'react';
import WhiteListProducts from '../../../Component/WhiteListProducts';

export const metadata = {
  title: 'WhiteList ',
}
const page = () => {
    
    return (
        <div>
            <div className='my-10'>
                
                <div>
                    <WhiteListProducts/>
                </div>
            </div>
        </div>
    );
};

export default page;