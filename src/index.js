import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import YoutubeApp from './components/youtubeApp/YoutubeApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YoutubeApp />
  </React.StrictMode>
);

