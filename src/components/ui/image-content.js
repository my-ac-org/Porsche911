import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image"; // Importamos el componente Image de Next.js

const images = Array.from({ length: 6 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  // Cambiar la ruta a las imágenes en la carpeta public/img/carrousel
  return {
    src: `/img/carrousel/image${i + 1}.jpg`, // Asegúrate de que los archivos estén correctamente nombrados
    width: width,
    height: height
  };
});

export default function ImageContent() {
  return (
    <section id="photos" className="py-20 p-10">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((image, idx) => (
          <BlurFade key={image.src} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={image.src}
              alt={`Random stock image ${idx + 1}`}
              width={image.width}
              height={image.height}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
