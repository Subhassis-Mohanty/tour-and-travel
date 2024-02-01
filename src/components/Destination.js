import "./DestinationStyles.css";
import DestinationData from "../components/DestinationData";
import Image1 from "../Assets/Nainital-1.jpg";
import Image2 from "../Assets/Nainital-2.jpg";
import Image3 from "../Assets/Munnar 1.jpeg";
import Image4 from "../Assets/Munnar 2.jpg";
import Image5 from "../Assets/corbett-falls-1.jpg";
import Image6 from "../Assets/corbett-falls-2.jpg";



const Destination = () => {
  return(
     <div className="destination">
        <h1>OUR POPULAR DESTINATION</h1>
        <p>Travel gives you the oppertunity to see a lot within a time frame</p>

        <DestinationData 
         className="first-desc"
         heading= "Nainital, Uttarakhand"
         text=" Nainital is a city and headquarters of Nainital district of Kumaon division, Uttarakhand, India. It is the judicial capital of Uttarakhand, the High Court of the state being located there and is the headquarters of an eponymous district. It also houses the Governor of Uttarakhand, who resides in the Raj Bhavan. Nainital was the summer capital of the United Provinces."
         picture1={Image1}
         picture2={Image2}
        
        />
        


        <DestinationData 
         className="first-desc-reverse"
         heading= "Munnar, Kerala "
         text=" Munnar, South Indias most sought after hill station is not only a favorite tourist spot but also the centre of tea estates in Kerala. Munnar, an exotic hill station with enclosed calm of serenity and beauty is the most visited destination in South India.
               This hill station is a heavenly beauty situated at an altitude of about 1600 meter from the sea level was once the summer resort of British government in South India. The colonial Bungalows in the hillocks boasts of the glorious past of this place."
           picture1={Image3}
           picture2={Image4}
        
        />

        <DestinationData 
         className="first-desc"
         heading= " Corbett Falls, Uttarakhand "
         text=" Corbett falls is to be found 3 kms from Kaladhungi which is a welcome by nature with sound of water. Corbett falls is very much close to the well-known Kempty falls in Mussoorie, but Corbett falls is not spoiled by travelers and locals as evaluates to Kempty falls. The cool clear water flowing from a height is attractiveness worth admiring. Above all, the way that leads you to the Corbett waterfall will charm you much before you reach there. Corbett Falls flow down from a height of 20 meters, with gurgling sound complemented by the chirps of 100s of birds."
         picture1={Image5}
         picture2={Image6}
        
        />

     </div>


  );

}



export default Destination;
