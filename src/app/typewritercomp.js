// this is the typewriting component

'use client'
import Typewriter from "typewriter-effect"

export default function TypewriterComp() {
  return (
    <>
        <Typewriter 
                    options={{
                        strings: ['Software Engineer', 'Developer', 'Freelancer'],
                        changeDelay: 3,
                        autoStart: true,
                        changeDeleteSpeed: 2,
                        loop: true,
                    }}
                />
    </>    

  )
}
