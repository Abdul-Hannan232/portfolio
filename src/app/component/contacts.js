"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import {motion} from "framer-motion"
const Contacts = () => {
    return (
        <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }} id="contact"className='md:w-[780px] flex flex-wrap gap-3 mx-5 pt-56 md:mx-auto'>
            <div>
                <div className='bg-[#2D8CFF] md:w-[350px] py-10 px-7 rounded-2xl text-white'>
                    <h1 className='text-white poppins-semibold md:text-2xl text-xl'>Book a Meeting with
                        Calendly</h1>
                    <p className='md:text-[12px] text-xs poppins-light my-1'>Feel free to adjust the wording to better fit<br/>
                        the tone and style of your website.</p>
                  <Link target="_blank" href="https://calendly.com/abdul-hannan-dev/60-minute-strategy-session?month=2024-03">
                    <div className='bg-[#FFFFFF] rounded-xl md:w-36 w-24 p-3 mt-4 flex items-center gap-2'>
                        <Image src="/icon.png" alt="icon" width={88} height={22}  className='w-auto'/>
                        <Image src="/exportblack.png" alt="icon" width={16} height={18} className='w-auto' />
                    </div>
                    </Link>
                </div>  
                <div className='text-center md:w-[350px] bg-[#EDEDED] py-14 mt-2 rounded-2xl'>
                    <h1 className='text-[40px] poppins-bold'>Get in Touch</h1>
                    <p className='text-[#787878] text-sm w-64 mt-3 mx-auto'>Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking</p>
                </div>
            </div>
            <div className='bg-[#EDEDED] w-[410px] flex flex-col md:p-10 p-8  rounded-2xl'>
                    <label className='text-[#000000] text-sm poppins-bold'>Full Name</label>
                    <input type='text' placeholder='Input your full name in here' className='mt-2 bg-[#FEFFFF] p-3 text-[#000000]  md:rounded-xl rounded-lg text-xs   outline-none focus:border-[#2D8CFF] border-2 border-transparent'/>
                    <label className='text-[#000000] text-sm poppins-bold mt-5'>Email Address</label>
                    <input type='text' placeholder='Input your email address in here' className='mt-2 bg-[#FEFFFF] p-3 text-[#000000]  md:rounded-xl rounded-lg text-xs outline-none focus:border-[#2D8CFF] border-2 border-transparent'/>
                    <label className='text-[#000000] text-sm poppins-bold mt-5'>Message</label>
                    <textarea type='text' placeholder='Write your messages in here' className='mt-2 bg-[#FEFFFF] p-3 text-[#000000]  md:rounded-xl rounded-lg h-28 text-xs outline-none focus:border-[#2D8CFF] border-2 border-transparent'/>
                <button className='w-full bg-black text-white md:rounded-xl md:rounded-xl poppins-semibold rounded-xl md:py-4 py-3 cursor-pointer mt-4 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#2D8CFF] hover:text-white duration-300'>Send Message</button>
                </div>
        </motion.div>
    )
}

export default Contacts
