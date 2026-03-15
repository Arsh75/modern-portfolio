import { portfolioData } from "../data/portfolio";
import "./styles/About.css";

const About = () => {
  return (
    <>
      <div className="about-section" id="about">
        <div className="about-in">
          <div className="about-in-info">
            <h2 className="title">About me.</h2>
          </div>
          <p className="para">{portfolioData.about.description}</p>
          <div className="about-btn-wrap para">
            <p>{portfolioData.about.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;