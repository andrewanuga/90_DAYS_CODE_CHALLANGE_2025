import { motion } from "framer-motion"
import SlideIn from "../constants/SlideIn"
import SlideUp from "../constants/SlideUp"
import AnimatedText from "./AnimatedText"
import StarBorder from "./StarBorder"

const LandingHeader = () => {
  return (
    <div
      className="w-[97%] cardoi my-20 h-96 relative flex-col gap-5 top-10 justify-center items-center flex-wrap flex rounded-xl"
    >
      <AnimatedText text={"The Debuggers"} type={SlideUp("left", "tween", 0.2, 1)} mycss="text-bold uppercase text-[30px] text-[#fff] md:text-[60px]"/>
      <AnimatedText text={"Tech Stack"} type={SlideUp("left", "tween", 0.4, 1)} mycss="text-bold uppercase text-[20px] text-[#fff] md:text-[40px]"/>
      <AnimatedText text={"90 DAYS CHALLANGE"} type={SlideUp("left", "tween", 0.6, 1)} mycss="text-bold uppercase text-[15px] text-[#fff] md:text-[20px]"/>

      <StarBorder
        as="button"
        className="custom-class mt-10 text-[20px]"
        color="cyan"
        speed="5s"
      >
        Join Challange
      </StarBorder>
    </div>
  )
}

export default LandingHeader