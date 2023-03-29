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
    isSameDay,
    getMonth,
} from 'date-fns';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

function Calendar({ datas }) {
    const today = startOfToday();
    const [monthFocus, setMonthFocus] = useState(getMonth(today));
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

    console.log(monthFocus);

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
                            key={index}
                            className={classNames(
                                isSunday(day) && isSameMonth(day, firstDayOfCurrentMonth) && 'text-highLight',
                                !isSameMonth(day, firstDayOfCurrentMonth) && 'text-notSameMonth',

                                'font-semibold w-11 h-11 flex justify-center items-center relative',
                            )}
                        >
                            <span
                                className={classNames(
                                    isToday(day) && 'bg-today text-today',
                                    'block w-8 h-8 rounded-circle text-center leading-8 hover:bg-slate-50 hover:text-black',
                                )}
                            >
                                {format(day, 'd')}
                            </span>
                            {datas.some((date) => isSameDay(date.date, day)) && (
                                <div className='absolute bottom-1 w-10 h-line bg-white'></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
