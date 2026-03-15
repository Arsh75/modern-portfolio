import { useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { portfolioData } from "../data/portfolio";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  useEffect(() => {
    const magneticBtns = document.querySelectorAll(".magnetic-btn");

    magneticBtns.forEach((btn) => {
      const text = btn.querySelector(".btn-text") as HTMLElement;
      btn.addEventListener("mousemove", (e) => {
        const mouseEvent = e as MouseEvent;
        const rect = btn.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;

        (btn as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        if (text) {
          text.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        }
      });

      btn.addEventListener("mouseleave", () => {
        (btn as HTMLElement).style.transform = `translate(0px, 0px)`;
        if (text) {
          text.style.transform = `translate(0px, 0px)`;
        }
      });
    });
  }, []);

  return (
    <div className="icons-section">
      <a
        href={portfolioData.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="magnetic-btn"
        data-cursor="disable"
      >
        <span className="btn-text">
          <FiGithub size={20} />
        </span>
      </a>
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="magnetic-btn"
        data-cursor="disable"
      >
        <span className="btn-text">
          <FiLinkedin size={20} />
        </span>
      </a>
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="magnetic-btn"
        data-cursor="disable"
      >
        <span className="btn-text">
          <FiMail size={20} />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;