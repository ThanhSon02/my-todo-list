import Calendar from '../../components/Calendar';
import Header from '../../components/Header';
import ScheduleTimeLine from '../../components/ScheduleTimeLine';

function SchedulePage() {
    return (
        <main className='bg-scheduleBg text-white'>
            <Header />
            <Calendar />
            <ScheduleTimeLine />
        </main>
    );
}

export default SchedulePage;
