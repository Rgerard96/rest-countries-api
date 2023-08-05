import React from 'react';
import { FaRegMoon } from 'react-icons/fa6';


export default function Header() {
    return (
        <div className='p-6 shadow-md bg-white fixed top-0 left-0 right-0 z-10'>
            <div className='max-w-[1600px] flex justify-between mx-auto'>
                <h1 className='font-bold text-2xl'>Where in the World?</h1>
                <div className='flex items-center space-x-2'>
                    <FaRegMoon />
                    <span className='font-semibold'>Dark Mode</span>
                </div>
            </div>
        </div>
    );
}
