import Header from './Header';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../components/LayoutHeader.css';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { ScheduleIcon, NoteIcon } from '../assets/icons';

function LayoutHeader() {
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate();

    const handleNoteClick = () => {
        navigate('/note/createNote');
    };

    const handleScheduleClick = () => {
        navigate('/schedule/createSchedule');
    };

    return (
        <main className='bg-scheduleBg text-white relative min-h-screen'>
            <Header />

            <div className='switch-wrapper flex justify-between items-center w-74.5 h-10 my-0 mx-auto bg-switchBtnBg rounded text-center p-1 relative xl:w-[408px]'>
                <Link
                    onClick={() => setChecked(true)}
                    className={`${
                        checked ? 'schedule' : ''
                    } togglePage select-none text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer focus:outline-none xl:w-[188px]`}
                    checked
                    to={'/schedule'}
                >
                    Schedule
                </Link>
                <Link
                    onClick={() => setChecked(false)}
                    className={`${
                        checked ? '' : 'note'
                    } togglePage select-none text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer focus:outline-none xl:w-[188px]`}
                    to={'/note'}
                >
                    Note
                </Link>
                <span className='highlighter bg-switchBtn rounded absolute w-33.25 h-8 left-1 top-1 xl:w-[188px]'></span>
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
                    '& .css-r9uhzn': {
                        backgroundColor: '#7E64FF',
                    },
                }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction
                    sx={{
                        '& .css-13y48ld-MuiSpeedDialAction-staticTooltipLabel, .css-16nb7rk': {
                            backgroundColor: '#7e64ff',
                            color: '#fff',
                        },
                        '& .css-1e2cad8-MuiButtonBase-root-MuiFab-root-MuiSpeedDialAction-fab, .css-1u93ig5': {
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
                        '& .css-13y48ld-MuiSpeedDialAction-staticTooltipLabel, .css-16nb7rk': {
                            backgroundColor: '#7e64ff',
                            color: '#fff',
                        },
                        '& .css-1bn53lx.Mui-error .MuiOutlinedInput-notchedOutline': {
                            backgroundColor: 'transparent',
                        },
                        '& .css-1e2cad8-MuiButtonBase-root-MuiFab-root-MuiSpeedDialAction-fab, .css-1u93ig5': {
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
