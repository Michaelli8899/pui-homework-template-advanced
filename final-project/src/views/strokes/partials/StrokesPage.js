import React, { Component } from "react";
import ReadMore from "../../partials/ReadMore";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STROKE_TEXTS = {
  heng: [
    { title: '横（héng）｜Horizontal Stroke',
      text: 'A straight line drawn from left to right. It represents balance and control in movement, typically starting with a light touch and then applying more pressure.'
    },
    { title: '起（qǐ）｜Start', 
      text: 'This is the initial movement when the brush touches the paper. It involves placing the brush gently, often at an angle, to set the direction of the stroke. The beginning of a stroke is crucial, as it determines the flow and momentum of the writing.'
    },
    { title: '顿（dùn）｜Pause',
      text: 'A moment where the brush pauses or presses down with additional pressure, creating a slight thickening or emphasis in the stroke. This adds weight and rhythm, giving the calligraphy a sense of deliberate energy and contrast.'
    },
    { title: '行（xíng）｜Move',
      text: "The main body of the stroke, where the brush moves smoothly across the paper. This part requires a steady and controlled hand, maintaining a consistent pressure to create an even and balanced line. It represents the continuous flow in the character's structure."
    },
    { title: '顿（dùn）｜Pause',
      text: "This momentary halt introduces a deliberate emphasis, adding weight and contrast to the otherwise fluid motion. The increased pressure in this part of the stroke helps to balance the overall character, giving it a sense of structure and intentional rhythm. This contrast between movement and pause enhances the depth and dynamic quality of the calligraphy."
    },
    { title: '收（shōu）｜End',
      text: "The completion of the stroke, where the brush is gently lifted off the paper. This part requires precision to ensure a clean and sharp finish, leaving the character looking refined and well-proportioned. It’s the closing gesture that signals the end of a calligraphic motion."
    }
  ],

}


class StrokeAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  render() {
    return (
      <div className="stroke-animation">
        {[1, 2, 3, 4, 5, 6, 7].map((number, idx) => {
          return (
            <img
              src={`${process.env.PUBLIC_URL}/stroke-animations/${this.props.type}/${number}.png`}
              alt={"alttext"}
              className={`img${number} animate`}
              height="100%"
              width="100%"
              key = {idx}
            />
          );
        })}
      </div>
    );
  }
}

function StrokesContent (props) {
    useGSAP(() => {
        let length = props.imgs.length;
        for (let i = 1; i < length; i++) {
            gsap.to(`.img-${props.type}-${i}`, {
              opacity: 0,
            });
        }

        function createTimeline(idx, isAppear) {
            let tl;
            if (isAppear) {
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: `.txt-${props.type}-${idx}`,
                  start: "top 50%",
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
                  trigger: `.txt-${props.type}-${idx+1}`,
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
              `.img-${props.type}-${i}`,
              {
                opacity: 0,
              },
              {
                opacity: 1,
              }
            );
            if (i !== length-1) {
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

    })

        return (
            <div className = 'strokes-content-main'>
                <div className = 'strokes-content-img'>
                    {props.imgs.map((img, idx) => {
                        console.log(`img-${props.type}-${idx}`);
                        return (
                            <img    src={`${process.env.PUBLIC_URL}/stroke-animations/${props.type}/${img}.png`} 
                                    className={`img-${props.type}-${idx}`} 
                                    width = '100%'
                                    height = '100%'
                                    key = {idx}/>

                        )
                    })}
                </div>
                <div className = 'strokes-content-txt'>
                    {props.imgs.map((img, idx) => {
                        console.log(`stroke-text txt-${props.type}-${idx}`);
                        return (
                                <div className = {`stroke-text`} key = {idx}>
                                    <h1 className={`main-title txt-${props.type}-${idx}`}><span className='chinese-char'>横</span>(Héng) – Horizontal Stroke</h1>
                                    <p>A straight line drawn from left to right. It represents balance and control in movement, typically starting with a light touch and then applying more pressure.</p>
                                </div>
                        )
                    })}
                </div>
            </div> 
        );
    
}

class StrokePage extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <main className="landing">
        <h1 className="main-title"> Stroke Title</h1>
        <h2 className="secondary-title margin-bottom-title">
          What is this stroke
        </h2>
        <StrokeAnimation type={this.props.type} />
        <ReadMore direction="down" content="Read More" />
        <StrokesContent imgs = {this.numbers[`${this.props.type}`]}
                        type = {this.props.type}/>
      </main>
    );
  }
}

export default StrokePage;
