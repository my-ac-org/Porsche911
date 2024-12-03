"use client"
import PorscheWithBackground from '../components/hero/Porsche911'
import ImageContent from '../components/image-content'
import HeaderSection from '../components/header-section'
import DefyingReality from '../components/defying-reality'
import StatsSection from '../components/stats-section'

const Page = () => {

  return (
    <>
      <div className='relative h-screen w-[99vw]'>
        <PorscheWithBackground />
      </div>

      <div className="relative flex flex-col items-center justify-start min-h-screen bg-white px-16 pt-16" style={{ borderTop: '7px solid', borderImage: 'linear-gradient(to right, #000000 50%, #B12B28 50% ) 1' }}>
        <HeaderSection />
        <ImageContent />
        <StatsSection />
        <DefyingReality />
      </div>
    </>
  )
}

export default Page
