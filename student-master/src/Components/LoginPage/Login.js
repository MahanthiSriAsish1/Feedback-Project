import AlreadyUserLoginForm from "./AlreadyUserLoginForm";
import NewUserLoginForm from "./NewUserLoginForm";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const handleFormToggle = () => {
    setIsSignIn(!isSignIn);
  };

const handleAlreadyUserDetails=(formdata)=> {
    console.log(formdata)
}

const handleNewUserDetails=(data)=> {
   console.log(data)
}

  return (
    <div>
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
      {isSignIn ? <AlreadyUserLoginForm userDetails={handleAlreadyUserDetails}/> : <NewUserLoginForm userDetails={handleNewUserDetails}/>}
      <p>
        {isSignIn ? "Don't have an account? " : "Already have an account? "}
        <button type="button" onClick={handleFormToggle}>
          {isSignIn ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  );
};

export default Login;
