import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import GlassIcons from "../components/GlassIcons";
import Transition from "../constants/Transition";
import AnimatedText from "../components/AnimatedText";
import SlideUp from "../constants/SlideUp";

const Socials = () => {
  const items = [
  { icon: <FaWhatsapp />, color: 'indigo', label: 'Whatsapp', link: 'https://chat.whatsapp.com/LESbF7IJqrSHicyFSl5SOo' },
  { icon: <FaXTwitter />, color: 'blue', label: 'Twitter', link:'#' },
  { icon: <FaInstagram />, color: 'purple', label: 'Instagram', link: 'https://www.instagram.com/the_debuggers123?igsh=MThkczdtMDU2Y3FjZg=='  },
  { icon: <FaDiscord />, color: 'red', label: 'Discord', link: 'https://discord.gg/sWGpDbZf' },
];
  return (
    <div className="w-full overflow-hidden cormorant h-vh flex overflow-x-hidden lg:overflow-y-hidden justify-center gap-10 flex-wrap text-white text-7xl items-center bg-transparent">
      <div className="w-full relative h-96 flex flex-wrap justify-center items-center">
        <AnimatedText text={"Our Socials"} type={SlideUp("left", "tween", 0.2, 1)} mycss="text-bold uppercase text-[30px] text-[#fff] md:text-[60px]"/>
    
      </div>
      <GlassIcons items={items} className="custom-class"/>
    </div>
  )
}

export default Transition(Socials);