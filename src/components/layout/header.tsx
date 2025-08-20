import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '../constants'
import { Button } from '../ui/button'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='fixed top-6 h-16   font-chakra bg-black/20 backdrop-blur-sm left-[50%] translate-x-[-50%] border rounded-2xl  border-white/30 max-w-screen-2xl z-50 flex items-center justify-center px-8 py-6 w-full'>
      

        <nav className='flex flex-row items-center justify-center   gap-4 text-center w-full'>
            <div className='flex flex-row items-center gap-4 w-full'>
            <Link href="/" className='text-lg font-medium mr-4 text-primary hover:text-white transition-colors'>
                Overgoal
            </Link>
            <div className='flex flex-row items-center gap-4'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.href} className='text-base font-medium mx-2 text-white/50 hover:text-white transition-colors'>
                        {link.label}
                    </Link>
                ))} 
            </div>
            </div>
            <Link href="https://play.overgoal.gg" target='_blank' className='cursor-pointer'>
                <Button className='bg-black text-white hover:bg-black/80 border border-white/30'>
                    Play now
                </Button>
            </Link> 
            
        </nav>
    </header>
  )
}