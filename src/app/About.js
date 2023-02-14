/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Heading from './Heading'
import {FaBirthdayCake} from 'react-icons/fa'
import {AiOutlineMail , AiFillGithub} from 'react-icons/ai'
import {SiSparkfun} from 'react-icons/si'
import {BiCurrentLocation} from 'react-icons/bi'
import Button from './Button'



const About = () => {
  return (
    <section className='container mx-auto py-10 px 4'>
        <Heading title="About Me" /> 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
    <div>
        <Image src='/../public/ggs.jpg' width={400} height={800} alt='' />
    </div>
     <div> 
        <div className='flex items-center justify-between w-[300px]'>
           <div className=' flex flex-col gap-6'>
                <div className='flex gap-3 items-center font-medium'>
                <FaBirthdayCake className='text-[blue] text-[24px]'/>
                Birthday
                </div>
                <div className='flex gap-3 items-center font-medium'>
                <AiOutlineMail className='text-[blue] text-[24px]'/>
                Email
                </div>
                <div className='flex gap-3 items-center font-medium'>
                <AiFillGithub className='text-[blue] text-[24px]'/>
                Github
                </div>
                <div className='flex gap-3 items-center font-medium'>
                <SiSparkfun className='text-[blue] text-[24px]'/>
                Skills
                </div>
                <div className='flex gap-5 items-center font-medium'> 
                <BiCurrentLocation className='text-[blue] text-[24px]'/>
                Location
                </div>
              </div>
                <div className='flex flex-col gap-6 text-gray-500'>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div> 10th of February, 2000</div>
                    <div>alebsgd@gmail.com </div>
                    <div>Exe-Alebs</div>
                    <div>React, Nextjs, Expressjs</div>
                    <div>Lagos, Nigeria</div>
                    </div>


        </div>
    
     <div className=' max-w-[800]'>
        <h2 className='font-bold mt-16 mb-10'>
            I'm  Alebs and a Software Engineer
        </h2>
        <p className=''> Hi! My name is Alebiosu Gbolahan. I am a Software Engineer,
         and I'm very passonate and dedicator to my work and solcing problems
         with 2 yaers of experience as a professional </p>

         <Button link="#" text="Hire Me" />
     </div>
    
    
     </div>
     </div>
    </section>
  )
}

export default About