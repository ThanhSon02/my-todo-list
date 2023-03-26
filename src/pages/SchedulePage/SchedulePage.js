import { Timeline } from 'antd';
import Calendar from '../../components/Calendar';
import Header from '../../components/Header';

function SchedulePage() {
    return (
        <main className='bg-startBg h-screen text-white'>
            <Header />
            <Calendar />
            <Timeline />
        </main>
    );
}

export default SchedulePage;
