'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BusFront } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { useRef } from 'react';

export default function Home() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className='relative w-full h-121'>
            <Image src='/banner/banner01.png' alt="banner01" className='object-cover object-left' fill priority={true}></Image>
          </CarouselItem>
          <CarouselItem className='relative w-full h-121'>
            <Image src='/banner/banner02.png' alt="banner02" className='object-cover object-left' fill priority={true}></Image>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 p-5 gap-5'>
        <Link href='/' className='py-9 bg-white rounded-lg flex flex-col items-center justify-center'>
          <BusFront width={50} height={50} className='mb-2.5' />
          <h3 className='mb-1.5'>台北市/新北市</h3>
          <p className='text-xs'>Taipei/New Taipei</p>
        </Link>
        <Link href='/' className='py-9 bg-white rounded-lg flex flex-col items-center justify-center text-[#3591C5]'>
          <BusFront width={50} height={50} className='mb-2.5' />
          <h3 className='mb-1.5'>桃園市</h3>
          <p className='text-xs'>Taoyuan</p>
        </Link>
        <Link href='/' className='py-9 bg-white rounded-lg flex flex-col items-center justify-center text-[#D08181]'>
          <BusFront width={50} height={50} className='mb-2.5' />
          <h3 className='mb-1.5'>台中市</h3>
          <p className='text-xs'>Taichung</p>
        </Link>
        <Link href='/' className='py-9 bg-white rounded-lg flex flex-col items-center justify-center text-[#7FC0C5]'>
          <BusFront width={50} height={50} className='mb-2.5' />
          <h3 className='mb-1.5'>台南市</h3>
          <p className='text-xs'>Tainan</p>
        </Link>
        <Link href='/' className='py-9 bg-white rounded-lg flex flex-col items-center justify-center text-[#5E9BAE]'>
          <BusFront width={50} height={50} className='mb-2.5' />
          <h3 className='mb-1.5'>高雄市</h3>
          <p className='text-xs'>Kaohsiung</p>
        </Link>
        <Link href='/' className='py-9 bg-white rounded-lg flex flex-col items-center justify-center text-[#52797C]'>
          <BusFront width={50} height={50} className='mb-2.5' />
          <h3 className='mb-1.5'>其他地區</h3>
          <p className='text-xs'>Other City</p>
        </Link>
      </div>
    </>
  )
}