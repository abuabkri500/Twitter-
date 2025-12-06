"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import nextLogo from '../../../../public/next.svg';
import next from 'next';

const HomePage = () => {
    const [user, setUser] = useState('Adedotun')
    return (
        <div className='relative'>
            <p className='text-[30px] text-[#ff2c] font-bold'>HomePage {user} </p>
            <div className='bg-amber-400 p-4 w-1/2 h-screen'>
                <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-3 items-center justify-center h-full'>
                    <h1 className='text-black'>Hello Next Js</h1>
                    <h1 className='text-black'>Hello Next Js</h1>
                    <h1 className='text-black'>Hello Next Js</h1>
                </div>
            </div>
            <div className='bg-amber-400 p-4 w-[100px] h-30 absolute top-10 right-10'>

            </div>
            <div className='flex justify-around items-center'>  ``
                <Image
                    src={nextLogo}
                    alt="Next.js Logo"
                    className='w-[200px] h-[75px]'
                />


                <nav className='flex space-x-3 w-1/2 h-50'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span>Menu</span>
                </nav>
            </div>
        </div>
    )
}

export default HomePage