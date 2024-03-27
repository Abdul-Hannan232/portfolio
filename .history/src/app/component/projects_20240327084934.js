import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link"
import ProjectData from "../data/projects.json"
import Image from "next/image"
const Projects = () => {
    return (
        <div id="projects">
            <h1 className='md:text-5xl text-3xl font-bold text-center mt-44 mb-8'>Projects</h1>
            {/* <div className='bg-[#000000] text-white flex items-center font-semibold  cursor-pointer justify-between rounded-xl p-2 w-[250px] md:w-[530px] mx-auto '>
                <div className='hover:bg-[#2D8CFF] text-white md:rounded-xl rounded-md md:w-28    md:text-sm text-[8px] text-center md:py-3 px-2 py-1'>
                    <Link href="#" >UI/ UX</Link>
                </div>
                <div className='hover:bg-[#2D8CFF] text-white md:rounded-xl rounded-md md:w-28     md:text-sm text-[8px] text-center md:py-3 px-2 py-1'>
                    <Link href="#" >Websites</Link>
                </div>
                <div className='hover:bg-[#2D8CFF] text-white md:rounded-xl rounded-md md:w-28     md:text-sm text-[8px] text-center md:py-3 px-2 py-1'>
                    <Link href="#" >Dashboards</Link>
                </div>
                <div className='hover:bg-[#2D8CFF] text-white md:rounded-xl rounded-md md:w-28     md:text-sm text-[8px] text-center md:py-3 px-2 py-1'>
                    <Link href="#" >MobileApps</Link>
                </div>
            </div> */}
            <div style={{gridTemplateColumns:"auto auto", display:"grid"}} className=' md:w-[800px] my-5 mx-auto '>
            {ProjectData.map.length === "4"((item,index)=>(
                <div className=' my-3 mx-auto relative'>
                 <div className={`${index % 2 === 0 ? ' blackBox': ' bg-[#2D8CFF] rounded-xl  md:w-[270px] md:mt-0 mt-5 w-[70%] mx-auto md:p-5 p-2 cursor-pointer'} `}>
                    <Image src="/project1.png" alt="project1" width={461} height={213} className={ ` transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer${index % 2 === 0 ? "md:w-[461px] md:h-[213px] h-[160px]":"md:w-[225px] md:h-[213px] h-[180px]"}`} />
               <Link href={item.link}>
               <Image src="/export.png" alt="icon" width={16} height={18} className='w-auto  cursor-pointer absolute top-8 right-8' />

                </Link>    
                    <h1 className='md:text-[30px] text-2xl font-bold md:my-5 my-3 text-[#FFFFFF] poppins-bold '>{item.project_name}</h1>
                    <button className='text-[#CACACA] bg-[#FFFFFF] bg-opacity-40  rounded-md poppins-semibold py-2  md:text-[11px] text-xs md:w-32 w-20 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer'>{item.category}</button>
                </div>
                </div>
            ))}
            </div>
         
            <div className='md:w-[800px] md:mx-auto mx-12 flex justify-center items-center gap-1 cursor-pointer bg-black text-white rounded-xl py-3 mt-3'>
                <p>View More</p>
                <IoMdArrowDropdown className='text-2xl' />

                </div>
        </div>
    )
}

export default Projects
