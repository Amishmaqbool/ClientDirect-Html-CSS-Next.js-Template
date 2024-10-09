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

export default function Footer() {
    return (
        <>
            
            <Panel/>
            <div className='bg-[#101726] relative'>
                <div className='max-w-[1216px] mx-auto pb-16 pt-[348px] flex justify-between gap-32'>
                    <div className='flex flex-col'>
                        <div>
                            <Image
                                src='https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/642bbbd140c74505628ceb96_Logo.svg'
                                height={35}
                                width={125}
                                alt='Logo'
                            />
                        </div>

                       
                        <div className='flex items-center -space-x-4 my-[18px]'>
                            <Image src={highPerformerSummer} width={68} height={88.25} loading="lazy" alt="High Performer Summer"  className='z-10'/>
                            <Image src={momentumLeader} loading="lazy" alt="Momentum Leader" width={68} height={88.25 }/>
                            <Image src={highPerformerBussiness} loading="lazy" alt="Momentum Leader" width={68} height={88.25} className='z-40'/>                       
                            <Image src={highPerformerAsia} loading="lazy" alt="Asia Pacific High Performer" width={68} height={88.25} className='z-30'/>
                            <Image src={highPerformerEmea} loading="lazy" alt="EMEA High Performer" width={68} height={88.25} className='z-20'/>
                            <Image src={highPerformerUk} loading="lazy" alt="United Kingdom High Performer" width={68} height={88.25} className='z-10' />
                        </div>
                        
                        <div>
                            <button className='bg-[#ffffff1a] text-sm text-white px-[14px] py-[7px] rounded-full hover:bg-gray-600 flex items-center'>
                                Start 14-Day Free Trial
                            <Image src={arrow} alt='arrow' width={20} height={21} className='ml-2'/>
           
                            </button>
                        </div>
                    </div>

                    
                    <div className='grid grid-cols-4 gap-x-5 text-white text-sm'>
                        <div>
                            <p className='font-semibold mb-4 text-[#667085]'>Product</p>
                            <ul className='space-y-3'>
                                <li>Visitor Identification</li>
                                <li>Google Analytics Enrichment</li>
                                <li>Real-Time API</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-semibold mb-4 text-[#667085]'>Solutions</p>
                            <ul className='space-y-3'>
                                <li>For Sales</li>
                                <li>For Marketing</li>
                                <li>For Agencies</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-semibold mb-4 text-[#667085]'>Resources</p>
                            <ul className='space-y-3'>
                                <li>Help Center</li>
                                <li>Customer Stories</li>
                                <li>FAQ</li>
                                <li>Affiliate Program</li>
                                <li>Snitcher&apos;s Guide for B2B Lead Generation</li>
                                <li>B2B Marketing Blueprint</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-semibold mb-4 text-[#667085]'>Legal</p>
                            <ul className='space-y-3'>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-700 mt-10'></div>
                <div className='max-w-[1216px] mx-auto py-8 flex justify-between items-center text-gray-400 text-sm'>
                    <p>© Copyright 2015-2024 Snitcher B.V., all rights reserved.</p>
                    <div className='flex space-x-4'>
                        <a href="#">
                            <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
