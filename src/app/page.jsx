"use client"
import HeroPage from '../components/hero/page'
import AboutPage from '../components/about/page'

const Page = () => {

  return (
    <>
      <div className='relative h-screen w-[99vw]'>
        <HeroPage />
      </div>

      <div>
        <AboutPage />
      </div>
    </>
  )
}

export default Page;
