import gsap from "gsap";
import { useEffect } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  useEffect(() => {
    let cursor = document.getElementById("cursor");
    let cursorText = document.getElementById("cursor-text");
    let cursorCircle = document.getElementById("cursor-circle");

    if (window.innerWidth > 1024) {
      if (cursor) cursor.style.display = "flex";
      let cursorVisible = false;

      window.addEventListener("pointermove", (e) => {
        if (!cursorVisible && cursor) {
          cursor.style.opacity = "1";
          cursorVisible = true;
        }

        const target = e.target as HTMLElement;
        const state = target.getAttribute("data-cursor");

        if (state === "disable") {
          cursor?.classList.add("cursor-disable");
        } else {
          cursor?.classList.remove("cursor-disable");
        }
        
        if (state === "Work") {
          if (cursorText) cursorText.innerHTML = "View <br> Work";
          cursor?.classList.add("cursor-expand");
          cursorCircle?.classList.add("cursor-circle-hide");
        } else {
          if (cursorText) cursorText.innerHTML = "";
          cursor?.classList.remove("cursor-expand");
          cursorCircle?.classList.remove("cursor-circle-hide");
        }

        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });
      });

      document.addEventListener("mouseleave", () => {
        if (cursor) cursor.style.opacity = "0";
        cursorVisible = false;
      });
      
      document.addEventListener("mouseenter", () => {
        if (cursor) cursor.style.opacity = "1";
        cursorVisible = true;
      });
    }
  }, []);

  return (
    <>
      <div id="cursor" className="cursor">
        <div id="cursor-text" className="cursor-text"></div>
        <div id="cursor-circle" className="cursor-circle"></div>
      </div>
    </>
  );
};

export default Cursor;