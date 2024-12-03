"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollSection() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById("scroll-section");
            if (!container) return;

            const containerTop = container.getBoundingClientRect().top;
            const containerHeight = container.offsetHeight;
            const windowHeight = window.innerHeight;

            // Esperar hasta que la imagen esté completamente visible
            const triggerPoint = containerHeight - windowHeight;
            const progress = containerTop < 0
                ? Math.min(Math.max((-containerTop) / triggerPoint, 0), 1)
                : 0;

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id="scroll-section"
            className="relative h-[200vh] w-full bg-gray-200 overflow-hidden mt-20"
        >
            {/* Contenedor que incluye la imagen y el texto */}
            <div className="sticky top-0 w-full h-[100vh] flex">
                {/* Imagen */}
                <div
                    className="h-full transition-all duration-600"
                    style={{
                        width: `${100 - scrollProgress * 50}vw`, // Cambia ancho dinámicamente
                    }}
                >
                    <Image
                        src="/img/pexels-josh-16461374.jpg"
                        alt="scroll down"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Contenedor de texto */}
                <div
                    className="h-full bg-white flex items-center justify-center transition-all duration-600 z-50"
                    style={{
                        width: `${scrollProgress * 50}vw`, // Cambia ancho dinámicamente
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold text-black">Scroll Down</h1>
                        <div className="w-6 h-6 mt-4 border-2 border-black rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
