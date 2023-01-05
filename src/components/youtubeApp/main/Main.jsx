import React from 'react';
import VideoCard from './videoComponents/VideoCard';

const Main = ({ videos }) => {

    return (
        <section className='w-full grid justify-center gap-1 grid-cols-customize-grid-col grid-rows-customize-grid-row'>
            {videos.map(video =>
                <VideoCard key={video.id} video={video} />
            )}
        </section>
    )
}

export default Main;