import React, { useContext, useState, useEffect, } from 'react';
import { GiClothes } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Auth from '../service/firebase/auth';
import { UserContext } from '../../../context/UserContext';
import DB from '../service/firebase/database';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const { isExipred, setIsExipred } = useContext(UserContext);
    const [cartCount, setCartCount] = useState();
    useEffect(() => {
        if (user) {
            const db = new DB();
            db.readCart(user, db, setCartCount);
        }
        //TODO -COUNT 표시할려면 ,
        //맨첨에 DB에서 읽어오기; ADMIN USER의 CART ARRAY에 대해.
        //읽어와서 .SETCOUNT.
    }, [setCartCount, user])

    useEffect(() => {
        new Auth().watchAuthState(setUser);
        new Auth().checkExipreState(setIsExipred, user);
        if (isExipred) {
            new Auth().logout();
        }
    }, [user, isExipred, setUser, setIsExipred]);

    let navigate = useNavigate();
    const handleLogin = () => {
        new Auth().login(setUser);
    }
    const handleLogout = () => {
        new Auth().logout(setUser);
    }

    return (
        <header className='w-full items-center h-[50px] flex justify-between'>
            <section className='flex items-center p-1' onClick={() => navigate('/')}>
                <GiClothes className='cursor-pointer text-cyan-700 text-2xl' />
                <h3 className='text-cyan-700 ml-3 cursor-pointer text-2xl'>Shoppy</h3>
            </section>
            <section>
                <nav className='flex items-center p-1'>
                    <h3 onClick={() => navigate('products')} className='text-cyan-700 ml-3 cursor-pointer'>Products</h3>
                    <div className='relative cursor-pointer' onClick={() => navigate('carts')}>
                        <AiOutlineShoppingCart className='relative text-cyan-700 ml-3 text-[30px]' />
                        <div className='absolute right-[-2px] top-0 flex items-center justify-center w-3 h-3 bg-cyan-700 rounded-[50%] p-2'>
                            <span className='text-white text-[7px]'>{cartCount}</span>
                        </div>
                    </div>
                    {user && (
                        <>
                            <BsFillPencilFill onClick={() => navigate('admin')} className='text-cyan-700 ml-3 cursor-pointer text-xl' />
                            <img alt="profile" src={user.photoURL} className='w-[25px] h-[25px] rounded-full ml-3 cursor-pointer'></img>
                            <h3>{user.displayName}</h3>
                        </>
                    )}
                    {user ?
                        <button onClick={handleLogout} className='bg-cyan-700 p-2  ml-3 text-white'>Logout</button>
                        :
                        <button onClick={handleLogin} className='bg-cyan-700 p-2  ml-3 text-white'>Login</button>
                    }
                </nav>
            </section>
        </header>
    )
}
export default Header;