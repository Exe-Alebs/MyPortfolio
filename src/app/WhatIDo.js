import Heading from "./Heading"
import {AiFillBulb} from 'react-icons/ai'

const WhatIDo = () => {
  return (
    <section className='container mx-auto py-10 px 4'>
        <Heading title="What I Do" />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
             <div className='shadow-lg flexx flex-col gap-4 px-8 py-10 bg-[purple] text-white'>
               <AiFillBulb className='text-[24px]'/>   
                <h1 className='text-[24px] font-medium'>Web Development</h1>

                <p className='text-[16px]'>I build websites and web applications using React, Nextjs, Expressjs, Nodejs, MongoDB, and Firebase</p>
             </div>
             <div className='shadow-lg flexx flex-col gap-4 px-8 py-10 bg-[purple] text-white'>
               <AiFillBulb className='text-[24px]'/>   
                <h1 className='text-[24px] font-medium'>Website and Database optimization </h1>

                <p className='text-[16px]'>Lorem ipsum cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
             <div className='shadow-lg flexx flex-col gap-4 px-8 py-10 bg-[purple] text-white'>
               <AiFillBulb className='text-[24px]'/>   
                <h1 className='text-[24px] font-medium'>Creative Designs </h1>

                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
             </div>






        </div> 
    </section>
  )
}

export default WhatIDo