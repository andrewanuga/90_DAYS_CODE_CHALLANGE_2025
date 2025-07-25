import { motion } from "framer-motion";
import type{ ReactNode } from "react";

interface ListProps {
  text: string;
  isSelected?: boolean;
  icon: ReactNode;
  onClick?: () => void; // Click handler function
}

const List = ({ text, icon ,onClick }: ListProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="w-auto border border-violet-700 min-w-[300px] cursor-pointer hover:bg-[#2a2833] max-w-[400px] flex justify-evenly items-center grow rounded-2xl h-auto p-5 bg-[#222] text-[20px]"
      onClick={onClick}
    >
      <div className="w-10 h-10 p-2 relative right-10 flex justify-center items-center rounded-full bg-[#2a2833]">
        {icon}
      </div>
      <p className="relative right-10">{text}</p>
    </motion.div>
  );
};

export default List;