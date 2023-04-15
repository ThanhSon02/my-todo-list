import Header from './Header';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../components/LayoutHeader.css';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { ScheduleIcon, NoteIcon, CreateIcon } from '../icons';

function LayoutHeader() {
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate();

    const handleNoteClick = () => {
        navigate('/createNote');
    };

    const handleScheduleClick = () => {
        navigate('/createSchedule');
    };

    return (
        <main className='bg-scheduleBg min-h-screen text-white relative'>
            <Header />

            <div className='switch-wrapper flex justify-between items-center w-74.5 h-10 my-0 mx-auto bg-switchBtnBg rounded text-center p-1 relative'>
                <Link
                    onClick={() => setChecked(true)}
                    className={`${
                        checked ? 'schedule' : ''
                    } togglePage select-none text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer focus:outline-none`}
                    checked
                    to={'/schedule'}
                >
                    Schedule
                </Link>
                <Link
                    onClick={() => setChecked(false)}
                    className={`${
                        checked ? '' : 'note'
                    } togglePage select-none text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer focus:outline-none`}
                    to={'/note'}
                >
                    Note
                </Link>
                <span className='highlighter bg-switchBtn rounded absolute w-33.25 h-8 left-1 top-1'></span>
            </div>

            <Outlet context={[checked, setChecked]}></Outlet>

            <SpeedDial
                ariaLabel=''
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    color: '#7E64FF',
                    zIndex: 5,
                    '& .css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab': {
                        backgroundColor: '#7E64FF',
                    },
                    '& .css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover': {
                        backgroundColor: '#7E64FF',
                    },
                }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction
                    sx={{
                        '& .css-13y48ld-MuiSpeedDialAction-staticTooltipLabel': {
                            backgroundColor: '#7e64ff',
                            color: '#fff',
                        },
                        '& .css-1e2cad8-MuiButtonBase-root-MuiFab-root-MuiSpeedDialAction-fab': {
                            backgroundColor: '#7e64ff',
                        },
                        '& .css-1e2cad8-MuiButtonBase-root-MuiFab-root-MuiSpeedDialAction-fab:hover': {
                            backgroundColor: '#5c5679',
                        },
                    }}
                    key={'Note'}
                    icon={<NoteIcon />}
                    tooltipTitle={'Note'}
                    tooltipOpen
                    onClick={handleNoteClick}
                />
                <SpeedDialAction
                    sx={{
                        '& .css-13y48ld-MuiSpeedDialAction-staticTooltipLabel': {
                            backgroundColor: '#7e64ff',
                            color: '#fff',
                        },
                        '& .css-1e2cad8-MuiButtonBase-root-MuiFab-root-MuiSpeedDialAction-fab': {
                            backgroundColor: '#7e64ff',
                        },
                        '& .css-1e2cad8-MuiButtonBase-root-MuiFab-root-MuiSpeedDialAction-fab:hover': {
                            backgroundColor: '#5c5679',
                        },
                    }}
                    key={'Schedule'}
                    icon={<ScheduleIcon />}
                    tooltipTitle={'Schedule'}
                    tooltipOpen
                    onClick={handleScheduleClick}
                />
            </SpeedDial>
        </main>
    );
}

export default LayoutHeader;
