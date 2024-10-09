"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import marketingDropdown from "@/assets/svgs/marketing-dropdown.svg";
import GoogleAnalytics from "@/assets/svgs/google-analytics-dropdown.svg";
import IdentifyDropdown from "@/assets/svgs/identify-dropdown-icon.svg";
import AgenciesDropdown from "@/assets/svgs/agencies-dropdown.svg";
import Guides from "@/assets/images/navbar-img.webp";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='bg-[#3f4046] fixed top-0 w-full z-50'>
      <div className='max-w-[1280px] mx-auto px-6 py-4 flex justify-between items-center'>

        <div className='flex items-center'>
          <Image
            src='https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/642bbbd140c74505628ceb96_Logo.svg'
            height={35}
            width={125}
            alt='Logo'
          />
        </div>


        <nav className='hidden lg:block'>
          <ul className='flex space-x-8 text-white text-sm'>

            <li className='relative flex items-center dropdown'>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'products' ? null : 'products')
                }
                className='hover:text-gray-300 flex items-center font-medium'>
                Products
                <ChevronDownIcon
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'products' ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'products' && (
                <div className='absolute top-5 left-1/2 transform -translate-x-1/2 mt-2 bg-[#1b1c1f] p-5 rounded-lg shadow-lg w-[350px]'>
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
                        alt='Spotter'
                        width={50}
                        height={50}
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

            <li className='relative flex items-center dropdown'>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')
                }
                className='hover:text-gray-300 flex items-center font-medium'>
                Solutions
                <ChevronDownIcon
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'solutions' ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'solutions' && (
                <div className='absolute top-4 left-1/2 transform -translate-x-1/2 mt-2 bg-[#1b1c1f] p-5 rounded-lg shadow-lg w-[350px]'>
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
                          Qualify and prioritize high-intent leads.
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
                        alt='For Agencies'
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

            <li className='relative flex items-center dropdown'>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'resources' ? null : 'resources')
                }
                className='hover:text-gray-300 flex items-center font-medium'>
                Resources
                <ChevronDownIcon
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'resources' ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'resources' && (
                <div className='absolute top-3 left-1/2 transform -translate-x-1/2 bg-[#1b1c1f] mt-4 p-3 pb-8 rounded-lg shadow-lg w-[280px]'>
                  <ul>
                    <li className='flex items-center hover:bg-[#2c2e33] rounded-lg pt-5'>
                      <div className='ml-3'>
                        <p className='font-semibold text-base'>Help Center</p>
                        <p className='text-sm text-gray-400 pt-2'>
                          Advice, best practices and answers from the Snitchers Team.
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center hover:bg-[#2c2e33] rounded-lg pt-7'>
                      <div className='ml-3'>
                        <p className='font-semibold text-base'>Customer Stories</p>
                        <p className='text-sm text-gray-400 pt-2'>
                          Discover how businesses like yours use Snitchers to identify, engage and acquire new customers.
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center hover:bg-[#2c2e33] rounded-lg pt-7'>
                      <div className='ml-3'>
                        <p className='font-semibold text-base'>B2B Marketing Blueprint</p>
                        <p className='text-sm text-gray-400 pt-2'>
                          Tactical modules for B2B marketing growth, based on the industry's best practices.
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center hover:bg-[#2c2e33] rounded-lg pt-7'>
                      <div className='ml-3'>
                        <p className='font-semibold text-base'>Guides</p>
                       <div className='pt-2'><Image src={Guides} alt='Guides Img' width={232} height={116} className='rounded-lg'/></div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a href='#' className='hover:text-gray-300 font-medium'>
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className='hidden lg:flex justify-center items-center gap-5 text-sm text-white'>
          <button className='rounded-full bg-[#3257ff] py-[7px] pl-5 pr-3 flex items-center gap-1 hover:bg-blue-600'>
            Start Now
            <ChevronRightIcon className='h-5 w-5' />
          </button>
          <button className='font-semibold'>Log in</button>
        </div>

        <div className='lg:hidden flex items-center'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='text-white focus:outline-none'>
            <Bars3Icon className='w-10 h-10' />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#3f4046] overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
        }`}>
        <ul className='px-6 py-4 space-y-4 text-white text-sm'>
          <li>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'products' ? null : 'products')
              }
              className='w-full text-left flex items-center font-medium'>
              Products
              <ChevronDownIcon
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'products' ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'products' && (
              <ul className='p-4 pl-3 space-y-2'>

                <li className='flex items-start'>
                  <Image
                    src={IdentifyDropdown}
                    alt='Identify'
                    width={40}
                    height={40}
                  />
                  <div className='ml-3'>
                    <p className='font-semibold'>Identify</p>
                    <p className='text-sm text-gray-400'>
                      Turn your anonymous website traffic into actionable leads.
                    </p>
                  </div>
                </li>

                <li className='flex items-start'>
                  <Image
                    src={GoogleAnalytics}
                    alt='Google Analytics Enricher'
                    width={40}
                    height={40}
                  />
                  <div className='ml-3'>
                    <p className='font-semibold'>Google Analytics Enricher</p>
                    <p className='text-sm text-gray-400'>
                      Turn Google Analytics into a platform made for B2B analytics.
                    </p>
                  </div>
                </li>

                <li className='flex items-start'>
                  <Image
                    src={IdentifyDropdown}
                    alt='Spotter'
                    width={40}
                    height={40}
                  />
                  <div className='ml-3'>
                    <p className='font-semibold'>Spotter</p>
                    <p className='text-sm text-gray-400'>
                      Real-time visitor identification API.
                    </p>
                  </div>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')
              }
              className='w-full text-left flex items-center font-medium'>
              Solutions
              <ChevronDownIcon
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'solutions' ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'solutions' && (
              <ul className='p-4 pl-3 space-y-2'>

                <li className='flex items-start'>
                  <Image
                    src={AgenciesDropdown}
                    alt='For Sales'
                    width={40}
                    height={40}
                  />
                  <div className='ml-3'>
                    <p className='font-semibold'>For Sales</p>
                    <p className='text-sm text-gray-400'>
                      Qualify and prioritize high-intent leads.
                    </p>
                  </div>
                </li>

                <li className='flex items-start'>
                  <Image
                    src={marketingDropdown}
                    alt='For Marketing'
                    width={40}
                    height={40}
                  />
                  <div className='ml-3'>
                    <p className='font-semibold'>For Marketing</p>
                    <p className='text-sm text-gray-400'>
                      Reduce waste and improve retargeting.
                    </p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <Image
                    src={marketingDropdown}
                    alt='For Agencies'
                    width={40}
                    height={40}
                  />
                  <div className='ml-3'>
                    <p className='font-semibold'>For Agencies</p>
                    <p className='text-sm text-gray-400'>
                      Drive more qualified leads for your clients.
                    </p>
                  </div>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'resources' ? null : 'resources')
              }
              className='w-full text-left flex items-center font-medium'>
              Resources
              <ChevronDownIcon
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'resources' ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'resources' && (
              <ul className='p-4 pl-3 space-y-2'>

                <li className='flex items-start'>
                <div className='ml-3'>
                  <p className='font-semibold text-base'>Help Center</p>
                  <p className='text-sm text-gray-400 pt-2'>
                   Advice, best practices and answers from the Snitchers Team.
                  </p>
                 </div>
                </li>

                <li className='flex items-start'>
                <div className='ml-3'>
                  <p className='font-semibold text-base'>Customer Stories</p>
                  <p className='text-sm text-gray-400 pt-2'>
                    Discover how businesses like yours use Snitchers to identify, engage and acquire new customers.
                  </p>
                </div>
                </li>

                <li className='flex items-start'>
                <div className='ml-3'>
                  <p className='font-semibold text-base'>B2B Marketing Blueprint</p>
                  <p className='text-sm text-gray-400 pt-2'>
                    Tactical modules for B2B marketing growth, based on the industry's best practices.
                  </p>
                </div>
                </li>

                <li className='flex items-start'>
                <div className='ml-3'>
                  <p className='font-semibold text-base'>Guides</p>
                  <div className='pt-2'><Image src={Guides} alt='Guides Img' width={232} height={116} className='rounded-lg'/></div>
                </div>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href='#' className='font-medium block'>
              Pricing
            </a>
          </li>

          <li className='flex items-center gap-4 mt-4 pt-4'>
          <button className='rounded-full bg-[#3257ff] py-[7px] pl-5 pr-3 flex items-center gap-1 hover:bg-blue-600'>
              Start Now
              <ChevronRightIcon className='h-5 w-5' />
            </button>
            <button className='font-semibold'>Log in</button>
          </li>
        </ul>
      </div>
    </header>
  );
}