import React from "react";
import "./newsvideos.css";

export default function NewsVideosComp(){
    
    return(
        <div className="newsdiv1">
            <div className="newsdiv2">
                <h1 className="aboutush1">
                    News
                </h1>
                <span>
                    <img src="https://www.honda2wheelersindia.com/assets/images/wheel.png" alt="wheel"/>
                </span>
                <hr className="aboutushr" width="80" align="left"/>
                <hr className="aboutushr" width="60" align="left"/>
             </div>
            <div class="videodiv1">
                <h1 className="aboutush1">
                    Videos
                </h1>
                <span>
                    <img src="https://www.honda2wheelersindia.com/assets/images/wheel.png" alt="wheel"/>
                </span>
                <hr className="aboutushr" width="80" align="left"/>
                <hr className="aboutushr" width="60" align="left"/>
            <iframe 
                width="494" 
                height="332" 
                src="https://www.youtube.com/embed/ylRh5X3eI0A" 
                title="Honda Smart Key with H-Smart Technology" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
                </iframe>
        </div>
    </div>
    );
}