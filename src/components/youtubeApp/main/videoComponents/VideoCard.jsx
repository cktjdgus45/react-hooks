import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Moment from 'react-moment';

const VideoCard = ({ video }) => {
    let navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const { title, description, channelTitle, publishedAt, thumbnails: { medium: { url } } } = video.snippet;
    const { id } = video;
    const onVideoCardClick = (e) => {
        e.preventDefault();
        navigate("/detail", {
            state: {
                id, title, description, channelTitle
            }
        });
    }
    return (
        <div className={`bg-slate-600 cursor-pointer ${pathname === "/detail" ? "col-span-2 flex" : ""}`} onClick={onVideoCardClick}>
            <img alt="thumbnail" src={url} className={`bg-orange-300 ${pathname === "/detail" ? "basis-1/2 w-1/2" : ""}`} />
            <div className={`h-2/5 p-0.5 flex flex-col ${pathname === "/detail" ? "basis-1/2 w-1/2" : ""}`}>
                <h1 className='text-white text-base mb-4'>{title}</h1>
                <span className='text-slate-400 text-xs'>{channelTitle}</span>
                <span className='text-slate-400 text-xs'>
                    <Moment fromNow>{publishedAt}</Moment>
                </span>
            </div>
        </div>
    )
}

export default VideoCard;