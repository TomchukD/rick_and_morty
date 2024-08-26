import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/main';
import Detailed from './page/detailed';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="detail:/slug" element={<Detailed />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
