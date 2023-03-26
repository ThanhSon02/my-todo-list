import {
    format,
    startOfToday,
    parse,
    eachDayOfInterval,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isToday,
    isSunday,
    isSameMonth,
    add,
    isEqual,
} from 'date-fns';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

function Calendar() {
    const today = startOfToday();
    const [selectedDay, setselectedDay] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    const firstDayOfCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    const days = eachDayOfInterval({
        start: startOfWeek(firstDayOfCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
    });

    const handlePreviousMonth = () => {
        let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
        console.log(firstDayNextMonth);
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    };

    const handleNextMonth = () => {
        let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
        console.log(firstDayNextMonth);
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    };
    console.log(format(selectedDay, 'dd MMMM yyyy'));

    return (
        <div className='p-10'>
            <div className='text-center h-max'>
                <h2 className='uppercase text-lg font-bold'>{format(firstDayOfCurrentMonth, 'MMMM yyyy')}</h2>
                <div className='flex justify-around'>
                    <button onClick={handlePreviousMonth}>
                        <AiOutlineLeft />
                    </button>
                    <button onClick={handleNextMonth}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-7 font-extrabold justify-items-center mb-1'>
                    <div className='p-2 text-highLight'>SUN</div>
                    <div className='p-2'>MON</div>
                    <div className='p-2'>TUE</div>
                    <div className='p-2'>WED</div>
                    <div className='p-2'>THU</div>
                    <div className='p-2'>FRI</div>
                    <div className='p-2'>SAT</div>
                </div>
                <div className='grid grid-cols-7 grid-rows-6 justify-items-center text-white'>
                    {days.map((day, index) => (
                        <div
                            className={classNames(
                                isToday(day) && 'bg-today text-today',
                                isSunday(day) && isSameMonth(day, firstDayOfCurrentMonth) && 'text-highLight',
                                !isSameMonth(day, firstDayOfCurrentMonth) && 'text-notSameMonth',
                                isEqual(day, selectedDay) &&
                                    'before:block before:absolute before:bottom-1 before:border-b-white before:border-b-2 before:w-8 before:left-1 before:right-1',
                                'font-semibold w-10 h-10 rounded-circle text-center leading-10 hover:bg-slate-50 hover:text-black relative',
                            )}
                            onClick={() => setselectedDay(day)}
                        >
                            {format(day, 'd')}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
