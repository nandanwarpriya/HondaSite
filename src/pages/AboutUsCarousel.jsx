import React from "react";
import NewLaunchCarousel from "./NewLaunchCarousel";
import LatestCarousel from "./LatestCarousel";
import "./aboutus.css";

export default function AboutUsCarousel(){
    return(
        <div className="aboutusdiv1">
            <div className="aboutusdiv2">
                <h1 className="aboutush1" >About Us</h1>
                    <img src="https://www.honda2wheelersindia.com/assets/images/wheel.png" alt="Honda"/>
                <hr align="left" className="aboutushr" width="80px"/>
                <hr align="left" className="aboutushr" width="60px"/>
                <p>Honda Motorcycle &amp; Scooter India Pvt. Ltd. (HMSI) is the wholly-owned subsidiary of Honda Motor Company, Japan – the World’s No.1 two-wheeler company. Commencing its Indian 2Wheeler operations in May 2001, Honda in the last two decades has grown to become India’s 2</p> 
            </div>
            <NewLaunchCarousel/>
            <LatestCarousel/>
        </div>
    );
}