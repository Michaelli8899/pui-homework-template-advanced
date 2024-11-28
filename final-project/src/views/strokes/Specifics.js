import Button from "../partials/Button";

import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { Link, Outlet, useLocation, ScrollRestoration } from "react-router-dom";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Specifics(props) {

  useGSAP(() => {
    gsap.to(window, {duration: 0.1, scrollTo: 0});
    let length = 8;
    for (let i = 1; i < length; i++) {
        gsap.to(`.img-specifics-${i}`, {
          opacity: 0,
        });
    }

    function createTimeline(idx, isAppear) {
        let tl;
        if (isAppear) {
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: `.txt-specifics-${idx}`,
              start: "top 90%",
              end: "end end",
              scrub: true,
              markers: true,
              toggleActions: "restart none none none",
              toggleClass: "show",
            },
          });
        } else {
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: `.txt-specifics-${idx+1}`,
              start: "top top",
              end: "40% top",
              scrub: true,
              markers: true,
              toggleActions: "restart none none pause",
            },
          });
        }
        return tl;
    }
    for (let i = 0; i < length; i++) {
        createTimeline(i, true).fromTo(
          `.img-specifics-${i}`,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        );
        if (i !== length-1) {
          createTimeline(i, false).fromTo(
            `.img-specifics-${i}`,
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
    <div className="landing">
      <h1 className="main-title">
        Eight Principles of Yong{" "}
        <span className="chinese-char">(永字八法)</span>
      </h1>
      <p>
        The Eight Principles of Yong{" "}
        <span className="chinese-char">(永字八法)</span> is the fundamental
        brush strokes in Chinese calligraphy, all demonstrated in the single
        character 永 ("yǒng," meaning "eternity"). These eight strokes are
        considered the foundation for mastering various styles of Chinese
        calligraphy because they encompass the basic brush techniques needed to
        write most Chinese characters.
      </p>

        <div className="specifics-main">
            <div className="specifics-img">
                {props.info.map((stroke, idx) => {
                    return (
                        
                            <img
                            src={`${process.env.PUBLIC_URL}/strokes/${stroke.img}.png`}
                            className={`img-specifics-${idx}`}
                            width="100%"
                            key = {idx}
                            />
                        
                    )
                })}
            </div>
            <div className="specifics-txt">
                {props.info.map((stroke, idx) => {
                    return (
                        <div className = {`specifics-content txt-specifics-${idx}`} key = {idx}>
                            <h1 className="main-title">
                            <span className="chinese-char">{stroke.chinese}</span>({stroke.pinyin}) – {stroke.name}
                            </h1>
                            <p>
                            {stroke.content}
                            </p>
                            <Button linkto = {`${stroke.img}`}/>
                        </div>
                    )
                })}
            </div>
        </div>
        

    </div>
  );
}

export default Specifics;
