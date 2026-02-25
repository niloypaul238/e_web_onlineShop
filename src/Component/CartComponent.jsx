"use client"
import React, { useContext, useState } from 'react';
import { CreatCont } from '../app/Context';
import { Bounce, toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartComponent = () => {
    const { cart, setCart } = useContext(CreatCont)
    let [amout, setAmout] = useState(0)
    const router = useRouter()
    const [discount, SetDiscount] = useState(0)

    cart?.map(item => {
        return (
            amout += Number(item.price)
        )
    })
    const paymentFun = () => {
        
        toast.success(' Payment Successfull', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        router.push("/")
    }

    return (
        <div>
            <div className='mt-3 w-full'>
                <div className='w-11/12 mx-auto'>

                    <table className=' w-full table '>
                        <thead>
                            <tr className=''>
                                <th className='text-left' style={{ padding: "10px" }}>Image</th>
                                <th className='text-left'>Product Name</th>
                                <th className='text-left'>Price</th>
                                <th className='text-left'>Category</th>
                                <th className='text-left'>Brand</th>
                                <th className='text-left'>Color</th>
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
                    <div>
                        {
                            cart.length > 0 &&
                            <div className='grid grid-cols-3 w-full justify-between my-4 '>
                                <div className='flex justify-center items-center'><Link className='bg-indigo-500 animate-bounce text-white px-4 py-2' href={"/shoping"}>Shoping More</Link></div>
                                <div></div>
                                <div className='col-span-1'>
                                    Paymment
                                    <div className=''>
                                        <div>
                                            <div className=''>
                                                <p>Total Amout : {amout} BDT</p>
                                                <p className='border-b border-dotted'>Discout : <span>{discount}</span> </p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p >Amount : {amout - discount} BDT</p> <button onClick={paymentFun} className='bg-indigo-500 text-white px-4 py-2'>Payment Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CartComponent;