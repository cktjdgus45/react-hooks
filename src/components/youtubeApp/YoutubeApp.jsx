import React from 'react';
import Header from './header/Header';
import Main from './main/Main';

const YoutubeApp = () => {
    return (
        <div className='bg-black w-screen h-screen flex justify-center'>
            <section className='bg-neutral-800 w-10/12 flex flex-col items-center '>
                <Header />
                <Main />
            </section>
        </div>
    )
}

export default YoutubeApp;