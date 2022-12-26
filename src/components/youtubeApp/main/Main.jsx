import React from 'react';
import VideoCard from './videoComponents/VideoCard';
import VideoDetail from './videoComponents/VideoDetail';

const Main = (props) => {
    return (
        <section className='w-full grid justify-center gap-1 p-1 grid-cols-customize-grid-col grid-rows-customize-grid-row'>
            <VideoDetail />
        </section>
    )
}

export default Main;