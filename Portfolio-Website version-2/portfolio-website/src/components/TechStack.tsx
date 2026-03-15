import "./styles/TechStack.css";
import { portfolioData } from "../data/portfolio";

const TechStack = () => {
  // Split tech stack into two arrays for counter-scrolling marquees
  const halfLength = Math.ceil(portfolioData.techStack.length / 2);
  const row1 = portfolioData.techStack.slice(0, halfLength);
  const row2 = portfolioData.techStack.slice(halfLength);

  return (
    <div className="tech-section" id="tech">
      <div className="tech-title">
        <h2 className="title">Tools & Tech.</h2>
      </div>

      <div className="marquee-container" data-cursor="disable">
        {/* Row 1 - Left to Right */}
        <div className="marquee-row">
          <div className="marquee-wrapper">
            <div className="marquee-track left">
              {/* Duplicate array for seamless infinite scroll */}
              {[...row1, ...row1].map((tech, index) => (
                <div className="tech-item" key={`row1-${index}`}>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="marquee-row mt-4">
          <div className="marquee-wrapper">
            <div className="marquee-track right">
              {/* Duplicate array for seamless infinite scroll */}
              {[...row2, ...row2].map((tech, index) => (
                <div className="tech-item" key={`row2-${index}`}>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;