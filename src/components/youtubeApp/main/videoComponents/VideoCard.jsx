import React from 'react';

const VideoCard = () => {
    return (
        <div className='bg-slate-600 h-60 cursor-pointer'>
            <div className='h-3/5 bg-orange-300'>thumbnail</div>
            <div className='h-2/5 flex flex-col p-1'>
                <h1 className='text-white text-base mb-4'>title</h1>
                <span className='text-slate-400 text-xs'>Writer</span>
                <span className='text-slate-400 text-xs'>write time</span>
            </div>
        </div>
    )
}

export default VideoCard;