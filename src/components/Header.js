import { NotificationIcon, OptionIcon } from '../assets/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [showOption, setShowOption] = useState(false);

    return (
        <div>
            <div className='flex justify-between px-8 pt-6 pb-9 items-center xl:px-32'>
                <Link to={'/'} className='font-bold text-2xl'>
                    on.time
                </Link>
                <div className='flex gap-6'>
                    <div>
                        <NotificationIcon />
                    </div>
                    <div className='relative' onClick={() => setShowOption(!showOption)}>
                        <OptionIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
