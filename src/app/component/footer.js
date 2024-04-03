"use client"
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import { MdHeadsetMic } from "react-icons/md";

import Image from "next/image"
const Footer = () => {
    return (
        <div className='relative mt-60    bg-black'>
            <div className='bg-[#000000] absolute md:-top-12 -top-20 right-0 left-0  md:w-[780px] text-white md:mx-auto mx-10 p-5 rounded-xl md:flex justify-between items-center border-[#FFFFFF] border-2'>
                <div>
                    <h1 className='md:text-xl text-md font-semibold'>FREE CONSULTANCY</h1>
                    <p className='text-[12px] poppins-light md:mb-0 mb-5'>30 minutes free consultancy call</p>
                </div>
                <Link target="_blank" rel="noopener noreferrer" href="https://calendly.com/abdul-hannan-dev/60-minute-strategy-session?month=2024-03">
                    <div className='transition ease-in-out delay-150 text-black  hover:-translate-y-1 hover:scale-110 hover:bg-[#2D8CFF] hover:text-white duration-300 bg-white rounded-xl md:p-3 cursor-pointer p-2 flex  md:w-auto w-28 items-center md:gap-2 gap-1 md:mx-0 mx-auto '>
                        <h1 className='md:text-md text-sm font-bold '>Lets Talk</h1>
                        <MdHeadsetMic className=' text-xl' />
                    </div>
                </Link>
            </div>
            <div className='bg-black  md:flex md:gap-52 mx-auto   justify-center items-center  md:w-[800px] pt-16 pb-5  '>
                <div className=' flex items-center py-5 justify-center  gap-2 text-xl'>
                    {/* <Image src="/fb.png" alt='facebook' width={30} height={30}/> */}
                    <Link href="https://www.linkedin.com/in/abdul-hannan-developer">
                        <Image src="/linkedin.png" alt='facebook' width={50} height={50} className='w-auto md:w-[30px] h-[30px]' />

                    </Link>
                    <Link href="https://github.com/Abdul-Hannan232" >
                        <Image src="/github.png" alt='facebook' width={50} height={50} className='w-auto md:w-[30px] h-[30px]' />

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
