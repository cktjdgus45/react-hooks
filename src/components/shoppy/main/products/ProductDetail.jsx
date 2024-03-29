import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';
import DB from '../../service/firebase/database';

const ProductDetail = () => {
    const location = useLocation();
    const state = location.state;
    const { product: { category,
        description,
        name,
        price,
        size,
        url, id } } = state;
    const sizes = size.split(',');
    const { user } = useContext(UserContext)
    const [selectSize, setSelectSize] = useState(sizes[0]);

    const addToCart = () => {
        const product = {
            category,
            description,
            name,
            price,
            size: selectSize,
            url,
            id
        }
        //user의 cart field 에 추가.
        const db = new DB();
        // db.readCart(user, db);
        db.createAdmin(user, product, db);
        //장바구니 에 실제로 추가.
        //장바구니 뱃지 개수 증가.
    }
    const getSize = (e) => {
        setSelectSize(e.target.value);
    }
    return (
        <main className='w-full h-full border-0 border-t-[1px] border-gray-400 px-8'>
            <div className='w-full p-2'>
                <span className='text-xs text-gray-400'>{`>  ${category}`}</span>
            </div>
            <div className='grid grid-cols-2 gap-4 w-full h-full'>
                <section className='w-full h-full bg-slate-50'>
                    <img className='w-full h-full bg-center bg-contain' src={url} alt={name} />
                </section>
                <section className='flex flex-col w-full h-fullp-2'>
                    <h1 className='mb-2 font-bold text-lg'>{name}</h1>
                    <span className='mb-1 font-bold'>{`￦${price}`}</span>
                    <div className='w-full border-[1px] my-2 border-gray-400'></div>
                    <span className='text-sm text-gray-500 mb-4'>{description}</span>
                    <div className='flex min-w-full mb-4 items-center'>
                        <label className='text-sm font-bold text-cyan-700 basis-1/12' htmlFor="size">옵션: </label>
                        <select onChange={getSize} className='focus:outline-none border-cyan-700 border-[2px] border-dotted basis-11/12' name="size" id="size">
                            {sizes.map(size => (
                                <option key={size} name="size" value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <button className='text-white text-lg bg-cyan-700 px-5 py-1' onClick={addToCart}>장바구니에 추가</button>
                </section>
            </div>
        </main>
    )
}
export default ProductDetail;