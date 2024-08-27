import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'src/page/main';
import Detailed from './page/detailed';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Main/> }/>
                <Route path="detail/:characterId" element={ <Detailed/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
