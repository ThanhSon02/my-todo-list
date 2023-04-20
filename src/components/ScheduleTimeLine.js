import { format, isSameDay, isSameMonth, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { closeScheduleItem, deleteSchedule, startEditingSchedule } from '../pages/SchedulePage/ScheduleReducer';
import { useRef } from 'react';
import { OptionIcon } from '../assets/icons';
import { useNavigate } from 'react-router-dom';
import './ScheduleTimeLine.css';

function ScheduleTimeLine({ firstDayOfCurrentMonth }) {
    const scheduleListData = useSelector((state) => state.schedule.scheduleList);

    const dispatch = useDispatch();
    const listDateSchedule = useRef();
    const navigate = useNavigate();

    // lọc lịch trình có cùng tháng với tháng đang hiển thị
    let datas = scheduleListData.filter((scheduleItem) =>
        isSameMonth(firstDayOfCurrentMonth, parseISO(scheduleItem.timeStart)),
    );

    return (
        <div className='ml-2 px-5 xl:px-[7rem]'>
            <h1 className='mb-8 font-bold'>Schedule</h1>
            {datas.length > 0 ? (
                <div ref={listDateSchedule}>
                    {datas.map((data, index) => (
                        <div id={data.id} key={data.id} className='flex relative'>
                            {!isSameDay(parseISO(data.timeStart), parseISO(datas[index - 1]?.timeStart)) ? (
                                <div
                                    className={
                                        'absolute flex justify-center items-center w-8 h-8 rounded-circle bg-dotBg border-round border-2 text-white text-center leading-8 left-1'
                                    }
                                >
                                    {format(parseISO(data.timeStart), 'd')}
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className='flex flex-col ml-4 flex-1'>
                                <div className='flex gap-7'>
                                    <div className='w-2 h-32 bg-today'></div>
                                    <div
                                        className={`flex-auto ${
                                            data.done ? 'bg-done accent-indigo-800' : 'bg-dotBg'
                                        } px-3 py-2 rounded-lg mb-3`}
                                    >
                                        <div className='flex relative justify-between before:block before:absolute before:top-6 before:left-0 before:right-0 before:border-line before:border-b-lineColorActive '>
                                            <h3>{data.title}</h3>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type='checkbox'
                                                    checked={data.done}
                                                    value={data.id}
                                                    onChange={(e) =>
                                                        dispatch(
                                                            closeScheduleItem({
                                                                id: e.target.value,
                                                                done: e.target.checked,
                                                            }),
                                                        )
                                                    }
                                                />
                                                <div className='cursor-pointer relative option'>
                                                    <OptionIcon width={14} height={14} />
                                                    <div className='option-modal flex-col justify-center gap-2 text-center absolute top-3 right-0 rounded-md bg-violet-500 w-16 h-20 shadow-lg'>
                                                        <div
                                                            onClick={() => {
                                                                dispatch(startEditingSchedule(data.id));
                                                                navigate('/schedule/createSchedule');
                                                            }}
                                                            className='hover:bg-slate-300 hover:text-black w-full h-1/3 cursor-default px-2'
                                                        >
                                                            Edit
                                                        </div>
                                                        <div
                                                            onClick={() => {
                                                                dispatch(deleteSchedule(data.id));
                                                            }}
                                                            className='hover:bg-slate-300 hover:text-black w-full h-1/3 cursor-default px-2'
                                                        >
                                                            Delete
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 mt-3'>
                                            <div className='text-left text-xs font-bold leading-5'>
                                                <h3>Time</h3>
                                                <h3>Place</h3>
                                                <h3>Notes</h3>
                                            </div>
                                            <div className='flex-1 text-left text-xs leading-5'>
                                                <p>
                                                    {format(parseISO(data.timeStart), 'h.mm a') +
                                                        ' - ' +
                                                        format(parseISO(data.timeFinish), 'h.mm a')}
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
