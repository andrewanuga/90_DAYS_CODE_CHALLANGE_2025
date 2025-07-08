import { NavLink } from "react-router-dom"
import Logo from '../assets/Logo.png'
import SplashCursor from "./SplashCursor"

const NavBar = () => {
  
  return (
    <div className="w-[97%] backdrop h-16 rounded-xl border cardo font-light overflow-hidden flex justify-between fixed z-10 top-3 glass-effect items-center">
      <SplashCursor />
        <img src={Logo} alt="The Debuggers Logo" className="w-40 h-40 flex justify-center items-center rounded-xl relative mt-3 right-5" />
        <div className="flex w-[30%] flex-grow h-full justify-evenly items-center transition-all duration-150 space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                Challange
            </NavLink>
            <NavLink to="/techstack" className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                TechStack
            </NavLink>
            <NavLink to="/socials" className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                Socials
            </NavLink>
            <NavLink to="/hireme" className={({ isActive }) => isActive ? "text-white border-b-2 border-b-[#23202e] transition-all duration-150 w-auto h-auto py-1 rounded-lg px-2" : "text-[#d4d3db] w-auto h-auto py-1 px-2 "}>
                HireMe
            </NavLink>
          </div>
    </div>
  )
}

export default NavBar