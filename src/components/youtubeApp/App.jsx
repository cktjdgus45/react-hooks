import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoDetail from './main/videoComponents/VideoDetail';
import Header from './header/Header';
import Main from './main/Main';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../../service/youtube';

const App = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['videos'], queryFn: () => new Youtube().mostPopularVideos(25) });
    return (
        <BrowserRouter>
            <div className='w-screen h-full flex justify-center'>
                {error && error.message}
                {isLoading ? 'data fetching...' : (
                    <section className='bg-neutral-800  flex flex-col items-center '>
                        <Header />
                        <div className='w-full h-2 opacity-40 bg-zinc-700 my-1.5'></div>
                        <Routes>
                            <Route path='/' element={<Main videos={data.items} />} />
                            <Route path='/detail' element={<VideoDetail videos={data.items} />} />
                        </Routes>
                    </section>
                )}
            </div>
        </BrowserRouter>
    )
}

export default App;
