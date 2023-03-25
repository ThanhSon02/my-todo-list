import Calendar from '../../components/Calendar';
import Header from '../../components/Header';
import Example from '../../util/Example';

function SchedulePage() {
    return (
        <main className='bg-startBg h-screen text-white'>
            <Header />
            <Calendar />
            <Example />
        </main>
    );
}

export default SchedulePage;
