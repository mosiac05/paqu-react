import { faEnvelope, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-description">
        <h3>Paqu</h3>
        <hr />
        <p>
          Paqu (paku) is a platform that provides an integrated system of past
          exams and tests question papers in the several tertiary institutions
          of Nigeria. Just search and select your desired university, faculty,
          department, and course to get these free past question papers. Cheers! &#128515;
        </p>
      </div>
      <div className="footer-quick-links">
        <h3>Quick Links</h3>
        <hr />
        <ul>
            <li>
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/universities" activeClassName="active">Universities</NavLink>
            </li>
        </ul>
      </div>
      <div className="footer-contact-us">
        <h3>Contact Us</h3>
        <hr />
        <ul>
            <li> <FontAwesomeIcon icon={faHome} /> New Town, Abuja, Nigeria</li>
            <li>
                <a href="mailto:test@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> test@gmail.com</a>
            </li>
            <li>
                <a href="tel:09000000000"><FontAwesomeIcon icon={faPhoneAlt}/> 09000000000</a>
            </li>
        </ul>
      </div>
      <hr />
      <p>Copyright &copy; 2021 Paqu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
