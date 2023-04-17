import { NotificationIcon, OptionIcon } from '../icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletingSchedule, editingSchedule } from '../pages/SchedulePage/ScheduleReducer';

function Header() {
    const [showOption, setShowOption] = useState(false);

    const dispatch = useDispatch();
    return (
        <div>
            <div className='flex justify-between px-8 pt-6 pb-9 items-center'>
                <h2 className='font-bold text-2xl'>on.time</h2>
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
