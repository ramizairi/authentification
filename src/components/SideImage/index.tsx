import React from "react";
import Image from "next/image";

function SideImage() {
  return (
    <div className="hidden md:flex w-full md:w-1/2 min-h-screen items-center justify-center bg-white">
      <div className="relative w-full h-screen max-h-[600px] flex items-center justify-center">
        <Image
          src="/images/side-image.svg"
          alt="logo"
          fill  
          className="object-contain p-8"
          priority
        />
      </div>
    </div>
  );
}

export default SideImage;
