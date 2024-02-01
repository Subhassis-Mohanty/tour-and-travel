import React, { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const AuthPage = () => {
    const [isSignUp , setIsSignUp] = useState(true);

    const switchToLogIn= () =>{

        setIsSignUp(false);
    };
    const switchToSignUp= () =>{

        setIsSignUp(true);
    };


return(
  
        <div>
            {isSignUp ? (
            <SignUp switchToLogIn={switchToLogIn} /> 
            ): ( <LogIn switchToSignUp={switchToSignUp} />
             )}
        </div>
); 

};

export default AuthPage;