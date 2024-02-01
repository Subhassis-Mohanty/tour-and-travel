import React , { useState } from "react";
import "./SignUpStyles.css";
import { NavLink } from "react-router-dom";


const SignUp = ( {switchToLogIn} ) =>{
   const [name ,setName] = useState(" ");
   const [email ,setEmail] = useState(" ");
   const [password ,setPassword] = useState(" ");
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');


   const handleSignUp =()=> {

    if (password !== confirmPassword) {
        setError("Password do not match");
        return;
    }

    if(name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        setError("Name, Email, Password and ConfirmPassword are required ");
        return;
    }

    localStorage.setItem('userData' , JSON.stringify({name,email,password}))

    switchToLogIn();

   }; 

   return(
    <>
        <div className="signupPg">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/>
           

            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            
            
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

        
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            
            <button onClick={ handleSignUp }> Sign Up</button>
            <p>
                Already Have An Account ? {" "}
                <span onClick={ switchToLogIn }> <NavLink to="/Log in">Log In</NavLink>  </span>
            </p>
        </div>
       
       
    </>
   );

};


export default SignUp;       