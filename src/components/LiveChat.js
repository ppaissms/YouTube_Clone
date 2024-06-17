import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../utils/CommentSlice';
import generateRandomName, { genrateRandomString } from '../utils/Helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    //Dispatch the action
    const dispatch = useDispatch();
    // Subscribe the store
    const liveComments = useSelector(store => store.liveChat.messages);
    useEffect(() => {
        // API Polling after the 2 sec
        const token = setInterval(() => {
            getLiveData();
        }, 1500);
        // Alway clear the setTimeOut and setTimeInterval
        return () => clearInterval(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getLiveData = async () => {
        //dispatch the action
        dispatch(addComments({
            name: generateRandomName(),
            chat: genrateRandomString()
        }));
    };

    const addComment = (e) => {
        dispatch(addComments({
            name: "Pranav Patil",
            chat: liveMessage
        }));
    };

    return (
        <>
            <div className='p-2 ml-2 bg-gray-100 rounded-lg border border-black h-[600px] w-full overflow-y-scroll flex flex-col-reverse'>
                {liveComments.map((comment, index) => <ChatMessage key={index} name={comment.name} chat={comment.chat} />)}
            </div>
            <form className='flex w-full gap-2 p-2 mt-2 ml-2 rounded-lg bg-slate-200'
                onSubmit={(e) => {
                    e.preventDefault();
                    addComment();
                    setLiveMessage("");
                }}>
                <input type='text'
                    className='px-3 border border-blue-400 rounded-lg w-80'
                    value={liveMessage}
                    onChange={(e) => { setLiveMessage(e.target.value); }} />
                <button className='px-3 py-1 bg-green-500 rounded-lg'>Send</button>
            </form>
        </>
    );
};

export default LiveChat;