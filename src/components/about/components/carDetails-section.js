import React from "react";
import { FaGasPump } from "react-icons/fa";
import { BsCloudFog2 } from "react-icons/bs"; // Ícono de CO2
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const CarDetails = () => {
  return (
    <>
      <div className="flex flex-col px-20 py-8 bg-gray-100 w-[99vw]">
        {/* Encabezado */}
        <div className="p-4 pb-0">
          <h1 className="text-4xl font-extrabold mb-2">911 GT3 RS</h1>
        </div>

        {/* Grid de especificaciones */}
        <div className="flex gap-2 mb-8 w-full items-center">
          {/* Bloques individuales */}
          <SpecCard title="Desde EUR 286.470,00 PVP Recomendado" value="Precio" />
          <div className="w-px h-24 bg-gray-200"></div>

          <SpecCard title="386 kW / 525 CV" value="Potencia Máxima" />
          <div className="w-px h-24 bg-gray-200"></div>

          <SpecCard title="3,2 s" value="Aceleración 0-100 km/h" />
          <div className="w-px h-24 bg-gray-200"></div>

          <SpecCard title="296 km/h" value="Velocidad Máxima" />
          <div className="w-px h-24 bg-gray-200"></div>

          {/* Ícono con consumo de combustible */}
          <SpecCard
            icon={<FaGasPump size={20} className="fill-black" />}
            title="13,2"
            value="l/100 km"
          />
          <div className="w-px h-24 bg-gray-200"></div>

          {/* Ícono con emisiones de CO2 */}
          <SpecCard
            icon={<BsCloudFog2 size={20} className="fill-black" />}
            title="299"
            value="g/km"
          />
        </div>
      </div>

      <div className="flex px-10 py-16 bg-white w-full">
        <div className="flex flex-col w-1/2">
          <h2 className="text-4xl font-extrabold mb-2">Datos Técnicos</h2>
          <hr className="w-full h-[1px] bg-gray-300 my-4" />

          {/* Accordion para Unidad de Potencia */}
          <Accordion type="single" collapsible>

            {/* Unidad de Potencia */}
            <AccordionItem value="unidad-potencia">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Unidad de Potencia</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Número de cilindros</p>
                  <p className="text-black font-bold text-xl ml-auto">6 Ud/Uds.</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Calibre</p>
                  <p className="text-black font-bold text-xl ml-auto">102,0 mm</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Carrera</p>
                  <p className="text-black font-bold text-xl ml-auto">81,5 mm</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Cilindrada</p>
                  <p className="text-black font-bold text-xl ml-auto">3.996 cm³</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Potencia máxima motor de combustión (KW)</p>
                  <p className="text-black font-bold text-xl ml-auto">386 kW</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Potencia máxima motor de combustión (CV)</p>
                  <p className="text-black font-bold text-xl ml-auto">525 CV</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Revoluciones por minuto (velocidad máxima del motor)</p>
                  <p className="text-black font-bold text-xl ml-auto">9.000 r/min</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Par máximo</p>
                  <p className="text-black font-bold text-xl ml-auto">465 Nm</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Máximo potencia por litro (kW/l)</p>
                  <p className="text-black font-bold text-xl ml-auto">96,00 kW/l</p>
                </div>
                <hr className="w-full bg-gray-300 my-4" />

                <div className="flex">
                  <p className="text-gray-500 text-base">Máxima potencia por litro (CV/l)</p>
                  <p className="text-black font-bold text-xl ml-auto">131,00 CV/l</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Prestaciones */}
            <AccordionItem value="prestaciones">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Prestaciones</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Velocidad Máxima</p>
                  <p className="text-black font-bold text-xl">296 km/h</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Aceleración 0-100 km/h</p>
                  <p className="text-black font-bold text-xl">3,2 s</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Aceleración 0-160 Km/h</p>
                  <p className="text-black font-bold text-xl">6,9 s</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Aceleración 0-200 Km/h</p>
                  <p className="text-black font-bold text-xl">10,6 s</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Recuperación en marcha 80-120km/h</p>
                  <p className="text-black font-bold text-xl">1,8 s</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Características Todoterreno */}
            <AccordionItem value="caracteristicas-todoterreno">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Características todoterreno</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Ángulo de ataque, delantero / trasero - suspensión de acero</p>
                  <p className="text-black font-bold text-xl">6,2 - 9,8 °</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Ángulo ventral - suspensión de acero</p>
                  <p className="text-black font-bold text-xl">10,6 °</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Altura máxima al suelo - suspensión de acero</p>
                  <p className="text-black font-bold text-xl">100 mm</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Carrocería */}
            <AccordionItem value="carroceria">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Carrocería</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Longitud</p>
                  <p className="text-black font-bold text-xl">4.572 mm</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Anchura (con retrovisores abatidos)</p>
                  <p className="text-black font-bold text-xl">1.900 mm</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Anchura (con retrovisores extendidos)</p>
                  <p className="text-black font-bold text-xl">2.027 mm</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Altura</p>
                  <p className="text-black font-bold text-xl">1.322 mm</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Batalla</p>
                  <p className="text-black font-bold text-xl">2.457 mm</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Diámetro de giro</p>
                  <p className="text-black font-bold text-xl">10,5 m</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Tara según DIN</p>
                  <p className="text-black font-bold text-xl">1.450 kg</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Tara según Directiva Unión Europea</p>
                  <p className="text-black font-bold text-xl">1.525 kg</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Peso máximo autorizado</p>
                  <p className="text-black font-bold text-xl">1.795 kg</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Carga máxima</p>
                  <p className="text-black font-bold text-xl">345 kg</p>
                </div>

              </AccordionContent>
            </AccordionItem>

            {/* Consumos y emisiones */}
            <AccordionItem value="consumos-emisiones">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Consumos y emisiones (WLTP)</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Consumo de combustible bajo - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">20,6 - 20,6 l/100 km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Consumo de combustible medio - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">12,4 - 12,4 l/100 km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Consumo de combustible alto - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">11,4 - 11,4 l/100 km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Consumo de combustible muy alto - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">12,4 - 12,4 l/100 km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Consumo de combustible combinado - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">13,2 - 13,2 l/100 km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Emisiones CO2 bajo - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">468 - 468 g/km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Emisiones CO2 medio - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">281 - 281 g/km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Emisiones CO2 alto - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">258 - 258 g/km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Emisiones CO2 muy alto - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">282 - 282 g/km</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo)</p>
                  <p className="text-black font-bold text-xl">299 - 299 g/km</p>
                </div>

              </AccordionContent>
            </AccordionItem>

            {/* Nivel sonoro */}
            <AccordionItem value="nivel-sonoro">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Nivel sonoro (Reglamento UN-R 51)</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Nivel sonoro del vehículo parado</p>
                  <p className="text-black font-bold text-xl">97 dB(A)</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Nivel sonoro del vehículo parado (rpm)</p>
                  <p className="text-black font-bold text-xl">3.658 1/min</p>
                </div>
                <hr className="my-4" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">Nivel sonoro del vehículo en movimiento</p>
                  <p className="text-black font-bold text-xl">72 dB(A)</p>
                </div>

              </AccordionContent>
            </AccordionItem>

            {/* Precio */}
            <AccordionItem value="precio">
              <AccordionTrigger>
                <h3 className="text-2xl font-bold">Precio</h3>
              </AccordionTrigger>
              <AccordionContent>
                <hr className="w-full h-[1px] bg-gray-300 mb-8" />

                <div className="flex justify-between">
                  <p className="text-gray-500 text-base">PVP Recomendado</p>
                  <p className="text-black font-bold text-xl">EUR 286.470,00</p>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        <div className="relative flex w-1/2 justify-center">
          <div className="relative flex w-1/2">
            <div className="sticky top-0 flex items-start justify-center h-full">
              <Image
                src="/Porsche 911 Flatnose Coupe.jpg"
                alt="Car Details"
                width={325}
                height={200}
                className="relative left-20"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

// Componente de especificación individual con ícono opcional
const SpecCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-3 p-4">
      {icon && (
        <div className="border-[1px] border-black rounded-full p-3 h-fit">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <h4 className="text-black text-lg font-bold mb-1">{title}</h4>
        <p className="text-gray-500 text-xs">{value}</p>
      </div>
    </div>
  );
};

export default CarDetails;


