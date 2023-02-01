import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DB from '../../service/firebase/database';
import Product from './Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        new DB().read(setProducts);
    }, []);
    return (
        <main className='w-full h-full'>
            <section className='w-full h-[350px] mb-2'>
                <img className='bg-center bg-cover w-full h-full' src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="main-banner" />
            </section>
            <section className='px-2 grid grid-cols-4 grid-rows-[repeat(20,500px)] gap-2 h-full'>
                {products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </section>
        </main>
    )
}

export default Home;