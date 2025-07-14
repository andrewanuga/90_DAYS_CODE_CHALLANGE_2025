import type { ReactNode } from "react";
import StarBorder from "./StarBorder"
import { motion } from "framer-motion"

interface SocBtnProps {
  svg: ReactNode;
  link: string;
  type: any; // For Framer Motion animation variants
}
const SocBtn = ({svg, link, type}:SocBtnProps) => {
  return (
    <StarBorder
        as="button"
        className="custom-class w-14 h-14 flex justify-center-safe items-center text-[20px]"
        color="cyan"
        speed="5s"
    >
        <motion.a 
            className="rounded-lg grid justify-center items-center"
            href={link}
            variants={type}
            initial="hidden"
            whileInView="show"
        >
            {svg}
        </motion.a>
    </StarBorder>
  )
}

export default SocBtn