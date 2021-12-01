import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Details from './Components/Details Pages/Details';
import Header from './Components/Header';
import Galary from './Components/Galary Pages/Galary';
import Home from './Components/Home Pages/Home.jsx';
import Collections from './Components/Collections';
import AboutUs from './Components/AboutUs';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/galary' exact element={<Galary />} />
                <Route path='/collections' element = { <Collections />} />
                <Route path='/about' element = { <AboutUs />} />
                <Route path='/:id' exact element={< Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App