'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, SunMoon, Sun, Moon } from 'lucide-react';

import { useTheme } from "next-themes"

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react';


export const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <header className='px-16 py-4 flex items-center justify-between'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={162} height={42}></Image>
      </Link>
      <nav>
        <ul className='flex items-center gap-13'>
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
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2.5'>
          <Globe width={22} />
          <button type='button'>中文</button>
          <div className='w-px h-4.5 bg-black'></div>
          <button type='button'>ENG</button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type='button' variant='ghost' className='focus-visible:ring-0'>
              {theme === 'system' ? <SunMoon /> : theme === 'light' ? <Sun /> : <Moon />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}