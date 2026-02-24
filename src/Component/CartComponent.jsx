"use client"
import React, { useContext, useState } from 'react';
import { CreatCont } from '../app/Context';

const CartComponent = () => {
    const { cart, setCart } = useContext(CreatCont)
    let [amout,setAmout] = useState(0)
    const [discount, SetDiscount] = useState(0)

    cart?.map(item => {
       return(
         amout+=Number(item.price)
       )
    })

    return (
        <div>
            <div className='mt-3 w-full'>
                <div className=''>

                    <table className='col-span-8 w-full table '>
                        <thead>
                            <tr className=''>
                                <th className='text-left' style={{ padding: "10px" }}>Image</th>
                                <th className='text-left'>Product Name</th>
                                <th className='text-left'>Price</th>
                                <th className='text-left'>Category</th>
                                <th className='text-left'>Brand</th>
                                <th className='text-left'>Color</th>
                                <th className='text-left'>Acton</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.length > 0 ?
                                    cart.map(item => {
                                        return (
                                            <tr key={item.id}>

                                                <td className=''><img src={item?.images} className='h-20' alt={item.images} /></td>
                                                <td><p className='text-red-500'>{item.name}</p></td>
                                                <td><p>{item.price} {item.currency}</p></td>
                                                <td>{item.category}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.color}</td>
                                                {/* <td className=''><span className='flex gap-x-3 items-center w-full h-full'><X onClick={() => deletWhiteList(item.id)} className='text-red-800 cursor-pointer' style={{ color: 'red' }} /><Link href={`/productDetails/${item.id}`} ><ShoppingCart style={{ color: "blue", cursor: 'pointer' }} /></Link></span></td> */}
                                            </tr>
                                        )
                                    }) : <tr className=' text-center'><td className='' colSpan={7}><img src="https://eonbazar.com/images/npf.jpg" alt="" className='h-40 mx-auto' /> </td></tr>
                            }
                        </tbody>
                    </table>
                    <div className='w-11/12 mx-auto'>
                        Paymment
                        <div>
                            <div className='border-b border-dotted'>
                                <p>Total Amout : {amout} BDT</p>
                                <p>Discout :<span>{discount}</span> </p>
                            </div>
                            <p>Amount : {amout - discount}BDT</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CartComponent;