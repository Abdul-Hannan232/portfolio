"use client"
import React, { useState } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import testimonaldata from '../data/testimonaldata.json';
import Image from 'next/image';
import {motion} from "framer-motion"
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonaldata.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonaldata.length - 1 : prevIndex - 1));
    };
 

    return (
        <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}  className="md:w-[670px] md:mx-auto mx-2 pt-56" id="Testimonials">
            <h1 className="md:text-5xl text-3xl poppins-bold text-center mb-8">Testimonials</h1>
            <div className="flex items-center md:gap-5 gap-2">
                <div className="bg-[#E8F2FF] md:h-44 h-32 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center">
                    <div className="bg-[#2D8CFF] text-white text-xl md:p-[1px] cursor-pointer md:w-6 w-5 text-center font-bold  rounded-md"  onClick={goToPrev}>
                        <RiArrowLeftSLine />
                    </div>
                </div>
                <div >
                {testimonaldata.map((item, index) => (
                    <div key={index}  className={`border-[#CACACA] border-2 rounded-2xl p-4 bg-white ${index !== currentIndex && 'hidden'}`}>
                        <div className="bg-[#2D8CFF] text-white flex items-center md:p-3     p-2 rounded-2xl  gap-3">
                            <div className="bg-[#FFFFFF] md:p-4 p-2 rounded-full md:w-14 w-10 h-10 md:h-14">
                                <Image src="/usericon.png" alt="color" width={50} height={50}  className='w-auto'/>
                            </div>
                            <div>
                                <h1 className="md:text-[20px]  poppins-semibold">{item.name}</h1>
                                <div className="flex items-center rounded-md py-[3px] pl-[3px] md:w-32 w-28 mt-1 md:gap-3 gap-1 bg-white text-black">
                                    <Image src="/flag.png" alt="color" width={30} height={16} className='w-auto' />
                                    <p className="text-black text-[11px]">{item.state}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#000000] md:text-[12px] text-xs poppins-semibold tracking-wider mt-5 mb-3">{item.para}</p>
                    </div>
                ))}
                </div>

                <div className="bg-[#E8F2FF] md:h-44 h-32 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center">
                    <div className="bg-[#2D8CFF] text-white text-xl md:p-[1px] cursor-pointer md:w-6 w-5 text-center font-bold  rounded-md"  onClick={goToNext}>
                    <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
              
            </div>
        </motion.div>
    );
};

export default Testimonial;
