import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./index.css";

import { BrowserRouter , Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
// import './App.css'
import Home from "./pages/Home/Home";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import Loginpop from "./components/Loginpop/Loginpop";
import Myorders from "./pages/Myorders";

function App() {
  const [showlogin , setshowlogin] = useState(false)
  // const [count, setCount] = useState(0)

  return (
    <>

    {showlogin?<Loginpop setshowlogin = {setshowlogin}/>:<></>}
    <div className="app">
      {" "}
      <BrowserRouter>
      <Navbar  setshowlogin={setshowlogin}/>
      
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/myorders" element = {<Myorders/>}/>
        {/* <Route path = "/order" element = {<Cart/>}/> */}
        <Route path = "/placeorder" element = {<Placeorder/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
    <Footer/>
    </>
  );
}

export default App;
