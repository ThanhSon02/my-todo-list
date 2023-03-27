import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className='bg-startBg h-screen text-white grid grid-cols-1 grid-rows-3'>
            <h1 className='place-self-center text-6xl font-bold'>on.time</h1>
            <p className='place-self-center text-center w-60 text-4xl'>Make yourself more on time</p>
            <button className='place-self-center w-72 h-14 bg-white text-2xl font-bold uppercase text-btn rounded-xl'>
                <Link to={'/schedule'}>Start</Link>
            </button>
        </main>
    );
}

export default Home;
