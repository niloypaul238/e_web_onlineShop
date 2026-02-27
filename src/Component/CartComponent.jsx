"use client"
import React, { useContext, useState } from 'react';
import { CreatCont } from '../app/Context';
import { Bounce, toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Trash } from 'lucide-react';
import Image from 'next/image';

const CartComponent = () => {
    const { cart, setCart } = useContext(CreatCont)
    // console.log(cart);
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
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        router.push("/")
    }

    const delteItem = (id) => {
        const delteBefore = cart.filter(item => item.id !== id)
        setCart(delteBefore);
    }
    return (
        <div>
            <div className='mt-3 w-full'>
                <div className='w-11/12 mx-auto'>

                    <div className="bg-white p-8 overflow-auto ">

                        <div className="relative overflow-auto">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-500/20  ">
                                    <thead>
                                        <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">SL</span>
                                            </th>
                                            <th className="p-0 ">
                                                <span className="block py-2 px-3 border-r border-gray-300">Image</span>
                                            </th>
                                            <th className="p-0 ">
                                                <span className="block py-2 px-3  border-r border-gray-300">Product Name</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Price</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Category</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Brand</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Quantity</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Size</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Color</span>
                                            </th>
                                            <th className="p-0">
                                                <span className="block py-2 px-3 border-r border-gray-300">Action</span>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {
                                            cart?.length > 0 ?
                                                cart?.map((item, index) => {
                                                    return (
                                                        <tr key={item.id} className='border-b p-4 border-gray-400/20'>
                                                            <td className='p-0'><span className='block text-center  px-3'>{index + 1}</span></td>
                                                            <td className=''>
                                                                <Image className='mx-auto'
                                                                    src={item.images[0]}
                                                                    alt={item.images}
                                                                    width={50}
                                                                    height={50}
                                                                    priority
                                                                    sizes="100vw"
                                                                    quality={100}
                                                                />
                                                                {/* <img    /> */}
                                                            </td>
                                                            <td><span className='text-red-500 block text-center py-2 px-3'>{item.name}</span></td>
                                                            <td><span className='block text-center px-1'>{item.price} {item.currency}</span></td>
                                                            <td><span className='block text-center px-1'>{item.category}</span></td>
                                                            <td><span className='block text-center px-1'>{item.brand}</span></td>
                                                            <td><span className='block text-center px-1'>{item.qt}</span></td>
                                                            <td><span className='block text-center px-1'>{item.size}</span></td>
                                                            <td><span className='block text-center px-1'>{item.color}</span></td>
                                                            <td className=''><span className='flex justify-center items-center w-full h-full text-red-800'><Trash onClick={()=>delteItem(item.id)} className='cursor-pointer hover:text-red-600' /></span></td>
                                                        </tr>
                                                    )
                                                }) : <tr className=' text-center'><td className='' colSpan={10}>
                                                    <Image src="https://eonbazar.com/images/npf.jpg" alt="no" width={30} height={30} className='
                                                     mx-auto' /> </td></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            cart.length > 0 &&
                            <div className='md:grid grid-cols-3 w-full justify-between my-4 '>
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
                                            <div className='flex flex-col gap-3  justify-between'>
                                                <p >Amount : {amout - discount} BDT</p> <button onClick={paymentFun} className='bg-indigo-500 text-white text-sm px-4 py-2'>Payment Now</button>
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