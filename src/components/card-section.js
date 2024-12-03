import Image from 'next/image';

const CarShowcase = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white h-full w-full mt-10 py-10">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left p-2 md:w-1/2">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/img/porsche-911-interior.jpg"
            alt="Porsche 911 interior"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mt-4">
          Perfection, inside and out.
        </h2>
        <p className="text-gray-600 mt-2">
          Step into the Porsche 911 and experience the seamless blend of luxury,
          cutting-edge technology, and unmatched comfort.
        </p>
        <button className="mt-4 px-6 py-2 text-xs bg-white text-black rounded-full border border-black hover:bg-black hover:text-white transition">
          Build Your Porsche 911
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left p-2 md:w-1/2">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/img/porsche-911-back.jpg"
            alt="Porsche 911 rear view"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mt-4">Designed to impress.</h2>
        <p className="text-gray-600 mt-2">
          From its iconic silhouette to its outstanding performance, the Porsche 911
          is crafted to captivate both drivers and onlookers alike.
        </p>
        <button className="mt-4 px-6 py-2 text-xs bg-white text-black rounded-full border border-black hover:bg-black hover:text-white transition">
          Explore Available Models
        </button>
      </div>
    </div>
  );
};

export default CarShowcase;
