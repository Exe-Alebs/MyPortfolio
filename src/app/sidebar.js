"use client"
import {HiMenu} from "react-icons/hi"

import {useState}from 'react'


const [ isOpen, setIsOpen] = useState(false)

const toggleSidebar = () => {
    setIsOpen(!isOpen)
}
const sidebar = () => {
  return (
    <div className="md:hidden text-[24]" onClick={toggleSidebar}>
            <HiMenu/>
     </div>
  )
}

export default sidebar
