function ScheduleTimeLine() {
    return (
        <div className='ml-11'>
            <h1 className='mb-8 font-bold'>Schedule</h1>
            <div>
                <div className='flex'>
                    <div className='w-8 h-8 relative flex justify-center items-center rounded-circle bg-dotBg border-round border-2 text-white text-center leading-8 mr-3 after:block after:absolute after:top-7 after:w-1 after:bg-line after:h-20'>
                        <span>27</span>
                    </div>
                    <div className='w-66 bg-dotBg px-3 py-2 rounded-lg'>
                        <div className='flex relative justify-between before:block before:absolute before:top-6 before:left-0 before:border-line before:border-b-lineColorActive before:w-60'>
                            <h3>Meeting</h3>
                            <input type='checkbox' className='border-2 border-checkbox bg-transparent' />
                        </div>
                        <div className='flex gap-3 mt-3'>
                            <div className='text-left text-xs font-bold leading-5'>
                                <h3>Time</h3>
                                <h3>Place</h3>
                                <h3>Notes</h3>
                            </div>
                            <div className='flex-1 text-left text-xs leading-5'>
                                <p>07.00 am - 10.00 am</p>
                                <p>Anomali Office</p>
                                <p>Nothing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleTimeLine;
