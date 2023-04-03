function CreateModal() {
    return (
        <div className='bg-[rgba(8,8,8,0.83)]  fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
            <div className='bg-today absolute w-2/5 h-40'>
                <h2>Note</h2>
                <h2>Schedule</h2>
            </div>
        </div>
    );
}

export default CreateModal;
