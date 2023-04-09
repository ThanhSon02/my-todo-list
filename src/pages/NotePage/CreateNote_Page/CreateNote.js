import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import formatISO from 'date-fns/formatISO';
import { useDispatch } from 'react-redux';
import { addNoteItem } from '../NoteReducer';
import { Navigate } from 'react-router-dom';

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

    const goBack = () => {
        window.history.back();
    };

    if (reDirect) {
        return <Navigate to={'/note'} />;
    }

    return (
        <section className='p-6 bg-[#7E64FF] min-h-screen accent-indigo-800 text-white'>
            <header className='flex justify-between w-full mb-6'>
                <div onClick={goBack} className='transition ease-in-out hover:-translate-x-1'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M22.5 12C22.5 11.8011 22.421 11.6103 22.2803 11.4696C22.1397 11.329 21.9489 11.25 21.75 11.25H4.0605L8.781 6.53097C8.85073 6.46124 8.90604 6.37846 8.94378 6.28735C8.98152 6.19624 9.00094 6.09859 9.00094 5.99997C9.00094 5.90136 8.98152 5.80371 8.94378 5.7126C8.90604 5.62149 8.85073 5.5387 8.781 5.46897C8.71127 5.39924 8.62848 5.34392 8.53737 5.30619C8.44626 5.26845 8.34861 5.24902 8.25 5.24902C8.15138 5.24902 8.05373 5.26845 7.96262 5.30619C7.87151 5.34392 7.78873 5.39924 7.719 5.46897L1.719 11.469C1.64915 11.5386 1.59374 11.6214 1.55593 11.7125C1.51812 11.8036 1.49866 11.9013 1.49866 12C1.49866 12.0986 1.51812 12.1963 1.55593 12.2874C1.59374 12.3785 1.64915 12.4613 1.719 12.531L7.719 18.531C7.78873 18.6007 7.87151 18.656 7.96262 18.6938C8.05373 18.7315 8.15138 18.7509 8.25 18.7509C8.34861 18.7509 8.44626 18.7315 8.53737 18.6938C8.62848 18.656 8.71127 18.6007 8.781 18.531C8.85073 18.4612 8.90604 18.3785 8.94378 18.2873C8.98152 18.1962 9.00094 18.0986 9.00094 18C9.00094 17.9014 8.98152 17.8037 8.94378 17.7126C8.90604 17.6215 8.85073 17.5387 8.781 17.469L4.0605 12.75H21.75C21.9489 12.75 22.1397 12.671 22.2803 12.5303C22.421 12.3897 22.5 12.1989 22.5 12Z'
                            fill='white'
                        />
                    </svg>
                </div>
                <div className='flex w-16 justify-between'>
                    <span>
                        <svg width='24' height='24' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g clip-path='url(#clip0_1_1340)'>
                                <path
                                    d='M7.371 0.541497C7.42028 0.541409 7.46909 0.551034 7.51465 0.569823C7.56021 0.588612 7.60161 0.616195 7.6365 0.650997L11.349 4.3635C11.4193 4.43382 11.4588 4.52919 11.4588 4.62862C11.4588 4.72806 11.4193 4.82342 11.349 4.89375C10.989 5.25375 10.545 5.33475 10.2218 5.33475C10.089 5.33475 9.9705 5.32125 9.87675 5.3055L7.52625 7.656C7.58813 7.9053 7.62828 8.15951 7.64625 8.41575C7.68075 8.94225 7.62225 9.681 7.10625 10.197C7.03593 10.2673 6.94056 10.3068 6.84113 10.3068C6.74169 10.3068 6.64633 10.2673 6.576 10.197L4.45425 8.076L2.06775 10.4625C1.9215 10.6087 1.1535 11.139 1.00725 10.9927C0.861003 10.8465 1.39125 10.0777 1.5375 9.93225L3.924 7.54575L1.803 5.424C1.7327 5.35367 1.69321 5.25831 1.69321 5.15887C1.69321 5.05944 1.7327 4.96407 1.803 4.89375C2.319 4.37775 3.05775 4.3185 3.58425 4.35375C3.8405 4.3717 4.0947 4.41185 4.344 4.47375L6.6945 2.124C6.67488 2.00978 6.66485 1.89413 6.6645 1.77825C6.6645 1.45575 6.7455 1.01175 7.10625 0.650997C7.17653 0.580895 7.27174 0.541518 7.371 0.541497Z'
                                    fill='white'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_1_1340'>
                                    <rect width='12' height='12' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <button
                        onClick={() => {
                            dispatch(addNoteItem(formData));
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
