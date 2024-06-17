import React, { useEffect, useState } from 'react';
import { toggleMenu } from '../utils/NavSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/Constant';
import { cacheResult } from '../utils/SearchSlice';

const Head = () => {

    const [searchInput, setSearchInput] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const dispatch = useDispatch();

    const searchCache = useSelector(store => store.searchStore);

    // 1) key pressed
    // 2) render the comp 
    // 3) useEffect is get called 
    // 4) start timer : make api call after 500 ms 

    // Again key press 

    // 1) destroy component by calling retuen from useEffect 
    // 2) re-render the component 
    // 3) useEffect is get called 
    // 4) start timer : make api call after 500 ms 

    useEffect(() => {
        const token = setTimeout(() => {
            if (searchCache[searchInput]) {
                //if serach cache is present in the redux, then set directely into array
                setSearchSuggestion(searchCache[searchInput]);
            }
            else if (searchInput.length !== 0) {
                getSearchSuggestion();
            }
        }, 400);

        return () => { clearTimeout(token); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput]);

    const getSearchSuggestion = async () => {
        const data = await fetch(`${YOUTUBE_SEARCH_API}${searchInput}`);
        const json = await data.json();
        setSearchSuggestion(json.items);
        //update the cache in redux
        dispatch(cacheResult({ [searchInput]: json.items }));
    };
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className='grid grid-flow-col p-5 shadow-lg'>
            <div className='flex col-span-1 gap-1'>
                <img alt='hamburgerIcom'
                    className='h-8 rounded-full cursor-pointer'
                    onClick={() => { toggleMenuHandler(); }}
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACUCAMAAAATdsOFAAAAXVBMVEX///8jHyAAAADq6uofGxza2tqTk5NMSkoZFBVmZWURCQsLAAOqqaq6uroUDxDw8PDi4eGcm5v5+fl1dHSKiYqAfn/R0NCjo6PBwcEpJSdtbGzHx8dHRUZaWVm0s7M7VNJ6AAABCUlEQVR4nO3bYY6CMBRF4bYUrLQWRGVARva/TGcLM7l5ZOL5VnBCUv7cPOcAAAAAAAAAAAAAwMDQGBtE4VO5nY3diib+nkNvLOfHJCgfQ/TmYpgF6V/Bvtz7cBWkX45JL4L0IVX78lpHQbpbYjCXdkW5c03pjBXJNwcAAAAAAAAAAB9muK7Wu6nvNJPvI6RoLIWnYvJtjxkfFZNvYfL9Zbpi8p3W3r68Zsk73U41G+u/F0W5c+NejO2tphwAAAAAAAAAAPxF0xpTHYNN3etk7HXXTL7PUJOxGs6KyXc+ZnxU7GD/ePJdjklXHJweMvn2sRGku3a1v/L1m6L8x3wxtin+LwAAAADwgd4MNzhv43evzAAAAABJRU5ErkJggg==' />
                <img alt='youtubeLogo'
                    className='absolute mt-0 cursor-pointer h-14 left-20 top-2'
                    src='data:image/jpeg;base64,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'
                />
            </div>
            <div className='col-span-10 px-10 ml-20'>
                <div>
                    <input type='text'
                        className='w-1/2 p-2 px-4 border border-gray-400 rounded-l-full'
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        onFocus={() => { setShowSuggestion(true); }}
                        onBlur={() => { setShowSuggestion(false); }} />
                    <button className='p-2 bg-gray-100 border border-gray-400 rounded-r-full cursor-pointer'>
                        Search
                    </button>
                </div>
                {searchInput && showSuggestion &&
                    <div className='fixed py-2 px-2 bg-white border border-gray-400 w-[27rem] shadow-2xl rounded-lg'>
                        <ul>
                            {
                                searchSuggestion.map((s, index) => (
                                    <li key={index} className='px-5 py-2 rounded-md shadow-sm hover:bg-gray-100'>{s.snippet.title}</li>
                                ))}
                        </ul>
                    </div>
                }
            </div>
            <div className='col-span-1'>
                <img alt='userIcon'
                    className='h-8'
                    src='data:image/png;base64,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'
                />
            </div>
        </div>
    );
};

export default Head;