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
          <p>
            <span id="hello">{"👋 "}Hey!</span> My name's Sapir and I'm a
            world-class <em>problem-solver</em>. <br />
          </p>
          <br />
          <p class="about-text">
            Ever since I can remember myself, one of my greatest passions is to
            come up and implement <em>effective solutions</em>. I believe that
            good design begins at the root of the problem and grows from there
            to serve its purpose. This principle is applicable to different
            areas. From <em>UX design</em> to <em>programming</em> to{" "}
            <em>branding</em>, any solution must be simple and effective.
          </p>
          <p>
            With experience in classical graphic visual design, user experience
            design, computer science, market strategy, and product design, I am
            able to look at a problem with multiple perspectives. My passion and
            curiousity fuel my hard-work ethic and creativity in these
            respective fields.
          </p>
        </div>
      </div>
    );
  }
}
