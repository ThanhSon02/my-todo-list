import Header from '../../components/Header';
import ScheduleCalendar from './ScheduleCalendar';

function SchedulePage() {
    return (
        <main className='bg-startBg h-screen text-white'>
            <Header />
            <ScheduleCalendar />
        </main>
    );
}

export default SchedulePage;
