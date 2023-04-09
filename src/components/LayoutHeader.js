import Header from './Header';
import { useState } from 'react';
import CreateModal from './CreateModal';
import { Link } from 'react-router-dom';
import '../components/LayoutHeader.css';

function LayoutHeader({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [checked, setChecked] = useState(true);

    return (
        <main className='bg-scheduleBg min-h-screen text-white relative'>
            <Header />

            <div className='switch-wrapper flex justify-between items-center w-74.5 h-10 my-0 mx-auto bg-switchBtnBg rounded text-center p-1 relative'>
                <Link
                    onClick={() => setChecked(true)}
                    className={`${
                        checked ? 'active' : ''
                    } togglePage select-none text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer focus:outline-none`}
                    checked
                    to={'/schedule'}
                >
                    Schedule
                </Link>
                <Link
                    onClick={() => setChecked(false)}
                    className={`${
                        checked ? '' : 'active'
                    } togglePage select-none text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer focus:outline-none`}
                    to={'/note'}
                >
                    Note
                </Link>
                <span className='highlighter bg-switchBtn rounded absolute w-33.25 h-8 left-1 top-1'></span>
            </div>

            {children}
            <div
                onClick={() => setShowModal(!showModal)}
                className='flex justify-center items-center fixed bottom-8 right-8 w-12 h-12 bg-today rounded-full'
            >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 2V18' stroke='white' stroke-width='3' stroke-linecap='round' />
                    <path d='M2 10L18 10' stroke='white' stroke-width='3' stroke-linecap='round' />
                </svg>
            </div>
            {showModal && <CreateModal setShowModal={setShowModal} setChecked={setChecked} />}
        </main>
    );
}

export default LayoutHeader;
