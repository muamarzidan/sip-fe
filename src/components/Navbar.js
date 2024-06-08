"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [activeNav, setActiveNav] = useState('/');
    const navOutside = useRef();
    const router = useRouter();

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
        if (navItem === 'laporan') {
            handleScrollToLaporan();
        }
    };

    const handleScrollToLaporan = () => {
        const laporanSection = document.getElementById('laporan');
        if (laporanSection) {
            laporanSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/#laporan', undefined, { scroll: false });
        }
        toggleNavbar();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                navOutside.current &&
                !navOutside.current.contains(event.target)
            ) {
                setIsClick(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <nav ref={navOutside} className="h-[60px] sm:h-[80px] md:h-[90px] fixed flex justify-center items-center py-4 sm:py-7 md:py-5 top-0 inset-x-0 z-50 border-2 transition-all duration-300">
                <div className="w-full container mx-auto">
                    <div className="h-full w-full flex justify-between items-center">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo-sipum.png"
                                alt="Logo Universitas"
                                width={131}
                                height={72}
                                responsive="true"
                                className="w-[50px] h-[27px] sm:w-[70px] sm:h-[35px] md:w-[131px] md:h-[72px] cursor-pointer object-contain"
                            />
                        </Link>
                        <div className="md:flex items-center space-x-16 hidden">
                            <ul className="md:flex items-center space-x-4 hidden">
                                <Link href="/">
                                    <li
                                        className={`${activeNav === '/' ? 'font-bold underline' : 'font-normal'} text-base p-4 text-[#00408A]`}
                                        onClick={() => handleNavClick('/')}
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link href="/trending">
                                    <li
                                        className={`${activeNav === '/trending' ? 'font-bold underline' : 'font-normal'} text-base p-4 text-[#0055B8]`}
                                        onClick={() => handleNavClick('/trending')}
                                    >
                                        Trendings
                                    </li>
                                </Link>
                                <li
                                    className={`${activeNav === 'laporan' ? 'font-bold underline' : 'font-normal'} text-base p-4 text-[#0055B8] cursor-pointer`}
                                    onClick={() => handleNavClick('laporan')}
                                >
                                    Laporan
                                </li>
                                <Link href="/login">
                                    <Button className="font-normal h-10 px-6 rounded-[6px] bg-[#00408A] text-white">
                                        Log In
                                    </Button>
                                </Link>
                            </ul>
                        </div>
                        <div
                            onClick={toggleNavbar}
                            className="md:hidden cursor-pointer pl-24"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={18}
                                viewBox="0 0 48 48"
                                className="w-full h-full max-w-[22px] max-h-[18px]"
                            >
                                <path
                                    fill="none"
                                    stroke="#205290"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={4}
                                    d="M7.95 11.95h32m-32 12h32m-32 12h32"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className={
                            isClick
                                ? "fixed w-[65%] md:hidden h-screen flex flex-col flex-start p-5 sm:p-10 left-0 top-0 ease-in duration-400 transition-all bg-bluePallete-700 bg-[#00408A]"
                                : "fixed left-[-100%] top-0 p-10 ease-out duration-400 transition-all"
                        }
                    >
                        <div className="w-full flex items-center justify-start">
                            <div onClick={toggleNavbar} className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={56}
                                    height={56}
                                    viewBox="0 0 24 24"
                                    className="w-full h-full max-w-[56px] max-h-[56px]"
                                >
                                    <g fill="none" stroke="white" strokeWidth={1.5}>
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 12H8m0 0l3-3m-3 3l3 3"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="h-full flex flex-col py-4">
                            <ul className="pt-[160px]">
                                <Link href="/">
                                    <li
                                        className={`${activeNav === '/' ? 'font-bold underline' : 'font-normal'} text-base px-2 py-4 text-white`}
                                        onClick={() => handleNavClick('/')}
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link href="/trending">
                                    <li
                                        className={`${activeNav === '/trending' ? 'font-bold underline' : 'font-normal'}
                                    text-base px-2 py-4 text-white`}
                                        onClick={() => handleNavClick('/trending')}
                                    >
                                        Trendings
                                    </li>
                                </Link>
                                <li
                                    className={`${activeNav === 'laporan' ? 'font-bold underline' : 'font-normal'} text-base px-2 py-4 text-white cursor-pointer`}
                                    onClick={() => handleNavClick('laporan')}
                                >
                                    Laporan
                                </li>
                                <Link href="/login">
                                    <Button className="font-normal h-10 px-6 ml-[6px] mt-[20px] rounded-[6px] bg-white">
                                        <p className="text-[#00408A]">Log In</p>
                                    </Button>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;