import React from 'react';
import Details from '../../../../Component/Details';

export const metadata = {
  title: 'Details ',
}
const page = async ({params}) => {
    // const api =  fetch('http://localhost:5001/orders')
    // const data =  api.json()
    // const filterProduct = data.find(item => item.id === id)

    return (
        <div className=''>
            <Details />
        </div>
    );
};

export default page;