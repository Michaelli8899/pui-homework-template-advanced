import Button from "../partials/Button";
import ToTopButton from "../partials/ToTopButton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


// page with the specific information of each stroke broken up into sections
function Specifics(props) {
  useGSAP(() => {
    // scroll to top when page loads
    gsap.to(window, { duration: 0.1, scrollTo: 0 });
    // set an variable for length
    let length = 8;
    // set the opacity of all images to 0
    for (let i = 1; i < length; i++) {
      gsap.to(`.img-specifics-${i}`, {
        opacity: 0,
      });
    }
    //setting a function that creates a GSAP timeline triggered by the text element
    function createTimeline(idx, isAppear) {
      let tl;
      if (isAppear) {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.txt-specifics-${idx}`,
            start: "top 90%",
            end: "end end",
            scrub: true,
            toggleActions: "restart none none none",
            toggleClass: "show",
          },
        });
      } else {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.txt-specifics-${idx + 1}`,
            start: "top top",
            end: "40% top",
            scrub: true,
            toggleActions: "restart none none pause",
          },
        });
      }
      return tl;
    }
    // loop through all the images and execute the timeline for each image
    // adjust the opacity of the image based on the scroll position
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
      if (i !== length - 1) {
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
    <>
    {/* basic information */}
      <ToTopButton />
      <div className="landing">
        <h1 className="main-title" id="yong-title">
          Eight Principles of Yong{" "}
          <span lang = 'zh' className="chinese-char">(永字八法)</span>
        </h1>
        <p className="tertiary-text">
          The Eight Principles of Yong{" "}
          <span lang = 'zh' className="chinese-char">(永字八法)</span> is the fundamental
          brush strokes in Chinese calligraphy, all demonstrated in the single
          character 永 ("yǒng," meaning "eternity"). These eight strokes are
          considered the foundation for mastering various styles of Chinese
          calligraphy because they encompass the basic brush techniques needed
          to write most Chinese characters.
        </p>
        {/* two main columns, img and text inside specifics-main */}
        <div className="specifics-main">
          <div className="specifics-img">
            {props.info.map((stroke, idx) => {
              //image with absolute position
              return (
                <img
                  src={`${process.env.PUBLIC_URL}/strokes/${stroke.img}.png`}
                  className={`img-specifics-${idx}`}
                  alt={`A ${stroke.name} in The Yong Character`}
                  width="100%"
                  key={idx}
                />
              );
            })}
          </div>
          <div className="specifics-txt">
            {props.info.map((stroke, idx) => {
              //text scrolling normalling
              //scroll of the text trigger the opacity of the images
              return (
                <div
                  className={`specifics-content txt-specifics-${idx}`}
                  key={idx}
                >
                  <h1 className="main-title">
                    <span lang = 'zh' className="chinese-char">{stroke.chinese}</span>(
                    {stroke.pinyin}) – {stroke.name}
                  </h1>
                  <p>{stroke.content}</p>
                  <Button linkto={`${stroke.img}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Specifics;
