import React, { Component } from "react";
import ReadMore from "../../partials/ReadMore";
import BackButton from "../../partials/BackButton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToTopButton from "../../partials/ToTopButton";

//all the information in JSON form that will be dynamically selected and rendered
const STROKE_TEXTS = {
  heng: [
    {
      chinese: "横",
      title: "(héng)｜Horizontal Stroke",
      text: "A straight line drawn from left to right. It represents balance and control in movement, typically starting with a light touch and then applying more pressure.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "This is the initial movement when the brush touches the paper. It involves placing the brush gently, often at an angle, to set the direction of the stroke. The beginning of a stroke is crucial, as it determines the flow and momentum of the writing.",
    },
    {
      chinese: "顿",
      title: "(dùn)｜Pause",
      text: "A moment where the brush pauses or presses down with additional pressure, creating a slight thickening or emphasis in the stroke. This adds weight and rhythm, giving the calligraphy a sense of deliberate energy and contrast.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Move",
      text: "The main body of the stroke, where the brush moves smoothly across the paper. This part requires a steady and controlled hand, maintaining a consistent pressure to create an even and balanced line. It represents the continuous flow in the character's structure.",
    },
    {
      chinese: "顿",
      title: "(dùn)｜Pause",
      text: "This momentary halt introduces a deliberate emphasis, adding weight and contrast to the otherwise fluid motion. The increased pressure in this part of the stroke helps to balance the overall character, giving it a sense of structure and intentional rhythm. This contrast between movement and pause enhances the depth and dynamic quality of the calligraphy.",
    },
    {
      chinese: "收",
      title: "(shōu)｜End",
      text: "The completion of the stroke, where the brush is gently lifted off the paper. This part requires precision to ensure a clean and sharp finish, leaving the character looking refined and well-proportioned. It’s the closing gesture that signals the end of a calligraphic motion.",
    },
    {
      chinese: "横",
      title: "(héng)｜Horizontal Stroke",
      text: "A straight line drawn from left to right. It represents balance and control in movement, typically starting with a light touch and then applying more pressure.",
    },
  ],
  dian: [
    {
      chinese: "点",
      title: "(diǎn)｜Dot Stroke",
      text: "A small, concise stroke that emphasizes precision and clarity. It conveys the importance of focus and energy, often starting with a press and lifting gracefully",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The brush is gently placed on the paper at an angle, setting the direction and energy for the dot. This establishes the foundation for the stroke, ensuring a controlled start.",
    },
    {
      chinese: "顿",
      title: "(dùn)｜Pause",
      text: "A brief pause allows the brush to press down slightly, creating a strong, weighted base. This step emphasizes the stroke's deliberate and intentional nature.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Move",
      text: "The brush moves in a curved motion, smoothly transitioning from the initial pause. This controlled movement forms the body of the dot, giving it shape and flow.",
    },
    {
      chinese: "收",
      title: "(shōu)｜Finish",
      text: "The stroke concludes with the brush being lifted cleanly off the paper. This creates a sharp, tapered endpoint, completing the dot with precision and elegance.",
    },
    {
      chinese: "点",
      title: "(diǎn)｜Dot Stroke",
      text: "A small, concise stroke that emphasizes precision and clarity. It conveys the importance of focus and energy, often starting with a press and lifting gracefully",
    },
  ],
  shu: [
    {
      chinese: "竖",
      title: "(shù)｜Vertical Stroke",
      text: "A downward stroke that embodies strength and stability. The stroke begins firmly at the top and flows steadily downward.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The stroke begins with a precise placement of the brush tip on the paper. The starting point is defined by light pressure and careful positioning, setting the stroke's direction and initial energy.",
    },
    {
      chinese: "顿",
      title: "(dùn)｜Pause",
      text: "A slight downward pressure is applied to the brush to anchor the stroke and add weight to the top. This creates a deliberate and controlled start.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Move",
      text: "The brush moves steadily downward in a controlled, straight motion. Even pressure is maintained throughout, ensuring the vertical line is smooth and balanced.",
    },
    {
      chinese: "顿",
      title: "(dùn)｜Pause",
      text: "As the stroke nears its end, the brush applies slightly more pressure, creating a sense of gravity and weight that anchors the stroke visually.",
    },
    {
      chinese: "收",
      title: "(shōu)｜End",
      text: "The stroke concludes with a clean and deliberate lift of the brush, creating a sharp and refined endpoint. This motion completes the stroke while maintaining harmony and precision.",
    },
    {
      chinese: "竖",
      title: "(shù)｜Vertical Stroke",
      text: "A downward stroke that embodies strength and stability. The stroke begins firmly at the top and flows steadily downward.",
    },
  ],
  gou: [
    {
      chinese: "勾",
      title: "(gōu)｜Hook Stroke",
      text: "A curved stroke that concludes with a distinct hook. It emphasizes precision and the ability to turn obstacles into opportunities.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The stroke begins with the brush placed lightly at the starting point, angled to set the direction. Initial pressure is applied to establish the base and prepare for a smooth transition into the main curve.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Move",
      text: "The brush starts moving downward and curves slightly, maintaining steady and even pressure. This motion creates the outer arc of the hook and forms the foundation of its dynamic structure.",
    },
    {
      chinese: "转",
      title: "(zhuǎn)｜Turn",
      text: "As the stroke reaches the base of the arc, the brush subtly shifts direction, marking the transition from the curve to the upward hook. The turn is precise and requires control to prevent distortion in the shape.",
    },
    {
      chinese: "收",
      title: "(shōu)｜End",
      text: "The brush executes the hook by pulling sharply upward with a quick, controlled motion. This creates the defining pointed end of the stroke, adding a dynamic and lively finish.",
    },
    {
      chinese: "勾",
      title: "(gōu)｜Hook Stroke",
      text: "A curved stroke that concludes with a distinct hook. It emphasizes precision and the ability to turn obstacles into opportunities.",
    },
    {
      chinese: "勾",
      title: "(gōu)｜Hook Stroke",
      text: "A curved stroke that concludes with a distinct hook. It emphasizes precision and the ability to turn obstacles into opportunities.",
    },
  ],
  ti: [
    {
      chinese: "提",
      title: "(tí)｜Turning Stroke",
      text: "An upward stroke that signifies energy and uplift. It typically starts light and gathers strength as it ascends.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The brush is positioned lightly at the starting point, angled to establish the direction of the stroke. A slight press creates the initial thickness, anchoring the stroke.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Move",
      text: "The brush begins its leftward descent, moving diagonally downward. Pressure is gradually adjusted to ensure a steady tapering of the stroke, forming a smooth line.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Continue Movement",
      text: "The brush continues its diagonal movement, with the stroke narrowing as the brush lifts slightly. The motion is fluid and controlled, maintaining balance and rhythm.",
    },
    {
      chinese: "收",
      title: "(shōu)｜Transition to Finish",
      text: "As the stroke nears its endpoint, the brush begins to lift more significantly, reducing pressure to create a sharp taper. This stage ensures the stroke ends gracefully, with a natural narrowing.",
    },
    {
      chinese: "收",
      title: "(shōu)｜Finish",
      text: "The brush is lifted cleanly off the paper, leaving a pointed and refined finish to the stroke. The completed stroke exhibits a dynamic taper from thick to thin, embodying the elegance and control of the left-slanting stroke.",
    },
    {
      chinese: "提",
      title: "(tí)｜Turning Stroke",
      text: "An upward stroke that signifies energy and uplift. It typically starts light and gathers strength as it ascends.",
    },
  ],
  na: [
    {
      chinese: "捺",
      title: "(nà)｜Falling Stroke",
      text: "A stroke that moves downward and to the right, representing decisiveness and determination. The stroke begins with a light touch and then moves downward and to the right.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The brush is positioned lightly at the starting point, with the tip angled downward to define the direction of the stroke. A slight press establishes a strong and balanced base.",
    },
    {
      chinese: "转",
      title: "(zhuǎn)｜Tilt and Apply Force",
      text: "The brush transitions into a diagonal motion, tilting slightly to increase pressure. This creates the thickening of the stroke, giving it weight and stability.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Movement with Controlled Force",
      text: "The brush moves steadily downward and to the right, with the pressure gradually lightening as the stroke progresses. This controlled motion ensures the stroke transitions smoothly from thick to thin.",
    },
    {
      chinese: "顿",
      title: "(dùn)｜Press and Prepare",
      text: "As the stroke nears its endpoint, the brush applies a final press to solidify the stroke's base. This anchors the stroke and prepares for the tapering finish.",
    },
    {
      chinese: "收",
      title: "(shōu)｜Finish",
      text: "The brush is lifted cleanly off the paper in a smooth upward motion, creating a sharp and pointed end. This completes the stroke with an elegant taper, embodying balance and precision.",
    },
    {
      chinese: "捺",
      title: "(nà)｜Falling Stroke",
      text: "A stroke that moves downward and to the right, representing decisiveness and determination. The stroke begins with a light touch and then moves downward and to the right.",
    },
  ],
  pie: [
    {
      chinese: "撇",
      title: "(piě)｜Slanting Stroke",
      text: "A stroke that moves from top to bottom and right to left, representing speed and agility. The stroke begins with a light touch and then moves quickly downward and to the left.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The brush is positioned at the starting point with light pressure, angled slightly downward. This creates a strong and stable beginning for the stroke.",
    },
    {
      chinese: "按",
      title: "(àn)｜Press",
      text: "As the stroke begins, the brush presses down slightly to increase the thickness and weight at the base of the stroke. This anchors the motion and builds strength.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Move",
      text: "The brush moves diagonally downward to the left, maintaining steady and controlled motion. Pressure is gradually reduced to taper the stroke as it progresses.",
    },
    {
      chinese: "收",
      title: "(shōu)｜Finish",
      text: "At the endpoint, the brush is lifted smoothly off the paper, creating a sharp, tapered finish. The completed stroke transitions elegantly from thick to thin.",
    },
    {
      chinese: "撇",
      title: "(piě)｜Slanting Stroke",
      text: "A stroke that moves from top to bottom and right to left, representing speed and agility. The stroke begins with a light touch and then moves quickly downward and to the left.",
    },
  ],
  wan: [
    {
      chinese: "弯",
      title: "(wān)｜Curving Stroke",
      text: "A stroke that moves in a curved motion, representing fluidity and grace. The stroke begins with a light touch and then curves smoothly.",
    },
    {
      chinese: "起",
      title: "(qǐ)｜Start",
      text: "The brush is positioned lightly at the starting point, angled to define the initial direction of the curve. A slight press ensures a stable and controlled base.",
    },
    {
      chinese: "转",
      title: "(zhuǎn)｜Curve Transition",
      text: "The brush transitions into the curve, smoothly adjusting its direction while maintaining consistent pressure. This phase shapes the gradual arc of the stroke.",
    },
    {
      chinese: "行",
      title: "(xíng)｜Continue Curve",
      text: "As the curve progresses, the brush adjusts subtly, balancing weight and direction to create a harmonious flow.",
    },
    {
      chinese: "收",
      title: "(shōu)｜Finish",
      text: "At the endpoint, the brush is lifted cleanly off the paper, leaving a tapered and refined finish. The completed stroke exemplifies precision and fluidity.",
    },
    {
      chinese: "弯",
      title: "(wān)｜Curving Stroke",
      text: "A stroke that moves in a curved motion, representing fluidity and grace. The stroke begins with a light touch and then curves smoothly.",
    },
  ],
};



