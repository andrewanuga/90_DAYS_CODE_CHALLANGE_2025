import HeaderStack from "../components/HeaderStack";
import Transition from "../constants/Transition";

const TechStack=()=>{
    return(
        <div className="w-full cuba cormorant h-auto flex justify-center items-center text-7xl text-white bg-transparent">
            <HeaderStack />
        </div>
    )
}

export default Transition(TechStack);