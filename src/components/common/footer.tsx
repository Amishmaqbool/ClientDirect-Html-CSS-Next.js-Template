import React from 'react';
import Image from 'next/image';
import LinkedinIcon from '@/assets/svgs/linkedin-icon.svg';

export default function Footer() {
    return (
        <>
            {/* Hero CTA Section */}
            <div className="relative max-w-[1200px] -mt-28 mx-auto z-10 bg-[#3257ff] rounded-tl-[40px] rounded-tr-[40px] py-20 text-center text-white">
                <div className="max-w-[1000px] mx-auto px-10">
                    {/* Hero Title */}
                    <h2 className="text-4xl font-bold mb-6">
                        Still waiting for conversions? your competitors aren't...
                    </h2>

                    {/* Hero Subtitle */}
                    <p className="text-lg mb-8">
                        Your target audiences are comparing providers, beat the competition to the sale by identifying and capturing them first.
                    </p>

                    {/* Call to Action Button */}
                    <a href="https://app.snitcher.com/register?ref=https%3A%2F%2Fwww.upwork.com%2F" className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900">
                        Try Snitcher For Free
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="ml-2">
                            <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>

                {/* Subtle Noise Background */}
                <div className="absolute inset-0 opacity-10 bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/641c3ad…_noiseBig.png)' }}></div>

                {/* Left & Right Gradient Decorations */}
                {/* <div className="absolute inset-0 pointer-events-none">
                    <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b358b3c13567346b27e54_footer-cta-left.svg" alt="left-gradient" className="absolute left-0 top-0 h-full" />
                    <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b358b3c1356500db27e55_footer-cta-right.svg" alt="right-gradient" className="absolute right-0 top-0 h-full" />
                </div> */}
            </div>

            <div className='bg-[#101726] relative'>
                <div className='max-w-[1280px] mx-auto py-16 flex justify-between'>
                    <div className='flex flex-col'>
                        <div className="mb-8">
                            <Image
                                src='https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/642bbbd140c74505628ceb96_Logo.svg'
                                height={35}
                                width={125}
                                alt='Logo'
                            />
                        </div>

                        <div className='flex items-center -space-x-4'>
                            <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/66845660515aa16c5fcddf46_VisitorIdentification_HighPerformer_HighPerformer.svg" loading="lazy" alt="High Performer" className='w-10' />
                            <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/66845660709edcc788d6b1cd_VisitorIdentification_MomentumLeader_Leader.svg" loading="lazy" alt="Momentum Leader" className='w-10' />
                            <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/66845660789e365f73030160_VisitorIdentification_HighPerformer_Small-Business_HighPerformer.svg" loading="lazy" alt="Small Business High Performer" className='w-10' />
                            <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/668456606e129bc9b6447acc_VisitorIdentification_HighPerformer_AsiaPacific_HighPerformer.svg" loading="lazy" alt="Asia Pacific High Performer" className='w-10' />
                            <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/668456601848d5010313554f_VisitorIdentification_HighPerformer_EMEA_HighPerformer.svg" loading="lazy" alt="EMEA High Performer" className='w-10' />
                            <img src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/66845660045be54d86f0f94a_VisitorIdentification_HighPerformer_UnitedKingdom_HighPerformer.svg" loading="lazy" alt="United Kingdom High Performer" className='w-10' />
                        </div>

                        {/* CTA Button */}
                        <div className='mt-8'>
                            <button className='bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 flex items-center'>
                                Start 14-Day Free Trial
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v3H5a1 1 0 000 2h4v3a1 1 0 102 0V9h4a1 1 0 100-2h-4V4a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Section: Navigation Links */}
                    <div className='grid grid-cols-4 gap-x-12 text-white'>
                        <div>
                            <p className='font-semibold mb-4'>Product</p>
                            <ul className='space-y-2'>
                                <li>Visitor Identification</li>
                                <li>Google Analytics Enrichment</li>
                                <li>Real-Time API</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-semibold mb-4'>Solutions</p>
                            <ul className='space-y-2'>
                                <li>For Sales</li>
                                <li>For Marketing</li>
                                <li>For Agencies</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-semibold mb-4'>Resources</p>
                            <ul className='space-y-2'>
                                <li>Help Center</li>
                                <li>Customer Stories</li>
                                <li>FAQ</li>
                                <li>Affiliate Program</li>
                                <li>Snitcher&apos;s Guide</li>
                                <li>B2B Marketing Blueprint</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-semibold mb-4'>Legal</p>
                            <ul className='space-y-2'>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-700 mt-10'></div>
                <div className='max-w-[1280px] mx-auto py-8 flex justify-between items-center text-gray-400 text-sm'>
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
