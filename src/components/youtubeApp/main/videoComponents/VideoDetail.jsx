import React from 'react';
import { useLocation } from 'react-router-dom';
import RelateVideo from './RelateVideo';

const VideoDetail = () => {
    const location = useLocation();
    console.log(location);
    return (
        <section className='w-full grid justify-center gap-1 p-1 grid-cols-customize-grid-col grid-rows-customize-grid-row'>
            <div className='col-span-3 h-full bg-black h-screen'>1</div>
            <div className='col-span-2 h-full bg-white h-screen'>
                <div className='grid grid-cols-1'>
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                    <RelateVideo />
                </div>
            </div>
        </section>
    )
}

export default VideoDetail;