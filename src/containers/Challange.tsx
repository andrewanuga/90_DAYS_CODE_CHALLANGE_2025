import LandingHeader from '../components/LandingHeader';
import LandingKnowMore from '../components/LandingKnowMore';
import Transition from '../constants/Transition';

const Challange=()=>{
    return(
        <div className='w-full cormorant h-[88%] flex justify-center flex-wrap items-center text-7xl text-white'>
            <LandingHeader />
            <LandingKnowMore />
        </div>
    )
}

export default Transition(Challange);