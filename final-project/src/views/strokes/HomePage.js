import React from "react";
import LandingPage from "./LandingPage";
import Specifics from "./Specifics";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const strokeInfo = [
  {
    name: "Dot Stroke",
    chinese: "点",
    content:
      "A small, concise stroke that emphasizes precision and clarity. It conveys the importance of focus and energy, often starting with a press and lifting gracefully",
    pinyin: "Diǎn",
    img: "dian",
  },
  {
    name: "Horizontal Stroke",
    chinese: "横",
    content:
      "A straight line drawn from left to right. It represents balance and control in movement, typically starting with a light touch and then applying more pressure.",
    pinyin: "Héng",
    img: "heng",
  },
  {
    name: "Vertical Stroke",
    chinese: "竖",
    content:
      "A downward stroke that embodies strength and stability. The stroke begins firmly at the top and flows steadily downward.",
    pinyin: "Shù",
    img: "shu",
  },
  {
    name: "Hook Stroke",
    chinese: "勾",
    content:
      "A curved stroke that concludes with a distinct hook. It emphasizes precision and the ability to turn obstacles into opportunities.",
    pinyin: "Gōu",
    img: "gou",
  },
  {
    name: "Turning Stroke",
    chinese: "提",
    content:
      "An upward stroke that signifies energy and uplift. It typically starts light and gathers strength as it ascends.",
    pinyin: "Tí",
    img: "ti",
  },
  {
    name: "Falling Stroke",
    chinese: "捺",
    content:
      "A stroke that moves downward and to the right, representing decisiveness and determination. The stroke begins with a light touch and then moves downward and to the right.",
    pinyin: "Nà",
    img: "na",
  },
  {
    name: "Slanting Stroke",
    chinese: "撇",
    content:
      "A stroke that moves from top to bottom and right to left, representing speed and agility. The stroke begins with a light touch and then moves quickly downward and to the left.",
    pinyin: "Piě",
    img: "pie",
  },
  {
    name: "Curving Stroke",
    chinese: "弯",
    content:
      "A stroke that moves in a curved motion, representing fluidity and grace. The stroke begins with a light touch and then curves smoothly.",
    pinyin: "Wān",
    img: "wan",
  },
];

function HomePage() {
  useGSAP(() => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
  });
  return (
    <div>
      <main>
        <LandingPage />
        {/* <div className="line"></div> */}
        <Specifics info={strokeInfo} />
      </main>
    </div>
  );
}

export default HomePage;
