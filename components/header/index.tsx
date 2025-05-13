'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Menu } from 'lucide-react';


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export const Header = () => {
  return (
    <header className='px-5 lg:px-10 xl:px-16 py-4 flex items-center justify-between'>
      <Link href='/' className='relative w-36 md:w-41 h-10'>
        <Image src='/logo.png' alt='logo' className='object-contain' fill></Image>
      </Link>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-8 xl:gap-13'>
          <li>
            <Link href='/'>附近站牌</Link>
          </li>
          <li>
            <Link href='/'>路線規劃</Link>
          </li>
          <li>
            <Link href='/'>站點查詢</Link>
          </li>
          <li>
            <Link href='/'>我的收藏</Link>
          </li>
        </ul>
      </nav>
      <div className='hidden md:flex items-center gap-5'>
        <div className='flex items-center gap-2.5'>
          <Globe width={22} />
          <button type='button'>中文</button>
          <div className='w-px h-4.5 bg-black'></div>
          <button type='button'>ENG</button>
        </div>
      </div>
      <div className='block md:hidden'>
        <Sheet>
          <SheetTrigger className='focus-visible:ring-0 flex items-center justify-center cursor-pointer'>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='gap-4'>
              <SheetTitle className='items-center'>
                <Link href='/' className='relative block w-36 md:w-41 h-10'>
                  <Image src='/logo.png' alt='logo' className='object-contain' fill></Image>
                </Link>
              </SheetTitle>
              <ul className='*:border-t *:last:border-b'>
                <li>
                  <Link href='/' className='block py-4'>附近站牌</Link>
                </li>
                <li>
                  <Link href='/' className='block py-4'>路線規劃</Link>
                </li>
                <li>
                  <Link href='/' className='block py-4'>站點查詢</Link>
                </li>
                <li>
                  <Link href='/' className='block py-4'>我的收藏</Link>
                </li>
              </ul>
              <div className='flex items-center justify-center gap-5 mt-5'>
                <Globe width={22} />
                <button type='button'>中文</button>
                <div className='w-px h-4.5 bg-black'></div>
                <button type='button'>ENG</button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}