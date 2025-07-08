import { useState } from "react";
import { motion } from "framer-motion";
import { 
  VscCode, 
  VscGitCompare, 
  VscHubot, 
  VscServer, 
  VscShield, 
  VscTypeHierarchySub 
} from "react-icons/vsc";
import { FaGamepad } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import SlideUp from "../constants/SlideUp";
import AnimatedText from "./AnimatedText";
import List from "./List";
import FrontendChallengePlan from "./FrontendChallangePlan";
import BackendChallengePlan from "./BackendChallangePlan";
import BlockchainChallengePlan from "./BlockchainChallangePlan";
import GameDevChallengePlan from "./GameDevChallangePlan";
import AIMLChallengePlan from "./AIMLChallangePlan";
import CybersecurityChallengePlan from "./CybersecurityChallangePlan";
import FullstackDevChallengePlan from "./FullstackDevChallangePlan";
import AppDevChallengePlan from "./AppDevChallange";

type StackType = 'frontend' | 'backend' | 'fullStack' | 'gameDev' | 'ai/Ml' | 'blockchain' | 'cybersecurity' | 'appDev';

const HeaderStack = () => {
  const [openStack, setOpenStack] = useState<StackType | null>(null);

  const handleStackToggle = (stack: StackType) => {
    setOpenStack(prev => prev === stack ? null : stack);
  };

  return (
    <div className="w-auto flex justify-center gap-10 items-start flex-wrap">
      <div className="w-full h-96 flex justify-center flex-col gap-10 items-center flex-wrap">
        <AnimatedText 
          text="Choose Your Stack" 
          type={SlideUp("left", "tween", 0.2, 1)} 
          mycss="w-full text-center text-bold uppercase text-[30px] text-[#fff] md:text-[50px]"
        />
        <AnimatedText 
          text="And Begin Now" 
          type={SlideUp("left", "tween", 0.2, 1)} 
          mycss="w-full text-center text-bold uppercase text-[20px] text-[#fff] md:text-[30px]"
        />
      </div>
      
      <div className="flex justify-center py-10 flex-wrap pt-20 gap-20 bg-[#121212]">
        <div className="w-full p-5 anton gap-5 rounded-2xl flex justify-center flex-wrap">
          <List 
            text="Frontend" 
            icon={<VscCode />} 
            type={SlideUp("left", "tween", 0.15, 1)}
            isSelected={openStack === 'frontend'}
            onClick={() => handleStackToggle('frontend')}
          />
          <List 
            text="Backend" 
            icon={<VscServer />} 
            type={SlideUp("left", "tween", 0.2, 1)}
            isSelected={openStack === 'backend'}
            onClick={() => handleStackToggle('backend')}
          />
          <List 
            text="Full Stack" 
            icon={<VscTypeHierarchySub />} 
            type={SlideUp("left", "tween", 0.25, 1)}
            isSelected={openStack === 'fullStack'}
            onClick={() => handleStackToggle('fullStack')}
          />
          <List 
            text="Game Dev" 
            icon={<FaGamepad />} 
            type={SlideUp("left", "tween", 0.3, 1)}
            isSelected={openStack === 'gameDev'}
            onClick={() => handleStackToggle('gameDev')}
          />
          <List 
            text="AI/ML" 
            icon={<VscHubot />} 
            type={SlideUp("left", "tween", 0.35, 1)}
            isSelected={openStack === 'ai/Ml'}
            onClick={() => handleStackToggle('ai/Ml')}
          />
          <List 
            text="Blockchain" 
            icon={<VscGitCompare />} 
            type={SlideUp("left", "tween", 0.4, 1)}
            isSelected={openStack === 'blockchain'}
            onClick={() => handleStackToggle('blockchain')}
          />
          <List 
            text="Cybersecurity" 
            icon={<VscShield />} 
            type={SlideUp("left", "tween", 0.45, 1)}
            isSelected={openStack === 'cybersecurity'}
            onClick={() => handleStackToggle('cybersecurity')}
          />
          <List 
            text="App Dev" 
            icon={<IoIosApps />} 
            type={SlideUp("left", "tween", 0.5, 1)}
            isSelected={openStack === 'appDev'}
            onClick={() => handleStackToggle('appDev')}
          />
        </div>

        {openStack === 'frontend' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <FrontendChallengePlan />
          </motion.div>
        )}
        {openStack === 'backend' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <BackendChallengePlan />
          </motion.div>
        )}
        {openStack === 'fullStack' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <FullstackDevChallengePlan />
          </motion.div>
        )}
        {openStack === 'gameDev' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <GameDevChallengePlan />
          </motion.div>
        )}
        {openStack === 'ai/Ml' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <AIMLChallengePlan />
          </motion.div>
        )}
        {openStack === 'cybersecurity' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <CybersecurityChallengePlan />
          </motion.div>
        )}
        {openStack === 'appDev' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <AppDevChallengePlan />
          </motion.div>
        )}
        {openStack === 'blockchain' && (
          <motion.div
            className="w-auto mx-5 anton leading-20 rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10"
          >
            <BlockchainChallengePlan />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeaderStack;