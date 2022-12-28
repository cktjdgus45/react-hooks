import React from 'react';
import Header from './header/Header';
import Main from './main/Main';


const YoutubeApp = () => {
    return (
        <div className='w-screen h-full flex justify-center'>
            <section className='bg-neutral-800  flex flex-col items-center '>
                <Header />
                <div className='w-full h-2 opacity-40 bg-zinc-700 my-1.5'></div>
                <Main />
            </section>
        </div>
    )
}


export default YoutubeApp;