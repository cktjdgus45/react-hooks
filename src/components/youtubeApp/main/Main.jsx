import React from 'react';

const Main = (props) => {
    return (
        <section className='w-full grid grid-cols-5 gap-1'>
            <div className='bg-slate-600 h-60'>
                <div className='h-1/2 bg-orange-300'>thumbnail</div>
                <div className='h-1/2'>
                    <h1>title</h1>
                    <span>Writer</span>
                    <span>write time</span>
                </div>
            </div>

        </section>
    )
}

export default Main;