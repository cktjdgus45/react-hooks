import React from 'react';
import Search from './Search';

const Header = () => {
    return (
        <header>
            <h2 className='text-2xl'>유튜브</h2>
            {/* logo */}
            <Search />
        </header>
    )
}

export default Header;