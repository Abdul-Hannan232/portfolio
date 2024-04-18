
"use client"
import React from 'react'
import Image from "next/image"
import service from "../data/services.json"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <section  id="services" className='pt-5' >
            <motion.h1 whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className='md:text-5xl text-3xl font-bold text-center mt-44 mb-8'>Services</motion.h1>
            <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className='md:w-[800px]  md:mx-auto mx-5'>

                {service.map((item,index) => (
                    
                    <div key={index} className={`md:flex items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 justify-evenly  mt-6 w-full p-5  md:h-52 rounded-2xl ${index % 2 === 0 ? 'bg-[#2D8CFF] text-white' : 'bg-white text-[#787878] border-[#CACACA] border-2'} `}>
                        <div className='md:w-[300px] text-center'>
                            <Image src={item.image} alt="service" width={85} height={85} className=' rounded-full  mx-auto' />
                            <h1 className={` poppins-semibold md:text-[20px] text-[17px] mt-3 ${index % 2 === 0 ? ' text-white' : ' text-[#2D8CFF]'}`}>{item.maintech}</h1>
                        </div>
                        <div className='border-r-[#EDEDED] border h-32 md:block hidden opacity-30'></div>
                        <div className='grid md:grid-cols-3 grid-cols-2 place-items-center md:mt-0 mt-10 gap-2'>
                            {item.tech.map((e,i)=>(
                            <button key={i} className={`   
                              rounded-md poppins-light py-[6px] tracking-wider   md:text-[12px] text-xs md:w-32 w-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ${index % 2 === 0 ? "bg-[#FFFFFF] bg-opacity-20 text-white":"bg-[#EDEDED] bg-opacity-70 text-[#787878]"}`}>{e}</button>

                            ))} 
                        
                        </div>
                    </div>
                )) }

            </motion.div>

        </section>
    )
}

export default Services
