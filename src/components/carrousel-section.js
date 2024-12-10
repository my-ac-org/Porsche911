import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CarrouselSection = () => {
  return (
    <div className="w-full my-20">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.swiper-pagination', // Asigna un contenedor de pagination
        }}
        spaceBetween={30} // Espacio entre slides
        slidesPerView={2} // Muestra 2 slides a la vez
        className="relative cursor-grab rounded-xl"
      >
        <SwiperSlide className='min-w-[50rem]'>
          <div
            className="relative flex items-end justify-start p-6 text-white h-[38rem] bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/porsche/Porsche911gt3rs.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">«T» de Touring.</h3>
              <p className="mt-2 text-base text-gray-300">
                Más ligero, más deportivo y con cambio manual: el 911 Carrera T garantiza aún más
                agilidad, dinamismo y emociones sin límites, especialmente por carreteras de montaña
                y rurales.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-[24rem]'>
          <div
            className="relative flex items-end justify-start p-6 text-white h-[38rem] bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/porsche/Porsche911gt3interior.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">Interior.</h3>
              <p className="mt-2 text-base text-gray-300">
                El interior del 911 Carrera T está equipado con un volante deportivo GT, asientos deportivos
                adaptativos con 4 ajustes eléctricos y paquete de memoria, así como un sistema de sonido BOSE®
                Surround Sound System.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='min-w-[45rem]'>
          <div
            className="relative flex items-end justify-start p-6 text-white h-[38rem] bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/porsche/Porsche911gt3rueda.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">Llantas.</h3>
              <p className="mt-2 text-base text-gray-300">
                Las llantas Carrera S de 20/21 pulgadas tienen un acabado pulido y están pintadas en
                Azul Gentian Metalizado como protagonista.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='min-w-[45rem]'>
          <div
            className="relative flex items-end justify-start p-6 text-white h-[38rem] bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/porsche/Porsche911gt3detalles.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">Detalles.</h3>
              <p className="mt-2 text-base text-gray-300">
                El 911 Carrera T subraya su carácter especial desde cualquier perspectiva con otros detalles llamativos
                en color Gris Vanadium Metalizado o, si se desea, en color Azul Gentian Metalizado como parte del paquete
                exterior para el Carrera T.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='min-w-[45rem]'>
          <div
            className="relative flex items-end justify-start p-6 text-white h-[38rem] bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/porsche/Porsche911gt3comodidad.jpeg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold">Comodidad.</h3>
              <p className="mt-2 text-base text-gray-300">
                El 911 Carrera T está equipado con asientos deportivos adaptativos con 4 ajustes eléctricos y paquete de memoria,
                así como un sistema de sonido BOSE® Surround Sound System.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Contenedor del Pagination */}
      <div className="swiper-pagination !mt-4"></div>
    </div >
  );
};

export default CarrouselSection;
