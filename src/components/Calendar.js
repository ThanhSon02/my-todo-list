import {
    format,
    eachDayOfInterval,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isToday,
    isSunday,
    isSameMonth,
    add,
    isSameDay,
    parseISO,
} from 'date-fns';
import { useRef } from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

function Calendar({ datas, currentMonth, setCurrentMonth, firstDayOfCurrentMonth }) {
    const days = eachDayOfInterval({
        start: startOfWeek(firstDayOfCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
    });
    const monthRef = useRef();

    const handlePreviousMonth = () => {
        let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    };

    const handleNextMonth = () => {
        let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    };

    return (
        <div className='p-10 xl:my-0 xl:w-3/4 xl:mx-auto'>
            <div className='text-center h-max'>
                <h2 className='uppercase text-lg font-bold xl:text-[26px]'>
                    {format(firstDayOfCurrentMonth, 'MMMM yyyy')}
                </h2>
                <div className='flex justify-between xl:py-4 xl:px-[3.5rem] md:px-8 lg:px-12'>
                    <button onClick={handlePreviousMonth}>
                        <ArrowCircleLeft />
                    </button>
                    <button onClick={handleNextMonth}>
                        <ArrowCircleRight />
                    </button>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-7 font-extrabold justify-items-center mb-1 xl:text-xl'>
                    <div className='p-2 text-highLight'>SUN</div>
                    <div className='p-2'>MON</div>
                    <div className='p-2'>TUE</div>
                    <div className='p-2'>WED</div>
                    <div className='p-2'>THU</div>
                    <div className='p-2'>FRI</div>
                    <div className='p-2'>SAT</div>
                </div>
                <div
                    ref={monthRef}
                    className='grid grid-cols-7 grid-rows-6 justify-items-center xl:h-[500px] text-white xl:text-[18px]'
                >
                    {days.map((day, index) => (
                        <a
                            href={`#${datas.find((date) => isSameDay(parseISO(date.timeStart), day))?.id}`}
                            key={index}
                            className={classNames(
                                isSunday(day) && isSameMonth(day, firstDayOfCurrentMonth) && 'text-highLight',
                                !isSameMonth(day, firstDayOfCurrentMonth) && 'text-notSameMonth',
                                datas.some((date) => isSameDay(parseISO(date.timeStart), day)) &&
                                    'cursor-pointer pointer-events-auto',
                                'font-semibold w-11 h-11 xl:w-16 xl:h-16 lg:w-[3.75rem] lg:h-[3.75rem] flex justify-center items-center relative cursor-default pointer-events-none',
                            )}
                        >
                            <span
                                className={classNames(
                                    isToday(day) && 'bg-today text-today',
                                    'block w-8 h-8 rounded-circle text-center leading-8 select-none',
                                )}
                            >
                                {format(day, 'd')}
                            </span>
                            {datas.some((date) => isSameDay(parseISO(date.timeStart), day)) && (
                                <div className='absolute bottom-1 xl:bottom-3 w-10 h-line bg-white'></div>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
