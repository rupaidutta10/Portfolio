import React from 'react';
import './skills.css';
import Azure from "../../assets/azure.png";
import Web from "../../assets/web.png";
import Project from "../../assets/project.png";
import Com from "../../assets/com.gif";

const Skills = () => {
  return (
    <section id="skills">
     <span className='SkillTitle'>Proficiencies</span>
     <span className='SkillDesc'> Full-stack developer with a comprehensive skill set, capable of delivering end-to-end web applications, from front-end design to back-end functionality.</span>
     <div className='Skillbars'>
     <div className='Skillbar'>
        <img src={Azure} alt="Azure" className="SkillbarImg"/>
        <div className="SkillbarText">
            <h2>Cloud Comupting</h2>
            <p2>Expertise in Azure services such as Azure Virtual Machines, Azure App Service, Azure Functions, and Azure SQL Database</p2>
        </div>
     </div>
     <div className='Skillbar'>
        <img src={Web} alt="WebDesign" className="SkillbarImg"/>
        <div className="SkillbarText">
            <h2>Web Development</h2>
            <p2>Proficient in front-end and back-end web development, using technologies such as HTML, CSS, JavaScript, React, Node.js,Java,JavaScript,MySql</p2>
        </div>
     </div>
     <div className='Skillbar'>
        <img src={Project} alt="Project" className="SkillbarImg"/>
        <div className="SkillbarText">
            <h2>Project Management</h2>
            <p2>Project Empowerment Officer at CEI.Proficient in project management tools and methodologies, ensuring on-time delivery of projects</p2>
        </div>
     </div>
     <div className='Skillbar'>
        <img src={Com} alt="Communication" className="SkillbarImg"/>
        <div className="SkillbarText">
            <h2>Communication</h2>
            <p2>Excellent written and verbal communication skills, facilitating clear and effective collaboration with cross-functional teams and clients.</p2>
        </div>
     </div>
     </div>
    </section>
  )
}

export default Skills