import React from "react";
import HeaderSection from "./components/header-section";
import DetailsSection from "./components/details-section";
import CarrouselSection from "./components/carrousel-section";
import VideoSection from "./components/video-section";

const AboutPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-start min-h-screen bg-white px-16 pt-16" style={{ borderTop: '7px solid', borderImage: 'linear-gradient(to right, #000000 50%, #B12B28 50% ) 1' }}>
            <HeaderSection />
            <DetailsSection />
            <VideoSection />
            <CarrouselSection />
        </div>
    );
}

export default AboutPage;