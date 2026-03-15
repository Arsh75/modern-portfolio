import { portfolioData } from "../data/portfolio";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <>
      <div className="whatIDO" id="what-i-do">
        <div className="what-box">
          <div className="what-box-in">
            <div className="what-border1"></div>
            <div className="what-border2"></div>
            <div className="what-content">
              <span>{portfolioData.skills.frontend.title}</span>
              <h2>{portfolioData.skills.frontend.subtitle}</h2>
              <p>{portfolioData.skills.frontend.description}</p>
              <div className="tech-tags">
                {portfolioData.skills.frontend.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="what-content-c">
              <div className="what-cube-1"></div>
              <div className="what-cube-2"></div>
              <div className="what-cube-3"></div>
              <div className="what-cube-4"></div>
            </div>
          </div>
        </div>

        <div className="what-box">
          <div className="what-box-in">
            <div className="what-border1"></div>
            <div className="what-border2"></div>
            <div className="what-content">
              <span>{portfolioData.skills.backend.title}</span>
              <h2>{portfolioData.skills.backend.subtitle}</h2>
              <p>{portfolioData.skills.backend.description}</p>
              <div className="tech-tags">
                {portfolioData.skills.backend.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="what-content-c">
              <div className="what-cube-1"></div>
              <div className="what-cube-2"></div>
              <div className="what-cube-3"></div>
              <div className="what-cube-4"></div>
            </div>
          </div>
        </div>

        <div className="what-box">
          <div className="what-box-in">
            <div className="what-border1"></div>
            <div className="what-border2"></div>
            <div className="what-content">
              <span>{portfolioData.skills.data.title}</span>
              <h2>{portfolioData.skills.data.subtitle}</h2>
              <p>{portfolioData.skills.data.description}</p>
              <div className="tech-tags">
                {portfolioData.skills.data.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="what-content-c">
              <div className="what-cube-1"></div>
              <div className="what-cube-2"></div>
              <div className="what-cube-3"></div>
              <div className="what-cube-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;