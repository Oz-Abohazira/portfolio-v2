import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { motion, useAnimation, useInView } from "motion/react"
import { slideLeft, fadeUp, fancyPathButton } from "../utils/animations";

const Contact = () => {

    const inputStyle = 'flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white dark:bg-darkHover/30 dark:border dark:border-white/90';

    const [result, setResult] = useState("");

    const ref = useRef(null);
    const inView = useInView(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
        else controls.start("hidden");
    }, [inView]);

    const onSubmit = async (event) => {
        toast.promise(
            submitForm(event),
            {
                loading: 'Sending Out an Email...',
                success: <b>Email sent successfully!</b>,
                error: <b>Error sending email. Try again later.</b>,
            }
        );
    }

    const submitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "a014ff51-f4f0-4861-b85c-4e96e7d0da83");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            console.log(data);


            if (data.success) {
                setResult("Success!");
                event.target.reset();
                return data;
            } else {
                setResult("Error");
                throw new Error(data.message || "Form submission failed");
            }

        } catch (error) {
            setResult("Error");
            throw new Error(data.message || "Form submission failed");
        }
    };

    return (
        <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 
                                     bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size[90%_auto] 
                                     dark:bg-none' >
            <motion.h4 variants={fadeUp}
                initial="hidden"
                whileInView="visible" className='text-center mb-2 text-lg font-ovo'>Let’s Connect</motion.h4>
            <motion.h2 variants={fadeUp}
                initial="hidden"
                whileInView="visible" className='text-center text-5xl font-ovo'>Get In Touch</motion.h2>

            <motion.p variants={fadeUp}
                initial="hidden"
                whileInView="visible" className="text-center max-w-2xl mx-auto my-5 mb-12">
                I’d love to hear from you. Whether you have a question, an idea, or just want to connect, feel free to reach out using the form below.
            </motion.p>

            <motion.form variants={slideLeft}
                initial="hidden"
                whileInView="visible" onSubmit={onSubmit} className='max-w-2xl mx-auto font-outfit'>
                <div className='grid grid-cols-auto gap-6 my-10 mb-8'>
                    <input name='name' className={inputStyle} type="text" placeholder='Enter your name' required />
                    <input name='email' className={inputStyle} type="email" placeholder='Enter your email' required />
                </div>
                <textarea name='message' className='w-full bg-white p-4 outline-none border-[0.5px] rounded-lg border-gray-400 mb-6 
                                                 dark:bg-darkHover/30 dark:border-white/90 dark:placeholder:text-white/50'
                    rows='6' placeholder="Enter your message" required></textarea>

                <motion.button
                    ref={ref}
                    variants={fancyPathButton}
                    initial="hidden"
                    animate={controls}
                    className='bg-black/80 text-white rounded-full mx-auto w-max py-3 px-8 
             flex items-center justify-between gap-2 hover:bg-black cursor-pointer duration-500 
             dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                    type='submit'
                >
                    Send Me an Email
                    <Image src={assets.right_arrow_white} alt="right arrow" className='w-4' />
                </motion.button>
            </motion.form>
        </div>
    )
}

export default Contact