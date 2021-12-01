import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Details from './Components/Details';
import Header from './Components/Header';
import Galary from './Components/Galary';
import Home from './Components/Home.jsx';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/galary' exact element={<Galary />} />
                <Route path='/:id' exact element={< Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App