"use client"
import Image from 'next/image'
import PorscheWithBackground from '../components/Porsche911'

const Page = () => {

  return (
    <>
      <div className='relative h-screen w-screen'>
        <PorscheWithBackground />
      </div>

      <div className="relative flex flex-col items-center justify-start min-h-screen bg-white px-16 pt-16" style={{ borderTop: '7px solid', borderImage: 'linear-gradient(to right, #000000 50%, #B12B28 50% ) 1' }}>

        <header className='flex justify-start items-start w-full h-full'>

          <div className='px-8 mb-10'>
            <Image src="/PorscheLogo.png" alt="Skykapital" width={200} height={200} />
          </div>

          {/* Sección de encabezado */}
          <div className="flex justify-end mb-10 w-full px-16">
            <h1 className="text-[3.9rem] font-600 leading-[1.1] text-start">
              Excellence. Innovation. <br />
              Integrity.
            </h1>
          </div>
        </header>

        {/* Línea divisoria */}
        <hr className="border-t border-black w-full mb-10" />

        {/* Sección de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Primer bloque */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">
              Achieving our clients&apos; goals is a top priority, and we strive for
              their success.
            </p>
          </div>

          {/* Segundo bloque */}
          <div className="text-center md:text-left">
            <p>
              Skykapital® is a bespoke financial services company committed to
              setting new standards of excellence in the industry, through
              cutting-edge expertise.
            </p>
          </div>

          {/* Tercer bloque */}
          <div className="text-center md:text-left">
            <p>
              Based on principles of innovation and integrity.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
