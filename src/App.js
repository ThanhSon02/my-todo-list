import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotePage from './pages/NotePage/NotePage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import CreateSchedule from './pages/SchedulePage/CreateSchedule_Page/CreateSchedule';
import CreateNote from './pages/NotePage/CreateNote_Page/CreateNote';
import LayoutHeader from './components/LayoutHeader';

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
            <Route path='/createSchedule' element={<CreateSchedule />} />
            <Route path='/createNote' element={<CreateNote />} />
        </Routes>
    );
}

export default App;
