"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { Dumbbell } from 'lucide-react'

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Dumbbell className="mr-2" />
          <span className="text-2xl font-bold">FitShare</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/feed">Feed</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/create">Create Post</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/profile">Profile</Link>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header