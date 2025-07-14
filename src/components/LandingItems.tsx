
interface LandingItemsProps {
  text: string;
}
const LandingItems = ({text}:LandingItemsProps) => {
  return (
    <div className="w-[200px] h-auto bg-[#222124] p-10 rounded-2xl text-[20px] md:text-[30px]">
        {text}
    </div>
  )
}

export default LandingItems