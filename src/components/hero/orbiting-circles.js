import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="absolute flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl z-0">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-[300px] font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Porsche
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={350}
      >
      </OrbitingCircles>

      {/*circulo con blur 
        <div className="absolute w-[700px] h-[700px] rounded-full bg-gray-100 bg-opacity-50 backdrop-blur-md"></div>
        */}

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={350}
      >
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={550}
        duration={20}
        reverse
      >
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={550}
        duration={20}
        delay={20}
        reverse
      >
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={750}
        duration={20}
        delay={20}
        reverse
      >
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={750}
        duration={20}
        delay={20}
        reverse
      >
      </OrbitingCircles>
    </div>
  );
}
