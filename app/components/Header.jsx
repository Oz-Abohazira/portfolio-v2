import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-outfit'>
                    Hi ! I am Oz Abohazira
                    <Image src={assets.hand_icon} alt="my-image" className='w-6' />
                </h3>
                <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-outfit'>Full Stack Developer Based in Dunwoody, GA</h1>
                <p>With 8 years of hands-on experience in SAP Full Stack technologies,
                    I’m now expanding my expertise into the MERN stack to build modern, scalable web applications.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a className='flex items-center gap-2 rounded-full bg-black text-white border border-white px-10 py-3' href="#contcat">Contact Me
                        <Image src={assets.right_arrow_white} alt="rightArrow " className='w-4' />
                    </a>
                    <a href="/Oz_Abohazira_Resume.pdf" download
                        className='flex items-center gap-2 rounded-full border border-gray-500 px-10 py-3'>My Resume
                        <Image src={assets.download_icon} alt="download" className='w-4' />
                    </a>
                </div>
            </div>

            {/* ---- My Image ---- */}
            <div className="absolute inset-0 -z-10 overflow-hidden opacity-80">
                <Image src={assets.profile_img} alt="my-image" className='scale-90' />
            </div>

        </div>
    )
}

export default Header