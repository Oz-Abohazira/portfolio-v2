import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-ovo'>Featured Projects</h2>
            <div className='flex flex-col gap-1 mt-4 text-center text-sm text-gray-700'>
                <p>Explore my recent work — a collection of live websites and fully functional full-stack applications.</p>
                <p>All projects were developed by me and deployed through a CI/CD pipeline on Vercel.</p>
            </div>

            {workData.map((project, index) => (
                <div key={index} className='flex flex-col gap-1 my-5'>
                    <hr className='mb-5 text-neutral-200' />

                    <div className='flex items-center gap-6 justify-center'>
                        <p className='text-center text-2xl font-outfit text-gray-700'>{project.title}</p>

                        {
                            project.githubLink &&
                            <div onClick={() => window.open(project.githubLink, '_blank')}
                                className='flex max-w-fit items-center jus gap-2 rounded-full border border-black px-4 py-2
                                      hover:bg-lightHover hover:scale-105 transition-all duration-300'>
                                <a href="#contcat">View Source</a>
                                <Image src={assets.github} alt="rightArrow " className='w-4' />
                            </div>
                        }
                    </div>


                    <div className='flex items-center justify-center gap-5 mt-5' >
                        {project.features.map((feature, featureIndex) => (
                            <p className='bg-gray-700 text-white rounded-full py-2 px-6 text-xs' key={featureIndex}>{feature}</p>
                        ))}
                    </div>

                    <div className='grid grid-cols-auto justify-evenly my-10 gap-8'>
                        {/* Mapping Each Project Item */}
                        {project.projectItems.map((projectItem, innerIndex) => (
                            <div key={innerIndex}>
                                <div onClick={() => window.open(projectItem.link, '_blank')} className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group'
                                    style={{ backgroundImage: `url(${projectItem.bgImage})` }}>
                                    <div className='bg-gray-200/90 w-10/12 rounded-lg absolute bottom-5 left-1/2 
                                         -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
                                         group-hover:bottom-7'>
                                        <div>
                                            <h2 className='font-semibold'>{projectItem.title}</h2>
                                            <p className='text-sm text-gray-700'>{projectItem.description}</p>
                                        </div>
                                        <div className='border rounded-full border-black w-9 aspect-square flex items-center 
                                            justify-center shadow-black-sm group-hover:bg-lime-300 transition'>
                                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }

        </div >
    )
}

export default Work