import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import YoutubeApp from './YoutubeApp';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<YoutubeApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
