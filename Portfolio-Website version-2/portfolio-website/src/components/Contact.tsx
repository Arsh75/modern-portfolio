import { portfolioData } from "../data/portfolio";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-in">
          <div className="contact-title">
            <h2 className="title">Get in touch.</h2>
          </div>
          <div className="contact-info">
            <div className="contact-text">
              <p>
                Have a project in mind or want to collaborate? Feel free to
                reach out, and let's bring your ideas to life!
              </p>
            </div>
            <div className="contact-links">
              <a 
                href={`mailto:${portfolioData.contact.email}`} 
                className="contact-btn"
                data-cursor="disable"
              >
                Say Hello
              </a>
              <div className="social-links-mobile">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} {portfolioData.hero.title}. All rights reserved.</p>
          <a href="#home" className="back-to-top" data-cursor="disable">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
