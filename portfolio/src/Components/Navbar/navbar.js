import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';
import contactIcon  from '../../assets/contact.png';

const Navbar = () => {
  return (
   <nav className="navbar">
    <img src={logo} alt="logo"className="Logo"/>
    <div className="desktopMenu">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Certificates</Link>
        <Link activeClass='active' to="resume" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Resume</Link>

        </div>  
        
      <Link activeClass='active' to="contactForm" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuBtn"><img src={contactIcon} alt="Contact Icon" className="desktopMenuImg" />Contact Me</Link>
     
   </nav>

  )
}

export default Navbar