import React, { useContext, useEffect, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { TiEquals } from 'react-icons/ti';
import { UserContext } from '../../../../context/UserContext';
import CartProduct from './CartProduct';
const Cart = () => {
    const { cart } = useContext(UserContext);
    const [totalProductPrice, setTotalProductPrice] = useState(0);

    useEffect(() => {
        totalProductPrice === 0 && cart && cart.map(product => setTotalProductPrice(prev => { return prev + parseInt(product.price) }));
    }, [cart, setTotalProductPrice, totalProductPrice])

    const totalPrice = () => {
        const totalProductsPrice = totalProductPrice;
        const shippingFee = 3000;

        return totalProductsPrice + shippingFee;
    }
    return (
        <section className='flex flex-col items-center border-t-[1px] border-gray-300'>
            <header className='text-center text-lg font-bold w-full pt-4 pb-2'>
                <h1>
                    내 장바구니
                </h1>
            </header>
            <ul className='w-full px-4 py-2 mb-2 border-gray-300 border-t-[1px] border-b-[1px]'>
                {
                    cart.map(product => (
                        <CartProduct setTotalProductPrice={setTotalProductPrice} key={product.id} product={product} />
                    ))
                }
            </ul>
            <footer className='flex  flex-col w-full'>
                <div className='flex items-center justify-around my-3'>
                    <div className='bg-gray-300 rounded-md px-4 py-6 text-center  flex flex-col'>
                        <h1 className='font-bold text-sm mb-2'>상품 총액</h1>
                        <span className='text-cyan-700 text-base font-bold'>{totalProductPrice}</span>
                    </div>
                    <BsPlusCircleFill />
                    <div className='bg-gray-300 rounded-md px-4 py-6 text-center  flex flex-col'>
                        <h1 className='font-bold text-sm mb-2'>배송비</h1>
                        <span className='text-cyan-700 text-base font-bold'>￦3000</span>
                    </div>
                    <TiEquals />
                    <div className='bg-gray-300 rounded-md px-4 py-6 text-center flex flex-col'>
                        <h1 className='font-bold text-sm mb-2'>총가격</h1>
                        <span className='text-cyan-700 text-base font-bold'>{totalPrice()}</span>
                    </div>
                </div>
                <button className='w-full px-10 py-2 text-white bg-cyan-700 text-center'>주문하기</button>
            </footer>
        </section>
    )
}

export default Cart;