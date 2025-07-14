import { NavLink } from "react-router-dom"
import { MdOutlineMenuOpen } from "react-icons/md";
import Logo from '../assets/Logo.png'
import SplashCursor from "./SplashCursor"
import { useState } from "react";

const NavBar = () => {

  const [openNav, setOpenNav] = useState(false)
  const handleOpen=()=>{
    setOpenNav(!openNav)
  }
  return (
    <>
    <div className="w-[97%] backdrop h-16 rounded-xl border cardo font-light overflow-hidden flex justify-between fixed z-10 top-3 glass-effect items-center">
      <SplashCursor />
        <img src={Logo} alt="The Debuggers Logo" className="w-40 h-40 text-16 flex justify-center items-center rounded-xl relative mt-3 right-5" />
        <MdOutlineMenuOpen onClick={handleOpen} className="text-white text-[20px] block md:hidden mr-2 p-[2px] rounded-full bg-[#121212]"/>
        <div className="md:flex w-[30%] hidden flex-grow h-full justify-evenly items-center transition-all duration-150 space-x-4">
            <NavLink to="/" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                Challange
            </NavLink>
            <NavLink to="/techstack" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                TechStack
            </NavLink>
            <NavLink to="/socials" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                Socials
            </NavLink>
            <NavLink to="/hireme" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                HireMe
            </NavLink>
          </div>
    </div>
    {
      openNav
        &&
      <div className="w-[97%] transition md:hidden duration-150 backdrop px-10 h-auto py-14 rounded-xl border cardo font-light overflow-hidden flex justify-between flex-wrap fixed z-10 top-20 glass-effect items-center">
        <NavLink to="/" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-full h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-full h-auto py-1 px-2 "}>
            Challange
        </NavLink>
        <NavLink to="/techstack" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-full h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-full h-auto py-1 px-2 "}>
            TechStack
        </NavLink>
        <NavLink to="/socials" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-full h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-full h-auto py-1 px-2 "}>
            Socials
        </NavLink>
        <NavLink to="/hireme" onClick={handleOpen} className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-full h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-full h-auto py-1 px-2 "}>
            HireMe
        </NavLink>
      </div>
    }
    </>
  )
}

export default NavBar