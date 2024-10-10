import React from 'react';

export default function Button({
    bgColor = 'bg-customBlue',
    textColor = 'text-white', 
    borderRadius = 'rounded-[100px]',
    showChevron = false,
    chevronColor = 'text-white',
    buttonText = 'Try Snitcher for free' 
}) {
    return (
        <button
            className={`${bgColor} ${textColor} flex justify-center px-[17px] py-[9px] text-base leading-6 ${borderRadius} items-center`}
        >
            {buttonText}
            {showChevron && (
                <span className={`ml-2 ${chevronColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
            )}
        </button>
    );
}
