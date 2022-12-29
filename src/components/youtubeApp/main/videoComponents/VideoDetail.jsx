import React from 'react';
import { useLocation } from 'react-router-dom';
import RelateVideo from './RelateVideo';

const VideoDetail = () => {
    const location = useLocation();
    console.log(location);
    return (
        <section className='w-full grid justify-center gap-1 p-1 grid-cols-customize-grid-col grid-rows-customize-grid-row'>
            <div className='col-span-3 h-full'>
                <iframe className='w-full h-iframe-video-height' title='sample test' id="ytplayer" type="text/html"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE"
                    frameBorder="0" allowFullScreen />
                <div className='mt-2.5 text-slate-50'>
                    <h1 className='text-base'>Run Bts! 2022 Special episode - Fly BTS Fly Part</h1>
                    <h1 className='my-2.5 text-sm'>BANGTAN TV</h1>
                    <span className='text-xs'>this is bangtan 2022 special episode fly bts part videos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est tempora numquam, fugit ea non sed illo, tempore voluptates culpa sint temporibus facilis exercitationem pariatur quod! Vel veniam laborum deleniti soluta?</span>
                </div>
            </div>
            <div className='col-span-2 h-full'>
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