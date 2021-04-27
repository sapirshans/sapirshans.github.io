import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Shoot me an email at{" "}
          <a
            id="email"
            href="mailto:sapirshans@gmail.com"
            rel="noopener"
            aria-label="Email me!"
          >
            sapirshans@gmail.com
          </a>
          !
        </p>
        <p>
          For more check out:{" "}
          <a
            href="https://www.linkedin.com/in/sapir-shans/"
            target="_blank"
            rel="noopener"
            aria-label="Add me on LinkedIn!"
          >
            linkedin
          </a>
          {" | "}
          <a
            href="https://medium.com/@sapirshans"
            target="_blank"
            rel="noopener"
            aria-label="Follow me on Medium!"
          >
            medium
          </a>
          {" | "}
          <a
            href="https://github.com/sapirshans"
            target="_blank"
            rel="noopener"
            aria-label="Check out my Github!"
          >
            github
          </a>
        </p>
      </footer>
    );
  }
}
