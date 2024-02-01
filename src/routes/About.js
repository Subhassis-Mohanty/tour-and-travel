import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
 import "./AboutStyles.css";
 
 function About () {
    return(
      <>
       <Navbar />
       <Hero
       cName="hero-mid"
       heroImg="https://images.unsplash.com/photo-1585598117002-9fb152e67dbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       titel="ABOUT OUR SITE"
       btnClass="hide"
      />
        <h1>About Us</h1>
      <p>
         Welcome to "Travel" , your ultimate destination for unforgettable travel experiences! At "Travel" , we are passionate about exploring the world and creating journeys that leave lasting memories.
      </p>
        <h1>Our Mission</h1>
      <p>
        Our mission is to inspire and empower individuals to discover the beauty of diverse cultures, landscapes, and adventures. We believe that travel has the power to broaden horizons, foster understanding, and create a deeper connection with the world around us.
      </p>
      <h1>Who We Are?</h1>
      <p>
        "Travel" was founded by a team of avid travelers who share a common love for exploration and a commitment to providing exceptional travel resources. Our team is made up of seasoned globetrotters, travel experts, and tech enthusiasts, all dedicated to curating the best travel experiences for our community.</p>
      <h1>What Sets Us Apart</h1>
        <div className="abouttext">
              <h3>Authentic Experiences</h3>
                  <p>We strive to offer authentic travel experiences that go beyond the typical tourist routes. Whether it's uncovering hidden gems in bustling cities or immersing yourself in the tranquility of remote landscapes, we are here to guide you towards unforgettable moments.</p> 

              <h3>Expert Guidance</h3>
                  <p> Our team of travel experts is here to assist you at every step of your journey. From planning your itinerary to providing insider tips on local cuisines and customs, we're committed to ensuring your travel experience is seamless and enriching.</p>

              <h3>Community and Sustainability</h3>
                  <p>At "Travel", we believe in the power of responsible travel. We are committed to promoting sustainable tourism practices that contribute positively to local communities and protect the environment. Join us in creating a global community of conscious travelers who care about the world we explore. </p>

              <h3>Connect With Us</h3>
                  <p>We're more than just a travel website; we're a community of adventurers. Connect with us on social media, share your travel stories, and be part of our growing network of explorers.</p> 

              <h3>Start Your Journey</h3>
                  <p>Embark on your next adventure with "Travel" . Discover the world with us, and let every journey be a chapter in your personal travel story.</p>
         </div>
        <h4>Happy Travels!</h4>
        <h4>The Travel Team.</h4>
      
     
      <Footer/>
      </>
    )
  }
  export default About;