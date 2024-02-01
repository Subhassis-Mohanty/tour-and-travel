import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return(
    <>
    <Navbar />
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    titel="YOUR JOURNEY YOUR STORY"
    text="Choose your favorite destination in our application"
    url="/"
    btnText="Travel Plan"
    btnClass="show"
    />
    <Destination/>
    <Trip />
    <Footer />
    </>
  );
}
export default Home;