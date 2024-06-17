import React from 'react';
import { useSelector } from 'react-redux';

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, thumbnails } = snippet;

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    return (
        <div className={`p-2 m-2 shadow-lg cursor-pointer rounded-lg hover:bg-slate-200 ${isMenuOpen ? "w-80" : "w-70"}`}>
            <img alt='video' className='rounded-lg' src={thumbnails.high.url} />
            <ul>
                <li className='py-2 font-bold'>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    );
};

export default VideoCard;