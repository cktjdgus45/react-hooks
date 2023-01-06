import React from 'react';
import Search from './Search';
import { BsYoutube } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    const onLogoClick = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <header className='flex w-full justify-between items-center p-1 h-16 gap-x-60'>
            <div className='flex items-center cursor-pointer' onClick={onLogoClick}>
                <BsYoutube className='text-red-700 text-2xl' />
                <h2 className='text-xl text-white ml-1'>Youtube</h2>
            </div>
            <Search />
        </header>
    )
}

export default Header;