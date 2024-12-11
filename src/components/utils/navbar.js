import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b-[1px] border-gray-200">
      <nav className="flex items-center justify-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold tracking-wide p-7">
          <Image src="/porsche-1-logo-png-transparent.png" alt="Porsche Logo" width={220} height={220} />
        </div>
      </nav>
    </header>
  );
}
