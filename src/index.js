import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Application initialization with React DOM *
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
