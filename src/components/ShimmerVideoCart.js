import React from 'react';
import { useSelector } from 'react-redux';

const ShimmerVideoCart = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    return (
        <div className={`p-2 rounded-lg shadow-lg h-1/3 ${isMenuOpen ? "w-80" : "w-96"}`}>
            <div className='h-48 my-2 rounded-lg bg-slate-100'></div>
            <div className='flex my-2 h-1/4'>
                <div className='w-1/12 rounded-full h-9 bg-slate-100'></div>
                <div className='w-11/12 px-3'>
                    <div className='h-8 rounded-lg bg-slate-100'></div>
                    <div className='h-8 mt-2 rounded-lg bg-slate-100'></div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerVideoCart;