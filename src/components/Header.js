import './Header.css';
import { useState } from 'react';
function Header() {
    const [checked, setChecked] = useState(true);

    return (
        <div>
            <div className='flex justify-between px-8 pt-6 pb-9 items-center'>
                <h2 className='font-bold text-2xl'>on.time</h2>
                <div className='flex gap-6'>
                    <div>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M12 22.8534C12.4199 22.8437 12.8229 22.6858 13.1377 22.4076C13.4525 22.1295 13.6587 21.749 13.72 21.3334H10.2133C10.2763 21.7602 10.4922 22.1497 10.8209 22.4293C11.1495 22.7089 11.5685 22.8596 12 22.8534Z'
                                fill='white'
                            />
                            <path
                                d='M21.9 18.7533L21.6734 18.5534C21.0303 17.9804 20.4675 17.3234 20 16.6C19.4895 15.6017 19.1835 14.5115 19.1 13.3934V10.1C19.0973 9.69998 19.0616 9.30085 18.9934 8.90668C17.8641 8.67457 16.8497 8.05936 16.122 7.1652C15.3943 6.27104 14.9979 5.15288 15 4.00002V3.58002C14.304 3.23748 13.5561 3.01222 12.7867 2.91335V2.07335C12.7867 1.83731 12.6929 1.61093 12.526 1.44402C12.3591 1.27712 12.1327 1.18335 11.8967 1.18335C11.6606 1.18335 11.4343 1.27712 11.2674 1.44402C11.1005 1.61093 11.0067 1.83731 11.0067 2.07335V2.94668C9.28383 3.18972 7.70707 4.04785 6.5675 5.36264C5.42793 6.67743 4.80251 8.36011 4.80669 10.1V13.3934C4.72319 14.5115 4.41721 15.6017 3.90669 16.6C3.44728 17.3216 2.89349 17.9785 2.26002 18.5534L2.03336 18.7533V20.6334H21.9V18.7533Z'
                                fill='white'
                            />
                            <path
                                d='M20 7.33329C21.8409 7.33329 23.3333 5.84091 23.3333 3.99996C23.3333 2.15901 21.8409 0.666626 20 0.666626C18.159 0.666626 16.6667 2.15901 16.6667 3.99996C16.6667 5.84091 18.159 7.33329 20 7.33329Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                    <div>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M11.8095 6.85719C13.0719 6.85719 14.0952 5.83385 14.0952 4.57148C14.0952 3.30912 13.0719 2.28577 11.8095 2.28577C10.5472 2.28577 9.5238 3.30912 9.5238 4.57148C9.5238 5.83385 10.5472 6.85719 11.8095 6.85719Z'
                                fill='white'
                            />
                            <path
                                d='M11.8095 14.4762C13.0719 14.4762 14.0952 13.4529 14.0952 12.1905C14.0952 10.9281 13.0719 9.90479 11.8095 9.90479C10.5472 9.90479 9.5238 10.9281 9.5238 12.1905C9.5238 13.4529 10.5472 14.4762 11.8095 14.4762Z'
                                fill='white'
                            />
                            <path
                                d='M11.8095 22.0952C13.0719 22.0952 14.0952 21.0719 14.0952 19.8095C14.0952 18.5472 13.0719 17.5238 11.8095 17.5238C10.5472 17.5238 9.5238 18.5472 9.5238 19.8095C9.5238 21.0719 10.5472 22.0952 11.8095 22.0952Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='switch-wrapper flex justify-between items-center w-74.5 h-10 my-0 mx-auto bg-switchBtnBg rounded text-center p-1 relative'>
                <input id='switch' type='checkbox' name='switch' onChange={() => setChecked(!checked)} />
                <label className='text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer' htmlFor='switch'>
                    Schedule
                </label>
                <label className='text-base font-semibold w-33.25 h-8 leading-8 z-10 cursor-pointer' htmlFor='switch'>
                    Note
                </label>
                <span className='highlighter bg-switchBtn rounded absolute w-33.25 h-8 left-1 top-1'></span>
            </div>
        </div>
    );
}

export default Header;
