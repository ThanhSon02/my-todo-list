import Header from './Header';
import { useState } from 'react';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import NotePage from '../pages/NotePage/NotePage';
import CreateModal from './CreateModal';

function LayoutHeader({ children }) {
    const [checked, setChecked] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <main className='bg-scheduleBg min-h-screen text-white relative'>
            <Header checked={checked} setChecked={setChecked} />
            {checked ? <SchedulePage /> : <NotePage />}
            <div
                onClick={() => setShowModal(!showModal)}
                className='flex justify-center items-center fixed bottom-8 right-8 w-12 h-12 bg-today rounded-full'
            >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 2V18' stroke='white' stroke-width='3' stroke-linecap='round' />
                    <path d='M2 10L18 10' stroke='white' stroke-width='3' stroke-linecap='round' />
                </svg>
            </div>
            {showModal && <CreateModal setShowModal={setShowModal} />}
        </main>
    );
}

export default LayoutHeader;
