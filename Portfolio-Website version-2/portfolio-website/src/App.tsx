import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import MainContainer from "./components/MainContainer";
import Landing from "./components/Landing";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Career from "./components/Career";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { useLoading, LoadingProvider } from "./context/LoadingProvider";
import { ReactLenis } from 'lenis/react'
import "./App.css";

const Content = () => {
  const { loadingPercent } = useLoading();
  return (
    <>
      <Loading percent={loadingPercent} />
      <Cursor />
      <Navbar />
      <SocialIcons />
      <MainContainer>
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStack />
        <Contact />
      </MainContainer>
    </>
  );
};

function App() {
  return (
    <ReactLenis root>
      <LoadingProvider>
        <Content />
      </LoadingProvider>
    </ReactLenis>
  );
}

export default App;
