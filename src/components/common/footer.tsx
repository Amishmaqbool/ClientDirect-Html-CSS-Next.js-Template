import React from 'react';
import Image from 'next/image';
import Panel from '../panel'
import arrow from '../../assets/svgs/arrow.svg'
import highPerformerSummer from '../../assets/svgs/high-performer-summer.svg'
import momentumLeader from '../../assets/svgs/momentum-leader.svg'
import highPerformerBussiness from '../../assets/svgs/high-performer-small-bussiness.svg'
import highPerformerAsia from '../../assets/svgs/high-performer-asia.svg'
import highPerformerEmea from '../../assets/svgs/high-performer-emea.svg'
import highPerformerUk from '../../assets/svgs/high-performer-uk.svg'
import LinkedinIcon from '@/assets/svgs/linkedin-icon.svg';
import logo from '../../assets/svgs/logo.svg'

export default function Footer() {
    return (
        <div>
            {/* bottom-[-293px] */}
            {/* pt-[343.3px] */}
            <div className='bg-[#101726] relative '>            
            <div className='-mb-[132px] -top-[185px] right-0 left-0 relative max-md:-mb-[120px]'>
            <Panel/>
            </div>
                <div className='max-w-[1216px] max-xl:px-10 max-xl:mx-0 mx-auto pb-[88px] mt-[10px] flex justify-between gap-[130px] max-xl:gap-0 max-md:gap-16 max-xl:grid max-xl:grid-cols-2 max-md:flex-col max-md:items-center max-md:px-4 max-md:mt-0 max-sm:items-start'>
                    {/* max-xl:w-[73.3vw] */}
                    <div className='flex flex-col max-md:items-center max-sm:self-center'>
                        <div>
                            <Image
                                src={logo}
                                height={35}
                                width={125}
                                alt='Logo'
                            />
                        </div>
                        <div className='flex items-center -space-x-4 my-[18px] max-md:ml-[15px] max-xs:space-x-0 max-xs:grid max-xs:grid-cols-4 max-xs:ml-0' >
                            <Image src={highPerformerSummer} width={68} height={88.25} loading="lazy" alt="High Performer Summer"  className='z-10 max-xs:w-[23.33vw]'/>
                            <Image src={momentumLeader} loading="lazy" alt="Momentum Leader" width={68} height={88.25 } className='max-xs:w-[23.33vw]'/>
                            <Image src={highPerformerBussiness} loading="lazy" alt="Momentum Leader" width={68} height={88.25} className='z-40 max-xs:w-[23.33vw]'/>                       
                            <Image src={highPerformerAsia} loading="lazy" alt="Asia Pacific High Performer" width={68} height={88.25} className='z-30 max-xs:w-[23.33vw]'/>
                            <Image src={highPerformerEmea} loading="lazy" alt="EMEA High Performer" width={68} height={88.25} className='z-20 max-xs:w-[23.33vw]'/>
                            <Image src={highPerformerUk} loading="lazy" alt="United Kingdom High Performer" width={68} height={88.25} className='z-10 max-xs:w-[23.33vw]'/>
                        </div>
                        
                        <div>
                            <button className='bg-[#ffffff1a] text-sm text-white px-[14px] py-[7px] rounded-full hover:bg-gray-600 flex items-center'>
                    <p className='-mb-[2px]'>
                  Start 14-Day Free Trial
                  </p>
                            {/* <Image src={arrow} alt='arrow' width={20} height={21} className='ml-2'/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none" className="ml-2 h-[21px] w-5">
              <path 
                d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" 
                stroke="white" 
                strokeWidth="1.66667" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              ></path>
            </svg>
                            </button>
                        </div>
                    </div>
                    {/* gap-x-5 */}
                    <div className='grid grid-cols-4 text-white text-sm gap-5 max-md:gap-0 max-sm:grid-cols-1 max-s'>
                        <div className='max-md:pl-5'>
                            <p className='font-semibold mb-4 text-[#667085]'>Product</p>
                            <ul className='space-y-3'>
                                <li className='cursor-pointer tracking-[0.1px]'>Visitor Identification</li>
                                <li className='cursor-pointer tracking-[0.1px]'>Google Analytics enrichment</li>
                                <li className='cursor-pointer tracking-[0.1px]'>Real-Time API</li>
                            </ul>
                        </div>
                        <div className='max-md:pl-5'>
                            <p className='font-semibold mb-4 text-[#667085]'>Solutions</p>
                            <ul className='space-y-3'>
                                <li className='cursor-pointer tracking-[0.1px]'>For Sales</li>
                                <li className='cursor-pointer tracking-[0.1px]'>For Marketing</li>
                                <li className='cursor-pointer tracking-[0.1px]'>For Agencies</li>
                            </ul>
                        </div>
                        <div className='max-md:pl-5'>
                            <p className='font-semibold mb-4 text-[#667085]'>Resources</p>
                            <ul className='space-y-3'>
                                <li className='cursor-pointer tracking-[0.1px]'>Help Center</li>
                                <li className='cursor-pointer tracking-[0.1px]'>Customer Stories</li>
                                <li className='cursor-pointer tracking-[0.1px]'>FAQ</li>
                                <li className='cursor-pointer tracking-[0.1px]'>Affiliate Program</li>
                                <li className='cursor-pointer tracking-[0.1px]'>Snitcher&apos;s guide for B2B Lead Generation</li>
                                <li className='cursor-pointer'>B2B Marketing Blueprint</li>
                            </ul>
                        </div>
                        <div className='max-md:pl-5'>
                            <p className='font-semibold mb-4 text-[#667085]'>Legal</p>
                            <ul className='space-y-3'>
                                <li className='cursor-pointer '>Terms & Conditions</li>
                                <li className='cursor-pointer'>Privacy Policy</li>
                                <li className='cursor-pointer'>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1216px] mx-auto h-[1px] bg-[#ffffff1a]'></div>
                <div className='max-w-[1216px] mx-auto pb-[48px] pt-8 flex justify-between items-center max-md:px-4 text-sm max-xs:flex-col max-xs:gap-4 max-xs:text-center'>
                    <p className='text-[#eaecf0]'>© Copyright 2015-2024 Snitcher B.V., all rights reserved.</p>
                    <div className='flex space-x-4'>
                        <a href="#">
                            <Image src={LinkedinIcon} alt="LinkedIn" width={18} height={19} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
