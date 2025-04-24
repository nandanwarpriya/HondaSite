import React from "react";
import "./Menubar.css"
import { Link } from "react-router-dom";


export default function Menubar(){
    return(
        <div className="div1">
        <nav className="navbar bg-body-tertiary nav1" >
<span className="container span1" >
<Link className="navbar-brand">
<img src="https://www.honda2wheelersindia.com/assets/images/LogoHondaNew_24.png" alt="HondaLogo" width="120" height="120"/>
</Link>

<span className="span2">

<Link className="navbarheader a1">EV</Link>
<Link className="navbarheader">MotorCycle</Link>
<Link className="navbarheader">Scooter</Link>
<Link className="navbarheader">Big Bikes</Link>
<Link className="navbarheader">Accessories</Link>
<Link className="navbarheader">Dealer Network</Link>
<Link className="navbarheader">Product/Bulk Enquiry</Link>
<Link className="navbarheader">Services</Link>
<Link className="navbarheader">Book Now</Link>

</span></span>
</nav>
</div>
    )
}

