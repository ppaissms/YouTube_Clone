import React from 'react';
import Button from './Button';

const ButtonList = () => {
    const ButtonNames = ["All", "News", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Music", "APIs", "Wealth", "Skills", "Dramedy", "Watched", "New to you"];
    return (
        <div className='flex mt-3 overflow-x-auto shadow-sm'>
            {
                ButtonNames.map((btn) => <Button name={btn} key={btn} />)
            }
        </div>
    );
};

export default ButtonList;