import React from 'react';
import {GiClothes} from 'react-icons/gi';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillPencilFill} from 'react-icons/bs';

const Header = () =>{
    return (
        <header className='w-full items-center h-[50px] flex justify-between'>
            <section className='flex items-center p-1'>
                <GiClothes className='cursor-pointer text-rose-400 text-3xl'/>
                <h3 className='text-rose-400 ml-3 cursor-pointer text-lg'>Shoppy</h3>
            </section>
            <section>
                <nav className='flex items-center p-1'>
                    <h3 className='ml-3 cursor-pointer'>Products</h3>
                    <AiOutlineShoppingCart className='ml-3 cursor-pointer text-xl'/>
                    <BsFillPencilFill className='ml-3 cursor-pointer text-xl'/>
                    <div className='w-[25px] h-[25px] rounded-full bg-rose-400 ml-3 cursor-pointer'></div>
                    <button className='bg-rose-400 p-2  ml-3 text-white'>Login</button>
                </nav>
            </section>
        </header>
        )
}
export default Header;