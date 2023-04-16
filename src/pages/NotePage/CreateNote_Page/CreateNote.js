import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import formatISO from 'date-fns/formatISO';
import { useDispatch } from 'react-redux';
import { addNoteItem } from '../NoteReducer';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import { BackIcon, CompleteIcon, PinIcon } from '../../../icons';

const initialState = {
    id: '',
    title: '',
    date: '',
    pin: false,
};

function CreateNote() {
    const [formData, setFormData] = useState(initialState);
    const [reDirect, setReDirect] = useState(false);
    const dispatch = useDispatch();
    const [checked, setChecked] = useOutletContext();
    const navigate = useNavigate();

    const goBack = () => {
        window.history.back();
    };

    if (reDirect) {
        setChecked(false);
        return <Navigate to={'/note'} />;
    }

    return (
        <section className='p-6 bg-[#7E64FF] min-h-screen accent-indigo-800 text-white absolute top-0 left-0 right-0 bottom-0 z-20'>
            <header className='flex justify-between w-full mb-6'>
                <div onClick={goBack} className='transition ease-in-out hover:-translate-x-1'>
                    <BackIcon />
                </div>
                <div className='flex w-16 justify-between'>
                    <span>
                        <PinIcon />
                    </span>
                    <button
                        onClick={() => {
                            dispatch(addNoteItem(formData));
                            setFormData(initialState);

                            setReDirect(true);
                        }}
                        className='transition ease-in-out hover:translate-x-1'
                    >
                        <CompleteIcon />
                    </button>
                </div>
            </header>
            <main className=''>
                <div>
                    <h2>Date</h2>
                    <DatePicker
                        onChange={(value) => setFormData((prev) => ({ ...prev, date: formatISO(value) }))}
                        sx={{
                            '& .MuiInputBase-root': {
                                color: '#fff',
                                fontSize: '12px',
                                padding: 0,
                            },
                            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '& .MuiSvgIcon-root': {
                                color: '#fff',
                            },
                        }}
                    />
                </div>
                <div>
                    <h2>Title</h2>
                    <textarea
                        type='text'
                        rows={20}
                        placeholder='Your text'
                        className='w-full bg-transparent outline-none text-base mt-6 resize-none'
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    />
                </div>
            </main>
        </section>
    );
}

export default CreateNote;
