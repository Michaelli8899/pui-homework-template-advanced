import react, { Component } from "react";
import ReadMore from "../partials/ReadMore";
// import { useMediaQuery } from 'react-responsive';

import { motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";

// individual card for each time period
class TimePeriodCard extends Component {
  render() {
    return (
      // framer motion for animation
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        whileInView={{ opacity: 1, x: 10 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
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
          />
          <h1>{this.props.timeframe}</h1>
          <div className="phase-name">
            <div className="chinese-name">
              {this.props.chinese.map((word, idx) => {
                const display =
                  word === "_" ? { display: "none" } : {};
                return (
                  <h2 className="chinese-char" key={idx} style={display}>
                    {word}
                  </h2>
                );
              })}
            </div>
            <div className="pinyin-name">
              {this.props.pinyin.map((word, idx) => {
                const display =
                  word === "_" ? { display: "none" } : {};
                return (
                  <h3 key={idx} style={display}>
                    {word}
                  </h3>
                );
              })}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
}

// all the cards
class TimeLine extends Component {
  render() {
    return (
      <div className="time-line">
        <div className="line" id="timeline-start"></div>
        <div className="cards">
          {this.props.timeline.map((img, idx) => {
            return (
              <TimePeriodCard
                key={idx}
                src={img.src}
                alt={img.alt}
                name={img.name}
                chinese={img.chinese}
                pinyin={img.pinyin}
                timeframe={img.timeframe}
                link={`/history/timeline#history-${idx}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TimeLine;
