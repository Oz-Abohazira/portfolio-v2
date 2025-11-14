import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-36 mx-auto' />
                <div className='flex items-center gap-3 justify-center'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="email" className='w-6' />
                    <p>ozabohaziradev@gmail.com</p>
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© {new Date().getFullYear()} Oz Abohazira. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li className='cursor-pointer hover:scale-105 hover:text-blue-600 transition duration-200'>
                        <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/oz-abohazira-86812119a/">LinkedIn</a>
                    </li>
                    <li className='cursor-pointer hover:scale-105 transition duration-200'>
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/Oz-Abohazira">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer