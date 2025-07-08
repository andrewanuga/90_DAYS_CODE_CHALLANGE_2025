import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import GlassIcons from "../components/GlassIcons";
import Transition from "../constants/Transition";
import AnimatedText from "../components/AnimatedText";
import SlideUp from "../constants/SlideUp";

const Socials = () => {
  const items = [
  { icon: <FaWhatsapp />, color: 'indigo', label: 'Whatsapp' },
  { icon: <FaXTwitter />, color: 'blue', label: 'Twitter' },
  { icon: <FaInstagram />, color: 'purple', label: 'Instagram' },
  { icon: <FaLinkedin />, color: 'red', label: 'LinkedIn' },
  { icon: <SlSocialYoutube />, color: 'orange', label: 'YouTube' },
  { icon: <FaTiktok />, color: 'green', label: 'TikTok' },
];
  return (
    <div className="w-full cormorant h-vh flex overflow-x-hidden lg:overflow-y-hidden justify-center gap-10 flex-wrap text-white text-7xl items-center bg-transparent">
      <div className="w-full h-96 flex justify-center items-center">
        <AnimatedText text={"Our Socials"} type={SlideUp("left", "tween", 0.2, 1)} mycss="text-bold uppercase text-[30px] text-[#fff] md:text-[60px]"/>
      </div>
      <GlassIcons items={items} className="custom-class"/>
    </div>
  )
}

export default Transition(Socials);