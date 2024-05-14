import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Admin from './Admin';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
   <Admin />
    </BrowserRouter>
    <App />
    </React.StrictMode>
);


