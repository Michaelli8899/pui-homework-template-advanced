import React from "react";
import { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackButton from "../partials/BackButton";

const text = {
  //all the information in JSON format
  0: [
    {
      title: "Dynasty: Shang 商",
      content:
        "Oracle Bone Script or 甲骨文 (jia gu wen)  is the earliest known form of Chinese writing, Oracle Bone Script was carved on turtle shells and ox bones used for divination. These characters are pictographic and represent the origins of Chinese script.",
    },
    {
      title: "Key Characteristic",
      content:
        "Simple and Pictographic: Characters in 甲骨文 are highly pictorial, with many resembling simplified depictions of objects, animals, or human activities, making it possible to see the early visual representations that later evolved into more abstract forms.",
    },
    {
      content:
        "Angular and Straight Lines: The characters are primarily made up of angular strokes, likely due to the difficulty of carving into bone and shell. This gave the script a distinctive, sharp look.",
    },
    {
      title: "Character for Fish",
      content:
        "This Displays the Oracle Script for Fish. the character is represented as a simple pictograph that captured the basic physical features of a fish. This ancient script depicted the fish with a few distinctive, stylized elements:",
    },
    {
      title: "Body:",
      content:
        "The body was an elongated oval shape, symbolizing the main shape of a fish’s body.",
    },
    {
      title: "Tail:",
      content:
        "A split, fan-like shape was added to one end to represent the tail fin.",
    },
    {
      title: "Fins:",
      content:
        "Lines or small notches extended from the top and bottom of the body to represent fins.",
    },
    {
      title: "Head and Eye:",
      content:
        "At the front, a small mark or circle indicated the head or eye, giving the pictograph a clear orientation",
    },
  ],
  1: [
    {
      title: "Dynasty: Shang 商 & Zhou 周",
      content:
        "金文 (Jīnwén), or Bronze Script, is an ancient form of Chinese writing commonly inscribed on bronze vessels, weapons, and ceremonial objects, often used for rituals or to commemorate significant events. The characters in 金文 are more intricate and expressive compared to earlier scripts, like Oracle Bone Script, reflecting artistic detail and stylistic freedom.",
    },
    {
      title: "Key Characteristic",
      content:
        "Aesthetic and Expressive: The characters in Bronze Script often feature sweeping curves and more rounded forms than the angular shapes seen in Oracle Bone Script. This made it more visually elaborate",
    },
    {
      content:
        "Size and Layout Variability: Inscriptions in 金文 varied in size and orientation, adapting to the shape of the bronze object, which gave it a more flexible, less standardized appearance.",
    },
    {
      title: "Character for Fish",
      content:
        "The character for fish (鱼, yú) evolved from the earlier pictorial style of Oracle Bone Script to a slightly more stylized and elongated form. This stage retained recognizable features but was adapted for inscriptions on bronze vessels, where it needed to be more structured and visually balanced:",
    },
    {
      title: "Body:",
      content:
        "The body became a longer, more streamlined shape, often thicker in the middle and tapering toward the ends, representing the natural form of a fish.",
    },
    {
      title: "Tail:",
      content:
        "The tail was still depicted with a split or forked design at the end, but the shape was more angular and less curved compared to the Oracle Bone version, giving it a more formal appearance.",
    },
    {
      title: "Fins:",
      content:
        "The fins on the top and bottom were represented by small, subtle marks or angled lines, indicating a simplification of detail while retaining the essential elements.",
    },
    {
      title: "Head and Eye:",
      content:
        "The head was more integrated into the body with a simple rounded or small circular mark to represent the eye, creating a smoother, continuous form.",
    },
  ],
  2: [
    {
      Title: "Dynasty: Qin 秦 (221–206 BCE)",
      content:
        "Script Name: Seal Script (篆书, Zhuànshū) was standardized during the Qin Dynasty under Emperor Qin Shi Huang. This script was used on official seals, inscriptions, and stone carvings. Seal Script marked a significant evolution towards a more standardized form of Chinese writing and laid the foundation for later scripts.",
    },
    {
      title: "Key Characteristics",
      content:
        "Rounded and Curvilinear: Seal Script is characterized by smooth, flowing lines and rounded forms, making the characters appear more elegant and decorative compared to earlier scripts.",
    },
    {
      content:
        "Symmetrical and Balanced: Each character is carefully structured, with symmetrical strokes and balanced proportions, giving it a sense of harmony and formality.",
    },
    {
      content:
        "Uniform Stroke Thickness: Unlike later scripts, Seal Script maintains a consistent thickness in each stroke, which makes it ideal for carving into stone or metal.",
    },
    {
      title: "Character for Fish",
      content:
        "The character for fish (鱼, yú) in Seal Script represents an evolution from the earlier pictorial styles of Oracle Bone Script and Bronze Script to a more refined and decorative form. This stage of the script retained the recognizable features of a fish while adapting them into smooth, curvilinear shapes that emphasized symmetry and balance, making it suitable for carving on seals and stone inscriptions:",
    },
    {
      title: "Body:",
      content:
        "The body is elongated and slender, with smooth curves and a vertically oriented, rounded shape that reflects the script's elegance.",
    },
    {
      title: "Tail:",
      content:
        "The tail is represented by a rounded, symmetrical shape with two small upward curves, adding a graceful finish.",
    },
    {
      title: "Fins:",
      content:
        "The fins are depicted as subtle, short curves on either side of the body, contributing to the balanced structure.",
    },
    {
      title: "Head and Eye:",
      content:
        "The eye is a small dot near the top, incorporated seamlessly into the flowing form, adding to the unity and decorative quality of the character.",
    },
  ],
  3: [
    {
      title: "Dynasty: Han 汉 (206 BCE–220 CE)",
      content:
        "Script Name: Clerical Script (隶书, Lìshù was developed during the Han Dynasty for official and administrative purposes. It was designed for practicality, allowing for faster writing and easier reading. Clerical Script marked the shift from decorative to functional writing styles.",
    },
    {
      title: "Key Characteristics",
      content:
        "Flat, Horizontal Emphasis: Strokes are often flatter and wider, giving the characters a squat appearance. The script places emphasis on horizontal lines.",
    },
    {
      content:
        "Angular and Structured: Clerical Script is more angular and has pronounced corners, with each stroke clearly defined, making it highly legible.",
    },
    {
      content:
        "Simplicity and Standardization: Strokes are simplified, and the script is less pictographic than earlier forms, reflecting its use for bureaucratic documentation.",
    },
    {
      title: "Character for Fish",
      content:
        "The character for fish (鱼, yú) in Clerical Script represents a significant transition from the rounded, flowing forms of Seal Script to a more angular and flattened style. This stage simplified the character while emphasizing horizontal strokes, making it more practical for writing with a brush and suitable for everyday use:",
    },
    {
      title: "Body:",
      content:
        "The body is rectangular, with flatter, wider strokes that create a sturdy, compact shape.",
    },
    {
      title: "Tail:",
      content:
        "The tail is angular, represented by two short strokes or hooks, reflecting the script's practical, standardized style.",
    },
    {
      title: "Fins:",
      content:
        "The fins are simple, short horizontal lines on either side, with a focus on clarity and ease of execution.",
    },
    {
      title: "Head and Eye:",
      content:
        "The eye is a small dot, positioned near the top, minimized for simplicity while maintaining recognition of the character.",
    },
  ],
  4: [
    {
      title: "Dynasty: Han 汉 and onward (206 BCE–Present)",
      content:
        "Script Name: Cursive Script (草书, Cǎoshū) was developed alongside Clerical Script for informal writing. Known for its speed and artistic expression, Cursive Script allows for quicker strokes and is less concerned with legibility than with fluidity and spontaneity.",
    },
    {
      title: "Key Characteristics",
      content:
        "Flowing and Continuous: Strokes are often connected, with characters written in a single, flowing motion, which emphasizes speed over clarity.",
    },
    {
      content:
        "Abbreviated Forms: Characters are simplified, with some strokes omitted or merged, creating a more abstract appearance.",
    },
    {
      content:
        "Expressive and Free-Form: Cursive Script allows for personal style, with each calligrapher interpreting characters in their own way, often sacrificing structure for artistic flair.",
    },
    {
      title: "Character for Fish",
      content:
        "The character for fish (鱼, yú) in Cursive Script represents a highly stylized and fluid evolution from earlier forms. This script prioritizes speed and efficiency, with strokes that flow seamlessly into one another, creating a dynamic and expressive appearance",
    },
    {
      title: "Body:",
      content:
        "The body is reduced to a single, sweeping line or curve, with minimal detail to allow for quick execution.",
    },
    {
      title: "Tail:",
      content:
        "The tail is often a simple flick or curve at the end, hinting at its shape without clear separation.",
    },
    {
      title: "Fins:",
      content:
        "The fins may be implied through slight curves or omitted altogether for simplicity.",
    },
    {
      title: "Head and Eye:",
      content:
        "The eye is either a small mark or suggested by the flow of the line, emphasizing movement over distinct details.",
    },
  ],
  5: [
    {
      title: "Dynasty: Han 汉 and onward (206 BCE–Present)",
      content:
        "Script Name: Running Script (行书, Xíngshū) is a semi-cursive style that combines elements of both Regular and Cursive scripts. It is less formal than Regular Script but maintains more structure than Cursive, making it both practical and expressive.",
    },
    {
      title: "Key Characteristics",
      content:
        "Smooth and Connected Strokes: Strokes are often linked, creating a fluid appearance that balances speed and legibility.",
    },
    {
      content:
        "Simplified but Recognizable: Characters are simplified without sacrificing overall shape, making Running Script legible yet efficient.",
    },
    {
      content:
        "Expressive Movement: Running Script allows for personal interpretation, with an emphasis on the rhythm and flow of the brush.",
    },
    {
      title: "Character for Fish",
      content:
        "The character for fish (鱼, yú) in Running Script represents a balance between the structured form of Clerical Script and the fluidity of Cursive Script. This style maintains the character's clarity while incorporating smoother, more connected strokes for faster writing:",
    },
    {
      title: "Body:",
      content:
        "The body is slightly elongated and connected with flowing lines, preserving the general structure of the character.",
    },
    {
      title: "Tail:",
      content:
        "he tail is a quick flick or curved stroke, blended into the end of the character for a smooth transition.",
    },
    {
      title: "Fins:",
      content:
        "The fins are represented by short, subtle marks, maintaining the overall shape but with less detail.",
    },
    {
      title: "Head and Eye:",
      content:
        "The eye may be a small dot or implied by the flow, capturing the essence of the character with minimal strokes.",
    },
  ],
  6: [
    {
      title: "Dynasty: Wei 魏 to Tang 唐 (220–907 CE)",
      content:
        "Script Name: Regular Script (楷书, Kǎishū) became fully developed by the Tang Dynasty and remains the most standardized and widely used script in modern Chinese. It is known for its precision, clarity, and balanced structure.",
    },
    {
      title: "Key Characteristics",
      content:
        "Clear and Defined Strokes: Each stroke is carefully separated and distinct, making Regular Script easy to read and highly legible.",
    },
    {
      content:
        "Standardized Form: Characters are well-proportioned with consistent rules for stroke order and spacing.",
    },
    {
      content:
        "Balanced Structure: Regular Script is balanced and symmetrical, with attention to detail in each stroke's thickness and angle.",
    },
    {
      title: "Character for Fish",
    },
    {
      title: "Body:",
      content:
        "The body is compact, rectangular, and evenly proportioned, with each stroke meticulously placed.",
    },
    {
      title: "Tail:",
      content:
        "The tail is two short, symmetrical strokes at the bottom, positioned with precision for a balanced look.",
    },
    {
      title: "Fins:",
      content:
        "The fins are small horizontal lines on either side, distinct and well-placed to maintain clarity.",
    },
    {
      title: "Head and Eye:",
      content:
        "The eye is a small dot or line near the top, subtle but clearly defined, adding to the character’s clean and organized appearance.",
    },
  ],
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Sidebar component
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  // handle when the user clicks on the sidebar element
  // finds out which item is pressed
  handleClick = (e) => {
    const ALL_TYPES = [
      "Oracle Bone Script",
      "Bronze Inscription",
      "Seal Script",
      "Clerical Script",
      "Cursive Script",
      "Running Script",
      "Regular Script",
    ];
    const idx = ALL_TYPES.indexOf(e.target.textContent);
    this.handleScrollTo(e, idx);
  };

  // handle scroll to a specific section of the page
  handleScrollTo = (e, idx) => {
    let to = `#history-${idx}`;
    const id = parseInt(e.target.classList[0]);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: to, offsetY: -100 },
      ease: "power2.inOut",
    });
  };

  render() {
    //if there are three chinese characters
    const THREE = this.props.chinese[2] !== "_";
    // small sidebar component
    const small = (
      <div className="side-bar">
        <div onClick={(e) => this.handleClick(e)}>
          <h2 className={`${this.props.id} side-bar-small-title`}>
            {this.props.name}
          </h2>
          {THREE && (
            <h3
              lang = 'zh' className={`${this.props.id} side-bar-small-title chinese-char`}
            >
              {this.props.chinese[0]}
              {this.props.chinese[1]}
              {this.props.chinese[2]}
            </h3>
          )}
          {!THREE && (
            <h3
            lang = 'zh' className={`${this.props.id} side-bar-small-title chinese-char`}
            >
              {this.props.chinese[0]}
              {this.props.chinese[1]}
            </h3>
          )}
        </div>
      </div>
    );

    //large sidebar component with more information
    const large = (
      <div className="side-bar-large">
        <div>
          <h2 className="side-bar-large-title">{this.props.name}</h2>
          <h2 className="side-bar-medium-title">{this.props.timeframe}</h2>
          <div className="side-bar-chinese">
            <div className="side-bar-name">
              {this.props.chinese.map((char, idx) => {
                const display =
                  char === "_" ? { color: "rgb(0, 0, 0, 0)" } : {};
                return (
                  <h1
                    lang = 'zh' 
                    className="side-bar-large-title chinese-char"
                    key={idx}
                    style={display}
                  >
                    {char}
                  </h1>
                );
              })}
            </div>
            <div className="side-bar-name">
              {this.props.pinyin.map((char, idx) => {
                const display =
                  char === "_" ? { color: "rgb(0, 0, 0, 0)" } : {};
                return (
                  <h2
                    className="side-bar-medium-title"
                    key={idx}
                    style={display}
                  >
                    {char}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
    // set the returned component dynamically based on the size
    const title = this.props.size === "small" ? small : large;
    
    return <div className="full-side-bar">{title}</div>;
  }
}

// content component of each time period
class MainContent extends Component {
  executeScroll = () => this.myRef.current.scrollIntoView();

  render() {
    return (
      <div className="history-main-content" id={`history-${this.props.id}`}>
        <div className={`history-img${this.props.id} history-main-img`}>
          <img
            src={`${process.env.PUBLIC_URL}/text-img/${this.props.id}.png`}
            className={`img${this.props.id}`}
            alt={this.props.alt}
          />
        </div>

        <div className={`history-text${this.props.id} history-scrolling-text`}>
          {text[this.props.id].map((chunk, idx) => {
            const title = chunk.title && (
              <h1 className="bold">{chunk.title}</h1>
            );
            const content = chunk.content && <p>{chunk.content}</p>;
            return (
              <div className="chunk" key={idx}>
                {title}
                {content}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// main component
function HomePage(props) {
  // setting which timeline is currently in view, start with the first one
  const [timeline, setTimeline] = React.useState([
    "large",
    "small",
    "small",
    "small",
    "small",
    "small",
    "small",
  ]);
  const [currTime, setCurrTime] = React.useState(-1);
  //constant for how many timeperiods there are
  const TIMELINES = [0, 1, 2, 3, 4, 5, 6];

  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      const element = location.hash;
      gsap.to(window, { duration: 1, scrollTo: { y: element, offsetY: -50 } });
    }
  }, [location.hash]);

  useGSAP(() => {
    // set all images to be invisible at first
    for (let i = 1; i < 7; i++) {
      gsap.to(`.history-img${i}`, {
        opacity: 0,
      });
    }

    //setting a function that creates a GSAP timeline triggered by the text element
    //the timeline will set the `timeline` and `currTime` variable on scroll
    function createTimeline(imgID, isAppear) {
      let tl;
      if (isAppear) {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.history-text${imgID}`,
            start: "top top",
            end: "20% top",
            scrub: true,
            toggleActions: "restart none none none",
            onEnter: () => {
              setCurrTime(imgID);
              let timeline = [
                "small",
                "small",
                "small",
                "small",
                "small",
                "small",
                "small",
              ];
              timeline[imgID] = "large";
              setTimeline(timeline);
            },
            onLeaveBack: (self) => {
              if (imgID !== 0) {
                setCurrTime(imgID - 1);
                let timeline = [
                  "small",
                  "small",
                  "small",
                  "small",
                  "small",
                  "small",
                  "small",
                ];
                timeline[imgID] = "large";
                setTimeline(timeline);
              }
            },
            toggleClass: "show",
          },
        });
      } else {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.history-text${imgID + 1}`,
            start: "top top",
            end: "40% top",
            scrub: true,
            toggleActions: "restart none none pause",
            onLeave: (self) => {
              if (imgID !== 6) {
                setCurrTime(imgID + 1);
                let timeline = [
                  "small",
                  "small",
                  "small",
                  "small",
                  "small",
                  "small",
                  "small",
                ];
                timeline[imgID] = "large";
                setTimeline(timeline);
              }
            },
            onEnterBack: () => {
              setCurrTime(imgID);
              let timeline = [
                "small",
                "small",
                "small",
                "small",
                "small",
                "small",
                "small",
              ];
              timeline[imgID] = "large";
              setTimeline(timeline);
            },
          },
        });
      }
      return tl;
    }
    // loop through all the images and execute the timeline for each image
    // adjust the opacity of the image based on the scroll position
    for (let i = 0; i < 7; i++) {
      createTimeline(i, true).fromTo(
        `.history-img${i}`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      if (i !== 6) {
        createTimeline(i, false).fromTo(
          `.history-img${i}`,
          {
            opacity: 1,
          },
          {
            opacity: 0,
          }
        );
      }
    }
  });

  return (
    <div>
      <main>
        <div className="verticle-line">
          <BackButton link="history" />
          <ul className="history-detail-side-bar">
            {props.timeline.map((item, idx) => {
              let size = currTime === idx ? "large" : "small";
              const ordering = {
                order: -1,
              };
              if (size === "large") {
                return (
                  <li key={idx} id={idx} style={ordering}>
                    <SideBar
                      size={size}
                      chinese={item.chinese}
                      name={item.name}
                      pinyin={item.pinyin}
                      timeframe={item.timeframe}
                      setCurrTime={setCurrTime}
                      setTimeline={setTimeline}
                    />
                  </li>
                );
              }
            })}
            {props.timeline.map((item, idx) => {
              let bold = currTime === idx ? "bold" : "";
              let fontSize;
              if (currTime === idx) {
                fontSize = {
                  fontSize: "5vh",
                  backgroundColor: "black",
                };
              } else {
                fontSize = {
                  fontSize: "2vh",
                };
              }

              return (
                <li key={idx} id={idx} style={fontSize}>
                  <SideBar
                    size={"small"}
                    chinese={item.chinese}
                    name={item.name}
                    pinyin={item.pinyin}
                    timeframe={item.timeframe}
                    setCurrTime={setCurrTime}
                    setTimeline={setTimeline}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        {TIMELINES.map((time, idx) => {
          return (
            <MainContent key={idx} id={time} alt={props.timeline[time].name} />
          );
        })}
      </main>
    </div>
  );
}

export default HomePage;
