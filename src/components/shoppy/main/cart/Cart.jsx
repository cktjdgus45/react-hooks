import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import { BsPlusCircleFill } from 'react-icons/bs';
import { TiEquals } from 'react-icons/ti';
const Cart = () => {
    return (
        <section className='flex flex-col items-center border-t-[1px] border-gray-300'>
            <header className='text-center text-lg font-bold w-full pt-4 pb-2'>
                <h1>
                    내 장바구니
                </h1>
            </header>
            <ul className='w-full px-4 py-2 mb-2 border-gray-300 border-t-[1px] border-b-[1px]'>
                <li className='flex w-full h-40 items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='w-20 h-full'>
                            <img src="" alt="product" />
                        </div>
                        <div className='flex flex-col ml-2'>
                            <span className='text-sm '>name</span>
                            <span className='text-base text-cyan-700 font-bold '>category</span>
                            <span className='text-xs'>price</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <div className='text-xs flex items-start justify-center p-[1px] px-1 cursor-pointer border-[1px] border-black'>
                                <span>-</span>
                            </div>
                            <div className='mx-2'>
                                <span className='font-bold text-lg'>0</span>
                            </div>
                            <div className='text-xs flex items-start justify-center p-[1px] px-1 cursor-pointer border-[1px] border-black'>
                                <span>+</span>
                            </div>
                        </div>
                        <IoMdTrash className='text-xl ml-2' />
                    </div>
                </li>
            </ul>
            <footer className='flex  flex-col w-full'>
                <div className='flex items-center justify-around my-3'>
                    <div className='bg-gray-300 rounded-md px-4 py-6 text-center  flex flex-col'>
                        <h1 className='font-bold text-sm mb-2'>상품 총액</h1>
                        <span className='text-cyan-700 text-base font-bold'>￦10000</span>
                    </div>
                    <BsPlusCircleFill />
                    <div className='bg-gray-300 rounded-md px-4 py-6 text-center  flex flex-col'>
                        <h1 className='font-bold text-sm mb-2'>배송비</h1>
                        <span className='text-cyan-700 text-base font-bold'>￦3000</span>
                    </div>
                    <TiEquals />
                    <div className='bg-gray-300 rounded-md px-4 py-6 text-center flex flex-col'>
                        <h1 className='font-bold text-sm mb-2'>총가격</h1>
                        <span className='text-cyan-700 text-base font-bold'>￦10000</span>
                    </div>
                </div>
                <button className='w-full px-10 py-2 text-white bg-cyan-700 text-center'>주문하기</button>
            </footer>
        </section>
    )
}

export default Cart;