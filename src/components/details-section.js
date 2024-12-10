import React from 'react';
import PorscheFront from './porsche911Front';

export default function DetailsSection() {
    return (
        <div className="flex items-center space-y-8 bg-white px-32 py-20 w-full">
            {/* Aceleración */}
            <div className="flex flex-col gap-20 w-1/2">

                <div className="text-start">
                    <h2 className="text-7xl font-semibold">4,5<span className="text-xl">s</span></h2>
                    <p className="text-gray-500 text-lg">Aceleración 0–100 Km/h</p>
                </div>

                {/* Potencia */}
                <div className="text-start">
                    <h2 className="text-7xl font-bold">
                        290 <span className="text-2xl font-normal">kW  /</span> 394 <span className="text-2xl font-normal">CV</span>
                    </h2>
                    <p className="text-gray-500 text-lg">Potencia máxima motor de combustión<br />(KW)/Potencia máxima motor de combustión (CV)</p>
                </div>

                {/* Velocidad máxima */}
                <div className="text-start">
                    <h2 className="text-7xl font-bold">
                        295<span className="text-xl">km/h</span>
                    </h2>
                    <p className="text-gray-500 text-lg">Velocidad máxima</p>
                </div>
            </div>

            <div className="w-1/2 h-[600px] flex justify-center items-center relative z-50">
                {/* <PorscheFront /> */}
            </div>
        </div >
    );
}