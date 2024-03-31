"use client"
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Link from 'next/link';
import JsonData from '../data/projects.json';
import Image from 'next/image';
import { motion } from "framer-motion"

import CategoryData from "../data/category.json"
const Projects = () => {
    let manageRow = 1;

    const [ProjectData, setProjectData] = useState(JsonData);
    const [displayCount, setDisplayCount] = useState(4);
    const [showAllItems, setShowAllItems] = useState(false);

    const filteredCategory = (e) => {
        if (e === 'All') {
            setProjectData(JsonData);
        } else {
            const filteredItems = JsonData.filter((item) => item.filter === e);
            setProjectData(filteredItems);
        }
    };

    const handleViewMore = () => {
        setShowAllItems(true);
    };

    const handleViewLess = () => {
        setShowAllItems(false);
    };

    return (
        <div  id="projects" className="pt-5">
            <motion.h1 whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }} className="md:text-5xl text-3xl font-bold text-center mt-44 mb-8">Projects</motion.h1>
            {/* <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className="bg-[#000000] text-white flex items-center font-semibold cursor-pointer justify-between rounded-xl p-2 w-[250px] md:w-[530px] mx-auto">
            {CategoryData.map((item,index)=>(
                <div key={index} onClick={(e) => filteredCategory(e.target.textContent)} className="hover:bg-[#2D8CFF] text-white md:rounded-xl rounded-md md:w-28 poppins-semibold md:text-sm text-[8px] text-center md:py-3 px-2 py-1">
                {item.category}
            </div>
            ))}  
            </motion.div> */}
            <div>
                <div className="grid md:grid-cols-2 gap-5 md:w-[900px] my-5 mx-auto">
                    {ProjectData.slice(0, ProjectData.length ).map((item, index) => {
                        if (ProjectData.length === 1) {
                            return <>
                                <Link target="_blank" href={item.link} className="cursor-pointer ">
                                    <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }} className=" md:ml-12 mt-5 blackBox shadow-xl relative">
                                        <Image src={item.image_name} alt="project1" width={461} height={213} className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10 cursor-pointer${index % 2 === 0 ? "md:w-[461px] md:h-[213px] h-[160px]" : "md:w-[225px] md:h-[213px] h-[180px]"}`} />
                                        <Link target="_blank" href={item.link} className="cursor-pointer ">
                                            <Image src="/export.png" alt="icon" width={16} height={18} className={`w-auto cursor-pointer  absolute bg-[#2D8CFF] p-1 rounded-md shadow-xl  md:top-8 top-12 md:right-8 right-14 ${index % 2 === 0 ? "z-20" : ""}`} />
                                        </Link>
                                        <h1 className="md:text-[30px] text-2xl font-bold md:my-5 my-3 text-[#FFFFFF] poppins-bold">{item.project_name}</h1>
                                        <button className="text-[#CACACA] bg-[#FFFFFF] bg-opacity-20 rounded-md poppins-semibold py-2 text-[11px]  md:w-36 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">{item.category}</button>
                                    </motion.div>
                                </Link>
                            </>;
                        }
                        if (index < ProjectData.length - 1) {
                            if (manageRow % 2 === 0) {
                                if (index % 2 === 0) {
                                    manageRow = manageRow + 1;
                                    console.log(index, 'index');
                                    return (
                                        <div key={index} className={`my-3 mx-auto relative md:ml-12 ${showAllItems || index  < displayCount ? '' : 'hidden'}`}>
                                            <Link target="_blank" href={ProjectData[index + 1].link} className="cursor-pointer ">
                                                <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className={`md:ml-14 bg-[#2D8CFF] rounded-xl md:w-[270px] md:mt-0 mt-5 relative w-[80%] mx-auto md:p-5 p-4 cursor-pointer`}>
                                                    <Image src={ProjectData[index + 1].image_name} alt="project1" width={461} height={213} className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10 cursor-pointer${index % 2 === 0 ? "md:w-[461px] md:h-[213px] h-[160px]" : "md:w-[225px] md:h-[213px] h-[180px]"}`} />
                                                    <Link target="_blank" href={ProjectData[index + 1].link} className="cursor-pointer ">
                                                        <Image src="/export.png" alt="icon" width={25} height={25} className={`   cursor-pointer  absolute bg-[#2D8CFF] p-1 rounded-md shadow-xl  md:top-8 top-8 md:right-8 right-8 ${index % 2 === 0 ? "z-20" : ""}`} />
                                                    </Link>
                                                    <h1 className="md:text-[30px] text-2xl font-bold md:my-5 my-3 text-[#FFFFFF] poppins-bold">{ProjectData[index + 1].project_name}</h1>
                                                    <button className="text-[#CACACA] bg-[#FFFFFF] bg-opacity-20 rounded-md poppins-semibold py-2 text-[11px]  md:w-36 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">{ProjectData[index + 1].category}</button>
                                                </motion.div>
                                            </Link>
                                            <Link target="_blank" href={item.link} className="cursor-pointer ">
                                                <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className="md:-ml-44 mt-5 blackBox shadow-xl relative">
                                                    <Image src={item.image_name} alt="project1" width={461} height={213} className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10 cursor-pointer${index % 2 === 0 ? "md:w-[461px] md:h-[213px] h-[160px]" : "md:w-[225px] md:h-[213px] h-[180px]"}`} />
                                                    <Link target="_blank" href={item.link} className="cursor-pointer ">
                                                        <Image src="/export.png" alt="icon" width={25} height={25} className={` cursor-pointer  absolute bg-[#2D8CFF] p-1 rounded-md shadow-xl  md:top-8 top-8 md:right-8 right-8 ${index % 2 === 0 ? "z-20" : ""}`} />
                                                    </Link>
                                                    <h1 className="md:text-[30px] text-2xl font-bold md:my-5 my-3 text-[#FFFFFF] poppins-bold">{item.project_name}</h1>
                                                    <button className="text-[#CACACA] bg-[#FFFFFF] bg-opacity-20 rounded-md poppins-semibold py-2 text-[11px]  md:w-36 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">{item.category}</button>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            } else {
                                if (index % 2 === 0) {
                                    manageRow = manageRow + 1;
                                    return (
                                        <div key={index} className={`my-3 mx-auto relative md:ml-12 ${showAllItems || index < displayCount ? '' : 'hidden'}`}>
                                            <Link target="_blank" href={ProjectData[index + 1].link} className="cursor-pointer ">
                                                <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className="blackBox shadow-xl relative">
                                                    <Image src={ProjectData[index + 1].image_name} alt="project1" width={461} height={213} className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10 cursor-pointer${index % 2 === 0 ? "md:w-[461px] md:h-[213px] h-[160px]" : "md:w-[225px] md:h-[213px] h-[180px]"}`} />
                                                    <Link target="_blank" href={ProjectData[index + 1].link} className="cursor-pointer ">
                                                        <Image src="/export.png" alt="icon" width={25} height={25} className={`  cursor-pointer  absolute bg-[#2D8CFF] p-1 rounded-md shadow-xl  md:top-8 top-8 md:right-8 right-8 ${index % 2 === 0 ? "z-20" : ""}`} />
                                                    </Link>
                                                    <h1 className="md:text-[30px] text-2xl font-bold md:my-5 my-3 text-[#FFFFFF] poppins-bold">{ProjectData[index + 1].project_name}</h1>
                                                    <button className="text-[#CACACA] bg-[#FFFFFF] bg-opacity-20 rounded-md poppins-semibold py-2 text-[11px]  md:w-36 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">{ProjectData[index + 1].category}</button>
                                                </motion.div>
                                            </Link>
                                            <Link target="_blank" href={item.link} className="cursor-pointer">
                                                <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }}className="md:-ml-1 mt-5  bg-[#2D8CFF] rounded-xl md:w-[270px]  w-[80%] relative mx-auto md:p-5 p-4 cursor-pointer">
                                                    <Image src={item.image_name} alt="project1" width={461} height={213} className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10 cursor-pointer${index % 2 === 0 ? "md:w-[461px] md:h-[213px] h-[160px]" : "md:w-[225px] md:h-[213px] h-[180px]"}`} />
                                                    <Link target="_blank" href={item.link} className="cursor-pointer ">
                                                        <Image src="/export.png" alt="icon" width={25} height={25} className={` cursor-pointer  absolute bg-[#2D8CFF] p-1 rounded-md shadow-xl top-8 right-8 z-20 `} />
                                                    </Link>
                                                    <h1 className="md:text-[30px] text-2xl font-bold md:my-5 my-3 text-[#FFFFFF] poppins-bold">{item.project_name}</h1>
                                                    <button className="text-[#CACACA] bg-[#FFFFFF] bg-opacity-20 rounded-md poppins-semibold py-2 text-[11px]  md:w-36 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">{item.category}</button>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            }
                        }
                    })}
                </div>

                {!showAllItems && (
                    <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }} className="md:w-[800px] md:mx-auto mx-10 flex justify-center items-center gap-1 cursor-pointer bg-black text-white rounded-xl py-3 mt-3" onClick={handleViewMore}>
                        <p>View More</p>
                        <IoMdArrowDropdown className="text-2xl" />
                    </motion.div>
                )}

                {showAllItems && (
                    <motion.div whileInView={{ y: 0 }} initial={{ y:100 }} transition={{ delay: 0.2, duration: 1 }} className="md:w-[800px] md:mx-auto mx-10 flex justify-center items-center gap-1 cursor-pointer bg-black text-white rounded-xl py-3 mt-3" onClick={handleViewLess}>
                        <p>View Less</p>
                        <IoMdArrowDropup className="text-2xl" />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;
