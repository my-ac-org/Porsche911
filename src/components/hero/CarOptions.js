import { useState } from "react";

export default function CarOptions() {
  const [active, setActive] = useState("GT"); // GT está seleccionado por defecto

  const options = ["Coupé", "Cabriolet", "Targa", "GT"];

  return (
    <div className="relative top-[200px] h-full w-full flex items-center justify-center z-0">
      {options.map((option) => (
        <span
          key={option}
          className={`text-black text-base p-1 ml-4 cursor-pointer ${
            active === option ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActive(option)}
        >
          {option}
        </span>
      ))}
    </div>
  );
}
