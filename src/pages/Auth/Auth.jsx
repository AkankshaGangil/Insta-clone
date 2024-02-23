import React from "react"
import "./Auth.css";
import Signin from "../../components/Ragister/Signin";
import { useLocation } from "react-router-dom";
import Signup from "../../components/Ragister/Signup";



const Auth = () => {

  const location=useLocation();

  return (

    
    
       <div className="flex items-center justify-center h-[100vh]">
        <div className="relative  lg:block "> 
       
            <div className="h-[33.3rem] w-[20rem] ">
              <img className="h-full w-full" src=" https://www.digitaltrends.com/wp-content/uploads/2023/08/a-screenshot-in-instagram-1.jpg?fit=1480%2C2740&p=1" alt="" />
            </div>
            <div className="mobilewallpaper h-[30rem] v-[15.7rem]  absolute top-6 right-3">

            </div>
        </div>

         
        
         <div className=" w-[40vw] lg:w-[25vw]">
      {location.pathname==="/login" ? <Signin/> : <Signup/> }
      </div>
     </div> 

    
    
  )
}

export default Auth;
