import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Skills = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>Main Skills</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='hidden md:block w-64 sm:w-80 rounded-3xl max-w-none '>
                    <Image src={assets.small_profile_img} alt="" className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='hidden md:block mb-10 max-w-2xl'>Frontend-focused software developer with over 9 years of experience, specializing
                        in modern web technologies, including Angular, React, TypeScript, Tailwind and
                        component-based architecture. Proven track record in building responsive
                        applications with comprehensive testing strategies and AI-assisted development
                        workflows</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl'>
                        {infoList.map((item, index) => (
                            <li className='border-[0.5px] border-gray-400 p-6 cursor-pointer rounded-xl
                                           hover:bg-lightHover hover:-translate-y-1.5 hover:shadow-black transition-all duration-500' key={index}>
                                <Image className='w-7 mt-3' src={item.icon} alt="" />
                                <h1 className='my-4 font-semibold text-gray-600'>{item.title}</h1>
                                <p className='text-gray-600 text-xs
                                '>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="relative overflow-hidden w-full group">
                <h2 className='text-center mb-10 text-3xl font-ovo'>Some Of My Preferred Tools</h2>

                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-flow-col auto-cols-[9rem] gap-5">
                    {toolsData.map((item, index) => (
                        <li
                            key={index}
                            className={`p-6 cursor-pointer rounded-xl hover:bg-lightHover shrink-0 border border-gray-400
                                       flex flex-col justify-between transition-all duration-500 
                                       ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-50' : ''
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={item.icon}
                                alt="tool Image"
                                className="w-6 sm:w-12 lg:w-17 mx-auto"
                            />
                            <p className={`font-semibold text-gray-600 text-xs font-outfit text-center my-2 transition-all duration-300 
                                           ${hoveredIndex === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                                }`}>
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default Skills