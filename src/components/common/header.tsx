"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import marketingDropdown from "@/assets/svgs/marketing-dropdown.svg";
import GoogleAnalytics from "@/assets/svgs/google-analytics-dropdown.svg";
import IdentifyDropdown from "@/assets/svgs/identify-dropdown-icon.svg";
import AgenciesDropdown from "@/assets/svgs/agencies-dropdown.svg";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!event?.target?.closest('.dropdown')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='bg-[#3f4046]'>
            <div className='max-w-[1280px] mx-auto py-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image
                        src='https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/642bbbd140c74505628ceb96_Logo.svg'
                        height={35}
                        width={125}
                        alt='Logo'
                    />
                </div>
                <nav>
                    <ul className='flex space-x-8 text-white text-sm'>
                        {/* Products Dropdown */}
                        <li className='relative flex items-center dropdown'>
                            <button
                                onClick={() =>
                                    setOpenDropdown(openDropdown === 'products' ? null : 'products')
                                }
                                className='hover:text-gray-300 flex items-center font-medium'
                            >
                                Products
                                <ChevronDownIcon className='ml-1 w-4 h-4' />
                            </button>
                            {openDropdown === 'products' && (
                                <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#1b1c1f] p-5 rounded-lg shadow-lg w-[350px]'>
                                    <ul>
                                        <li className='flex items-center p-2 hover:bg-[#2c2e33] rounded-lg'>
                                            <Image
                                                src={IdentifyDropdown}
                                                alt='Identify'
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ml-4'>
                                                <p className='font-semibold'>Identify</p>
                                                <p className='text-sm text-gray-400 pt-2'>
                                                    Turn your anonymous website traffic into actionable leads.
                                                </p>
                                            </div>
                                        </li>
                                        <li className='flex items-center p-2 hover:bg-[#2c2e33] rounded-lg'>
                                            <Image
                                                src={GoogleAnalytics}
                                                alt='Google Analytics'
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ml-4'>
                                                <p className='font-semibold'>Google Analytics Enricher</p>
                                                <p className='text-sm text-gray-400 pt-2'>
                                                    Turn Google Analytics into a platform made for B2B analytics.
                                                </p>
                                            </div>
                                        </li>

                                        <li className='flex items-center p-2 hover:bg-[#2c2e33] rounded-lg'>
                                            <Image
                                                src={IdentifyDropdown}
                                                alt='Identify'
                                                width={40}
                                                height={40}
                                            />
                                            <div className='ml-4'>
                                                <p className='font-semibold'>Spotter</p>
                                                <p className='text-sm text-gray-400 pt-2'>
                                                    Real-time visitor identification API.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        {/* Solutions Dropdown */}
                        <li className='relative flex items-center dropdown'>
                            <button
                                onClick={() =>
                                    setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')
                                }
                                className='hover:text-gray-300 flex items-center font-medium'
                            >
                                Solutions
                                <ChevronDownIcon className='ml-1 w-4 h-4' />
                            </button>
                            {openDropdown === 'solutions' && (
                                <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#1b1c1f] p-5 rounded-lg shadow-lg w-[350px]'>
                                    <ul>
                                        <li className='flex items-center p-2 hover:bg-[#2c2e33] rounded-lg'>
                                            <Image
                                                src={AgenciesDropdown}
                                                alt='For Sales'
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ml-4'>
                                                <p className='font-semibold'>For Sales</p>
                                                <p className='text-sm text-gray-400 pt-2'>
                                                    Qualify and prioritize high-intent leads
                                                </p>
                                            </div>
                                        </li>
                                        <li className='flex items-center p-2 hover:bg-[#2c2e33] rounded-lg'>
                                            <Image
                                                src={marketingDropdown}
                                                alt='For Marketing'
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ml-4'>
                                                <p className='font-semibold'>For Marketing</p>
                                                <p className='text-sm text-gray-400 pt-2'>
                                                    Reduce waste and improve retargeting.
                                                </p>
                                            </div>
                                        </li>
                                        <li className='flex items-center p-2 hover:bg-[#2c2e33] rounded-lg'>
                                            <Image
                                                src={marketingDropdown}
                                                alt='For Marketing'
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ml-4'>
                                                <p className='font-semibold'>For Agencies</p>
                                                <p className='text-sm text-gray-400 pt-2'>
                                                    Drive more qualified leads for your clients.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li className='relative flex items-center'>
                            <button className='hover:text-gray-300 flex items-center font-medium'>
                                Resources
                                <ChevronDownIcon className='ml-1 w-4 h-4' />
                            </button>
                        </li>

                        <li>
                            <a href='#' className='hover:text-gray-300 font-medium'>
                                Pricing
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className='flex space-x-4'>
                    <button className='text-white'>Log in</button>
                    <button className='bg-[#3257ff] text-white px-4 py-[6px] flex justify-between items-center rounded-full hover:bg-blue-600'>
                        Start Now
                        <ChevronRightIcon className='h-6 w-6' />
                    </button>
                </div>
            </div>
        </header>
    );
}
