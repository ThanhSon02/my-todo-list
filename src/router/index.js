import { createBrowserRouter } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import NotePage from '../pages/NotePage/NotePage';
import LayoutHeader from '../components/LayoutHeader';
import CreateSchedule from '../pages/SchedulePage/CreateSchedule_Page/CreateSchedule';
import CreateNote from '../pages/NotePage/CreateNote_Page/CreateNote';

export default createBrowserRouter([
    {
        path: 'start',
        element: <StartPage />,
    },
    {
        path: '/',
        element: <LayoutHeader />,
        children: [
            {
                path: 'schedule',
                element: <SchedulePage />,
            },
            {
                path: 'note',
                element: <NotePage />,
            },
            {
                path: 'createSchedule',
                element: <CreateSchedule />,
            },
            {
                path: 'createNote',
                element: <CreateNote />,
            },
        ],
    },
]);
