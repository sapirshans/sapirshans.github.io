import React, { Component } from "react";
import Navigation from "./navigation";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  // typed code taken from: https://jsfiddle.net/mattboldt/ovat9jmp/
  componentDidMount() {
    const options = {
      strings: ["hello! welcome to my creative home..."],
      typeSpeed: 50,
      backSpeed: 50,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <header>
        {/* <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 271.4" height={100}><style dangerouslySetInnerHTML={{__html: ".st0{fill:none;stroke:#000;stroke-width:11;stroke-miterlimit:10}" }} /><path id="XMLID_3_" className="st0" d="M763.7 197.7c-1.4-13.9 1.5-27.8.9-41.7-.6-13.9-6-29.1-18.4-35.3-10.6-5.3-23.4-2.8-34.5 1.3-15 5.5-29.2 13.5-44.7 17.1-15.6 3.6-33.8 1.7-44.7-10-1.5-1.6-3.1-3.6-5.3-3.9-2.4-.3-4.5 1.3-6.3 2.9-15 12.9-31 25.6-50.2 30.4-19.1 4.9-42.2-.3-52.7-17 13.7 2.1 28.4-2.4 38.5-12 5-4.8 9.1-11.2 8.7-18.2-.8-13-17.4-20-29.7-15.7-12.3 4.3-20.4 15.8-26.8 27.1-19.6 34.4-57.1 139-35.6 122.9 12.7-10.1 33.5-97.2 36.8-142.1-12 8.3-20.5 20.6-30.3 31.3s-22.5 20.5-37.1 20.8c-13.1.2-26.6-10.8-26.5-23.2 0-1.3-1.6-1.9-2.5-1-9.1 9-19.5 16.6-30.9 22.4-6.9 3.6-17.2 5.6-20.3-2.4-1.3-3.3-.6-7 1.5-9.8 13.7-18.7 26.1-32.3 61.1-30.8-29.9-2.5-62.5 36.8-87.8 56.4s-58.2 36.1-88.3 25.2c-12.7-4.6-24.7-22-37.8-13.9 1.7 17.8 24.1 14.7 37 10s22.4-16.4 27.1-29.3c4.7-12.9 5-27 3.8-40.7-.6-7.2-1.7-14.5-.3-21.6 1.4-7.1 5.8-14.1 12.7-16.2 6.9-2.1 15.8 2.8 15.8 10" /><path id="XMLID_2_" className="st0" d="M619.8 67c-4.9-4-11.2-13.6-14.7-18.8-1.4-2.1-2.6-5-1-6.9 3.7 2.5 7.4 4.9 11.1 7.4 1.4.9 2.8 1.8 4.4 2.1 2.1.3 4.2-.7 5.9-1.8 3.8-2.4 7.1-5.6 10.9-8.1s8.6-4 12.9-2.7c6.5 14.4-16.3 34.4-24.7 44.1" /></svg> */}
        <motion.h1
          id="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          SAPIR
        </motion.h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
            id="subtitle"
          />
        </div>
        <Navigation
          aboutHandler={this.props.aboutHandler}
          workHandler={this.props.workHandler}
          backHandler={this.backHandler}
          active={this.props.activeNav}
        ></Navigation>
      </header>
    );
  }
}
