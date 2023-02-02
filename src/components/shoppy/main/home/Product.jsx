import React from 'react';

const Product = ({ product }) => {
    const { category,
        description,
        name,
        price,
        size,
        url, id } = product;
    return (
        <div className='flex flex-col shadow-lg rounded-md hover:scale-105 cursor-pointer transition ease-in-out duration-300'>
            <img className='basis-11/12 rounded-md' src={url} alt={description} />
            <div className='basis-1/12 p-2 flex-col justify-center'>
                <div className='flex justify-between text-sm'>
                    <h3>{name}</h3>
                    <h3>{`￦${price}`}</h3>
                </div>
                <div className='text-gray-400 text-xs'>{category}</div>
            </div>
        </div>
    )
}

export default Product;