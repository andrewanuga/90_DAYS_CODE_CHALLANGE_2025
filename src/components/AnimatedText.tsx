import { motion } from "framer-motion"

const AnimatedText = ({ text , type, mycss }) => {
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