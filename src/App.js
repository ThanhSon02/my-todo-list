import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SchedulePage from './pages/SchedulePage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/schedule' element={<SchedulePage />} />
        </Routes>
    );
}

export default App;
