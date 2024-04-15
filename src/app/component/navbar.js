"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import Image from 'next/image';

const Nav = () => {
    const [selectedSection, setSelectedSection] = useState('#');
    const [toggle, setToggle] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const handleNavLinkClick = (link) => {
        setSelectedSection(link);
        console.log(selectedSection, "hello");
    };

    const navlinks = [
        { name: 'Home', link: '#' },
        { name: 'Projects', link: '#projects' },
        { name: 'Services', link: '#services' },
        { name: 'Testimonials', link: '#Testimonials' },
    ];

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // const toOpen = () => {
    //     setToggle(true);
    // };

    // const toClose = () => {
    //     setToggle(false);
    // };

    console.log(toggle)

    return (
        <div className={`md:w-[800px] fixed top-0 right-0 left-0 z-40 px-3 rounded-b-2xl pb-3  mx-auto pt-10 ${scrolled ? 'bg-gray-900 shadow-xl px-3 rounded-b-2xl pb-3 pt-10 backdrop-blur-xl bg-white/30' : 'bg-transparent'}`}>
            <div className='flex items-center justify-between gap-3'>
                <div className='border-[#2D8CFF] bg-white w-full border-2 md:block hidden rounded-2xl py-4'>
                    <ul className='list-none poppins-semibold text-md px-10 flex items-center justify-between'>
                        {navlinks?.map(({ link, name }) => (
                            <li key={name}>
                                <Link href={link}>
                                    <div className={`relative lg:block hidden hover:text-black text-[#CACACA] poppins-semibold ${selectedSection === link ? 'text-black' : ''}`} onClick={() => handleNavLinkClick(link)}>
                                        {name}
                                        {selectedSection === link && <div className="absolute inset-x-0 hover " />}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="#contact">
                    <button className='bg-[#2D8CFF] text-white md:block hidden poppins-semibold rounded-2xl text-center w-64 py-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300'>Contact</button>
                </Link>
            </div>

            <div className='w-full mx-auto md:hidden block'>
                <Image src="/popup.png" alt="popup" width={48} height={48} priority className='mx-auto cursor-pointer ' onClick={() => setToggle(prevToggle => !prevToggle)} />
            </div>

            {toggle === true && (
                <div className='flex justify-center align-center'>
                    <Dropdown className='relative text-center'>
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <div className='fixed top-10 right-0 left-0 mx-auto md:hidden block index-1'>
                                    <Image src="/popup.png" alt="popup" width={48} height={48} className='mx-auto cursor-pointer ' onClick={() => setToggle(true)} />
                                </div>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Main Menu" className='text-center bg-white w-[230px]  mt-20 mx-auto shadow-xl rounded-2xl p-5  ' style={{ boxShadow: ' 0px 4px 30px 0px #00000040' }}>
                            <DropdownItem textValue='open menue' className='flex justify-end -mt-2 ml-4' >
                                <Image src="/cross.png" alt="cross" width={22} height={22} className='float-right cursor-pointer mx-auto  ' onClick={() => {
                                    setToggle(false)
                                    setTimeout(() => {
                                        setToggle(true)
                                    }, 100);
                                }} />
                            </DropdownItem>
                            {navlinks.map(({ link, name }) => (
                                <DropdownItem textValue='open menue' key={name} className="text-center w-40 flex justify-center mx-auto border-b-[#EDEDED] border-b-2 py-3 font-bold text-lg ">
                                    <Link href={link} className='text-[#CACACA] '>{name}</Link>
                                </DropdownItem>
                            ))}
                            <DropdownItem textValue='open menue' className="flex justify-center" >
                                <Link href="#contact">
                                    <Button className='bg-[#2D8CFF] mt-5 mb-2 text-white rounded-2xl w-[140px] mx-auto py-2'>Contact</Button>
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
