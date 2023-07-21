import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Get to know us</h4>
          <ul>
            <li>About PMS</li>
            <li>Career at PMS</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Join Us</h4>
          <ul>
            <li>Renew Membership</li>
            <li>Membership benefits</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>History</h4>
          <ul>
            <li>Staff</li>
            <li>Management</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>+1123454</li>
            <li>@company</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div>
            <FaFacebook className="icons" />
          </div>
          <div>
            <FaInstagramSquare className="icons" />
          </div>
          <div>
            <FaTwitterSquare className="icons" />
          </div>
        </div>
      </div>
    </footer>
  );
}
