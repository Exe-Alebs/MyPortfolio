import Heading from "./Heading";



const Skills = () => {
  return (
   <section className='container mx-auto py-10 px-4'>
         <Heading title="Skills" />
                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>


            <div>
                <p>React.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[purple] absolute h-[4px] w-[80%]'></div>
                </div>

            </div>
            <div>
                <p>Nextjs</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[purple] absolute h-[4px] w-[90%]'></div>
                </div>

            </div>
            <div>
                <p>Expressjs</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[purple] absolute h-[4px] w-[70%]'></div>
                </div>

            </div>
            <div>
                <p>Java</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[purple] absolute h-[4px] w-[50%]'></div>
                </div>
                <div>
                <p>Nodejs</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[purple] absolute h-[4px] w-[67%]'></div>
                </div>

            </div>
            </div>
        </div>



   </section>
  )
}

export default Skills
