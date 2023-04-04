import { Route, Routes } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import EditingPage from './pages/EditingPage/EditingPage';
import Home from './pages/Home';
import NotePage from './pages/NotePage/NotePage';
import SchedulePage from './pages/SchedulePage/SchedulePage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/schedule'
                element={
                    <LayoutHeader>
                        <SchedulePage />
                    </LayoutHeader>
                }
            />
            <Route
                path='/note'
                element={
                    <LayoutHeader>
                        <NotePage />
                    </LayoutHeader>
                }
            />
            <Route path='/edit' element={<EditingPage />} />
        </Routes>
    );
}

export default App;
