import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard"
import TypingText from "../components/TypingText"
import SocBtn from "../components/SocBtn"
import SlideUp from "../constants/SlideUp"

const HireMe = () => {
  const [open, setOpen] = useState(false)
  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      <ProfileCard 
        name="Andrew Adakole"
        title="FullStack Engineer"
        handle="codelover"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/path/to/avatar.jpg"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={handleClick}
      />
      <div className="w-full h-auto relative top-[20px] text-center">
          <TypingText text="I’m the missing piece—your designers and backend team will thank you." speed={50} />
      </div>
      { open && 
        <div className="w-full gap-3 flex justify-center top-[20px] flex-wrap h-auto relative text-center">
          <SocBtn svg={<FaWhatsapp />} type={SlideUp("left", "tween", 0.2, 1)} link="https://wa.link/of7r8l"/> 
          <SocBtn svg={<FaXTwitter />} type={SlideUp("left", "tween", 0.3, 1)} link="https://x.com/Adakole56Andrew"/> 
          <SocBtn svg={<FaLinkedin />} type={SlideUp("left", "tween", 0.4, 1)} link="https://www.linkedin.com/in/andrew-adakole-63462227a/"/>    
        </div>
      }
    </div>
  )
}

export default HireMe