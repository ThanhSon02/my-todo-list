import Header from './Header';
import { useState } from 'react';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import NotePage from '../pages/NotePage/NotePage';

function LayoutHeader({ children }) {
    const [checked, setChecked] = useState(true);

    return (
        <main className='bg-scheduleBg min-h-screen text-white'>
            <Header checked={checked} setChecked={setChecked} />
            {checked ? <SchedulePage /> : <NotePage />}
        </main>
    );
}

export default LayoutHeader;
