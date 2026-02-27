"use client"
import React, { useContext } from 'react';
import { CreatCont } from '../app/Context';
import { ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WhiteListProducts = () => {
    const { whiteListData, setWhiteListData } = useContext(CreatCont)
    const deletWhiteList = (e) => {
        const findDelt = whiteListData.filter(item => item.id !== e)
        setWhiteListData(findDelt)
    }

    // console.log(whiteListData);
    return (
        <div className='w-11/12 mt-5 mx-auto'>
            <p className='text-2xl mt-10'> WhiteList</p>
            <div>

                <table className='w-full table '>
                    <thead>
                        <tr className=''>
                            <th className='text-left'>Image</th>
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
                            whiteListData.length > 0 ?
                                whiteListData.map(item => {
                                    return (
                                        <tr key={item.id}>

                                            <td className=''>
                                                <Image className='mx-auto'
                                                    src={item.images}
                                                    alt={item.images}
                                                    width={50}
                                                    height={100}
                                                    priority
                                                    sizes="100vw"
                                                    quality={100}
                                                />
                                                {/* <img src={item?.images} className='h-20' alt={item.images} /> */}
                                            </td>
                                            <td><p className='text-red-500'>{item.name}</p></td>
                                            <td><p>{item.price} {item.currency}</p></td>
                                            <td>{item.category}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.color}</td>
                                            <td className=''><span className='flex gap-x-3 items-center w-full h-full'><X onClick={() => deletWhiteList(item.id)} className='text-red-800 cursor-pointer' style={{ color: 'red' }} /><Link href={`/productDetails/${item.id}`} ><ShoppingCart style={{ color: "blue", cursor: 'pointer' }} /></Link></span></td>
                                        </tr>
                                    )
                                }) : <tr className=' text-center'><td className='' colSpan={7}><img src="https://eonbazar.com/images/npf.jpg" alt="" className='h-40 mx-auto' /> </td></tr>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default WhiteListProducts;