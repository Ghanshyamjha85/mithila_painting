import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Details from './Components/Details';
import Header from './Header';

function App() {

    return (
        //THIS 
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element = {< Details />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App