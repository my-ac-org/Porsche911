import Image from "next/image";

export default function StatsSection() {
    return (
        <div className="w-[99vw] flex flex-col items-center justify-center text-black relative overflow-hidden bg-gray-100 pt-20 pb-12">
            <h1 className="text-[2.5rem] font-bold text-center max-w-[45rem] pb-20">We pride ourselves on being
                professional, efficient, and friendly</h1>
            <div className="w-full">
                {/* Data Grid */}
                <div className="flex flex-row justify-center items-center gap-[7rem] relative">
                    {/* Projects */}
                    <div className="data text-center relative animate-wave">
                        <Image
                            src="/icons/handshake.png"
                            alt="Handshake Icon"
                            width={300}
                            height={300}
                            className="absolute top-0 left-0 max-w-[60%] animate-wave h-32 w-32"
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Gradiente que va de opaco a transparente
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Para Safari
                            }}
                        />
                        <div className="number text-[6.5rem] font-thin mt-10 ml-4">200+</div>
                        <div className="relative text text-lg top-[-25px] left-[-70px]">Projects</div>
                    </div>

                    {/* Flights */}
                    <div className="data text-center relative animate-wave">
                        <Image
                            src="/icons/transport.png"
                            alt="Transport Icon"
                            width={300}
                            height={300}
                            className="absolute top-0 left-0 max-w-[60%] animate-wave h-32 w-32"
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Gradiente que va de opaco a transparente
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Para Safari
                            }}
                        />
                        <div className="number text-[6.5rem] font-thin mt-10 ml-6">5000+</div>
                        <div className="relative text text-lg top-[-25px] left-[-100px]">Flights</div>
                    </div>

                    {/* Years of Service */}
                    <div className="data text-center relative animate-wave">
                        <Image
                            src="/icons/mountain.png"
                            alt="Mountain Icon"
                            width={300}
                            height={300}
                            className="absolute top-0 left-0 max-w-[60%] animate-wave h-32 w-32"
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Gradiente que va de opaco a transparente
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Para Safari
                            }}
                        />
                        <div className="number text-[6.5rem] font-thin mt-10 ml-4">14+</div>
                        <div className="relative text text-lg top-[-25px]">Years of service</div>
                    </div>

                    {/* Continents */}
                    <div className="data text-center relative animate-wave">
                        <Image
                            src="/icons/globe.png"
                            alt="Globe Icon"
                            width={300}
                            height={300}
                            className="absolute top-0 left-0 animate-wave h-32 w-44"
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Gradiente que va de opaco a transparente
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)", // Para Safari
                            }}
                        />
                        <div className="number text-[6.5rem] font-thin mt-10">6</div>
                        <div className="relative text text-lg top-[-25px] text-justify">
                            Across all
                            <br />
                            six continents
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
