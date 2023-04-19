import { format, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { OptionIcon, PinIcon, SearchIcon } from '../../icons';
import { deleteNote, startEditingNote } from './NoteReducer';
import { useNavigate } from 'react-router-dom';

function NotePage() {
    const noteList = useSelector((state) => state.note.noteList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <main className=' p-8'>
            <div className='w-full flex bg-searchBg px-4 py-2 gap-2 rounded-[20px] mb-8'>
                <SearchIcon />
                <input
                    className='flex-1 bg-transparent outline-none placeholder:text-placeHolder'
                    placeholder='Search Note'
                    type='text'
                ></input>
            </div>
            <div>
                {noteList.map((noteItem) => (
                    <div key={noteItem.id} className='bg-today p-4 rounded-lg mb-4'>
                        <div className='flex mb-3 w-full justify-between items-center'>
                            <p className='text-sm'>{noteItem.title}</p>
                            <div className='cursor-pointer relative option'>
                                <OptionIcon width={14} height={14} />
                                <div className='option-modal flex-col justify-center gap-2 text-center absolute top-3 right-0 rounded-md bg-violet-500 w-16 h-20 shadow-lg'>
                                    <div
                                        onClick={() => {
                                            dispatch(startEditingNote(noteItem.id));
                                            navigate('/createNote');
                                        }}
                                        className='hover:bg-slate-300 hover:text-black w-full h-1/3 cursor-default px-2'
                                    >
                                        Edit
                                    </div>
                                    <div
                                        onClick={() => {
                                            dispatch(deleteNote(noteItem.id));
                                        }}
                                        className='hover:bg-slate-300 hover:text-black w-full h-1/3 cursor-default px-2'
                                    >
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <p className='text-[10px]'>{format(parseISO(noteItem.date), 'dd/MM/yyyy')}</p>
                            {noteItem.pin && <PinIcon width={12} height={12} />}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default NotePage;
