import React,{ useState } from "react";
import "./SignUpStyles.css";


const LogIn=({ switchToSignUp }) => {

    const [email , setEmail]= useState("");
    const [password , setPassword]= useState(""); 
    const [error, setError] = useState("");


    const handleLogIn =() =>{

        if( email.trim() === "" || password.trim() === "" ) {
            setError("Email and Password are required ");
            return;
        }

        // Retrieve user data from local storage
        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        
            // Check if the entered credentials match the stored data

            if (savedUserData && savedUserData.email === email && savedUserData.password === password) {
                alert('Login Successful !');
                setError('');
            }
            else{
                setError('Invalid credentials. Please try again.');
            }

    };

   return(
        <div className="loginPg">
            <h2>Log In</h2>
            {error && <p className="error-message">{error}</p>}
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            
            <label>Password:</label>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            
            <button onClick={ handleLogIn }> Log In</button>
            <p>
               Forget Your password ? <a href="/"> Reset It Here </a>
            </p>
            <p>
                Don't Have An Account ? <span onClick={switchToSignUp}> Sign Up </span>
            </p>
        </div>
   );


};


export default LogIn;