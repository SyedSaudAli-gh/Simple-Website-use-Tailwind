import React from 'react'
import Image from 'next/image'

function Gallery() {
  const images = [
    { src: '/image/g-1.jpg', alt: 'gallery 1', width: 1000, height: 1000 },
    { src: '/image/g-2.jpg', alt: 'gallery 2', width: 1000, height: 1000 },
    { src: '/image/g-3.jpg', alt: 'gallery 3', width: 1000, height: 1000 },
    { src: '/image/g-4.jpg', alt: 'gallery 4', width: 1000, height: 1000 },
    { src: '/image/g-5.jpg', alt: 'gallery 5', width: 1000, height: 1000 },
    { src: '/image/g-6.jpg', alt: 'gallery 6', width: 1000, height: 1000 },
    { src: '/image/g-7.jpg', alt: 'gallery 7', width: 1000, height: 1000 },
    { src: '/image/g-9.jpg', alt: 'gallery 9', width: 1000, height: 1000 },
  ];

  return (
    <>
      <h1 className='font-bold text-[#a22a2a90] uppercase [text-shadow:2px_2px_4px_rgba(255,_255,_255,_0.199)] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-[50px]'>
        <span className='text-6xl text-white'>G</span>allery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] p-[20px] m-[10px]">
        {images.map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-[10px] [box-shadow:0_4px_6px_rgba(255,_255,_255,_0.5)] [transition:transform_0.3s_ease] hover:scale-105">
            <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className='object-cover w-full h-full rounded-[10px]' />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
