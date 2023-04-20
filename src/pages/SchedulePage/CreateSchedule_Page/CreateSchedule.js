import { ChevronRight } from '@mui/icons-material';
import { formatISO, isSameDay, parseISO, startOfToday } from 'date-fns';
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addScheduleItem, finishEditingSchedule } from '../ScheduleReducer';
import { Navigate, useOutletContext } from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers';
import { BackIcon, CompleteIcon } from '../../../assets/icons';

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
    const editingSchedule = useSelector((state) => state.schedule.editingSchedule);

    const [formData, setFormData] = useState(initialState);
    const [reDirect, setReDirect] = useState(false);
    const [timeDefault, setTimeDefault] = useState(null);
    const [error, setError] = useState(null);
    const [checked, setChecked] = useOutletContext();
    const minDate = startOfToday();

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

    useEffect(() => {
        setFormData(editingSchedule || initialState);
    }, [editingSchedule]);

    const goBack = () => {
        window.history.back();
    };

    if (reDirect) {
        setChecked(true);
        return <Navigate to={'/schedule'} />;
    }

    return (
        <section className='p-6 min-h-screen bg-scheduleBg accent-indigo-800 absolute top-0 left-0 right-0 z-20'>
            <header className='flex justify-between w-full mb-6'>
                <div onClick={goBack} className='transition ease-in-out hover:-translate-x-1'>
                    <BackIcon />
                </div>
                <div className='flex w-16 justify-between'>
                    <input
                        type='checkbox'
                        checked={formData.done}
                        onChange={(e) => setFormData((prev) => ({ ...prev, done: e.target.checked }))}
                    />
                    {editingSchedule ? (
                        <div
                            onClick={() => {
                                dispatch(finishEditingSchedule(formData));
                                setReDirect(true);
                            }}
                            className='cursor-pointer'
                        >
                            DONE
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                dispatch(addScheduleItem(formData));
                                setFormData(initialState);
                                setReDirect(true);
                            }}
                            className='transition ease-in-out hover:translate-x-1'
                        >
                            <CompleteIcon />
                        </button>
                    )}
                </div>
            </header>
            <main className='text-white'>
                <h2>Schedule</h2>
                <form className='gap-6 flex flex-col mt-6'>
                    <input
                        className='bg-[#CCC2FE] rounded w-full h-8 pl-2 px-[5px] placeholder:text-[#4F4F4F]'
                        type='text'
                        placeholder='Title'
                        value={formData.title}
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    />

                    <div className='flex justify-between items-center'>
                        <p>Time start</p>
                        <DateTimePicker
                            ampm={false}
                            minDate={minDate}
                            value={parseISO(formData.timeStart)}
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
                            value={parseISO(formData.timeFinish)}
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
                        value={formData.place}
                        onChange={(e) => setFormData((prev) => ({ ...prev, place: e.target.value }))}
                    />
                    <input
                        className='bg-[#CCC2FE] rounded w-full h-8 pl-2 px-[5px] placeholder:text-[#4F4F4F]'
                        type='text'
                        placeholder='Note'
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    />
                </form>
            </main>
        </section>
    );
}

export default CreateSchedule;
