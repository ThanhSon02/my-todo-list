import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotePage from './pages/NotePage/NotePage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import CreateSchedule from './pages/CreateSchedule_Page/CreateSchedule';
import CreateNote from './pages/CreateNote_Page/CreateNote';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/schedule' element={<SchedulePage />} />
            <Route path='/note' element={<NotePage />} />
            <Route path='/createSchedule' element={<CreateSchedule />} />
            <Route path='/createNote' element={<CreateNote />} />
        </Routes>
    );
}

export default App;
