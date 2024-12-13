import React, { useRef, useState, useEffect } from 'react';
import Checkbox from '@/components/utils/playBtn';
import Image from 'next/image';

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // Estado inicial: video pausado
    const [isVisible, setIsVisible] = useState(false); // Estado para visibilidad del video

    useEffect(() => {
        // Intersection Observer para detectar visibilidad del video
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Cambia el estado si el video está visible
            },
            { threshold: 0.5 } // Se activa cuando al menos el 50% del video es visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        // Manejo de reproducción según la visibilidad
        if (videoRef.current) {
            if (isVisible) {
                if (isPlaying) {
                    videoRef.current.play();
                }
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVisible, isPlaying]);

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setIsPlaying(isChecked);
        if (videoRef.current) {
            if (isChecked && isVisible) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className='w-full flex justify-start items-center mt-20 mb-[400px] rounded-2xl relative'>
            {/* Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className='w-fit h-[40rem] rounded-2xl'
            >
                <source src="/video/videoPorsche911 (2).mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>

            <div className="absolute flex h-[53%] w-full items-center justify-start overflow-hidden z-0 left-32 top-[675px]">
                <span className="relative bottom-[0px] text-[230px] font-black text-black stalinist-one-regular">
                    911
                </span>
            </div>

            <Image src='/img/porsche-911-back.jpg' alt='Porsche 911' width={1920} height={1080} className='absolute top-96 right-0 w-[32rem] h-[39rem] object-contain rounded-3xl' />

            {/* Checkbox Button */}
            <div className='absolute bottom-8 left-8 bg-none p-7 rounded-[0.3rem] shadow-lg border-2 border-white'>
                <Checkbox onChange={handleCheckboxChange} checked={isPlaying} />
            </div>
        </div>
    );
};

export default VideoSection;
