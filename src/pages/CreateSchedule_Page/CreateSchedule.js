import { ChevronRight } from '@mui/icons-material';
import { formatISO, isSameDay } from 'date-fns';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addScheduleItem } from '../SchedulePage/ScheduleReducer';
import { Link, Navigate } from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers';

const initialState = {
    id: '',
    title: '',
    timeStart: '',
    timeFinish: '',
    place: '',
    notes: '',
    done: false,
};

function CreateSchedule() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);
    const [reDirect, setReDirect] = useState(false);
    const [timeDefault, setTimeDefault] = useState(null);
    const [error, setError] = useState(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'minTime': {
                return 'Please select a time greater than start time';
            }

            default: {
                return '';
            }
        }
    }, [error]);

    if (reDirect) {
        return <Navigate to={'/schedule'} />;
    }

    return (
        <section className='p-6 bg-scheduleBg min-h-screen accent-indigo-800'>
            <header className='flex justify-between w-full mb-6'>
                <Link to={'/schedule'} className='transition ease-in-out hover:-translate-x-1'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M22.5 12C22.5 11.8011 22.421 11.6103 22.2803 11.4696C22.1397 11.329 21.9489 11.25 21.75 11.25H4.0605L8.781 6.53097C8.85073 6.46124 8.90604 6.37846 8.94378 6.28735C8.98152 6.19624 9.00094 6.09859 9.00094 5.99997C9.00094 5.90136 8.98152 5.80371 8.94378 5.7126C8.90604 5.62149 8.85073 5.5387 8.781 5.46897C8.71127 5.39924 8.62848 5.34392 8.53737 5.30619C8.44626 5.26845 8.34861 5.24902 8.25 5.24902C8.15138 5.24902 8.05373 5.26845 7.96262 5.30619C7.87151 5.34392 7.78873 5.39924 7.719 5.46897L1.719 11.469C1.64915 11.5386 1.59374 11.6214 1.55593 11.7125C1.51812 11.8036 1.49866 11.9013 1.49866 12C1.49866 12.0986 1.51812 12.1963 1.55593 12.2874C1.59374 12.3785 1.64915 12.4613 1.719 12.531L7.719 18.531C7.78873 18.6007 7.87151 18.656 7.96262 18.6938C8.05373 18.7315 8.15138 18.7509 8.25 18.7509C8.34861 18.7509 8.44626 18.7315 8.53737 18.6938C8.62848 18.656 8.71127 18.6007 8.781 18.531C8.85073 18.4612 8.90604 18.3785 8.94378 18.2873C8.98152 18.1962 9.00094 18.0986 9.00094 18C9.00094 17.9014 8.98152 17.8037 8.94378 17.7126C8.90604 17.6215 8.85073 17.5387 8.781 17.469L4.0605 12.75H21.75C21.9489 12.75 22.1397 12.671 22.2803 12.5303C22.421 12.3897 22.5 12.1989 22.5 12Z'
                            fill='white'
                        />
                    </svg>
                </Link>
                <div className='flex w-16 justify-between'>
                    <input
                        type='checkbox'
                        onChange={(e) => setFormData((prev) => ({ ...prev, done: e.target.checked }))}
                    />
                    <button
                        onClick={() => {
                            dispatch(addScheduleItem(formData));
                            setFormData(initialState);
                            setReDirect(true);
                        }}
                        className='transition ease-in-out hover:translate-x-1'
                    >
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M4 12.6667L10.1538 18L20 6'
                                stroke='white'
                                stroke-width='2'
                                stroke-linecap='round'
                            />
                        </svg>
                    </button>
                </div>
            </header>
            <main className='text-white'>
                <h2>Schedule</h2>
                <form className='gap-6 flex flex-col mt-6'>
                    <input
                        className='bg-[#CCC2FE] rounded w-full h-8 pl-2 px-[5px] placeholder:text-[#4F4F4F]'
                        type='text'
                        placeholder='Title'
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    />

                    <div className='flex justify-between items-center'>
                        <p>Time start</p>
                        <DateTimePicker
                            disablePast
                            ampm={false}
                            onChange={(value) => {
                                setFormData((prev) => ({ ...prev, timeStart: formatISO(value) }));
                                setTimeDefault(value);
                            }}
                            slots={{
                                openPickerIcon: ChevronRight,
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    color: '#828282',
                                    fontSize: '12px',
                                    padding: 0,
                                },
                                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#828282',
                                },
                            }}
                        />
                    </div>

                    <div className='flex justify-between items-center'>
                        <p>Time finish</p>
                        <DateTimePicker
                            shouldDisableDate={(value) => {
                                return !isSameDay(value, timeDefault);
                            }}
                            minDateTime={timeDefault}
                            onError={(newError) => setError(newError)}
                            slotProps={{
                                textField: {
                                    helperText: errorMessage,
                                },
                            }}
                            ampm={false}
                            onChange={(value) => setFormData((prev) => ({ ...prev, timeFinish: formatISO(value) }))}
                            slots={{
                                openPickerIcon: ChevronRight,
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    color: '#828282',
                                    fontSize: '12px',
                                    padding: 0,
                                },
                                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#828282',
                                },
                            }}
                        />
                    </div>

                    <input
                        className='bg-[#CCC2FE] rounded w-full h-8 pl-2 px-[5px] placeholder:text-[#4F4F4F]'
                        type='text'
                        placeholder='Place'
                        onChange={(e) => setFormData((prev) => ({ ...prev, place: e.target.value }))}
                    />
                    <input
                        className='bg-[#CCC2FE] rounded w-full h-8 pl-2 px-[5px] placeholder:text-[#4F4F4F]'
                        type='text'
                        placeholder='Note'
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    />
                </form>
            </main>
        </section>
    );
}

export default CreateSchedule;
