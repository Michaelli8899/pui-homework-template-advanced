import react, { Component } from "react";

import Navbar from "../partials/NavBar";
import TimeLine from "./TimeLine";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextAnimation from "./TextAnimation";
import ReadMore from "../partials/ReadMore";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const LandingPage = () => {
  return (
    <div className="landing">
      <h1 className="main-title margin-bottom-title">
        Development of Chinese Characters
      </h1>
      <TextAnimation />
      <ReadMore
        content="Scroll to Read More"
        link="#timeline-start"
        direction="down"
      />
    </div>
  );
};

const HomePage = (props) => {
    useGSAP(() => {
        // scroll to top
        gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
    });
  return (
    <div>
      <main>
        <LandingPage />
        <div id="timeline">
          <TimeLine timeline={props.timeline} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
