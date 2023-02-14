import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from './Hero'
import About from './About'
import WhatIDo from './WhatIDo'
import Skills from './Skills'
import ContactMe from './ContactMe'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
         <Hero />
         <About />  
          <WhatIDo />
          <Skills />
          <ContactMe />

    </main>
  )
}
