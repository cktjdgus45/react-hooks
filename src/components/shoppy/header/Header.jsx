import React, { useContext, useState } from 'react';
import { GiClothes } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Auth from '../service/firebase/auth';
import { UserContext } from '../../../context/UserContext';
import { useEffect } from 'react';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [displayName, setDisplayName] = useState();
    const [photoURL, setPhotoURL] = useState();
    const [uid, setUid] = useState();
    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            const { user: { displayName, photoURL, uid } } = user;
            setDisplayName(displayName);
            setPhotoURL(photoURL);
            setUid(uid);
        }
    }, [user]);
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
                    <AiOutlineShoppingCart onClick={() => navigate('carts')} className='text-cyan-700 ml-3 cursor-pointer text-xl' />
                    {uid && (
                        <>
                            <BsFillPencilFill onClick={() => navigate('admin')} className='text-cyan-700 ml-3 cursor-pointer text-xl' />
                            <img alt="profile" src={photoURL} className='w-[25px] h-[25px] rounded-full bg-orange-500 ml-3 cursor-pointer'></img>
                            <h3>{displayName}</h3>
                        </>
                    )}
                    {uid ?
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