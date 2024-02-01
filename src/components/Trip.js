
import "./TripStyles.css";
import TripData from './TripData';
import cardimg1 from '../Assets/shimla.jpg';
import cardimg2 from '../Assets/Maharashtra.jpg';
import cardimg3 from '../Assets/Kashmir.webp';


function Trip ()  {
  return (
    <div className='trip'>
        <h1>Recent Journeys</h1>
        <p>You Can Discover Unique Destinations Using Our Site</p>
        <div className='tripcard'>
            
            <TripData
               picture={cardimg1}
               heading="Trip To Shimla"
               text="Shimla is the Capital Town of Himachal Pradesh. It was formerly the summer capital during the British Rule. The town of Shimla is built over several hills and connecting ridges. The important hills are Jakhu(8050 ft), Prospect Hill (7140 ft), Observatory Hill ( 7050 ft), Elysium Hill (7400 ft), and Summer Hill (6900 ft). There is a great controversy over the origin of the name Shimla."
            />

            <TripData
               picture={cardimg2}
               heading="Trip To Maharashtra"
               text="Mumbai (formerly called Bombay) is a densely populated city on Indias west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry."
            />
           
           <TripData
               picture={cardimg3}
               heading="Trip To Kashmir"
               text="Hajan Valley, also called as Betaab Valley or Hagen Valley, is situated at a distance of 15 km (9.3 mi) from Pahalgam in the Anantnag district in India's union territory of Jammu and Kashmir. The valley got its other name from the Sunny Deol-Amrita Singh hit debut film Betaab (1983)."
            />


          
        </div>
    
    </div>
  );
}

export default Trip;

