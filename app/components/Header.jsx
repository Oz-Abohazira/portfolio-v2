import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { fadeUp, scaleIn, fadeIn, imageVariants } from "../utils/animations";


const Header = () => {

    const [isContactHovered, setIsContactHovered] = useState(false);

    return (
        <div className='pb-10'>
            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
                <motion.div className="mt-10 w-64 rounded-full md:hidden"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Image src={assets.small_profile_img} alt="" className="w-full rounded-3xl" />
                </motion.div>

                <motion.h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-outfit"
                    variants={fadeUp}
                    custom={0.3}
                    initial="hidden"
                    whileInView="visible"
                >
                    Hi! I am Oz Abohazira
                </motion.h3>

                <motion.h1 className="text-3xl sm:text-6xl lg:text-[66px] font-outfit"
                    variants={fadeUp}
                    custom={0.5}
                    initial="hidden"
                    whileInView="visible"
                >Full Stack Developer Based in Dunwoody, GA
                </motion.h1>

                <motion.p variants={fadeUp}
                    custom={0.7}
                    initial="hidden"
                    whileInView="visible"
                >With 8 years of hands-on experience in SAP Full Stack technologies, and a year in Front End,
                    I am now expanding my expertise into the MERN stack to build modern,
                    scalable web applications.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                    variants={fadeIn}
                    custom={0.7}
                    initial="hidden"
                    whileInView="visible">
                    <motion.a
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-black text-white border border-white px-10 py-3 dark:bg-transparent"
                        whileHover={{ scale: 1.4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        onHoverStart={() => setIsContactHovered(true)}
                        onHoverEnd={() => setIsContactHovered(false)}
                    >
                        Contact Me
                        <Image src={assets.right_arrow_white} alt="rightArrow" className="w-4" />
                    </motion.a>
                    <motion.a
                        href="/Oz_Abohazira_Resume.pdf"
                        download
                        className="relative flex items-center gap-2 rounded-full border border-gray-500 px-10 py-3 bg-white 
                                 dark:text-black overflow-hidden text-gray-800"
                        animate={{ x: isContactHovered ? 30 : 0 }} // move left when resume is hovered
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        My Resume
                        <Image src={assets.download_icon} alt="download Icon" className="w-4" />
                    </motion.a>

                </motion.div>

            </div>

            {/* ---- My Image ---- */}
            <motion.div className="hidden md:block absolute inset-0 -z-10 overflow-hidden opacity-75"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
            >
                <Image src={assets.profile_img} alt="my-image" className='scale-90' />
            </motion.div>

        </div>
    )
}

export default Header