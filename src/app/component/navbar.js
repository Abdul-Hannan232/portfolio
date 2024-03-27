"use client"
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from "next/image"
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const [selectedSection, setSelectedSection] = useState("#");

    const handleNavLinkClick = (link) => {
        setSelectedSection(link);
    };
    const navlinks = [
        {
            name: "Home",
            link: "#",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Services",
            link: "#services",
        },
        {
            name: "Testimonials",
            link: "#Testimonials",
        },
    ];
    const [toggle, setToggle] = useState(false)
    const toOpen = () => {
        setToggle(true)
    }
    const toClose = () => {
        setToggle(false)
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`md:w-[800px] fixed top-0 right-0 left-0 z-40 px-3 rounded-b-2xl pb-3  mx-auto pt-10 ${scrolled ? 'bg-gray-900 shadow-xl px-3 rounded-b-2xl pb-3 backdrop-blur-xl bg-white/30' : 'bg-transparent'}`}>
            <div className='flex items-center justify-between gap-3'>
                <div className='border-[#2D8CFF] bg-white w-full border-2 md:block hidden rounded-2xl py-4'>
                    <ul className='list-none poppins-semibold text-md px-10 flex items-center justify-between'>
                        {navlinks.map(({ link, name }) => (
                            <div key={name}>
                                <Link
                                    href={link}
                                    onClick={() => handleNavLinkClick(link)}
                                    className={`relative lg:block hidden hover:text-black text-[#CACACA] ${selectedSection === link ? 'text-black poppins-semibold' : ''}`}
                                >
                                    {name}
                                    {selectedSection === link && <div className="absolute inset-x-0 hover bg-black" />} {/* Underline */}
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
                <button className='bg-[#2D8CFF] text-white md:block hidden poppins-semibold rounded-2xl text-center w-64 py-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300'><Link href="#contact">Contact</Link></button>
            </div>
            <div className='  w-full  mx-auto md:hidden block'>
                <Image src="/popup.png" alt="popup" width={48} height={48} priority className='  mx-auto  cursor-pointer' onClick={toOpen} />
            </div>
            {toggle && (
                <Dropdown className='w-full  relative  text-center mx-auto'>
                    <DropdownTrigger className=' ' >
                        <Button
                            variant="bordered"
                        >
                            <div className='w-full fixed top-10 right-0 left-0 mx-auto   md:hidden block'>
                                <Image src="/popup.png" alt="popup" width={48} height={48} className='  mx-auto   cursor-pointer' onClick={toOpen} />
                            </div>
                        </Button>

                    </DropdownTrigger>
                    <DropdownMenu className='text-center   bg-white w-52 mt-20  mx-auto shadow-xl rounded-2xl p-4'>
                        <DropdownItem className='flex justify-end mx-auto '>
                            <Image src="/cross.png" alt="cross" width={20} height={20} className='float-right cursor-pointer mx-auto' onClick={toClose} />
                        </DropdownItem>
                        <DropdownItem className="text-center w-44 flex justify-center mx-auto  !border-b-[#EDEDED] border-2 py-3 border-transparent"><Link href="#">Home</Link></DropdownItem>
                        <DropdownItem className="text-center w-44 flex justify-center mx-auto  !border-b-[#EDEDED] border-2 py-3 border-transparent"><Link href="#projects">Projects</Link></DropdownItem>
                        <DropdownItem className="text-center w-44 flex justify-center mx-auto  !border-b-[#EDEDED] border-2 py-3 border-transparent"><Link href="#services">Services</Link></DropdownItem>
                        <DropdownItem className="text-center w-44 flex justify-center mx-auto  !border-b-[#EDEDED] border-2 py-3 border-transparent"><Link href="#Testimonials">Testimonials</Link></DropdownItem>
                        <DropdownItem className="flex justify-center">
                            <Button className='bg-[#2D8CFF] mt-5 mb-2  text-white rounded-xl w-24 mx-auto py-2'>
                            <Link href="#contact">Contact</Link>
                                                        </Button>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )}

        </div>
    )
}

export default Navbar