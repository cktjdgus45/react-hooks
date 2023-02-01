import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DB from '../../service/firebase/database';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        new DB().read(setProducts);
    }, []);
    console.log(products)
    return (
        <main className='w-full bg-slate-400 h-full'>
            <section className='w-full h-[350px] bg-slate-800 mb-2'>main banner</section>
            <section className='grid grid-cols-4 grid-rows-[repeat(20,500px)] gap-2 h-full'>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
                <div className='flex flex-col bg-black'>
                    <img className='basis-10/12 flex bg-slate-900' src="" alt="product" />
                    <div className='basis-2/12 bg-slate-700'>
                        <div className='flex justify-between'>
                            <h3>스웨터</h3>
                            <h3>￦30000</h3>
                        </div>
                        <div>여성</div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;