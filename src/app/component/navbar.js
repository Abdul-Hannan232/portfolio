'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


const Nav = ({ navlinks, setNavLinks }) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [handlingClick, setHandlingClick] = useState(false);
    const [toggle, setToggle] = useState(true);


    // Function to handle click on nav link
    const handleNavLinkClick = (link) => {
        setSelectedSection(link.slice(1));
        setHandlingClick(true);
    };

    // Update selected section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (!handlingClick) {
                const scrollPosition = window.scrollY;
                const sections = document.querySelectorAll("section[id]");

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setSelectedSection(section.id);
                    }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handlingClick]);

    // Reset handlingClick state after scroll has ended
    useEffect(() => {
        let timeoutId;
        const handleScrollEnd = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setHandlingClick(false);
            }, 100); // Adjust the delay as needed
        };

        window.addEventListener("scroll", handleScrollEnd);

        return () => {
            window.removeEventListener("scroll", handleScrollEnd);
            clearTimeout(timeoutId);
        };
    }, []);

    
    // const toOpen = () => {
    //     setToggle(true)
    // }
    // const toClose = () => {
    //     setToggle(false)
    // }

    return (
        <div className={`md:w-[800px] fixed top-0 right-0 left-0 z-40 px-3 rounded-b-2xl pb-3 mx-auto pt-10 ${scrolled ? 'bg-gray-900 shadow-xl px-3 rounded-b-2xl pb-3 pt-10 backdrop-blur-xl bg-white/30' : 'bg-transparent'}`}>
            <div className='flex items-center justify-between gap-3'>
                <div className='border-[#2D8CFF] bg-white w-full border-2 md:block hidden rounded-2xl py-4'>
                    <ul className='list-none poppins-semibold text-md px-10 flex items-center justify-between'>
                        {navlinks.map(({ link, name }) => (
                            <li key={name}>
                                <Link href={link}>
                                    <div className={`relative md:block hidden hover:text-black text-[#CACACA] poppins-semibold ${selectedSection === link.slice(1) ? 'text-black' : ''}`} onClick={() => handleNavLinkClick(link)}>
                                        {name}
                                        {selectedSection === link.slice(1) && (
                                            <div className="absolute inset-x-0 hover" />
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="#contact" onClick={() => handleNavLinkClick('#contact')}>
                    <button className='bg-[#2D8CFF] text-white md:block hidden poppins-semibold rounded-2xl text-center w-64 py-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300'>Contact</button>
                </Link>
            </div>







            <div className='w-full mx-auto md:hidden block'>
                <Image src="/popup.png" alt="popup" width={48} height={48} priority className='mx-auto cursor-pointer' onClick={() => setToggle(prevToggle => !prevToggle)} />
            </div>
            {toggle  && (
                <div className='flex justify-center align-center'>
                    <Dropdown className='relative text-center'>
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <div className='fixed top-10 right-0 left-0 mx-auto md:hidden block index-1'>
                                    <Image src="/popup.png" alt="popup" width={48} height={48} className='mx-auto cursor-pointer' onClick={() => setToggle(true)} />
                                </div>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Main Menu" className=' md:hidden text-center bg-white w-[230px] mt-20 mx-auto shadow-xl rounded-2xl p-5' style={{ boxShadow: '0px 4px 30px 0px #00000040' }}>
                            <DropdownItem textValue='open menu' className='flex justify-end -mt-2 ml-4' onClick={() => setToggle(false)}>
                                <Image src="/cross.png" alt="cross" width={22} height={22} className='float-right cursor-pointer mx-auto' />
                            </DropdownItem>
                            {navlinks.map(({ link, name }) => (
                                <DropdownItem textValue='open menu' key={name} className="text-center w-40 flex justify-center mx-auto border-b-[#EDEDED] border-b-2 py-3 font-bold text-lg">
                                    <Link href={link} className='text-[#CACACA]' onClick={() => handleNavLinkClick(link)}>{name}</Link>
                                </DropdownItem>
                            ))}
                            <DropdownItem textValue='open menu' className="flex justify-center">
                                <Link href="#contact">
                                    <Button onClick={() => handleNavLinkClick("#contact")} className='bg-[#2D8CFF] mt-5 mb-2 text-white rounded-2xl w-[140px] mx-auto py-2'>Contact</Button>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            )}
        </div>
    );
};

export default Nav;
