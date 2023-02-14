import Heading from "./Heading";

import React from 'react'

const ContactMe = () => {
  return (
    <section className='container mx-auto py-10 px 4'>
        <Heading title="Contact Me" />

        <form className='flex flex-col gap-6'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <input type="text" placeholder="Name" className='inputStyle' required></input>
                <input type="Email" placeholder="Email" className='inputStyle' required></input>
            </div>
            <input type="text" placeholder="Subject" className='inputStyle'required></input> 

            <textarea placeholder="Message" className='inputStyle h-[200px]' required></textarea>
              <div>

                <button type="submit" className='btn'>SEND MESSAGE</button>
              </div>


        </form> 


    </section>
  )
}

export default ContactMe
