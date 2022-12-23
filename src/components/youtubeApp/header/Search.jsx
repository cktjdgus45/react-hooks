import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = () => {
    return (
        <form className='flex items-center w-9/12 h-full'>
            <input type="text" placeholder='Search..' className='bg-zinc-900 placeholder-gray-500 text-white w-9/12 h-2/4'>
            </input>
            <button className=' bg-gray-600 text-white h-2/4 p-1 text-lg'>
                <BiSearchAlt2 />
            </button>

        </form>
    )
}

export default Search;