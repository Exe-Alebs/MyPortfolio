/* eslint-disable react/no-unescaped-entities */
import TypewriterComp from "./typewritercomp"
import Button from "./Button"
const Hero = () => {
  return (
    <div className='bg-[url("../../public/ggs.jpg")] h-screen bg-cover bg-center bg-fixed 
    flex items-center'>
        <div className='container mx-auto px-4'>
            <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
            <div>

                <h1 className='text-6xl font-bold'>Hi,I'm Gbolahan</h1>
                <h1 className='text-3xl font-bold'> <TypewriterComp    
                 />
                    
                </h1>
            </div>

            <div className='bg-[purple] h-[3px] w-[100px]'></div>
            <div>
                <p>In a world of my own where all things that exist  is a figment of my imagination and I
                    control all
                </p>
             <Button link="#" text="Learn More" />  
            </div>
            
            
            </div> 
    </div>
    </div>
  )
}

export default Hero

 