import Link from "next/link"
import {FcDownload} from "react-icons/fc"
import sidebar from "./sidebar"

 
// this is the side navbar
export default function Navbar() {
return (
 <div className="bg-purple-500 fixed top-0 w-[100%] z-10">
   <div className=" container mx-auto flex justify-between items-center py-4 px-4">
     <div className=" text-[24px]">Alebiosu Gbolahan</div>
     <div className="hidden md:flex gap-6">
         <Link href="/"
                 className="hover:text-[#ffd41]">Home
            </Link>
            <Link href="/about"
                className="hover:text-[blue]">About
            </Link>
            <Link href="/projects"
                 className="hover:text-[blue]">Projects
            </Link>
            <Link href="/blog"
                 className="hover:text-[blue]">Blog
            </Link>
            <Link href="/contact"
                 className="hover:text-[blue]">Contact
            </Link>
           
     </div>
     <a href="" className=" hidden md:flex border border-[blue] px-4 py-1 text-[black] rounded-[5px] items-center gap-2 hover:bg-[blue] hover:text-white transition-200">
         Download CV
         <FcDownload/> 
     </a>
     <sidebar/>


 </div>
 </div>
)
}