import './App.css';
import Feedback from './Feedback';
import HomePage from './HomePage';

// import HeroSection from './HeroSection';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
         {/* <Route path="/" element={<HomePage />} /> */}

        <Route index element={<HomePage/>} path='/'/>
        <Route  element={<Feedback/>} path='/feedback'/>
        
      </Routes>
    </BrowserRouter>
    

   
    </>
  );
}

export default App;
