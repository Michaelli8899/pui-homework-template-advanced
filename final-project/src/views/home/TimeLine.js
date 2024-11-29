import react, { Component } from "react";
import ReadMore from "../partials/ReadMore";

import { motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";

class TimePeriodCard extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        whileInView={{ opacity: 1, x: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="time-period-card"
      >
        {/* <Link to = "/history">History</Link> */}
        <Link to={this.props.link}>
          <h1>{this.props.name}</h1>
          <img
            src={`${process.env.PUBLIC_URL}${this.props.src}`}
            alt={this.props.alt}
            className="card-img"
            width="50%"
          />
          <div className="phase-name">
            <div className="chinese-name">
              {this.props.chinese.map((word, idx) => {
                return (
                  <h2 className="chinese-char" key={idx}>
                    {word}
                  </h2>
                );
              })}
            </div>
            <div className="pinyin-name">
              {this.props.pinyin.map((word, idx) => {
                return <p key={idx}>{word}</p>;
              })}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
}

class TimeLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="time-line">
        <div className="line" id="timeline-start">
            
        </div>
        <div className="cards">
          {this.props.timeline.map((img, idx) => {
            return (
              // <Link to = '/history'>

              <TimePeriodCard
                key={idx}
                src={img.src}
                alt={img.alt}
                name={img.name}
                chinese={img.chinese}
                pinyin={img.pinyin}
                link={`/history/timeline#history-${idx}`}
              />
              // </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TimeLine;
