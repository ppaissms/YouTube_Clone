import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/NavSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const urlValue = searchParams.get("v");

    useEffect(() => {
        dispatch(closeMenu());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex flex-col w-full py-6'>
            <div className='flex w-full px-6'>
                <div>
                    <iframe width="1100"
                        height="600"
                        src={`https://www.youtube.com/embed/${urlValue}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;