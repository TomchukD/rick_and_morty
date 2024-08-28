import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'src/page/main';
import Detailed from './page/detailed';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Main/> }/>
                <Route path="detailed/:characterId" element={ <Detailed/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
