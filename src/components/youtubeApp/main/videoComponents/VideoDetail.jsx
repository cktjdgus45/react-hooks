import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoDetail = ({ videos }) => {
    const location = useLocation();
    console.log(location);
    const { channelTitle,
        description,
        id,
        title } = location.state;

    return (
        <section className='w-full grid justify-center gap-1 p-1 grid-cols-customize-grid-col grid-rows-customize-grid-row'>
            <div className='col-span-3 h-full'>
                <iframe className='w-full h-iframe-video-height' title='sample test' id="ytplayer" type="text/html"
                    src={`https://www.youtube.com/embed/${id}`}
                    allowFullScreen />
                <div className='mt-2.5 text-slate-50'>
                    <h1 className='text-base'>{title}</h1>
                    <h1 className='my-2.5 text-sm'>{channelTitle}</h1>
                    <span className='text-xs'>{description}</span>
                </div>
            </div>
            <div className='col-span-2 h-full'>
                <div className='grid grid-cols-2 gap-y-1'>
                    {videos.map(video =>
                        <VideoCard key={video.id} video={video} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default VideoDetail;