import Calendar from '../../components/Calendar';
import Header from '../../components/Header';
import ScheduleTimeLine from '../../components/ScheduleTimeLine';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function SchedulePage() {
    const scheduleList = useSelector((state) => state.schedule);
    const [datas, setDatas] = useState(scheduleList);
    return (
        <main className='bg-scheduleBg min-h-screen text-white'>
            <Header />
            <Calendar datas={datas} />
            <ScheduleTimeLine datas={datas} />
        </main>
    );
}

export default SchedulePage;
