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
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

function Calendar({ datas, setCurrentMonth, firstDayOfCurrentMonth }) {
    const days = eachDayOfInterval({
        start: startOfWeek(firstDayOfCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
    });

    const handlePreviousMonth = () => {
        let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    };

    const handleNextMonth = () => {
        let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    };

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
                        <a
                            href={`#${datas.find((date) => isSameDay(parseISO(date.timeStart), day))?.id}`}
                            key={index}
                            className={classNames(
                                isSunday(day) && isSameMonth(day, firstDayOfCurrentMonth) && 'text-highLight',
                                !isSameMonth(day, firstDayOfCurrentMonth) && 'text-notSameMonth',
                                datas.some((date) => isSameDay(parseISO(date.timeStart), day)) && 'cursor-pointer',
                                'font-semibold w-11 h-11 flex justify-center items-center relative cursor-default',
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
                                <div className='absolute bottom-1 w-10 h-line bg-white'></div>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
