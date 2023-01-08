import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Youtube from '../../../service/youtube';

const Search = () => {
    const [query, setQuery] = useState('');
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['videos'],
        mutationFn: (text) => new Youtube().search(text, 25),
        onSuccess: (data) => {
            queryClient.setQueryData(['videos'], data);
        }
    });
    const onSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(query);
        setQuery('');
    }
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }
    return (
        <form className='flex items-center w-9/12 h-full' onSubmit={onSubmit}>
            <input value={query} onChange={onChange} type="text" placeholder='Search..' className='bg-zinc-900 placeholder-gray-500 text-white w-9/12'>
            </input>
            <button className=' bg-gray-600 text-white p-1 text-lg'>
                <BiSearchAlt2 />
            </button>
        </form>
    )
}

export default Search;