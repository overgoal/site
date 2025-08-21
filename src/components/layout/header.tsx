import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'


export default function Header() {
  return (
    <header className="z-100 max-w-screen-md w-full h-32 flex items-center justify-center mt-8 border-t border-white/10 py-8 sticky top-0  backdrop-blur-lg">
        <div className="z-100 w-full flex flex-col items-center justify-center gap-8 max-w-md ">
          <nav className=" flex flex-row items-center justify-center rounded-lg p-4 gap-8">
            <Link
              href="#overview"
              className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition-all duration-200 text-sm"
              aria-label="Navigate to game overview"
            >
              Game
            </Link>
            <Link
              href="#narrative"
              className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition-all duration-200 text-sm"
              aria-label="Navigate to narrative gameplay"
            >
              Game
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://play.overgoal.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="block "
                aria-label="Play Overgoal now"
              >
                <Button className="px-16 cursor-pointer w-full bg-[#E8E2D1] text-black hover:bg-white/90 font-bold py-3 transition-all duration-200">
                  Play Now
                </Button>
              </Link>
         
            </div>
            <Link
              href="#onchain"
              className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition-all duration-200 text-sm"
              aria-label="Navigate to on-chain mechanics"
            >
              Game
            </Link>
            <Link
              href="#progression"
              className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition-all duration-200 text-sm"
              aria-label="Navigate to skill progression"
            >
              Game
            </Link>
          </nav>
        </div>
      </header>
  )
}