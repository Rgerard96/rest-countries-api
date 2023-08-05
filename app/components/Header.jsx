'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaRegMoon } from 'react-icons/fa6';


export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const themeHandler = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const el = document.body.parentNode.classList;
        if (darkMode) {
            el.add('dark');
        } else {
            el.remove('dark');
        }

    }, [darkMode]);

    return (
        <div className='p-6 shadow-md bg-white dark:bg-dark-blue fixed top-0 left-0 right-0 z-10'>
            <div className='max-w-[1600px] flex justify-between mx-auto'>
                <h1 className='font-bold sm:text-2xl'><Link href='/'>Where in the World?</Link></h1>
                <div className='flex items-center space-x-2 cursor-pointer' onClick={themeHandler}>
                    {darkMode ? <FaMoon /> : <FaRegMoon />}
                    <span className='font-semibold'>Dark Mode</span>
                </div>
            </div>
        </div>
    );
}
