import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { scaleIn, fadeUp } from "../utils/animations";

const Work = ({ isDarkMode }) => {
    return (
        <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h2 variants={fadeUp}
                initial="hidden"
                whileInView="visible" className='text-center text-5xl font-ovo'>Featured Projects</motion.h2>
            <motion.div variants={fadeUp}
                initial="hidden"
                whileInView="visible" className='flex flex-col gap-1 mt-4 text-center text-sm text-gray-700 dark:text-gray-200'>
                <p>Explore my recent work — a collection of live websites and fully functional full-stack applications.</p>
                <p>All projects were developed by me and deployed through a CI/CD pipeline on Vercel.</p>
            </motion.div>

            {workData.map((project, index) => (
                <motion.div variants={scaleIn}
                    initial="hidden"
                    whileInView="visible" key={index} className='flex flex-col gap-1 my-5'>
                    <hr className='mb-5 text-neutral-200 dark:text-neutral-700' />

                    {/* Project Title and Github link */}
                    <div className='flex flex-col md:flex-row items-center gap-6 justify-center'>
                        <p className='text-center text-2xl font-outfit text-gray-700 dark:text-gray-200'>{project.title}</p>

                        {
                            project.githubLink &&
                            <div onClick={() => window.open(project.githubLink, '_blank')}
                                className='flex max-w-fit items-center jus gap-2 rounded-full border border-black dark:border-white px-4 py-2
                                      hover:bg-lightHover dark:hover:bg-darkHover hover:scale-105 transition-all duration-300'>
                                <a href="#contcat">View Source</a>
                                <Image src={isDarkMode ? assets.github_dark : assets.github} alt="rightArrow " className='w-4' />
                            </div>
                        }
                    </div>

                    {/* Featuers */}
                    <div className='flex flex-wrap items-center justify-center gap-5 mt-5' >
                        {project.features.map((feature, featureIndex) => (
                            <p className='bg-gray-700 text-white dark:bg-gray-200 dark:text-black rounded-full py-2 px-6 text-xs hover:translate-y-1 transition-all duration-200' key={featureIndex}>{feature}</p>
                        ))}
                    </div>

                    <div className='grid grid-cols-auto my-10 gap-8 dark:text-black'>
                        {/* Mapping Each Project Item */}
                        {project.projectItems.map((projectItem, innerIndex) => (
                            <div key={innerIndex}>
                                <div onClick={() => projectItem.link && window.open(projectItem.link, '_blank')}
                                    className={`aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group
                                                            ${!projectItem.link && 'hidden md:block'}`}
                                    style={{ backgroundImage: `url(${projectItem.bgImage})` }}>
                                    {
                                        projectItem.link &&
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
                                    }

                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))
            }

        </div >
    )
}

export default Work