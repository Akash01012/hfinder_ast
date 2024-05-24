import React from "react";
import Login from "../component/login";
import CurrentLocation from "../component/currentLocation";

const HomePage = ({info})=>{
    return (
   <>
   <div className="Home">
    <p>{info}</p>
    <CurrentLocation/>

   </div>

   </>
    );
}
export default HomePage;