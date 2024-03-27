import React from 'react'
import Image from "next/image"
import { HiArrowLongRight } from "react-icons/hi2";
const HeroSection = () => {
    return (
        <div className='2xl:mt-64 md:mt-44 mt-32'>
            <div className='flex  lg:flex-row flex-col-reverse 	justify-around mx-20 items-center md:w-[800px] mx-auto'>
                <div className='md:mx-0 mx-10 '>
                    <h1 className='flex items-end md:text-[32px] text-[20px] gap-2 poppins-bold text-[#CACACA] '>Hi<Image src="/hand-wave.png" alt="hand-wave" height={32} width={32} className='md:w-[40px] w-auto h-auto md:h-[40px] '/></h1>
                    <h1 className='md:text-[32px] text-[20px] poppins-bold text-[#CACACA] mt-3 flex items-center gap-3'>I am <h1 className='text-[#000000] poppins-bold md:text-[32px] text-[20px] text-2xl  text_1'>Abdul Hannan</h1><span class="text_2 text-[#000000] poppins-bold md:text-[32px] text-[20px] text-2xl -ml-4">Web Developer</span></h1>
                    <p className='text-[13px]  md:w-[440px] tracking-wider text-[#787878] mt-4'>A seasoned developer with a passion for creating innovative digital solutions. 
                        Specializing in [Programming Languages  or  Technologies], I thrive on turning 
                        complex ideas into user-friendly applications. Whether it's web development, 
                        mobile  apps, or software solutions, I'm committed to delivering high-quality 
                        code and seamless user experiences. Explore my portfolio to see how I can help 
                        bring your projects to fruition.
                    </p>

                    <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 bg-[#2D8CFF] mt-9 text-white py-3 rounded-2xl md:w-48 w-36 poppins-semibold flex items-center justify-between md:px-8 px-3 gap-2 text-[16px] text-center'>My Work<HiArrowLongRight className=' text-4xl'/></button>
                </div>
                <div>
                    <Image src="/user.png" alt="user" width={372} height={472} className=' mx-auto md:w-[422px] lg:h-[380px] '/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
