import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Challange from './containers/Challange';
import TechStack from './containers/TechStack';
import Socials from './containers/Socials';
import NavBar from './components/NavBar';
import { AnimatePresence } from 'framer-motion';
import Squares from './components/Squares';
import HireMe from './containers/HireMe';

const App=()=>{
  const location = useLocation()
  return(
      <div className='w-full h-dvh flex justify-center items-center flex-wrap'>
        <Squares 
          speed={0.2} 
          squareSize={50}
          direction='' // up, down, left, right, diagonal
          borderColor='#5c2fa533'
          hoverFillColor=''
        />
        <NavBar />
        {/* Define your routes here */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Challange />} />
              <Route path="/techstack" element={<TechStack />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/hireme" element={<HireMe />} />
            </Routes>
          </AnimatePresence>
      </div>
    // </ClickSpark>
  )
}

export default App;