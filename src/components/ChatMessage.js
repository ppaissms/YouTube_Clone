import React from 'react';

const ChatMessage = ({ name, chat }) => {
    return (
        <div className='flex items-center p-3 shadow-md'>
            <img alt='userIcon'
                className='h-8'
                src='https://yt4.ggpht.com/F4VHPZUiPZubX96dSPBOYlQlPEOEAi3uW8YLjM0d39rXaxzygko24EETGvEoD7OodElbNJzx=s32-c-k-c0x00ffffff-no-rj' />

            <span className='px-2 font-bold'>{name}</span>
            <span>{chat}</span>
        </div>
    );
};

export default ChatMessage;