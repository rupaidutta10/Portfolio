import React from 'react';
import './contact.css';
import Amcat1 from '../../assets/Amcat1.png';
import Amcat2 from '../../assets/Amcat2.png';
import Cloud from '../../assets/Cloud.png';
import Coursera1 from '../../assets/Coursera1.png';
import Coursera2 from '../../assets/Coursera2.png';
import FBIcon from '../../assets/fb.png';
import WPIcon from '../../assets/wp.jpg';
import TIcon from '../../assets/twitter.png';
import MIcon from '../../assets/mail.jpg';

const Contact = () => {
   
    const scrollToContact = () => {
        const contactElement = document.getElementById('Contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      // Add the event listener inside a DOMContentLoaded event handler
      React.useEffect(() => {
        document.querySelector('.desktopMenuBtn').addEventListener('click', scrollToContact);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.querySelector('.desktopMenuBtn').removeEventListener('click', scrollToContact);
        };
      }, []);
    
  return (
    <section className="contactPage">
        <div className="certificates">
        <h1 className='contactPageTitle'>My Certificates</h1>
        <p className='certificateDesc'>These are my certificates
        </p>
        <div className='certificateImgs'>
            <img src={Amcat1} alt="" className='certificateImg'/>
            <img src={Amcat2} alt="" className='certificateImg'/>
            <img src={Cloud} alt="" className='certificateImg'/>
            <img src={Coursera1} alt="" className='certificateImg'/>
            <img src={Coursera2} alt="" className='certificateImg'/>
        </div>
        </div>
        <div className="Contact">
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className="contactDesc">Please fill out the form to discuss any work opportunities</span>
    <form className="contactForm">
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="email" className="name" placeholder='Your Email'/>
        <textarea  className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
        <button type="submit" value='Send' className='submitBtn'>Submit</button>
    </form>
    <div className='Links'>
        <img src={FBIcon} alt="" className="Link" style={{ width: "120px", height: "100px",marginTop: "50px" }}/>
        <img src={WPIcon} alt="" className="Link" style={{ width: "100px", height: "100px" }}/>
        <img src={TIcon} alt="" className="Link" style={{ width: "100px", height: "100px" }}/>
        <img src={MIcon} alt="" className="Link" style={{ width: "100px", height: "120px" }}/>
    </div>
        </div>
    </section>
  )
}


export default Contact;
