import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Galerija from './galerija';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/galerija' element={<Galerija/>}/>
        </Routes>
    </BrowserRouter>

);