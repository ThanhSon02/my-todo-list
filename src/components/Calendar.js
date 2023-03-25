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
} from 'date-fns';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';
function Calendar() {
    const today = startOfToday();
    const [selectedDay, setselectedDay] = useState(today);
    const currentMonth = format(today, 'MMM-yyyy');
    const firstDayOfCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
    const days = eachDayOfInterval({
        start: startOfWeek(firstDayOfCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
    });

    const sunday = isSunday(today);

    console.log(sunday);

    const handlePreviousMonth = () => {};

    const handleNextMonth = () => {};

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <div className='p-10'>
            <div className='text-center h-max'>
                <h2 className='uppercase text-lg font-bold'>{format(today, 'MMMM yyyy')}</h2>
                <div className='flex justify-between'>
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
                <div className='grid grid-cols-7 grid-rows-5 justify-items-center'>
                    {days.map((day, index) => (
                        <div
                            className={classNames(
                                isToday(day) && 'bg-today text-today',
                                isSunday(day) && isSameMonth(day, today) && 'text-highLight',
                                !isSameMonth(day, today) && 'text-notSameMonth',
                                'font-semibold p-2',
                            )}
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
