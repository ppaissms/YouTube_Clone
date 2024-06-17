import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if (!isMenuOpen) {
        return null;
    }
    return (
        <div className='p-5 shadow-lg w-50'>
            <ul className='font-bold'>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='pt-5 font-bold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Movies</li>
                <li>Gaming</li>
            </ul>
            <h1 className='pt-5 font-bold'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Movies</li>
                <li>Gaming</li>
            </ul>
        </div>
    );
};

export default SideBar;