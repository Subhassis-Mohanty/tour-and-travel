import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import ContactUs from "./routes/ContactUs";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";



export default function App() {
  return (
    <div className="App">
      <Routes> 
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/sign up" element={<SignUp/>}/>
        <Route path="/Log in" element={<LogIn/>}/>

      </Routes>

    </div>
  );
}


