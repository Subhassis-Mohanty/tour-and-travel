import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


function ContactUs () {
    return(
      <>
       <Navbar />
       <Hero
       cName="hero-mid"
       heroImg="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       titel="CONTACT WITH US"
       btnClass="hide"
      />
      <Footer/>
      </>
    )
  }
  export default ContactUs;