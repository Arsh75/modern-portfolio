import { portfolioData } from "../data/portfolio";
import "./styles/Career.css";

const Career = () => {
  return (
    <>
      <div className="career-section" id="career">
        <div className="career-section-in">
          <div className="career-title">
            <h2 className="title">Experience.</h2>
          </div>
          <div className="career-info">
            <div className="career-timeline">
               <div className="career-dot"></div>
            </div>
            {portfolioData.career.map((job, index) => (
              <div className="career-info-box" key={index}>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{job.role}</h4>
                    <h5>{job.company}</h5>
                  </div>
                  <h3>{job.year}</h3>
                </div>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;