class StrokeAnimation extends Component {
  render() {
    return (
      <div className="stroke-animation">
        {this.props.timeline.map((number, idx) => {
          let altText =
            idx === 0
              ? `${STROKE_TEXTS[this.props.type][idx].title}`
              : `${STROKE_TEXTS[this.props.type][idx].title} of the ${
                  this.props.type
                } stroke`;
          return (
            <img
              src={`${process.env.PUBLIC_URL}/stroke-animations/${this.props.type}/${number}.png`}
              alt={altText}
              className={`img${number} animate`}
              height="100%"
              width="100%"
              key={idx}
            />
          );
        })}
      </div>
    );
  }
}


//content with scroll animation
function StrokesContent(props) {
  useGSAP(() => {
    
    let length = props.imgs.length;
    // set all images to be invisible at first
    for (let i = 1; i < length; i++) {
      gsap.to(`.img-${props.type}-${i}`, {
        opacity: 0,
      });
    }
    //setting a function that creates a GSAP timeline triggered by the text element
    function createTimeline(idx, isAppear) {
      let tl;
      if (isAppear) {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.txt-${props.type}-${idx}`,
            start: "top 95%",
            end: "end 75%",
            scrub: true,
            // markers: true,
            toggleActions: "restart none none none",
            toggleClass: "show",
          },
        });
      } else {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.txt-${props.type}-${idx + 1}`,
            start: "top top",
            end: "40% top",
            scrub: true,
            // markers: true,
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
        `.img-${props.type}-${i}`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      if (i !== length - 1) {
        createTimeline(i, false).fromTo(
          `.img-${props.type}-${i}`,
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
  //build out the content in two columns, and render through looping all the items
  return (
    <div className="strokes-content-main">
      <div className="strokes-content-img">
        {props.imgs.map((img, idx) => {
          let altText =
            idx === 0 || idx === props.imgs.length - 1
              ? `${STROKE_TEXTS[props.type][idx].title}`
              : `${STROKE_TEXTS[props.type][idx].title} of the ${
                  props.type
                } stroke`;
          return (
            //rendering the images with absolute position
            <img
              src={`${process.env.PUBLIC_URL}/stroke-animations/${props.type}/${img}.png`}
              className={`img-${props.type}-${idx}`}
              width="100%"
              height="100%"
              key={idx}
              alt={altText}
            />
          );
        })}
      </div>
      <div className="strokes-content-txt" id="main-specifics-content">
        {STROKE_TEXTS[props.type].map((content, idx) => {
          //rendering the text with normal scrolling
          return (
            <div className={`stroke-text`} key={idx}>
              <h1 className={`main-title txt-${props.type}-${idx}`}>
                <span className="chinese-char">{content.chinese}</span>
                {content.title}
              </h1>
              <p>{content.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//component that dynamically renderes the page based on the provided type
class StrokePage extends Component {
  constructor(props) {
    super(props);
    //keeps track of the order of the strokes in images
    this.numbers = {
      dian: [7, 6, 5, 4, 3, 2],
      gou: [7, 6, 5, 4, 3, 2],
      heng: [7, 6, 5, 4, 3, 2, 1],
      na: [7, 6, 5, 4, 3, 2, 1],
      pie: [7, 6, 5, 4, 3, 2],
      shu: [7, 6, 5, 4, 3, 2, 1],
      ti: [7, 6, 5, 4, 3, 2, 1],
      wan: [7, 6, 5, 4, 3, 2],
    };
  }
  componentDidMount() {
    // scroll to top when page loads
    gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
  }
  render() {
    let content = STROKE_TEXTS[this.props.type][0];
    return (
      <>
        <ToTopButton />
        <main className="landing">
          <BackButton link="strokes" />
          <h1 className="main-title margin-bottom-title">
            <span className="chinese-char">{content.chinese}</span>
            {content.title}
          </h1>
          <StrokeAnimation
            type={this.props.type}
            timeline={this.numbers[`${this.props.type}`]}
          />
          <ReadMore
            direction="down"
            content={`${content.text.split(".")[0]}`}
            link="#main-specifics-content"
          />
          <StrokesContent
            imgs={this.numbers[`${this.props.type}`]}
            type={this.props.type}
          />
        </main>
      </>
    );
  }
}

export default StrokePage;
