import { createBrowserRouter } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import NotePage from '../pages/NotePage/NotePage';
import LayoutHeader from '../components/LayoutHeader';
import CreateSchedule from '../pages/SchedulePage/CreateSchedule_Page/CreateSchedule';
import CreateNote from '../pages/NotePage/CreateNote_Page/CreateNote';

export default createBrowserRouter([
    {
        path: '/',
        element: <StartPage />,
    },
    {
        element: <LayoutHeader />,
        children: [
            {
                index: true,
                path: 'schedule',
                element: <SchedulePage />,
            },
            {
                path: 'note',
                element: <NotePage />,
            },
            {
                path: '/schedule/createSchedule',
                element: <CreateSchedule />,
            },
            {
                path: '/note/createNote',
                element: <CreateNote />,
            },
        ],
    },
]);
