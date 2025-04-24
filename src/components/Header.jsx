import React from "react";
import Menubar from "./Menubar";
import SubMenu from "./SubMenu";

export default function HeaderComp(){
    return(
        <div>
            <header className="fixed-top">
                <Menubar/>
                <SubMenu/>
            </header>
        </div>
    )
}




// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import hondaLogo from '../assets/images/honda-logo.png';

// const Header = () => {
//   return (
//     <header>
//       <div className="top-strip">
//         <div className="top-links">
//           <a href="#">Book Now</a>
//           <a href="#">Locate Us</a>
//           <a href="#">Offers</a>
//           <a href="#">EMI Calculator</a>
//         </div>
//       </div>

//       <nav className="main-navbar">
//         <div className="logo">
//           <Link to="/">
//             <img src={hondaLogo} alt="Honda Logo" />
//           </Link>
//         </div>

//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/motorcycles">Motorcycles</Link></li>
//           <li><Link to="/scooters">Scooters</Link></li>
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Owners</a></li>
//           <li><a href="#">About Us</a></li>
//         </ul>

//         <div className="nav-icons">
//           <button className="search-btn">🔍</button>
//           <button className="menu-btn">☰</button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
