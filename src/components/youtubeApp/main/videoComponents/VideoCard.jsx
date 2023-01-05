import React from 'react';
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
    let navigate = useNavigate();
    const { title, channelTitle, publishedAt, thumbnails: { medium: { url } } } = video.snippet;
    const onVideoCardClick = (e) => {
        e.preventDefault();
        navigate("/detail", {
            state: {
                data: 'popolove'
            }
        });
    }
    return (
        <div className='bg-slate-600 cursor-pointer' onClick={onVideoCardClick}>
            <img alt="thumbnail" src={url} className='bg-orange-300' />
            <div className='h-2/5 flex flex-col'>
                <h1 className='text-white text-base mb-4'>{title}</h1>
                <span className='text-slate-400 text-xs'>{channelTitle}</span>
                <span className='text-slate-400 text-xs'>{publishedAt}</span>
            </div>
        </div>
    )
}

export default VideoCard;