import React, { Component } from "react";
import { motion } from "framer-motion";
import $ from "jquery";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    $("#" + this.props.active + "-button").addClass("active");
    var notActive = this.props.active == "work" ? "about" : "work";

    $("#" + notActive + "-button").removeClass("active");

    return (
      <motion.div
        id="nav"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <h4
          onClick={this.props.workHandler}
          id="work-button"
          className="nav-element"
        >
          work
        </h4>
        <h4
          onClick={this.props.aboutHandler}
          className="nav-element"
          id="about-button"
        >
          about
        </h4>
        <a
          href="./public/sapirshansresume.pdf"
          target="_blank"
          rel="noopener"
          aria-label="Download my resume!"
          className="nav-element"
          id="nav-element"
        >
          <h4 className="nav-element" id="resume-button">
            resume
          </h4>
        </a>
      </motion.div>
    );
  }
}
