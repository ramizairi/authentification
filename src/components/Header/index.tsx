import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='bg-black flex items-center pl-[70px] pt-[10px] pb-[10px]'>
        <Image src="/logo/logo.svg" alt="logo" width={50} height={50} />
        <h1 className='text-white text-2xl'><span className='text-[#fc7800] font-bold'>ODC</span>Events</h1>
    </header>
  )
}

export default Header
