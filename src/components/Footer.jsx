import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><Link >About Us</Link></li>
            <li><Link >News</Link></li>
            <li><Link >Enquiry</Link></li>
            <li><Link >Locate Link Dealer</Link></li>
            <li><Link >Careers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Customer Support</h5>
          <ul>
            <li><Link >Contact Us</Link></li>
            <li><Link >FAQ</Link></li>
            <li><Link >Service Cost Calculator</Link></li>
            <li><Link >Warranty</Link></li>
            <li><Link >Roadside Assistance</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Contact</h5>
          <p>Honda Motorcycle & Scooter India Pvt. Ltd.</p>
          <p>Call: 1800-103-3434</p>
          <p>Email: customercare@honda2wheelersindia.com</p>
        </div>

        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <Link ><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></Link>
            <Link ><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></Link>
            <Link ><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></Link>
            <Link ><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="YouTube" /></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Honda Motorcycle & Scooter India Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
