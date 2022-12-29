import React from 'react';
import VideoCard from './videoComponents/VideoCard';
import { useLocation } from 'react-router-dom';

const Main = () => {
    return (
        <section className='w-full grid justify-center gap-1 grid-cols-customize-grid-col grid-rows-customize-grid-row'>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </section>
    )
}

export default Main;