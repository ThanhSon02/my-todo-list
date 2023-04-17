import Calendar from '../../components/Calendar';
import ScheduleTimeLine from '../../components/ScheduleTimeLine';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format, startOfToday, parse } from 'date-fns';

function SchedulePage() {
    const today = startOfToday();
    const schedule_list = useSelector((state) => state.schedule.scheduleList);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    let firstDayOfCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    return (
        <main className='min-h-screen text-white relative'>
            <Calendar
                datas={schedule_list}
                today={today}
                firstDayOfCurrentMonth={firstDayOfCurrentMonth}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
            />
            <ScheduleTimeLine firstDayOfCurrentMonth={firstDayOfCurrentMonth} />
        </main>
    );
}

export default SchedulePage;
