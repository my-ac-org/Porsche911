"use client"
import PorscheWithBackground from '../components/hero/Porsche911'
import HeaderSection from '../components/header-section'
import Navbar from '../components/navbar'
import CarrouselSection from '../components/carrousel-section'
import DetailsSection from '../components/details-section'

const Page = () => {

  return (
    <>
      <div className='relative h-screen w-[99vw]'>
        <Navbar />
        <PorscheWithBackground />
      </div>

      <div className="relative flex flex-col items-center justify-start min-h-screen bg-white px-16 pt-16" style={{ borderTop: '7px solid', borderImage: 'linear-gradient(to right, #000000 50%, #B12B28 50% ) 1' }}>
        <HeaderSection />
        <DetailsSection />
        <CarrouselSection />
      </div>
    </>
  )
}

export default Page
