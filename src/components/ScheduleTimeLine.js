import { createAction } from '@reduxjs/toolkit';
import { format, isSameDay } from 'date-fns';
import { useDispatch } from 'react-redux';
import { closeScheduleItem } from '../pages/SchedulePage/Schedule.reducer';
function ScheduleTimeLine({ datas }) {
    const dispatch = useDispatch();
    const handleChecked = (e) => {
        dispatch(closeScheduleItem({}));
    };

    console.log(datas);

    return (
        <div className='ml-2 px-5'>
            <h1 className='mb-8 font-bold'>Schedule</h1>
            {datas.length > 0 ? (
                <div>
                    {datas.map((data, index) => (
                        <div key={index} className='flex relative'>
                            {!isSameDay(data.startDate, datas[index - 1]?.startDate) ? (
                                <div
                                    className={
                                        'absolute flex justify-center items-center w-8 h-8 rounded-circle bg-dotBg border-round border-2 text-white text-center leading-8 left-1'
                                    }
                                >
                                    {format(data.startDate, 'd')}
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className='flex flex-col ml-4 flex-1'>
                                <div className='flex gap-7'>
                                    <div className='w-2 h-32 bg-today'></div>
                                    <div
                                        className={`flex-auto ${
                                            data.done ? 'bg-done' : 'bg-dotBg'
                                        } px-3 py-2 rounded-lg mb-3`}
                                    >
                                        <div className='flex relative justify-between before:block before:absolute before:top-6 before:left-0 before:right-0 before:border-line before:border-b-lineColorActive '>
                                            <h3>Meeting</h3>
                                            <input
                                                type='checkbox'
                                                checked={data.done}
                                                value={data}
                                                onChange={(e) => handleChecked(e)}
                                            />
                                        </div>
                                        <div className='flex gap-3 mt-3'>
                                            <div className='text-left text-xs font-bold leading-5'>
                                                <h3>Time</h3>
                                                <h3>Place</h3>
                                                <h3>Notes</h3>
                                            </div>
                                            <div className='flex-1 text-left text-xs leading-5'>
                                                <p>
                                                    {format(data.startDate, 'h.mm a') +
                                                        ' - ' +
                                                        format(data.endDate, 'h.mm a')}
                                                </p>
                                                <p>{data.place}</p>
                                                <p>{data.notes}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='w-52 h-9 bg-switchBtnBg p-3 rounded-lg mx-auto text-xs font-semibold flex justify-center items-center'>
                    <p>You Didn't Have Any Schedule.</p>
                </div>
            )}
        </div>
    );
}

export default ScheduleTimeLine;
