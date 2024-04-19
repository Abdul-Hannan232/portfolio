'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Nav = ({ navlinks, setNavLinks }) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [handlingClick, setHandlingClick] = useState(false);

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



    return (
        <div className={`md:w-[800px] fixed top-0 right-0 left-0 z-40 px-3 rounded-b-2xl pb-3 mx-auto pt-10 ${scrolled ? 'bg-gray-900 shadow-xl px-3 rounded-b-2xl pb-3 pt-10 backdrop-blur-xl bg-white/30' : 'bg-transparent'}`}>
            <div className='flex items-center justify-between gap-3'>
                <div className='border-[#2D8CFF] bg-white w-full border-2 md:block hidden rounded-2xl py-4'>
                    <ul className='list-none poppins-semibold text-md px-10 flex items-center justify-between'>
                        {navlinks.map(({ link, name }) => (
                            <li key={name}>
                                <Link href={link}>
                                    <div className={`relative lg:block hidden hover:text-black text-[#CACACA] poppins-semibold ${selectedSection === link.slice(1) ? 'text-black' : ''}`} onClick={() => handleNavLinkClick(link)}>
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
        </div>
    );
};

export default Nav;
