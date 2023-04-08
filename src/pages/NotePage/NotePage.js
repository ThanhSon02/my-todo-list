import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useState } from 'react';
import CreateModal from '../../components/CreateModal';

function NotePage() {
    const noteList = useSelector((state) => state.note);
    const [showModal, setShowModal] = useState(false);

    return (
        <main className='bg-scheduleBg min-h-screen text-white relative'>
            <Header />
            <div className='p-8'>
                <div className='w-full flex bg-searchBg px-4 py-2 gap-2 rounded-[20px] mb-8'>
                    <span>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z'
                                fill='#4F4F4F'
                            />
                        </svg>
                    </span>
                    <input
                        className='flex-1 bg-transparent outline-none placeholder:text-placeHolder'
                        placeholder='Search Note'
                        type='text'
                    ></input>
                </div>
                <div>
                    {noteList.map((noteItem, index) => (
                        <div className='bg-today p-4 rounded-lg mb-4'>
                            <p className='text-sm mb-3'>{noteItem.content}</p>
                            <div className='flex w-full justify-between'>
                                <p className='text-[10px]'>{format(parseISO(noteItem.date), 'dd/MM/yyyy')}</p>
                                {noteItem.pin && (
                                    <span>
                                        <svg
                                            width='12'
                                            height='12'
                                            viewBox='0 0 12 12'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
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
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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

export default NotePage;
