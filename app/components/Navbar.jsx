import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setIsScrolled(scrollY > 50));
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} loading="eager" alt="" className='w-full' />
            </div>
            <nav className={`flex w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between z-50
                            ${isScrolled && 'bg-white/20 backdrop-blur-sm shadow-sm dark:bg-darkTheme dark:shadow-white/5'}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-24 cursor-pointer mr-14' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                            ${!isScrolled && `bg-white/50 shadow-2xs 
                               dark:border dark:border-white/50 dark:bg-transparent`}`}>
                    <li><a className='font-ovo' href="#top">Home</a></li>
                    <li><a className='font-ovo font-medium' href="#work">My Work</a></li>
                    <li><a className='font-ovo' href="#skills">Skills</a></li>
                    <li><a className='font-ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex gap-4 items-center'>
                    <button onClick={() => setIsDarkMode(prev => !prev)} className='cursor-pointer'>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
                    </button>
                    <a className='font-ovo hidden lg:flex items-center gap-3 py-2.5 px-10 border border-gray-500 rounded-full ml-4'
                                //   dark:border-white/50'
                        href="#contact">
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' />
                    </a>
                    <button onClick={() => setIsShowMenu(true)} className='block md:hidden cursor-pointer ml-4'>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* ---- Mobile Menu ---- */}
                <ul className={`flex md:hidden flex-col gap-4 items-center py-10 fixed top-0 botton-0 w-48 max-w-1/2 z-50
                                h-screen bg-rose-50 transition-all duration-500
                                dark:bg-darkHover
                               ${isShowMenu ? 'right-0' : '-right-99'}`}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" onClick={() => setIsShowMenu(false)}
                        className='w-5 cursor-pointer absolute top-0 bottom-0 right-0 m-4' />

                    <li><a onClick={() => setIsShowMenu(false)} className='font-ovo' href="#top">Home</a></li>
                    <li><a onClick={() => setIsShowMenu(false)} className='font-ovo font-medium' href="#work">My Work</a></li>
                    <li><a onClick={() => setIsShowMenu(false)} className='font-ovo' href="#skills">Skills</a></li>
                    <li><a onClick={() => setIsShowMenu(false)} className='font-ovo' href="#contact">Contact Me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar