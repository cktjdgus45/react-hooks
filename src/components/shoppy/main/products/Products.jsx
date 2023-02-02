import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DB from '../../service/firebase/database';
import Product from '../home/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        new DB().read(setProducts);
    }, []);
    return (
        <main className='w-full h-full'>

            <section className='px-2 grid grid-cols-4 grid-rows-[repeat(20,500px)] gap-2 h-full'>
                {products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </section>
        </main>
    )
}

export default Products;