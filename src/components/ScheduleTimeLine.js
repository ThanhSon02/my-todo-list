import { format } from 'date-fns';
import { useState } from 'react';
function ScheduleTimeLine({ datas }) {
    return (
        <div className='ml-2 px-5'>
            <h1 className='mb-8 font-bold'>Schedule</h1>
            {datas.length > 0 ? (
                <div>
                    {datas.map((data, index) => (
                        <div className='flex relative'>
                            <div
                                className={
                                    'absolute flex justify-center items-center w-8 h-8 rounded-circle bg-dotBg border-round border-2 text-white text-center leading-8 left-1'
                                }
                            >
                                {format(data.date, 'd')}
                            </div>
                            <div className='flex flex-col ml-4 flex-1'>
                                {data.scheduleItem.map((item, index) => (
                                    <div className='flex gap-7'>
                                        <div className='w-2 h-32 bg-today'></div>
                                        <div
                                            className={`flex-auto ${
                                                item.checked ? 'bg-done' : 'bg-dotBg'
                                            } px-3 py-2 rounded-lg mb-3`}
                                        >
                                            <div className='flex relative justify-between before:block before:absolute before:top-6 before:left-0 before:right-0 before:border-line before:border-b-lineColorActive '>
                                                <h3>{item.title}</h3>
                                                <input
                                                    type='checkbox'
                                                    className='border-2 border-checkbox bg-transparent'
                                                    checked={item.checked}
                                                    // onChange={() => setChecked(!checked)}
                                                />
                                            </div>
                                            <div className='flex gap-3 mt-3'>
                                                <div className='text-left text-xs font-bold leading-5'>
                                                    <h3>Time</h3>
                                                    <h3>Place</h3>
                                                    <h3>Notes</h3>
                                                </div>
                                                <div className='flex-1 text-left text-xs leading-5'>
                                                    <p>{item.time}</p>
                                                    <p>{item.place}</p>
                                                    <p>{item.notes}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
