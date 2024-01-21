import React from 'react';
import './works.css';

const Works = () => {
  const projects = [
    {
      title: "Library Management System",
      link: "https://example.com/project1",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5RsqhjNNPzW_nZLUWXxb--P2WyLCT6wvjq838_k3xbm6weZi9", // Replace with the actual image URL
      style: { width: "300px", height: "300px" },
    },
    {
      title: "Smart Plant Monitoring System",
      link: "https://example.com/project2",
      imageUrl: "https://cdn.homecrux.com/wp-content/uploads/2014/07/Smart-Plant-by-AVI-Labs_1.jpg", // Replace with the actual image URL
      style: { width: "300px", height: "300px" },
    },
    {
      title: "Symmetric Key Cryptography",
      link: "https://example.com/project3",
      imageUrl: "https://img.freepik.com/premium-vector/cryptocurrency-concept-bitcoin-with-futuristic-planet-earth-candlestick-price-pattern-modern-digital-design-cover-website-blockchain-market-vector-illustration_185386-1212.jpg", // Replace with the actual image URL
      style: { width: "300px", height: "300px" },
    },
    {
      title: "Automatic Gender Detection Model",
      link: "https://example.com/project4",
      imageUrl: "https://datawow.s3.amazonaws.com/blog/43/image_1/facial-recognition-connected-real-estate.png", // Replace with the actual image URL
      style: { width: "300px", height: "350px" },
    },
    {
      title: "Amazone Clone",
      link: "https://654baf1b6e1db16ea69bc448--precious-manatee-a1c952.netlify.app/",
      imageUrl: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689143214/catalog/1679013055140724736/qxdiepyovizfkcu0vzcz.jpg", // Replace with the actual image URL
      style: { width: "300px", height: "350px" },
    },
    {
      title: "Traveller Website",
      link: "https://example.com/project6",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuLy3FyfJ6wAt4-pGh31CrOMHyQfXjPh-_05aiCESISy2ATGjN", // Replace with the actual image URL
      style: { width: "300px", height: "350px" },
    },
    // Add more projects with titles, links, and styles as needed
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">Showcase of my recent projects and work in web development, and project management.</span>
      <div className="workImg">
        {projects.map((project, index) => (
          <div key={index} className="workItem">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl} // Use project.imageUrl for the image URL
                alt=""
                className="worksImg"
                style={project.style} // Apply the style to the image
              />
              <p className="projectTitle">{project.title}</p>
            </a>
          </div>
        ))}
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
