import { useEffect } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolio";

const Landing = () => {
  useEffect(() => {
    // Parallax logic for profile image (until 3D avatar is available)
    const handleMouseMove = (e: MouseEvent) => {
      const charModel = document.querySelector('.character-model') as HTMLElement;
      if (charModel && window.innerWidth > 1024) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        charModel.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="landing-container">
        <div className="landing-info">
          <h3>Hello! I'm</h3>
        </div>
        <div className="landing-intro">
          <h2>{portfolioData.hero.title}</h2>
          <h1>{portfolioData.hero.subtitle}</h1>
        </div>
        <div className="landing-info-h2">
          <h4>A Software</h4>
          <h2 className="landing-h2-info">
            <span className="landing-h2-1">{portfolioData.hero.role1}</span>
            <span className="landing-h2-info-1">
              <span className="landing-h2-2"> {portfolioData.hero.role2}</span>
            </span>
          </h2>
        </div>
        <div className="character-rim"></div>
      </div>
      
      {/* 3D Character Target / Image Placeholder */}
      <div className="character-model">
        {/* Placeholder for Profile image or 3D character */}
        <div className="profile-image-placeholder">
           <div className="profile-glow"></div>
           {/* Replace with actual image <img src="/images/arshad.jpg" alt="Arshad Khan" /> */}
           <div className="profile-placeholder-text">Avatar / Profile Image Space</div>
        </div>
      </div>
      
      <div className="about-me">
        <a href="#about" data-cursor="disable">
          <span>About me</span>
        </a>
      </div>
    </>
  );
};

export default Landing;