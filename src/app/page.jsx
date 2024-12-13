"use client"
import HeroPage from '../components/hero/page'
import AboutPage from '../components/about/page'

const Page = () => {

  return (
    <>
      <div className='relative h-screen w-full'>
        <HeroPage />
      </div>

      <div className='w-screen'>
        <AboutPage />
      </div>
    </>
  )
}

export default Page;
