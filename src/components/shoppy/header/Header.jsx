import React from 'react';
import { GiClothes } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Auth from '../service/firebase/auth';

const Header = () => {
    let navigate = useNavigate();
    const handleLogin = () => {
        new Auth().login();
    }
    return (
        <header className='w-full items-center h-[50px] flex justify-between'>
            <section className='flex items-center p-1' onClick={() => navigate('/')}>
                <GiClothes className='cursor-pointer text-rose-400 text-3xl' />
                <h3 className='text-rose-400 ml-3 cursor-pointer text-lg'>Shoppy</h3>
            </section>
            <section>
                <nav className='flex items-center p-1'>
                    <h3 onClick={() => navigate('products')} className='ml-3 cursor-pointer'>Products</h3>
                    <AiOutlineShoppingCart onClick={() => navigate('carts')} className='ml-3 cursor-pointer text-xl' />
                    <BsFillPencilFill onClick={() => navigate('admin')} className='ml-3 cursor-pointer text-xl' />
                    <div className='w-[25px] h-[25px] rounded-full bg-rose-400 ml-3 cursor-pointer'></div>
                    <button onClick={handleLogin} className='bg-rose-400 p-2  ml-3 text-white'>Login</button>
                </nav>
            </section>
        </header>
    )
}
export default Header;