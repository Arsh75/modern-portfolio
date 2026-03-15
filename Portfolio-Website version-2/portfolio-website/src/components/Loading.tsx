import { useEffect, useRef, useState } from "react";
import { initialFX } from "./utils/initialFX";
import "./styles/Loading.css";


const Loading = ({ percent }: { percent: number }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${percent}%`;
    }
  }, [percent]);

  useEffect(() => {
    if (percent >= 100) {
      setClicked(true); 
      setTimeout(() => {
        initialFX();
      }, 900);
      // Hide the loading screen after the expand animation completes
      setTimeout(() => {
        setHidden(true);
      }, 1800);
    }
  }, [percent]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className={`loading-header ${hidden ? "loading-hidden" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          AK
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className={`loading-screen ${hidden ? "loading-hidden" : ""}`}>
        <div className="loading-marquee">
          <div className="loading-marquee-track">
            <span> Software Engineer</span> <span>Analyst</span>
            <span> Software Engineer</span> <span>Analyst</span>
            <span> Software Engineer</span> <span>Analyst</span>
            <span> Software Engineer</span> <span>Analyst</span>
          </div>
        </div>
        <div
          className={`loading-wrap ${percent >= 100 ? "loading-clicked" : ""}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-progress">
            <div className="loading-bar-label">Loading {percent}%</div>
            <div className="loading-bar">
              <div className="loading-bar-in" ref={progressRef}></div>
            </div>
          </div>
          {percent >= 100 && (
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Loading;