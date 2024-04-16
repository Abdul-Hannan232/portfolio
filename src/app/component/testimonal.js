'use client'
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonaldata from '../data/testimonaldata.json';
import Image from 'next/image';
import { motion } from "framer-motion"

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const Testimonial = () => {

    const [width,setWidth] = useState(0);
    const sliderRef = useRef(null);

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const getCountryFlag = (country) => {
        switch (country) {
            case 'United States':
                return "/us.png";
            case 'Singapore':
                return "/singapore.png";
            case 'Canada':
                return "/canada.png";
            case 'South Africa':
                return "/s-africa.png";
            case 'Malaysia':
                return "/malaysia.png";
            case 'United Kingdom':
                return "/uk.png";
            default:
                return "/flag.png";
        }
    };
    

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    
    // console.log(width);

    return (

        // <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }} className="md:w-[500px] md:mx-auto mx-14 pt-72" id="Testimonials"  >
        <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }} className="md:w-[500px] md:mx-auto mx-14 pt-16" id="testimonials"  >
            <motion.h1 whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }} className="md:text-5xl text-3xl poppins-bold text-center mb-8">Testimonials</motion.h1>
            <div className='relative'>
                <Slider ref={sliderRef} {...settings}>
                    {testimonaldata?.reviews?.map((item, index) => (
                        <div key={index} className={`border-[#CACACA] border-2 rounded-2xl p-4 bg-white`}>
                            <div className="bg-[#2D8CFF] text-white flex items-center md:p-3     p-2 rounded-2xl  gap-3">
                                <div className="bg-[#FFFFFF] md:p-4 p-2 rounded-full md:w-14 w-10 h-9 md:h-14">
                                    <Image src="/usericon.png" alt="color" width={50} height={50} className='w-auto mx-auto' />
                                </div>
                                <div>
                                    <h1 className="md:text-[20px]  poppins-semibold">{item.client_name}</h1>
                                    <div className="flex items-center rounded-md py-[3px] pl-[3px] md:w-36 w-28 h-6 mt-1 md:gap-3 gap-1 bg-white text-black">
                                        <Image src={getCountryFlag(item.country)} alt={item.country} width={30} height={16} className='w-30 h-16 object-contain' />
                                        <p className="text-black md:text-[11px] text-[9px]">{item.country}</p>
                                    </div>

                                </div>
                            </div>
                            <p className="text-[#000000] md:text-[12px] text-xs poppins-semibold tracking-wider mt-5 mb-3">{item.review}</p>
                        </div>
                    ))}
                </Slider>
                {/* <div style={{ position: 'absolute', top: width <= 768 ? '38%' : '5%', bottom: '0', transform: 'translateY(-50%)', zIndex: '1' }} className='md:w-[100%] w-[100%] mx-auto'> */}
                <div style={{ position: 'absolute', top:width <= 340  ? '30%': width <= 430 ? '26%' :width <= 570 ? '22%': width <= 768 ? '19%' : '5%', bottom: '0', transform: 'translateY(-50%)', zIndex: '1' }} className='md:w-[100%] w-[100%] mx-auto'>
                    <div className='slick-prev sl-arrow'>
                        <div className="md:w-16 w-10 bg-[#E8F2FF] md:-ml-12 -ml-5 h-28 md:h-44 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center" onClick={goToPrev}>
                            <div className="bg-[#2D8CFF] text-white text-xl md:p-[1px] cursor-pointer md:w-6 w-5 text-center font-bold  rounded-md" >
                                <RiArrowLeftSLine />
                            </div>
                        </div>
                    </div>
                    <div className='slick-next slick-arrow'>
                        <div className=" md:w-16 w-10 bg-[#E8F2FF] h-28  md:h-44 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center" onClick={goToNext}> 
                            <div className="bg-[#2D8CFF] text-white text-xl md:p-[1px] cursor-pointer md:w-6 w-5 text-center font-bold  rounded-md" >
                                <MdOutlineKeyboardArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonial;

// const Carousel = () => {
//     const sliderRef = useRef(null);

//     const goToPrev = () => {
//         sliderRef.current.slickPrev();
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext();
//     };

//     return (
//         <div style={{ position: 'relative' }} className='w-[50%] mx-auto bg-gray-900'>
//             <Slider ref={sliderRef} {...settings}>
//                 {testimonaldata.map((item, index) => (
//                     <div key={index} className={`border-[#CACACA] border-2 rounded-2xl p-4 bg-white ${index !== currentIndex && 'hidden'}`}>
//                         <div className="bg-[#2D8CFF] text-white flex items-center md:p-3     p-2 rounded-2xl  gap-3">
//                             <div className="bg-[#FFFFFF] md:p-4 p-2 rounded-full md:w-14 w-10 h-10 md:h-14">
//                                 <Image src="/usericon.png" alt="color" width={50} height={50} className='w-auto' />
//                             </div>
//                             <div>
//                                 <h1 className="md:text-[20px]  poppins-semibold">{item.name}</h1>
//                                 <div className="flex items-center rounded-md py-[3px] pl-[3px] md:w-32 w-28 mt-1 md:gap-3 gap-1 bg-white text-black">
//                                     <Image src="/flag.png" alt="color" width={30} height={16} className='w-auto' />
//                                     <p className="text-black text-[11px]">{item.state}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="text-[#000000] md:text-[12px] text-xs poppins-semibold tracking-wider mt-5 mb-3">{item.para}</p>
//                     </div>
//                 ))}
//                 {/* {items.map((item, index) => (
//                     <div key={index}>
//                         <img src={item.imageUrl} alt={item.altText} />
//                     </div>
//                 ))} */}
//             </Slider>
//             <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: '1', width: '100%' }}>
//                 <div className=" slick-prev slick-arrow bg-[#E8F2FF] md:h-44 h-32 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center">
//                     <div className="bg-[#2D8CFF] text-white text-xl md:p-[1px] cursor-pointer md:w-6 w-5 text-center font-bold  rounded-md" onClick={goToPrev}>
//                         <RiArrowLeftSLine />
//                     </div>
//                 </div>
//                 {/* <button className="slick-prev slick-arrow" style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none' }} onClick={goToPrev}>
//           <FaChevronLeft style={{ fontSize: '24px', color: '#000' }} />
//         </button> */}
//                 <div className=" slick-next slick-arrow bg-[#E8F2FF] md:h-44 h-32 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center">
//                     <div className="bg-[#2D8CFF] text-white text-xl md:p-[1px] cursor-pointer md:w-6 w-5 text-center font-bold  rounded-md" onClick={goToNext}>
//                         <MdOutlineKeyboardArrowRight />
//                     </div>
//                 </div>
//                 {/* <button className="slick-next slick-arrow" style={{ marginRight: '10px', backgroundColor: 'transparent', border: 'none' }} onClick={goToNext}>
//           <FaChevronRight style={{ fontSize: '24px', color: '#000' }} />
//         </button> */}
//             </div>
//         </div>
//     );
// };

// export Carousel;


