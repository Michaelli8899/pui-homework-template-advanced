import React from "react";
import { Component } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackButton from "../partials/BackButton";

const text = [
  {
    title: "Dynasty: Shang 商",
    content: [
      `Oracle Bone Script or 甲骨文 (jia gu wen)  is the earliest known form of Chinese 
writing, Oracle Bone Script was carved on turtle shells and 
ox bones used for divination. These characters are pictographic
and represent the origins of Chinese script.`,
    ],
  },

  {
    title: "Key Characteristics",
    content: [
      `Simple and Pictographic: Characters in 甲骨文 are highly pictorial, with many 
resembling simplified depictions of objects, animals, or human activities, making 
it possible to see the early visual representations that later evolved into more 
abstract forms.`,

      `Angular and Straight Lines: The characters are primarily made up of angular strokes, 
likely due to the difficulty of carving into bone and shell. This gave the script a distinctive, sharp look.`,
    ],
  },

  {
    title: 'Disecting the "Fish" Character',
    content: [
      `Body: The body was an elongated oval shape, symbolizing the main shape of a fish's body.`,
    ],
  },
  {
    content: [
      "Tail: A split, fan-like shape was added to one end to represent the tail fin.",
    ],
  },
  {
    content: [
      "Fins: Lines or small notches extended from the top and bottom of the body to represent fins.",
    ],
  },
  {
    content: [
      "Head and Eye: At the front, a small mark or circle indicated the head or eye, giving the pictograph a clear orientation",
    ],
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleClick = (e) => {
    const ALL_TYPES = [ "Oracle Bone Script", 
                        "Bronze Inscription", 
                        "Seal Script", 
                        "Clerical Script", 
                        "Cursive Script", 
                        "Running Script", 
                        "Regular Script"];
    const idx = ALL_TYPES.indexOf(e.target.textContent);
    this.handleScrollTo(e, idx);
  };

  handleScrollTo = (e, idx) => {
    let to = `#history-${idx}`;
    const id = parseInt(e.target.classList[0]);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: to, offsetY: -50 },
      ease: "power2.inOut",
    });
  };

  render() {
    const small = (
      <div className="side-bar">
        <div onClick={(e) => this.handleClick(e)}>
          <h2 className={`${this.props.id} side-bar-small-title`}>
            {this.props.name}
          </h2>
          <p className={`${this.props.id} side-bar-small-title chinese-char`}>
            {this.props.chinese[0]}
            {this.props.chinese[1]}
            {this.props.chinese[2]}
          </p>
        </div>
      </div>
    );
    const large = (
      <div className="side-bar-large">
        <div>
          <h2 className="side-bar-large-title">{this.props.name}</h2>
          <h2 className="side-bar-medium-title">{this.props.timeframe}</h2>
          <div className="side-bar-chinese">
            <div className="side-bar-name">
              {this.props.chinese.map((char, idx) => {
                return (
                  <p className="side-bar-large-title chinese-char" key={idx}>
                    {char}
                  </p>
                );
              })}
            </div>
            <div className="side-bar-name">
              {this.props.pinyin.map((char, idx) => {
                return (
                  <p className="side-bar-medium-title" key={idx}>
                    {char}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
    const title = this.props.size === "small" ? small : large;

    return <div className="full-side-bar">{title}</div>;
  }
}

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  executeScroll = () => this.myRef.current.scrollIntoView();

  componentDidMount() {
    fetch(`./history-text/${this.props.id}.txt`)
      .then((r) => r.text())
      .then((text) => {
        this.setState({ text: text });
      });
  }

  render() {
    return (
      <div className="history-main-content" id={`history-${this.props.id}`}>
        <div className={`history-img${this.props.id} history-main-img`}>
          <img
            src={`${process.env.PUBLIC_URL}/text-img/${this.props.id}.png`}
            className={`img${this.props.id}`}
          />
        </div>

        <div className={`history-text${this.props.id} history-scrolling-text`}>
          {text.map((chunk, idx) => {
            const title = chunk.title && (
              <h1 className="bold">{chunk.title}</h1>
            );
            return (
              <div className="chunk" key={idx}>
                {title}
                {chunk.content.map((para, idx) => {
                  return <p key={idx}>{para}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function HomePage(props) {
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

  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      console.log(location.hash);
      const element = location.hash;
      gsap.to(window, { duration: 1, 
                        scrollTo: { y: element, offsetY: -50 }});
    }
  }, [location.hash]);

  useGSAP(() => {
    for (let i = 1; i < 7; i++) {
      gsap.to(`.history-img${i}`, {
        opacity: 0,
      });
    }

    function createTimeline(imgID, isAppear) {
      let tl;
      if (isAppear) {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.history-text${imgID}`,
            start: "top top",
            end: "center top",
            scrub: true,
            markers: true,
            toggleActions: "restart none none none",
            // snap: 0.5,
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
            markers: true,
            toggleActions: "restart none none pause",
            // snap: 0.5,
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
          <BackButton link = 'history'/>
          <ul className = 'history-detail-side-bar'>
            {props.timeline.map((item, idx) => {
              let size = currTime === idx ? "large" : "small"
              const ordering = {
                order: -1,
              }
              if (size === 'large') {
                return (
                  <li key={idx} id={idx} style = {ordering}>
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
                )
              }
            })}
            {props.timeline.map((item, idx) => {
              let bold = currTime === idx ? "bold" : ""
              let fontWeight;
              if (currTime === idx) {
                fontWeight = {
                  fontSize: '2vh',
                }
              }else{
                fontWeight = {
                  ffontSize: '2.5vh',
                }
              }

              return (
                <li key={idx} id={idx} style = {fontWeight}>
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

        <MainContent id={"0"} />
        <MainContent id={"1"} />
        <MainContent id={"2"} />
        <MainContent id={"3"} />
        <MainContent id={"4"} />
        <MainContent id={"5"} />
        <MainContent id={"6"} />
      </main>
    </div>
  );
}

export default HomePage;
