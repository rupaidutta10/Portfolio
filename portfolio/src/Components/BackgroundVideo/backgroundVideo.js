import React from 'react';
import './backgroundVideo.css'; // Create a CSS file for styling
import backGround from '../../assets/video.mp4';

const BackgroundVideo = () => {
   
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src={backGround} type="video/mp4" />
       
      </video>
      
    </div>
  );
};

export default BackgroundVideo;