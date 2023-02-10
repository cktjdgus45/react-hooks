import React, { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';

const CartProduct = ({ product, setTotalProductPrice }) => {
    const { url,
        name,
        size,
        price } = product;
    const [count, setCount] = useState(1);
    const handleIncrease = () => {
        handleTotalProductPrice("increase");
        setCount(prev => prev + 1);
    }

    const handleDecrease = () => {
        handleTotalProductPrice("decrease");
        setCount(prev => prev <= 1 ? 1 : prev - 1);
    }
    const handleTotalProductPrice = (controller) => {
        setTotalProductPrice(prev => {
            let totalPrice;
            controller === "increase" ?
                totalPrice = prev + parseInt(price) :
                totalPrice = prev - parseInt(price);
            return totalPrice;
        })
    }
    return (
        <li className='flex w-full h-40 items-center justify-between'>
            <div className='flex items-center'>
                <div className='w-20 h-full'>
                    <img src={url} alt="product" />
                </div>
                <div className='flex flex-col ml-2'>
                    <span className='text-sm '>{name}</span>
                    <span className='text-base text-cyan-700 font-bold '>{size}</span>
                    <span className='text-xs'>{price}</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <div onClick={handleDecrease} className='text-xs flex items-start justify-center p-[1px] px-1 cursor-pointer border-[1px] border-black'>
                        <span>-</span>
                    </div>
                    <div className='mx-2'>
                        <span className='font-bold text-lg'>{count}</span>
                    </div>
                    <div onClick={handleIncrease} className='text-xs flex items-start justify-center p-[1px] px-1 cursor-pointer border-[1px] border-black'>
                        <span>+</span>
                    </div>
                </div>
                <IoMdTrash className='text-xl ml-2' />
            </div>
        </li>
    )
}

export default CartProduct;