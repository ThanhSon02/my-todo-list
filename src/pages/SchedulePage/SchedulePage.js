import Calendar from '../../components/Calendar';
import Header from '../../components/Header';
import ScheduleTimeLine from '../../components/ScheduleTimeLine';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format, startOfToday, parse } from 'date-fns';
import CreateModal from '../../components/CreateModal';

function SchedulePage() {
    const today = startOfToday();
    const scheduleList = useSelector((state) => state.schedule);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    let firstDayOfCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
    const [showModal, setShowModal] = useState(false);

    return (
        <main className='bg-scheduleBg min-h-screen text-white relative'>
            <Header />
            <Calendar
                datas={scheduleList}
                today={today}
                firstDayOfCurrentMonth={firstDayOfCurrentMonth}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
            />
            <ScheduleTimeLine firstDayOfCurrentMonth={firstDayOfCurrentMonth} />
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

export default SchedulePage;
