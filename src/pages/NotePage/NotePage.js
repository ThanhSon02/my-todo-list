import { format, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { OptionIcon, PinIcon, SearchIcon } from '../../assets/icons';
import { deleteNote, startEditingNote } from './NoteReducer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Clear } from '@mui/icons-material';

function NotePage() {
    const noteListData = useSelector((state) => state.note.noteList);
    const [noteList, setNoteList] = useState(noteListData);
    // Kiểm tra có dữ liệu nào tồn tại ở local storage
    useEffect(() => {
        const noteLocalData = JSON.parse(window.localStorage.getItem('AppData'))?.noteList;
        if (noteLocalData) {
            setNoteList(noteLocalData);
        }
        console.log(noteLocalData);
    }, []);

    const [searchData, setSearchData] = useState('');
    const [searchResult, setSearchResult] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        let searchResult = noteList.filter((noteItem) => noteItem.title.includes(searchData));
        setSearchResult(searchResult);
    }, [searchData]);

    return (
        <main className=' p-8'>
            <div className='w-full flex bg-searchBg px-4 py-2 gap-2 rounded-[20px] mb-8'>
                <SearchIcon />
                <input
                    className='flex-1 bg-transparent text-slate-800 outline-none placeholder:text-placeHolder'
                    placeholder='Search Note'
                    type='text'
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                ></input>
                {searchData && <Clear onClick={() => setSearchData('')} className='text-slate-800 ' />}
            </div>
            {!searchData ? (
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
                                                navigate('/note/createNote');
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
            ) : (
                <div>
                    {searchResult.map((noteItem) => (
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
            )}
        </main>
    );
}

export default NotePage;
