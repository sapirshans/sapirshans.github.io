import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div id="about-text">
          <img
            src={process.env.PUBLIC_URL + "about-profile.jpeg"}
            alt="this was supposed to be a picture of me, but enjoy this joke instead: "
            id="about-photo"
          />
          <span id="hello">Hi!</span> I'm Sapir and I'm a world-class{" "}
          <em>problem-solver</em>. <br />
          <br />
          <p class="about-text">
            Ever since I can remember myself one of my greatest passions is to
            come up and implement <em>effective solutions</em>. I believe that
            good design starts at the root of the problem and works its way from
            there to serve its purpose. And this principle is applicable to
            different areas from <em>UX design</em> to <em>programming</em> to{" "}
            <em>branding</em>, any solution must be simple and effective.
          </p>
        </div>
      </div>
    );
  }
}
