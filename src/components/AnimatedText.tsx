import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string;
  type: any;
  mycss: string;
}


const AnimatedText = ({ text , type, mycss }:AnimatedTextProps) => {
  return (
        <motion.p
        variants={type}
        initial="hidden"
        whileInView="show"
        className={mycss}
      >
        {text}
      </motion.p>
  )
}

export default AnimatedText