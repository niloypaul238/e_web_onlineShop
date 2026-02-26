import React from 'react';
import Details from '../../../../Component/Details';

export async function generateMetadata({ params }) {
    const {id} = await params
    return {
        title: `Product ${id}`,
    };
}
const page = async () => {
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