import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from"../components/Trip";
import Footer from "../components/Footer";



function Service () {
    return(
      <>
      <Navbar />
      <Hero
       cName="hero-mid"
       heroImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww"
       titel="KNOW ABOUT OUR SERVICES "
       btnClass="hide"
      />
      <Trip />
      <Footer/>
      </>
      
    )
  }
  export default Service;