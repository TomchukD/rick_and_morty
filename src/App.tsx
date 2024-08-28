import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RMMain from 'src/page/RMMain';
import RMDetailed from 'src/page/RMDetailed';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <RMMain/> }/>
                <Route path="detailed/:characterId" element={ <RMDetailed/> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
