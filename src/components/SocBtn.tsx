import StarBorder from "./StarBorder"
import { motion } from "framer-motion"

const SocBtn = ({svg, link, type}) => {
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