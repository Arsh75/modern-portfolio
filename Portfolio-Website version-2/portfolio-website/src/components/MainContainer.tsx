import { useEffect, useState } from "react";
import setSplitText from "./utils/splitText";
import { setAllTimeline } from "./utils/gsapScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../context/LoadingProvider";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  const [init, setInit] = useState(false);
  const { isLoading } = useLoading();

  useEffect(() => {
    if (!isLoading) {
      if (!init) {
        setAllTimeline();
        setSplitText();
        setInit(true);
      } else {
        ScrollTrigger.refresh(true);
      }
    }
  }, [init, isLoading]);

  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </main>
  );
};

export default MainContainer;