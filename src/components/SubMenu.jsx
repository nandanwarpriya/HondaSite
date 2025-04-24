import React from "react";
import { Link } from "react-router-dom";
import "./SubMenu.css";

export default function SubMenu(){
  return (
      <div className="div2">
          <nav>
              <Link to="/" className="menubar1">Home |</Link>
              <Link to="/media-center" className="menubar1">Media Center |</Link>
              <Link to="/safety-india" className="menubar1">Safety India |</Link>
              <Link to="/csr" className="menubar1">CSR |</Link>
              <Link to="/best-deal" className="menubar1">Best Deal |</Link>
              <Link to="/joy-club" className="menubar1">Joy Club |</Link>
              <Link to="/racing" className="menubar1">Racing |</Link>
              <Link to="/reach-us" className="menubar1">Reach Us |</Link>
              <Link to="/faq" className="menubar1">FAQ</Link>
          </nav>
      </div>
  );
}
