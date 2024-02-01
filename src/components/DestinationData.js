import "./DestinationStyles.css";


function DestinationData (props) {
 
        return(
         
        <div className={props.className}>
              <div className="desc-txt">
                    <h3>{props.heading}</h3>
                    <p> {props.text}</p>
               </div>   

                <div className="photo">
                    <img alt="img" src={ props.picture1 } />
                    <img alt="img" src={ props.picture2 } />
                </div>   
        </div>
     );
     
    }


export default DestinationData;