import './App.css';
import Feedback from './Feedback';
import HomePage from './HomePage';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} path='/' />
          <Route element={<Feedback />} path='/feedback' />
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
