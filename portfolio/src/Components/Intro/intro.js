import React from 'react';
import './intro.css';
import bg from "../../assets/Rupai1.jfif";
import btnImg from "../../assets/hireme.png";
/*import { Link } from 'react-scroll';*/


const Intro = () => {
 
  return (
    <section id="intro">
      
      <div className="introContent">
    <span className="hello">Hello,</span>
    <span className="introText">I'm <span className="introName">Rupai Dutta</span><br/>Passionate web developer</span>
    <h2 className="introPara">Creating Digital Experiences</h2>

    <a
  href="portfolio/src/assets/Rupai Dutta_CurriculamVitae.jpg" // Replace with the actual path to your resume PDF
  className="btn"
  style={{
    marginRight: '100px', // Adjust the right margin as needed
    marginBottom: '100px', // Adjust the bottom margin as needed
  }}
  target="_blank" // Add this line to open the link in a new tab
>
  <img src={btnImg} alt="Contact Icon" className="btnImg" /> Hire Me
</a>
  
      </div>

      <img src={bg} alt="Profile" className="bg"/>
    </section>
  );
}

export default Intro;