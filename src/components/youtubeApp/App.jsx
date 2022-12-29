import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoDetail from './main/videoComponents/VideoDetail';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {

    return (
        <BrowserRouter>
            <div className='w-screen h-full flex justify-center'>
                <section className='bg-neutral-800  flex flex-col items-center '>
                    <Header />
                    <div className='w-full h-2 opacity-40 bg-zinc-700 my-1.5'></div>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/detail' element={<VideoDetail />} />
                    </Routes>
                </section>
            </div>
        </BrowserRouter>
    )
}

export default App;
