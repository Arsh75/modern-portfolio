import { useState, useRef, useEffect } from "react";
import { portfolioData } from "../data/portfolio";
import WorkImage from "./WorkImage";
import "./styles/Work.css";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = portfolioData.projects.length;
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-title">
        <h2 className="title">Selected works.</h2>
      </div>

      <div className="work-carousel-container">
        <div className="work-slider-window" data-cursor="Work">
          <div className="work-slider-track" ref={sliderRef}>
            {portfolioData.projects.map((project, index) => (
              <div className="work-slide" key={index}>
                <div className="work-slide-content">
                  <div className="work-info">
                    <h4>{project.category}</h4>
                    <h2>{project.title}</h2>
                    <p className="work-tools">{project.tools}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn"
                        data-cursor="disable"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  <div className="work-image-wrapper">
                    <WorkImage index={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-controls">
          <button
            className="work-arrow work-prev"
            onClick={handlePrev}
            data-cursor="disable"
            aria-label="Previous project"
          >
            ←
          </button>
          
          <div className="work-dots" data-cursor="disable">
            {portfolioData.projects.map((_, index) => (
              <button
                key={index}
                className={`work-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button
            className="work-arrow work-next"
            onClick={handleNext}
            data-cursor="disable"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;