
import { useState } from "react";
import { UNSAFE_RouteContext } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LeftSideBar from "./Components/LeftSideBar";
import { Usercontext } from "./contexts/UserContext";
import MainRouter from "./MainRouter";

function App() {

 
const [user,setuser]=useState();

  
  return (
    <div className="App">
   <Usercontext.Provider  value={{ user, setuser }}>

       <MainRouter/>

  </Usercontext.Provider> 
  
    </div>

  
  );
}

export default App;
