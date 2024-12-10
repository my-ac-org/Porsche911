import Image from 'next/image';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <header className='flex justify-start items-start w-full h-full'>

                <div className='px-8 mb-10'>
                    <Image src="/PorscheLogo.png" alt="Porsche Logo" width={200} height={200} />
                </div>

                {/* Sección de encabezado */}
                <div className="flex justify-end mb-10 w-full px-16">
                    <h1 className="text-[4rem] font-600 leading-[1.1] text-start">
                        Precision. Passion. <br />
                        Porsche 911.
                    </h1>
                </div>
            </header>

            <hr className="border-t border-black w-full mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mb-20">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-lg">
                        The Porsche 911 is an icon of automotive engineering, built to deliver
                        unmatched driving performance.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <p>
                        With over 60 years of innovation, the 911 continues to set the standard
                        for sports cars, blending luxury, power, and timeless design.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <p>
                        Designed for those who demand excellence, the 911 embodies the spirit of
                        speed and precision.
                    </p>
                </div>
            </div>
        </>
    );
};

export default HeaderSection;
